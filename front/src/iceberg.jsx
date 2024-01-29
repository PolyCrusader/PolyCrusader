import React, { useState, useEffect, useRef } from 'react';
import './iceberg.scss';
import car from './assets/iceberg/car.png';
import usine from './assets/iceberg/usine.png';
import water_lightshade from './assets/iceberg/water_lightshade.png';
import water_darkshade from './assets/iceberg/water_darkshade.png';
import netImg from './assets/iceberg/net.png';
import fish from './assets/iceberg/fish.png';
import leaf from './assets/iceberg/leaf.png';
import iceberg from './assets/iceberg/iceberg.png';
import thermometer from './assets/iceberg/thermometer.png';
import corail from './assets/iceberg/corail.png';
import videoSource from './assets/Branche.webm';


const objectsTypes = {
    bad: [
        { type: 'bad', src: car },
        { type: 'bad', src: usine },
        { type: 'bad', src: 'https://thenounproject.com/api/private/icons/2486994/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0' }],
    good: [
        { type: 'good', src: fish },
        { type: 'good', src: leaf },
        { type: 'good', src: corail }]
};

const hpUpGood = 10;
const hpDownGood = 2.5;

const dimObject = 100;
const dimXNet = 100;
const dimYNet = 40;
const dimWave = 500;
const dimTher = 200;

function IcebergGame() {
    const [net, setNet] = useState({ positionX: window.innerWidth * 0.5, positionY: window.innerHeight * 0.9, captured: [], hitbox: dimXNet / 2, src: netImg });
    const [objects, setObjects] = useState([]);
    const [tmp, setTmp] = useState(0.2);
    const [hp, setHp] = useState(100);
    const [timerAdd, setTimerAdd] = useState(0);
    const [speed, setSpeed] = useState(5);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [startGame, setStartGame] = useState(false);
    const [goodLastObject, setGoodLastObject] = useState(null);
    const [lastObjectStreak, setLastObjectStreak] = useState(1);
    const videoRef = useRef(null);

    const generateObject = () => {
        let randomIndex;
        let randomObject;
        const prob = 0.5 ** lastObjectStreak;
        if (Math.random() < (goodLastObject ? prob : 1 - prob)) {
            randomIndex = Math.floor(Math.random() * objectsTypes.good.length);
            randomObject = objectsTypes.good[randomIndex];
            if (goodLastObject) {
                setLastObjectStreak(lastObjectStreak + 1);
            }
            else {
                setLastObjectStreak(1);
                setGoodLastObject(true);
            }
        }
        else {
            randomIndex = Math.floor(Math.random() * objectsTypes.bad.length);
            randomObject = objectsTypes.bad[randomIndex];
            if (goodLastObject) {
                setLastObjectStreak(1);
                setGoodLastObject(false);
            }
            else {
                setLastObjectStreak(lastObjectStreak + 1);
            }
        }
        const left = (Math.random() * (window.innerWidth - dimObject * 2)) + dimObject;
        return { id: Date.now(), type: randomObject.type, src: randomObject.src, positionX: left, positionY: 0.0 };
    }

    const updateObjects = () => {
        for (let i = 0; i < objects.length; i++) {
            objects[i].positionY += speed;
            if (objects[i].positionY > net.positionY && (objects[i].positionX >= (net.positionX - net.hitbox) && objects[i].positionX <= (net.positionX + net.hitbox))) {
                addToNet(objects[i]);
                if(net.captured.length > 10) {
                    setNet({ ...net, captured: net.captured.slice(1) });
                }
                objects.splice(i, 1);
                i--;
            }
            else if (objectInOcean(objects[i])) {
                objects.splice(i, 1);
                i--;
            }
        }
        setObjects(objects);
    }

    const objectInOcean = (object) => {
        if (object.positionY > window.innerHeight) {
            if (object.type === 'good') {
                if (hp + hpUpGood > 100) {
                    setHp(100);
                }
                else {
                    setHp(hp + hpUpGood);
                }
            }
            else {
                setTmp(tmp + 0.1);
            }
            return true;
        }
        return false;
    }

    const addToNet = (object) => {
        if (object.type === 'good') {
            setHp(hp - hpDownGood);
        }
        setNet({ ...net, captured: [...net.captured, { ...object, positionX: object.positionX - net.positionX }] });
    }

    function easeInOutQuad(x) {
        const value = x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
        return x < 1 ? value : 1;
    }

    useEffect(() => {
        if (hp >= 0 && startGame) {
            let mousePosition = net.positionX;

            const handleMouseMove = (e) => {
                mousePosition = e.pageX;
            }

            const video = videoRef.current;
            video.play();
            const handleVideoEnded = () => {
                setTmp(prevTmp => prevTmp - 0.007);
                video.play();
            };
            video.addEventListener('ended', handleVideoEnded);

            document.addEventListener('mousemove', handleMouseMove);

            const interval = setInterval(() => {
                updateObjects();
                let percent = 1 - (easeInOutQuad(elapsedTime / 130000));
                setSpeed(5 + (1 - percent) * 17);
                setTimerAdd(prevTimerAdd => {
                    if (prevTimerAdd >= percent * 1700 + 250) {
                        setObjects(prevObjects => [...prevObjects, generateObject()]);
                        return 0;
                    }
                    setNet(prevNet => ({ ...prevNet, positionY: innerHeight * 0.9 }));
                    return prevTimerAdd + 1000 / 60;
                });

                setElapsedTime(prevTime => prevTime + 1000 / 60);
                setNet(prevNet => ({ ...prevNet, positionX: mousePosition }));

                if (tmp > 0) {
                    setHp(prevHp => prevHp - tmp / 10);
                }
            }, 1000 / 60); // 60 FPS

            return () => {
                clearInterval(interval);
                document.removeEventListener('mousemove', handleMouseMove);
                video.removeEventListener('ended', handleVideoEnded);
            };
        }
    }, [updateObjects, hp, startGame, elapsedTime, tmp, timerAdd, net.positionX, net.positionY, net.captured.length]);

    function colorBackground() {
        const blue = [86, 172, 230];
        const red = [255, 0, 0];
        const ratio = tmp / 4;

        const r = blue[0] + ratio * (red[0] - blue[0]);
        const g = blue[1] + ratio * (red[1] - blue[1]);
        const b = blue[2] + ratio * (red[2] - blue[2]);

        return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    }

    function start() {
        setStartGame(true);
        const video = videoRef.current;
        video.playbackRate = video.duration / 5;
        video.play();
    }

    let dimIceberg = innerHeight * 1.2;
    return (
        <>
            <div className="gameOverall" style={{ background: `linear-gradient(to bottom, ${colorBackground()}, rgb(130, 180, 255))` }}>
                <div className="rectangle" style={{ position: 'absolute', right: 188.5, top: 250 - (tmp > 0 ? tmp * 25 : 0), height: tmp > 0 ? tmp * 25 : 0, width: 25, backgroundColor: 'red' }}></div>
                <img src={thermometer} style={{ position: 'absolute', right: 100, top: 100, height: dimTher, width: dimTher }} />
                <p style={{ position: 'absolute', right: 100, top: 100 + dimTher * 0.7, height: dimTher, width: dimTher }}>{roundToTenth(tmp + 24.8)}</p>

                <img src={iceberg} style={{ position: 'absolute', left: innerWidth / 2 - dimIceberg / 2, top: innerHeight * (0.2 + 0.8 * (100 - hp) / 100), height: dimIceberg, width: dimIceberg }} />

                {Array.from({ length: Math.floor(window.innerWidth / dimWave + 5) }).map((_, i) => (
                    <img key={i} src={water_darkshade} style={{ position: 'absolute', left: i * 460 + Math.cos(elapsedTime / 1000) * 10 - 10, top: innerHeight - dimWave / 2 + Math.sin(elapsedTime / 1000) * 10, width: dimWave, height: dimWave }} />
                ))}

                {Array.isArray(objects) && objects.map(object => (
                    <img key={object.id} src={object.src} style={{ position: 'absolute', left: object.positionX - dimObject / 2, top: object.positionY - dimObject / 2, width: dimObject, height: dimObject }} />
                ))}

                {Array.isArray(net.captured) && net.captured.map(object => (
                    <img key={object.id} src={object.src} style={{ position: 'absolute', left: object.positionX + net.positionX - dimObject / 2, top: net.positionY - dimObject / 2 + dimYNet / 6, width: dimObject, height: dimObject }} />
                ))}

                <img src={net.src} style={{ position: 'absolute', left: net.positionX - dimXNet / 2, top: net.positionY - dimYNet / 2, width: dimXNet, height: dimYNet }} />

                {Array.from({ length: Math.floor(window.innerWidth / dimWave + 5) }).map((_, i) => (
                    <img key={i} src={water_lightshade} style={{ position: 'absolute', left: i * 460 - 250 + Math.cos(elapsedTime / 1000 + 0.6) * 10 - 10, top: innerHeight - dimWave / 2 + Math.sin(elapsedTime / 1000 + 0.6) * 10, width: dimWave, height: dimWave + 50 }} />
                ))}

                <video ref={videoRef} muted style={{ transform: "scaleY(-1)" }}>
                    <source src={videoSource} type="video/webm" />
                </video>

                <Loose time={elapsedTime} tmp={tmp} hp={hp} setHp={setHp} setElapsedTime={setElapsedTime} setTmp={setTmp} setObjects={setObjects} setNet={setNet} />
            </div>

            {!startGame &&
                <div className='intro'>
                    <h1>Easter Egg</h1>
                    <div className='rules'>
                        <div className="element">
                            <img src={usine} style={{ height: dimObject, width: dimObject }} />
                            <p>Attrape les objets polluants grâce au filet</p>
                        </div>
                        <div className="element">
                            <img src={corail} style={{ height: dimObject, width: dimObject }} />
                            <p>Evite les objets natuels</p>
                        </div>
                        <div className="element">
                            <img src={thermometer} style={{ height: dimObject, width: dimObject }} />
                            <p>Fait attention à la température</p>
                        </div>
                    </div>
                    <button className='start' onClick={() => start()}>Commencer</button>
                </div>
            }
        </>
    )
}

function Loose({ time, tmp, hp, setHp, setElapsedTime, setTmp, setObjects, setNet }) {
    return (
        hp > 0 ? null :
            <>
                <div className="loose">
                    <h1>Dommage !</h1>
                    <p>Temps: {Math.floor(time / 1000)} seconds</p>
                    <p>Temperature: {roundToTenth(tmp + 24.8)}</p>
                    <button onClick={() => {
                        setHp(100); setElapsedTime(0); setTmp(0.2); setObjects([]);
                        setNet({ positionX: window.innerWidth * 0.5, positionY: window.innerHeight * 0.9, captured: [], hitbox: dimXNet / 2, src: netImg });
                    }}>Recommencer</button>
                </div>
                <p className='devTime'>Temps du dev: 216 secondes</p>
            </>
    );
}

function roundToTenth(num) {
    return Math.round(num * 10) / 10;
}

export default IcebergGame