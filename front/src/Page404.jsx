import "./page404.scss";
import "./App.scss";
import {useEffect} from "react";

function Page404() {

    const PIECES = {
        0: [
            [1, 1],
            [1, 1],
        ],
        1: [[1, 1, 1, 1]],
        2: [
            [1, 1, 0],
            [0, 1, 1],
        ],
        3: [
            [0, 1, 1],
            [1, 1, 0],
        ],
        4: [
            [1, 0, 0],
            [1, 1, 1],
        ],
        5: [
            [0, 0, 1],
            [1, 1, 1],
        ],
        6: [
            [0, 1, 0],
            [1, 1, 1],
        ],
    };

    useEffect(() => {
        const rotatePiece = (piece) => {
            const newPiece = [];
            for (let i = 0; i < piece[0].length; i++) {
                newPiece.push([]);
            }
            piece.forEach((row) => {
                row.forEach((value, i) => {
                    newPiece[i].unshift(value);
                });
            });
            return newPiece;
        }



        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") {
                currentPieceCoords[0] -= 1;
            } else if (event.key === "ArrowRight") {
                currentPieceCoords[0] += 1;
            } else if (event.key === "ArrowDown") {
                currentPieceCoords[1] += 1;
            } else if (event.key === "ArrowUp") {
                currentPiece = rotatePiece(currentPiece);
            }
        });


        const canvas = document.getElementById("tetris");
        const context = canvas.getContext("2d");

        const PIECE_SIZE = context.canvas.width / 10;

        const onscreen_pieces = [];

        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);

        let currentPiece = [];
        let currentPieceCoords = [0, 0];

        //placed_pieces.push(currentPiece);

        const generatePiece = () => {
            currentPiece = PIECES[Math.floor(Math.random() * 7)];
            currentPieceCoords = [Math.floor(Math.random() * (10 - currentPiece[0].length)), 0];
        };

        generatePiece();

        const drawPiece = (piece, coords) => {
            piece.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value > 0) {
                        context.fillRect((x + coords[0]) * PIECE_SIZE, (y + coords[1]) * PIECE_SIZE, PIECE_SIZE, PIECE_SIZE);
                    }
                });
            });
        };

        let tick = () => {
            context.fillStyle = "black";
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = "white";

            onscreen_pieces.forEach((piece) => {
                drawPiece(piece[0], piece[1]);
            });

            drawPiece(currentPiece, currentPieceCoords);
            currentPieceCoords[1] += PIECE_SIZE / 700;

            requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);




    }, []);


return (
    <div className="tetris">
        <div id="grid">
            <canvas id="tetris" width="400" height="800"></canvas>
        </div>
    </div>
);
}

export default Page404;
