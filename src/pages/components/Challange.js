import { useEffect, useState } from "react";
const Challange = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [time, setTime] = useState(0);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    let interval;
    if (isStart === true) {
      interval = setInterval(() => {
        if (sec < 60) {
          setSec((prev) => prev + 1);
        }
        if (sec === 60 && min < 60) {
          setSec(0);
          setMin((prev) => prev + 1);
        }
        if (min === 60) {
          setMin(0);
          setTime((prev) => prev + 1);
        }
      }, 10);
    }

    if (stop === false) {
      setSec(sec);
    }
    return () => clearInterval(interval);
  }, [isStart, sec, time, min]);

  const Start = () => {
    setIsStart(true);
  };
  const Stop = () => {
    setIsStart(false);
  };
  const Reset = () => {
    setTime(0);
    setMin(0);
    setSec(0);
  };
  return (
    <div className="text-center gap-10">
      <p>Challange</p>
      <div className="flex justify-center">
        <p>{time}</p>
        <p>:{min}</p>

        <p onClick={""}>:{sec}</p>
      </div>
      <div className=" flex justify-center gap-20">
        <button onClick={Start}>Start</button>
        <button onClick={Stop}>Stop</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
  //  <Allcard></Allcard>;
};
export default Challange;
