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
// const Entertask = () => {
//   return (

//   );
// };
const cards = ["todo", "inprogress", "done", "blocked"];
export const Allcard = () => {
  const [todolist, setTodolist] = useState([]);
  const [text, setText] = useState("");
  const [select, setSelect] = useState();
  const Value = (gg) => {
    setText(gg.target.value);
  };
  const Select = (jjj) => {
    setSelect(jjj.target.value);
  };
  const Allvalue = () => {
    const list = { text: text, select: select };
    setTodolist([...todolist, list]);
  };
  const Listall = () => {
    const id = Math.random;
    return (
      <div>
        {" "}
        {todolist.map((element, id) => {
          //   if (element.select.value === "todo")
          return (
            <div key={id}>
              <div className="text-black">{element.select}</div>
              <div>{element.text}</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      {" "}
      <button className="border p-4 bg-green-600 rounded-xl">Add task</button>
      <div className="flex justify-center   gap-4 ">
        {cards.map((card, index) => {
          return (
            <div className="w-[280px] h-[672px] border rounded-md bg-gray-800">
              <Card key={index} title={card}></Card>
              <Listall></Listall>
            </div>
          );
        })}

        {/* {todolist.map((element) => {
          return (
            <div>
              <div className="text-black">{element.select}</div>
              <div>{element.text}</div>
            </div>
          );
        })} */}
      </div>
      <div className="border w-80 flex flex-col gap-6 p-5">
        <p className="text-black"> Enter task</p>
        <div className="flex flex-col w-52 gap-4 items-center">
          <input
            onChange={Value}
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
