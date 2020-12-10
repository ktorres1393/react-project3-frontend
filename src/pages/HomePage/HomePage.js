import React from 'react'
import Timer from '../../components/Timer/Timer'
import './HomePage.css'


function App () {
    

    return (
        <div >
            <div className='Home'>
            <h1 >Pomodoro Timer</h1>

            </div>
            <div >
                
                <Timer/>
                
            </div>
        </div>
    )
}

export default App;