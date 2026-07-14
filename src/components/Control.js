import React from 'react';

function Controls({onStartGame,onValidate,onReset}) {
    return(
        <div className = "controls-container">
            <div className="control-group">
                <button onClick={()=>onStartGame('easy')}>Easy</button>
                <button onClick={()=>onStartGame('medium')}>Medium</button>
                <button onClick={()=>onStartGame('hard')}>Hard</button>
            </div>

            <div className="control-group">
                <button className="primary-btn" onClick={onValidate}>Validate Board</button>
                <button className="secondary-btn" onClick={onReset}>Reset</button>
            </div>
        </div>
    )
}

export default Controls;