import React, { useState } from 'react'
import Knopf from '../../components/knopf/Knopf'
import Zähler from '../../components/zähler/Zähler'
import "./home.css"

export default function Home() {

    const [color,setColor] = useState(null)//usestate ändern => react lädt das element neu
    // = setzen
    // == ????
    // === vergleichen


    // frage ? tue wenn wahr : tue wenn nicht wahr

    //arrays objekte und map

    return (
    <main className='home'>
        <section>
            <div className="container">
                <h1 className={color === "blue" ? 'headline blue' : "headline red"}>Willkommen zu meiner ersten Website!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt delectus illum ea qui animi earum corrupti? Cumque at officiis laborum!</p>
            </div>        
        </section>
        <section className='container'>
            {/* <Zähler/> */}
            {/* <Knopf/> */}
            <button className='button' onClick={() => {setColor(current => current === "blue" ? "red" : "blue")}}>Farbwechsel</button>
        </section>
        <section>
            
        </section>
    </main>
  )
}
