import {useState} from "react"

export const StepCounter = () => {

const [stepCount, setStepCount] = useState(0);
    
const addStepFunction = () => {
    setStepCount((prevState)=>prevState +1 );
}

    return (
    <>
    <div>You took {stepCount}step today</div>
<button onClick={addStepFunction}> add 1 step</button>
<button onClick={ () => {addStepFunction();
                         addStepFunction();
                         addStepFunction();
                          addStepFunction();
                         addStepFunction();}}>Add 5 steps </button>
    </>
    )
}
export default StepCounter