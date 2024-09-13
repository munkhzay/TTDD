import { Allcard } from "@/pages/components/Todo";
import { useEffect, useState } from "react";
const Home = () => {
  const [time, setTime] = useState(0);
  const [min, setMin] = useState(0);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    let interval;
    if (isStart === true) {
      interval = setInterval(() => {
        if (time < 60) {
          setTime((prev) => prev + 1);
        }
      }, 100);
    }
    if (stop === false) {
      setTime(time);
    }
    return () => clearInterval(interval);
  }, [isStart, time]);

  const Start = () => {
    setIsStart(true);
  };
  const Stop = () => {
    setIsStart(false);
  };
  return (
    <div className="text-center gap-10">
      <p>Challange</p>
      <div className="flex">
        <p>{min}</p>

        <p onClick={""}>:{time}</p>
      </div>
      <div className=" flex justify-center gap-20">
        <button onClick={Start}>Start</button>
        <button onClick={Stop}>Stop</button>
      </div>
    </div>
  );
  //  <Allcard></Allcard>;
};
export default Home;
