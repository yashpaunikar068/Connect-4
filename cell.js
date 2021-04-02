import './App.css';
import React from "react";

const Cell = ({ value, columnIndex, play }) => {
    let color = 'white';
    if (value === 1) {
      color = 'red';
    } else if (value === 2) {
      color = 'yellow';
    }
    
    // onclick call play on that particular column index
    return (
      <td>
        <div onClick={() => {play(columnIndex)}}>
          <div className={color}></div>
        </div>
      </td>
    );
  };

export default Cell;  