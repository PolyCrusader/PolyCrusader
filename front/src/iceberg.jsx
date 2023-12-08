import React, { useState, useEffect } from 'react';
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


const objectsTypes = [
    { type: 'bad', src: car },
    { type: 'bad', src: usine },
    { type: 'good', src: fish },
    { type: 'good', src: leaf },
    {type: 'bad', src: 'https://thenounproject.com/api/private/icons/2486994/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0'},
    {type:'good', src: corail}
];

const hpUpGood = 10;

const dimObject = 100;
const dimXNet = 100;
const dimYNet = 40;
const dimWave = 500;
const dimIceberg = innerHeight*1.2;
const dimTher = 200;

function IcebergGame() {
    const [net, setNet] = useState({ positionX: window.innerWidth * 0.5, positionY: window.innerHeight * 0.9, captured: [], hitbox: dimXNet / 2, src: netImg });
    const [objects, setObjects] = useState([]);
    const [tmp, setTmp] = useState(0.1);
    const [hp, setHp] = useState(100);
    const [timerAdd, setTimerAdd] = useState(0);
    const [speed, setSpeed] = useState(5);
    const [elapsedTime, setElapsedTime] = useState(0);

    const generateObject = () => {
        const left = (Math.random() * (window.innerWidth-dimObject)) + dimObject;
        const randomIndex = Math.floor(Math.random() * objectsTypes.length);
        const randomObject = objectsTypes[randomIndex];
        return { id: Date.now(), type: randomObject.type, src: randomObject.src, positionX: left, positionY: 0.0 };
    }

    const updateObjects = () => {
        for (let i = 0; i < objects.length; i++) {
            objects[i].positionY += speed;
            if (objects[i].positionY > net.positionY && (objects[i].positionX >= (net.positionX - net.hitbox) && objects[i].positionX <= (net.positionX + net.hitbox))) {
                addToNet(objects[i]);
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
        if(object.type === 'good'){
            setHp(hp - 2.5);
        }
        setNet({ ...net, captured: [...net.captured, { ...object, positionX: object.positionX - net.positionX }] });
    }

    function easeInOutQuad(x) {
        const value = x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
        return x < 1 ? value : 1;
    }

        useEffect(() => {
            if (hp >= 0) {
            let mousePosition = net.positionX;

            const handleMouseMove = (e) => {
                mousePosition = e.pageX;
            }

            document.addEventListener('mousemove', handleMouseMove);

            const interval = setInterval(() => {
                updateObjects();
                let percent = 1 - (easeInOutQuad(elapsedTime / 100000));
                setSpeed(5 + (1 - percent) * 12);
                setTimerAdd(prevTimerAdd => {
                    if (prevTimerAdd >= percent * 1600 + 400) {
                        setObjects(prevObjects => [...prevObjects, generateObject()]);
                        return 0;
                    }
                    return prevTimerAdd + 1000 / 60;
                });
                setElapsedTime(prevTime => prevTime + 1000 / 60);
                setNet(prevNet => ({ ...prevNet, positionX: mousePosition }));
                setHp(prevHp => prevHp - tmp / 10);
            }, 1000 / 60); // 60 FPS

            return () => {
                clearInterval(interval);
                document.removeEventListener('mousemove', handleMouseMove);
            };
        }
        }, [updateObjects]);

    return (
        <div className="gameOverall">
            <img src={thermometer} style={{position:'absolute', right:100,top:100,height:dimTher,width:dimTher}}/>
            <p style={{position:'absolute', right:100,top:100+dimTher*0.7,height:dimTher,width:dimTher}}>{(tmp)+25}</p>
            <img src={iceberg} style={{ position: 'absolute', left: innerWidth/2-dimIceberg/2, top: innerHeight*(0.2+0.8*(100-hp)/100), height:dimIceberg, width:dimIceberg}} />
             {Array.from({ length: Math.floor(window.innerWidth/dimWave+5)}).map((_, i) => (
                <img key={i} src={water_darkshade} style={{position: 'absolute', left: i*460+Math.cos(elapsedTime/1000)*10-10, top: innerHeight-dimWave/2+Math.sin(elapsedTime/1000)*10,width:dimWave,height:dimWave}} />
            ))}

            {Array.isArray(objects) && objects.map(object => (
                <img key={object.id} src={object.src} style={{ position: 'absolute', left: object.positionX - dimObject / 2, top: object.positionY - dimObject / 2, width:dimObject, height: dimObject}} />
            ))}

            {Array.isArray(net.captured) && net.captured.map(object => (
                <img key={object.id} src={object.src} style={{ position: 'absolute', left: object.positionX + net.positionX - dimObject / 2, top: net.positionY - dimObject / 2 + dimYNet / 6, width:dimObject, height: dimObject}} />
            ))}

            <img src={net.src} style={{ position: 'absolute', left: net.positionX - dimXNet / 2, top: net.positionY - dimYNet / 2 , width:dimXNet, height:dimYNet}} />

            <Loose time={elapsedTime} tmp={tmp} hp={hp} setHp={setHp} setElapsedTime={setElapsedTime} setTmp={setTmp} setObjects={setObjects} setNet={setNet} />        
            {Array.from({ length: Math.floor(window.innerWidth/dimWave+5)}).map((_, i) => (
                <img key={i} src={water_lightshade} style={{position: 'absolute', left: i*460-250+Math.cos(elapsedTime/1000+0.6)*10-10, top: innerHeight-dimWave/2+Math.sin(elapsedTime/1000+0.6)*10,width:dimWave,height:dimWave+50}} />
            ))}
            </div>
        
    )
}

function Loose({ time, tmp, hp, setHp, setElapsedTime, setTmp, setObjects, setNet}) {
    return (
        hp > 0 ? null : 
            <div className="loose">
                <h1>Dommage !</h1>
                <p>Temps: {Math.floor(time / 1000)} seconds</p>
                <p>Temperature: {tmp+25}</p>
                <button onClick={() => {setHp(100); setElapsedTime(0); setTmp(0.1); setObjects([]); 
                    setNet({ positionX: window.innerWidth * 0.5, positionY: window.innerHeight * 0.9, captured: [], hitbox: dimXNet / 2, src: netImg });}}>Restart</button>
            </div>
    );
}


export default IcebergGame