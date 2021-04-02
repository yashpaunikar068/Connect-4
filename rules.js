import './App.css';
import React from "react";

export default function Rules() {
    return (
        <div>
            <h1>Rules to play CONNECT-4 !!</h1>
            <h2>Description</h2>
            <p>
            This game is played on a vertical board wich has seven hollow columns and six rows. 
            Each column has a hole in the upper part of the board, where pieces are introduced. 
            There is a window for every square, so that pieces can be seen from both sides.
            In short, it´s a vertical board with 42 windows distributed in 6 rows and 7 columns.
            Both players have a set of 21 thin pieces (like coins); each of them uses a different colour. 
            The board is empty at the start of the game.
            </p>
            <h2>Objective</h2>
            <p>
            The aim for both players is to make a straight line of four own pieces; the line can be vertical,
            horizontal or diagonal.
            </p>
            <h2>How the game goes on</h2>
            <p>
            Before starting, players decide randomly which of them will be the beginner; moves are made alternatively, 
            one by turn.Moves entails in placing new pieces on the board; pieces slide downwards from upper holes, 
            falling down to the last row or piling up on the last piece introduced in the same column. 
            So, in every turn the introduced piece may be placed at most on seven different squares.
            The winner is the first player who gets a straight line made with four own pieces and no gaps between them.
            </p>
        </div>
    );
}