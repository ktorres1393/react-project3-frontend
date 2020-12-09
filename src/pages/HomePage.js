import SetTimer from '../components/SetTimer/SetTimer'
import React from 'react';


const HomePage = (props)=> (
    
    <main className="Page">
        <h1>HomePage</h1>
        <div className="flex">
        <SetTimer />
        <SetTimer />
        </div>
        <div>
            Clock here
        </div>
        
    </main>
  
  )
  
  export default HomePage;