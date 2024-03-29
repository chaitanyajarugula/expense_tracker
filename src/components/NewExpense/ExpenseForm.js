import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEntertedAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const amountChangeHandler = (event) => {
    setEntertedAmount(event.target.value);
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const resetHandler = (event) =>{
    event.preventDefault();
    props.onCancelForm();
  }
   const submitHandler = (event) => {
    event.preventDefault();
    const Expensedata = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(Expensedata);
    props.onSaveChangeData(Expensedata);
    setEnteredTitle("");
    setEntertedAmount("");
    setEnteredDate("");
  };
  return (
    <div>
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min={0.01}
            step={0.01}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div>
        <button className="new-expense__actions" type="Submit">
          Submit Form
        </button>
        <button className="new-expense__actions" type="reset">Cancel</button>
      </div>
    </form>
    </div>
  );
};

export default ExpenseForm;
