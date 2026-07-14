import React from "react";

function Grid({board, onCellChange}) {
    return(
        <div className="sudoku-grid">
            {board.map((cell,index)=>{
                const hasBottomBorder = Math.floor(index / 9) %3 === 2 && Math.floor(index / 9) != 8;
                const hasRightBorder = index % 9 % 3 === 2 && index % 9 !== 8;

                return (
                    <input key = {cell.id}
                    type = "text"
                    maxLength="1"
                    value = {cell.value}
                    disabled = {cell.isInitial}
                    onChange={(e)=>onCellChange(index,e.target.value)}
                    className = {`cell
                        ${cell.isInitial ? 'locked-cell' : 'user-cell'}
                        ${hasBottomBorder ? 'border-bottom' : ''}
                        ${hasRightBorder ? 'border-right' : ''}`}
                        />
                )
            })}
        </div>

       
    )
}
 export default Grid;