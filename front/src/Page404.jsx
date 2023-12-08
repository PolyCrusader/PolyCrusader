import "./page404.scss";
import "./App.scss";
import { useEffect } from "react";

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

        const checkProblems = () => {
            for (let y = 0; y < currentPiece.length; y++) {
                for (let x = 0; x < currentPiece[0].length; x++) {
                    //check if the piece is out of the grid
                    if (currentPieceCoords[1] < 0) {
                        alert("Game over");
                        grid = [];
                        for (let i = 0; i < 20; i++) {
                            grid.push([]);
                            for (let j = 0; j < 10; j++) {
                                grid[i].push(0);
                            }
                        }
                    }
                    if (currentPiece[y][x] > 0 && grid[Math.ceil(currentPieceCoords[1]) + y][Math.ceil(currentPieceCoords[0]) + x] > 0) {
                        console.log("collision");
                        return true;
                    }
                }
            }
            return false;
        }

        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") {
                currentPieceCoords[0] -= 1;
                if (checkProblems()) {
                    currentPieceCoords[0] += 1;
                }

            } else if (event.key === "ArrowRight") {
                currentPieceCoords[0] += 1;
                if (checkProblems()) {
                    currentPieceCoords[0] -= 1;
                }
            } else if (event.key === "ArrowDown") {
                if (currentPieceCoords[1] + currentPiece.length + 1 <= 20) {
                    if (grid[Math.ceil(currentPieceCoords[1]) + currentPiece.length][Math.ceil(currentPieceCoords[0])] === 0) {
                        currentPieceCoords[1] += 1;
                    }
                }
                // currentPieceCoords[1] += 1;
            } else if (event.key === "ArrowUp") {
                currentPiece = rotatePiece(currentPiece);
            }
        });


        const canvas = document.getElementById("tetris");
        const context = canvas.getContext("2d");

        const PIECE_SIZE = context.canvas.width / 10;

        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);

        let currentPiece = [];
        let currentPieceCoords = [0, 0];

        let grid = [];
        for (let i = 0; i < 20; i++) {
            grid.push([]);
            for (let j = 0; j < 10; j++) {
                grid[i].push(0);
            }
        }


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

        const drawCase = (x, y) => {
            context.fillRect(x * PIECE_SIZE, y * PIECE_SIZE, PIECE_SIZE, PIECE_SIZE);
        }

        let tick = () => {
            context.fillStyle = "black";
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = "white";

            grid.forEach((line) => {
                line.forEach((value, i) => {
                    if (value > 0) {
                        drawCase(i, grid.indexOf(line));
                    }
                });
            });

            drawPiece(currentPiece, currentPieceCoords);
            currentPieceCoords[1] += PIECE_SIZE / 700;
            requestAnimationFrame(tick);

            checkBottomCollision();
            checkCollisionWithPlacedPieces();
            checkBorderCollision();
            checkLineCompletion();
        };

        requestAnimationFrame(tick);

        //check colition with the bottom
        const checkBottomCollision = () => {
            if (currentPieceCoords[1] + currentPiece.length > 20) {
                currentPieceCoords[1] = 20 - currentPiece.length;
                placeFigures();
                generatePiece();
            }
        };

        const checkCollisionWithPlacedPieces = () => {
            for (let y = 0; y < currentPiece.length; y++) {
                for (let x = 0; x < currentPiece[0].length; x++) {
                    if (currentPiece[y][x] > 0 && grid[Math.ceil(currentPieceCoords[1]) + y][Math.ceil(currentPieceCoords[0]) + x] > 0) {
                        console.log("collision");
                        currentPieceCoords[1] = Math.ceil(currentPieceCoords[1]) - 1;
                        //check if the piece is out of the grid
                        // if (currentPieceCoords[1] < 0) {
                        //     alert("Game over");
                        //     grid = [];
                        //     for (let i = 0; i < 20; i++) {
                        //         grid.push([]);
                        //         for (let j = 0; j < 10; j++) {
                        //             grid[i].push(0);
                        //         }
                        //     }
                        // }
                        placeFigures();
                        generatePiece();
                    }
                }
            }
        }
        const placeFigures = () => {
            for (let y = 0; y < currentPiece.length; y++) {
                for (let x = 0; x < currentPiece[0].length; x++) {
                    if (currentPiece[y][x] > 0) {
                        grid[Math.ceil(currentPieceCoords[1]) + y][Math.ceil(currentPieceCoords[0]) + x] = currentPiece[y][x];
                    }
                }
            }
            generatePiece();
        }

        const checkBorderCollision = () => {
            if (currentPieceCoords[0] < 0) {
                currentPieceCoords[0] = 0;
            } else if (currentPieceCoords[0] + currentPiece[0].length > 10) {
                currentPieceCoords[0] = 10 - currentPiece[0].length;
            }
        }

        const checkLineCompletion = () => {
            grid.forEach((line, i) => {
                if (line.every((value) => value > 0)) {
                    grid.splice(i, 1);
                    grid.unshift([]);
                    for (let j = 0; j < 10; j++) {
                        grid[0].push(0);
                    }
                }
            });
        }


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
