// import { Row } from "antd";
import React, { useState } from "react";
import "./Todo.css";
import { Button } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined, DeleteFilled } from "@ant-design/icons";

export default function Todo() {
  const [Data, setData] = useState();
  const [TodoData, setTodoData] = useState([]);

  const renderRows = () => {
    let row = [];
    {
      TodoData.map((val, index) => {
        row.push(
          <div key={index} className="added_list">
            <div className="list">{val}</div>
            <div>
              <EditOutlined
                onClick={() => edit_list(index)}
                style={{
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  paddingRight: "0.5rem",
                  color: "#00A19D",
                }}
              />
              <DeleteFilled
                onClick={() => delete_list(index)}
                style={{
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  color: "#911F27",
                }}
              />
            </div>
          </div>
        );
      });
    }
    return row;
  };

  const handleClick = () => {
    setTodoData([...TodoData, Data]);
    setData("");
  };

  const edit_list = (index) => {
    let new_array = [];
    let edit_array = "";
    TodoData.filter((item, i) =>
      i !== index ? new_array.push(item) : (edit_array = item)
    );
    setData(edit_array);
    // console.log(new_array);
    setTodoData(new_array);
  };

  const delete_list = (index) => {
    let new_array = [];
    // console.log("hii");
    new_array = TodoData.filter((item, i) => i !== index);
    setTodoData(new_array);
    // console.log(new_array);
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="header">
            <h1 className="title">Add Todo</h1>
            <form className="frm">
              <input
                type="text"
                placeholder="Todo"
                value={Data}
                onChange={(e) => setData(e.target.value)}
              />
              <Button
                type="primary"
                style={{
                  color: "#fff",
                  background: "#963694",
                  border: "none",
                  fontSize: "1rem",
                  height: "2.5rem",
                }}
                className="btnadd"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick();
                }}
              >
                Add To List
              </Button>

              {/* <button type="primary">btn</button> */}
            </form>
          </div>
          <div className="todo_content">
            <h2 className="title">Todo List</h2>
            {renderRows()}
          </div>
        </div>
      </div>
    </>
  );
}
