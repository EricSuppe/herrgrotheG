import React from 'react'
import Zähler from '../../components/zähler/Zähler'
import "./home.css"

export default function Home() {
  
    return (
    <main className='home'>
        <section>
            <div className="container">
                <h1 className='headline'>Willkommen zu meiner ersten Website!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt delectus illum ea qui animi earum corrupti? Cumque at officiis laborum!</p>
            </div>        
        </section>
        <section className='container'>
            <Zähler/>
        </section>
        <section>
            
        </section>
    </main>
  )
}
