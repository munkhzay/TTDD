const cards = ["Select status", "todo", "inprogress", "done", "blocked"];
const cards2 = [["HFF", "sdhkfkjdshf"], ["ksdjhfkjsd", "skdhfkudsj"], [], []];
const card = ["todo"];
const card1 = ["progress"];
const card2 = ["done"];
const card3 = ["blocked"];

export const Allcard = () => {
  const random = {
    0: "todo",
    1: "inprogress",
    2: "done",
    3: "blocked",
  };
  return (
    <div className="flex gap-3 ">
      {cards2.map((card, index) => {
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
  );
};
