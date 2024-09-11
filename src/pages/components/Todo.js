import Link from "next/link";
import { useState } from "react";

const Card = (props) => {
  const { title, list } = props;
  return (
    <div className=" ">
      <div className="">
        <p className="text-white text-center">{title}</p>
        <h1 className="text-white">{list}</h1>
      </div>
    </div>
  );
};
const cards = ["Select status", "todo", "inprogress", "done", "blocked"];

export const Allcard = () => {
  const [todolist, setTodolist] = useState([]);
  const [progresslist, setProgresslist] = useState([]);
  const [donelist, setDonelist] = useState([]);
  const [blockedlist, setBlockedlist] = useState([]);
  const [text, setText] = useState("");
  const [select, setSelect] = useState();
  const [add, setAdd] = useState();
  const [renderText, setRenderText] = useState("");
  const [inputValue, setInputValue] = useState();

  const Value = (gg) => {
    setText(gg.target.value);
  };

  const Select = (jjj) => {
    setSelect(jjj.target.value);
  };
  const Allvalue = () => {
    if (cards[1] === select) {
      const list = text;
      setTodolist([...todolist, list]);
    }

    if (cards[2] === select) {
      const list = text;
      setProgresslist([...progresslist, list]);
    }
    if (cards[3] === select) {
      const list = text;
      setDonelist([...donelist, list]);
    }
    {
      if (cards[4] === select) {
        const list = text;
        setBlockedlist([...blockedlist, list]);
      }
    }
  };
  const random = {
    0: "todo",
    1: "inprogress",
    2: "done",
    3: "blocked",
  };
  const allList = [[todolist], [progresslist], [donelist], [blockedlist]];
  return (
    <div className="flex flex-col items-center ">
      {" "}
      <button onClick={""} className="border p-4 bg-green-600 rounded-xl">
        Add task
      </button>
      <div className="flex gap-3 ">
        {allList.map((card, index) => {
          return (
            <div className="bg-gray-700 w-[280px] p-5  h-[500px] border rounded-lg flex flex-col">
              <p className="text-white"> {random[index]} </p>
              {card.map((onetask, index) => {
                console.log(onetask);
                return (
                  <div key={index} className="">
                    {" "}
                    {onetask}{" "}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="border w-80 flex flex-col gap-6 p-5">
        <p className="text-black"> Enter task</p>
        <div className="flex flex-col w-52 gap-4 items-center">
          <input
            onChange={Value}
            value={inputValue}
            className="border rounded-xl p-2"
            placeholder="Task name"
          ></input>
          <select onChange={Select} className="w-44 p-2 rounded-xl border">
            {cards.map((card, index) => {
              return (
                <option className="text-black" key={index}>
                  {card}
                </option>
              );
            })}
          </select>
        </div>
        <button
          onClick={Allvalue}
          className="border p-2 bg-green-600 rounded-xl"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
