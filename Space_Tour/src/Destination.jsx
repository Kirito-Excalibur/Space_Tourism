import { useParams } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import Navbar from "./Navbar";

function Destination() {
  const [val, setVal] = createSignal(0);
  const [name, setName] = createSignal("");
  const [image, setImage] = createSignal("");
  const [desc, setDesc] = createSignal("");
  const [distance, setDistance] = createSignal("");
  const [travel, setTravel] = createSignal("");
  const [active, setActive] = createSignal(1);

  createEffect(() => {
    console.log(val());
    const nikhil = async () => {
      const resp = await fetch("/data.json");
      const data = await resp.json();
      console.log(data.destinations);
      setName(data.destinations[val()].name);
      setImage(data.destinations[val()].images.png);
      setDesc(data.destinations[val()].description);
      setDistance(data.destinations[val()].distance);
      setTravel(data.destinations[val()].travel);
    };
    nikhil();
  }, [val()]);

  return (
    <div className=" w-[413px] select-none  bg-cover mx-auto h-[800px] flex flex-col items-center bg-[url(/assets/destination/background-destination-mobile.jpg)] sm:w-full sm:h-[936.5px] sm:bg-[url(/assets/destination/background-destination-desktop.jpg)]">
      <Navbar active={active()}/>

      <div className="sm:left-[20%] sm:absolute sm:top-[30%] flex items-center justify-center flex-col">
        <h1 className="flex tracking-[2.8px] gap-3">
          <span className="text-gray-600 sm:text-[28px]">01</span> <p className="sm:text-[28px]">PICK YOUR DESTINATION</p>
        </h1>

        <img src={image()} className="w-[170px] sm:w-[445px] mt-10" alt="" />
      </div>

      <div className="flex flex-col  sm:items-start sm:w-[445px] sm:justify-start  items-center justify-center sm:absolute sm:top-[30%] sm:right-[10%]">
        <ul className="text-white flex justify-center sm:justify-start gap-5 w-full mt-5">
          <li
            onClick={() => setVal(0)}
            className={
              val() == 0
                ? "border-b-2 border-white"
                : "hover:border-b-4   cursor-pointer hover:border-gray-500 transition-all  select-none p-1"
            }
          >
            <h1>MOON</h1>
          </li>
          <li
            onClick={() => setVal(1)}
            className={
              val() == 1
                ? "border-b-2 border-white"
                : "hover:border-b-4 cursor-pointer hover:border-gray-500 transition-all  select-none p-1"
            }
          >
            <h1>MARS</h1>
          </li>
          <li
            onClick={() => setVal(2)}
            className={
              val() == 2
                ? "border-b-2 border-white"
                : "hover:border-b-4 cursor-pointer hover:border-gray-500 transition-all  select-none p-1"
            }
          >
            <h1>EUROPA</h1>
          </li>
          <li
            onClick={() => setVal(3)}
            className={
              val() == 3
                ? "border-b-2 border-white"
                : "hover:border-b-4 cursor-pointer hover:border-gray-500 transition-all  select-none p-1"
            }
          >
            <h1>TITAN</h1>
          </li>
        </ul>

        <h2 className="text-white text-[56px] mt-6 sm:text-[100px] sm:text-left">{name().toUpperCase()}</h2>
        <p className="text-[#D0D6F9] text-center w-[85%]  sm:text-left">{desc()}</p>

<div className="sm:flex sm:gap-20">
  <span>
  <h1 className="text-[#D0D6F9] mt-8 text-center">AVG. DISTANCE</h1>
        <h2 className="text-[#D0D6F9] text-center text-[28px]">{distance()}</h2>
  </span>
       
<span>
<h1 className="text-[#D0D6F9] mt-8 text-center">EST. TRAVEL TIME</h1>
        <h2 className="text-[#D0D6F9] text-[28px] text-center">{travel().toUpperCase()}</h2>
</span>

      </div>
      </div>
    </div>
  );
}

export default Destination;
