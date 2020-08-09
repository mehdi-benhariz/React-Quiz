import React,{useState} from 'react';
import QuestionContextProvider from "./context/QuestionContext"
import Questions from "./components/Questions";
import Nav from "./components/Nav";
import FooterPage from "./components/FooterPage";
import {MDBBtn} from "mdbreact";

function App() {
  const [start, setstart] = useState(false);
  return (
    <div className="App">
<Nav />
{!start && <div id="start" > 
<MDBBtn  onClick={()=>setstart(true)} gradient="purple"  >Start?</MDBBtn> </div> }
{start &&  (
  <QuestionContextProvider>
     <Questions setstart={setstart} />
    </QuestionContextProvider>
) }
    
  <FooterPage />
    </div>
  );
}

export default App;
