import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import {useState} from 'react';
import Results from './Components/Results.jsx';

function App() {
  const[userInput,setUserInput]=useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});
const inputIsValid = userInput.duration>=1;

//function to trigger whenever we change the value in the user-input id
function handleChange(inputIdentifier,newValue) {
  setUserInput((prevUserInput)=> {
      return {
          ...prevUserInput,
          [inputIdentifier]: +(newValue),
//since we were getting our number as a string concat including the + sign will force it to be in the number
  };
  });
}



  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && (<p className="center">Please enter a duration greater than zero.</p>)}
      {inputIsValid && <Results input={userInput}/>
}
    </>
    
  );
}

export default App
