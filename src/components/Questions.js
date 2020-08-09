import React,{useContext,useState} from 'react';
import {QuestionContext} from "../context/QuestionContext"
import {MDBBtn,MDBBadge} from "mdbreact";
import MyTimer from "./MyTimer";

const Questions = ({setstart}) => {
    const {questions,answers,
        setscore,score,index,setindex} = useContext(QuestionContext);

const handleYes=()=>{
    console.log(index,questions.length)

    if(index < questions.length){
        answers[index].yes = true  ;
        if(questions[index].yes){setscore(score+1)}
        setindex(index+1);
    }
    
}
const handleNo=()=>{
    if(index < answers.length){
        answers[index].no = true  ;
        if(questions[index].no){setscore(score+1)}
        setindex(index+1);
    }
    }
    
const rAnswers =questions.map((q,i)=>{
    return(
        <div>
        <strong id="answer" >{i}) {q.content}?: <p>{q.yes?"yes":"no"} </p> </strong>
         </div>
    )
                      
                 }
            );
    return (
        <div id="questions" >
            <h1>challenge your mind</h1>
            {!(index < answers.length) && <div>
                <p>and your score is  :
                     {score === answers.length && <MDBBadge color="success">{score}</MDBBadge>} 
                     {score ===0 &&  <MDBBadge color="danger">{score}</MDBBadge> }
                     {score !==0 && score !== answers.length &&  <MDBBadge color="seconday">{score}</MDBBadge> }
               <MDBBtn gradient="peach" onClikc={()=>setstart(false)} > Try Again</MDBBtn>
                 </p>
                <h4>right answers:</h4>
              {rAnswers}
            </div>  }
             {(index < answers.length) &&
  (
                     <div>
                    <p>{index+1} ) {questions[index].content} ? </p>
                    <p >
            </p>
            <MyTimer setindex={setindex} answers={answers}  />
                    <MDBBtn onClick={handleYes} color="success" rounded >Yes </MDBBtn>
                    <MDBBtn onClick={handleNo} color="danger" rounded >No </MDBBtn>
                     </div>       
 )
             }
        </div>

      );
}
 
export default Questions;