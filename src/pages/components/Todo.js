import Link from "next/link";
import { useEffect, useState } from "react";

const cards = ["Select status", "todo", "inprogress", "done", "blocked"];
export const Allcard = () => {
  const [todolist, setTodolist] = useState([]);
  // const [progresslist, setProgresslist] = useState([]);
  // const [donelist, setDonelist] = useState([]);
  // const [blockedlist, setBlockedlist] = useState([]);
  const [text, setText] = useState("");
  const [select, setSelect] = useState();
  const alltext = setTodolist([...todolist, text, select]);

  // const Allvalue = () => {
  //   if (cards[1] === select) {
  //     setTodolist([...todolist, text]);
  //   }
  //   if (cards[2] === select) {
  //     setProgresslist([...progresslist, text]);
  //   }
  //   if (cards[3] === select) {
  //     setDonelist([...donelist, text]);
  //   }

  //   if (cards[4] === select) {
  //     setBlockedlist([...blockedlist, text]);
  //   }
  //   setSelect(cards[0]);
  //   setText("");
  // };

  const random = {
    0: "todo",
    1: "inprogress",
    2: "done",
    3: "blocked",
  };
  // const allList = [[todolist], [progresslist], [donelist], [blockedlist]];
  return (
    <div className="flex flex-col items-center ">
      {" "}
      <button onClick={""} className="border p-4 bg-green-600 rounded-xl">
        Add task
      </button>
      <div className="flex gap-3 ">
        {todolist.map((list) => {
          list.select.filter((tlist) => tlist.select.includes("todo"));
        })}
        {/* {allList.map((card, index) => {
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
        })} */}
      </div>
      <div className="border w-80 flex flex-col gap-6 p-5">
        <p className="text-black"> Enter task</p>
        <div className="flex flex-col w-52 gap-4 items-center">
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="border rounded-xl p-2"
            placeholder="Task name"
          ></input>
          <select
            onChange={(s) => setSelect(s.target.value)}
            value={select}
            className="w-44 p-2 rounded-xl border"
          >
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
          onClick={alltext}
          className="border p-2 bg-green-600 rounded-xl"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
