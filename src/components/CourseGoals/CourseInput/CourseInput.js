import React, { useState } from "react";

import Button from "../../UI/Button/Button";
// import "./CourseInput.css";

// import styled from "styled-components";

import styles from './CourseInput.module.css'; 



// const FormControl = styled.div`

//   margin: 0.5rem 0;


// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;

//   color: ${props => props.notValid ? 'red':'black'};
// }

// & input {
//   display: block;
//   width: 100%;
//   ${'' /* border: 1px solid #ccc;    for method 1 */}
//   border: 2px solid ${props => props.notValid ? 'red' : '#ccc'};
//   background-color: ${props => props.notValid ? 'red':'transparent'}
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// ${'' /* &.invalid label{
//   color: red;
// }

// &.invalid input{
//   background-color: salmon;
//   border: 2px solid red;
// } */}
// `;




const CourseInput = (props) => {


  const [enteredValue, setEnteredValue] = useState("");

  // const courseInputref = useRef();

  const [isValid, setIsValid] = useState(true);                     //for color change in label tag we are considering a state.



  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
                                            
      setIsValid(true);                               //this is done to reset the color appearing in the input if no input is provided
    }

    setEnteredValue(event.target.value);
  };



  const formSubmitHandler = (event) => {
    event.preventDefault();

    // const enteredGoal = courseInputref.current.value;


    // to make sure that we dont add any empty goals: (Lec 74)
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
    setEnteredValue("");

    //resetting state while using useRef
    // courseInputref.current.value = "";
  };



  return (
    <form onSubmit={formSubmitHandler}>


      {/* <div className="form-control">

        <label style={{color: !isValid ? 'red':'black'}}>Course Goal</label>
        <input type="text" style={{
          backgroundColor: !isValid ? 'salmon': 'transparent', 
          border: !isValid ? '2px solid red': '2px solid black'}}

          value={enteredValue} onChange={goalInputChangeHandler}/>

      </div> */}


      {/* Dynamic addition of CSS class  */}

      {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}>

        <label>Course Goal</label>

        <input
          type="text"
          // value={enteredValue}
          // onChange={goalInputChangeHandler}
          ref={courseInputref}
        />

      </div> */}



      {/* Adding CSS class using styled-components method 1 */}

      {/* <FormControl className={!isValid && "invalid"}>

        <label>Course Goal</label>

        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />

      </FormControl> */}



      {/* Adding CSS class using styled-components method 2 by props */}

      {/* <FormControl notValid={!isValid}>

        <label>Course Goal</label>

        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />

      </FormControl> */}



      {/* Using CSS modules */}

      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>

        <label>Course Goal</label>
        <input type="text"  value={enteredValue} onChange={goalInputChangeHandler} 
        // ref={courseInputref}
        />

      </div>
  

      <Button type="submit">Add Goal</Button>

    </form>
  );
};

export default CourseInput;
