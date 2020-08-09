import React, {useState, createContext } from 'react';


export const QuestionContext =  createContext();

const QuestionContextProvider = (props) => {
    var stock = [
        {content: 'first',yes:true,no:false  },
        {content: 'second',yes:false,no:true  },
        {content: 'third',yes:false,no:true  },
        {content: '4',yes:false,no:true  },
        {content: '5',yes:false,no:true  },
        {content: '6',yes:false,no:true  },
        {content: '7',yes:false,no:true  },
        {content: '8',yes:false,no:true  },
        {content: '9',yes:false,no:true  },
        {content: '10',yes:false,no:true  },
        {content: '11',yes:false,no:true  },
        {content: '12',yes:false,no:true  },
        {content: '13',yes:false,no:true  },
        {content: '14',yes:false,no:true  },
        {content: '15',yes:false,no:true  },
        {content: '16',yes:false,no:true  },
        {content: '17',yes:false,no:true  },
        {content: '18',yes:false,no:true  },
        {content: '19',yes:false,no:true  },
        {content: '20',yes:false,no:true  },
        {content: '21',yes:false,no:true  },
        {content: '22',yes:false,no:true  },
        {content: '23',yes:false,no:true  },
        {content: '24',yes:false,no:true  },
        {content: '25',yes:false,no:true  },
        {content: '26',yes:false,no:true  },
        {content: '27',yes:false,no:true  },
        {content: '28',yes:false,no:true  },
        {content: '29',yes:false,no:true  },
        {content: '30',yes:false,no:true  },
        {content: '31',yes:false,no:true  },
        {content: '32',yes:false,no:true  },
        {content: '33',yes:false,no:true  },

    ];
    var aux = [];

//fill the array 
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // populate the variable "array" with 9 different
  // random numbers
  function getRandomInts(num) {
    var ints = [];
    while (ints.length < num-1) {
      var randNum = getRandomInt(0, 30);
      if(ints.indexOf(randNum) === -1){
        ints.push(randNum);
      }
    }
    return ints;
  }
  
  const indexArr = getRandomInts(26);

  for (var i=0;i<25;i++){
      aux.push(stock[indexArr[i]])
  }

    const [questions, setquestions] = useState(aux);
    const  answers = new Array(questions.length).fill({yes:false,no:false});
    const [score, setscore] = useState(0);
    const [index, setindex] = useState(0);
console.log(questions)
    return ( 
        <QuestionContext.Provider value={{questions,setquestions
        ,answers,score,setscore ,index,setindex  }} >
            {props.children}
        </QuestionContext.Provider>
     );
}
 
export default QuestionContextProvider;