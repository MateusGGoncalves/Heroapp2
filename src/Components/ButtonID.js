import React from 'react';
import './ButtonID.css';

function clickMe(){
    window.location.reload(false); 

}

export default function Button1(){
    return (
        <div>
            <button className="IDButton" onClick={clickMe}>
                MUDAR
            </button>
        </div>
    )
}