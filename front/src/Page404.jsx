import React, { useEffect, useState } from 'react';
import './page404.scss'
import './App.scss'

function Page404() {
  const [cells, setCells] = useState([]);

  useEffect(() => {
    const newCells = [];
    for (let i = 0; i < 300; i++) {
      newCells.push(<div className='cell' key={i}></div>);
    }
    setCells(newCells);
  }, []);

  //we randomly select a cell and change this class to "block"
  useEffect(() => {
    const interval = setInterval(() => {
      const newCells = [...cells];
      const randomCell = Math.floor(Math.random() * 300);
      newCells[randomCell] = <div className='cell block' key={randomCell}></div>;
      setCells(newCells);
    }, 1000);
    return () => clearInterval(interval);
  }, [cells]);

  return (
    <div className='tetris'>
      <div id='grid'>
        {cells}
      </div>
    </div>
  );
}

export default Page404;