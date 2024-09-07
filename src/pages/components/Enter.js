const cards = ["todo", "inprogress", "done", "blocked"];
const Entertask = () => {
  return (
    <div className="border w-3 h-4 z-10">
      <p className="text-black">Enter task</p>
      <input placeholder="Task name"></input>
      <select>
        <div>
          {cards.map((card, index) => {
            console.log(card);
            return <option key={index}>{card}</option>;
          })}
        </div>
      </select>
    </div>
  );
};
