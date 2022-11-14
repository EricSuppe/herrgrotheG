import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./zähler.css"

export default function Zähler() {

    const [nummer,setNummer] = useState(0)

    return (              
        <div className='zähler'>
            <button className='btn' onClick={() => setNummer(current => current + 1)}></button>
            <span className='nummer'>{nummer}</span>
            <button className='btn' onClick={() => setNummer(current => current - 1)}></button>
        </div>
    )
}
