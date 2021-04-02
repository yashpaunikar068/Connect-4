import './App.css';
import React from "react";
import Cell from './cell.js'

const Row = ({ row, play }) => {
    return (
      <tr>
        {row.map((cell, i) => <Cell value={cell} columnIndex={i} play={play} />)}
      </tr>
    );
  };
export default Row;
