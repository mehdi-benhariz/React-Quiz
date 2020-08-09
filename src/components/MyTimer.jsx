import React, { useState ,useEffect}from 'react';
import { MDBBtn } from "mdbreact";

const MyTimer = ({setindex,answers}) => {

    const [Counter, setCounter] = useState(60)
    const [Run, setRun] = useState(true)
    
    useEffect(() => {
        const Timer = Run ? Counter > 0 && setInterval(() => setCounter(Counter - 1), 1000) : Counter;
        return () => clearInterval(Timer);
      }, [Counter,Run]);

    function Reset(){
        setCounter(100);
        setRun(false)
    }

    function StartPause(){
        setRun(!Run);
        console.log(Run);
    }
    if(Counter === 0){setindex(answers.length)}
    return ( 
    <React.Fragment>
        <div><strong> { Math.floor(Counter / 60)}:{Counter %60} </strong> </div>
        {/* <div>
            <MDBBtn rounded outline onClick={StartPause} color={Run?"danger":"success"} >{Run ? "Pause": "Start" }</MDBBtn>
            <MDBBtn rounded outline onClick= {Reset} color="info"> Reset</MDBBtn>
        </div> */}
    </React.Fragment>
     );
}
 
export default MyTimer;