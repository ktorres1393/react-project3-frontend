
function SetTimer (props) {
    
    return(
        <div className='timer-container'>
        <h1>{props.title}</h1>
        <div className='flex actions-wrapper'>
            <button onClick={props.handleDecrease}>-</button>

            <span>{props.count}</span>

            <button onClick={props.handleIncrease}>+</button>
        </div>
       
        
        </div>
    )
}

// const { breakCount, sessionCount} = this.state

// const breakProps = {
//     title: 'Break Length',
//     count: breakCount,
//     handleDecrease: this.handleBreakDecrease,
//     handleIncrease: this.handleBreakIncrease,
// }
// const sessionProps = {
//     title: 'Session Length',
//     count: sessionCount,
//     handleDecrease: this.handleSessionDecrease,
//     handleIncrease: this.handleSessionIncrease,
// }

export default SetTimer;
