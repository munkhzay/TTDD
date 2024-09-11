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
const cards2 = [["HFF", "sdhkfkjdshf"], ["ksdjhfkjsd", "skdhfkudsj"], [], []];
const card = ["todo"];
const card1 = ["progress"];
const card2 = ["done"];
const card3 = ["blocked"];

export const Allcard = () => {
  const [todolist, setTodolist] = useState([]);
  const [progresslist, setProgresslist] = useState([]);
  const [donelist, setDonelist] = useState([]);
  const [blockedlist, setBlockedlist] = useState([]);
  const [text, setText] = useState("");
  const [select, setSelect] = useState();
  const [add, setAdd] = useState();
  const [renderText, setRenderText] = useState(0);
  const [inputValue, setInputValue] = useState();
  const Value = (gg) => {
    setText(gg.target.value);
  };
  const Select = (jjj) => {
    setSelect(jjj.target.value);
  };
  const Allvalue = () => {
    // const list = { text: text, select: select };
    // if (cards[0] === select) setTodolist([...todolist, list]);
    // const ToDo = () => {
    if (cards[1] === select) {
      const list = { text: text, select: select };
      setTodolist([...todolist, list]);
    }

    if (cards[2] === select) {
      const list = { text: text, select: select };
      setProgresslist([...progresslist, list]);
    }
    if (cards[3] === select) {
      const list = { text: text, select: select };
      setDonelist([...donelist, list]);
    }
    {
      if (cards[4] === select) {
        const list = { text: text, select: select };
        setBlockedlist([...blockedlist, list]);
      }
    }
  };
  const Todo = (props) => {
    const { Select } = props;
    const id = Math.random;
    return (
      <div>
        {todolist.map((element, id) => {
          return (
            <div key={id}>
              <div className="text-white">{element.text}</div>
              <div className="text-white">{element.select}</div>
            </div>
          );
        })}
      </div>
    );
  };
  const random = {
    0: "todo",
    1: "inprogress",
    2: "done",
    3: "blocked",
  };
  const allList = [[todolist], [progresslist], [donelist], [blockedlist]];

  // const Progress = () => {
  //   return (
  //     <div>
  //       {" "}
  //       {progresslist.map((element, id) => {
  //         return (
  //           <div key={id}>
  //             <div className="text-white">{element.text}</div>
  //             <div className="text-white">{element.select}</div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // };
  // const Done = () => {
  //   return (
  //     <div>
  //       {" "}
  //       {donelist.map((element, id) => {
  //         return (
  //           <div key={id}>
  //             <div className="text-white">{element.text}</div>
  //             <div className="text-white">{element.select}</div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // };
  // const Blocked = () => {
  //   return (
  //     <div>
  //       {" "}
  //       {blockedlist.map((element, id) => {
  //         return (
  //           <div key={id}>
  //             <div className="text-white">{element.text}</div>
  //             <div className="text-white">{element.select}</div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // };

  return (
    <div className="flex flex-col items-center">
      {" "}
      <button onClick={""} className="border p-4 bg-green-600 rounded-xl">
        Add task
      </button>
      <div className="flex gap-3 ">
        {allList.map((card, index) => {
          return (
            <div className="bg-gray-500 w-full h-[300px] flex flex-col">
              <p> {random[index]} </p>
              {card.map((onetask) => {
                return <div> {onetask} </div>;
              })}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center   gap-4 ">
        <div className="w-[280px] h-[672px] border rounded-md bg-gray-800">
          {card.map((card) => {
            return (
              <div>
                <Card title={card}></Card>
                {/* <Todo></Todo> */}
              </div>
            );
          })}
        </div>
        <div className="w-[280px] h-[672px] border rounded-md bg-gray-800">
          {card1.map((card) => {
            return (
              <div>
                <Card title={card}></Card>
                {/* <Progress></Progress> */}
              </div>
            );
          })}
        </div>
        <div className="w-[280px] h-[672px] border rounded-md bg-gray-800">
          {card2.map((card) => {
            return (
              <div>
                <Card title={card}></Card>
                {/* <Done></Done> */}
              </div>
            );
          })}
        </div>
        <div className="w-[280px] h-[672px] border rounded-md bg-gray-800">
          {card3.map((card) => {
            return (
              <div>
                <Card title={card}></Card>
                {/* <Blocked></Blocked> */}
              </div>
            );
          })}
        </div>
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
