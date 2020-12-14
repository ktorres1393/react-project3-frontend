import React from 'react'
import Timer from '../../components/Timer/Timer'
import './HomePage.css'


function App () {
    

    return (
        <div >
            <div className='Home'>
            <p >Pomodoro Timer</p>
            <ol>
                <li>Step 1 Pick a task</li>
                <li>Step 2 Set a 25 min timer</li>
                <li>Step 3 Work on you task until time is up!</li>
                <li>Step 4 Take a 5 min break</li>
                <li>Step 5 Every 4 pomodoros, take a longer 15-30 break</li>
            </ol>

            </div>
            <div >
                
                <Timer/>
                
            </div>
        </div>
    )
}

export default App;