import React, { useState } from "react";
import "./Todo-card.css";
export default function Todo_card() {
  const [Values, setValues] = useState([]);
  const [data, setData] = useState();

  const add = () => {
    setValues([...Values, data]);
    // console.log(Values);
  };
  function handleinput(e) {
    setData(e.target.value);
  }
  //   function handleClick(e) {}

  const renderRows = () => {
    var row = [];
    {
      Values.map((val) => {
        row.push(<div>{val}</div>);
      });
    }
    return <span>{row}</span>;
  };
  return (
    <div className="card">
      <div className="container">
        <div className="title">
          <h2>Todo List</h2>
        </div>
        <div className="content">
          <form onSubmit={() => add()}>
            <input type="text" className="input" onChange={handleinput} />
            <button
              className="btnadd"
              onClick={(e) => {
                e.preventDefault();
                add();
              }}
            >
              Add
            </button>
          </form>
        </div>
        {renderRows()}
      </div>
    </div>
  );
}
