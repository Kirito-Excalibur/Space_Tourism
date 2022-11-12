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

  


  const increase=()=>{
    setVal(val()+1)
  }

  createEffect(()=>{
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


  },[val()])



  return (
    <div className=" w-[413px] select-none  bg-cover mx-auto h-[800px] flex flex-col items-center bg-[url(/assets/destination/background-destination-mobile.jpg)]">
      <Navbar />
      <h1 className="flex tracking-[2.8px] gap-3">
        <span className="text-gray-600">01</span> <p>PICK YOUR DESTINATION</p>
      </h1>
    
      <img src={image()} className="w-[170px] mt-10" alt="" />

      <ul className="text-white flex justify-center gap-5 w-full mt-5">
        <li
          onClick={() => setVal(0)}
          className={val()==0?"border-b-2 border-white":"hover:border-b-4   cursor-pointer hover:border-gray-500 transition-all  select-none p-1"}
        >
          <h1>MOON</h1>
        </li>
        <li
          onClick={() => setVal(1)}
          className={val()==1?"border-b-2 border-white":"hover:border-b-4 cursor-pointer hover:border-gray-500 transition-all  select-none p-1"}
        >
          <h1>MARS</h1>
        </li>
        <li
          onClick={() => setVal(2)}
          className={val()==2?"border-b-2 border-white":"hover:border-b-4 cursor-pointer hover:border-gray-500 transition-all  select-none p-1"}
        >
          <h1>EUROPA</h1>
        </li>
        <li
          onClick={() => setVal(3)}
          className={val()==3?"border-b-2 border-white":"hover:border-b-4 cursor-pointer hover:border-gray-500 transition-all  select-none p-1"}
        >
          <h1>TITAN</h1>
        </li>
      </ul>

      <h2 className="text-white text-[56px] mt-6">{name().toUpperCase()}</h2>
      <p className="text-[#D0D6F9] text-center w-[85%]">{desc()}</p>

      <h1 className="text-[#D0D6F9] mt-8">AVG. DISTANCE</h1>
      <h2 className="text-[#D0D6F9] text-[28px]">{distance()}</h2>

      <h1 className="text-[#D0D6F9] mt-8">EST. TRAVEL TIME</h1>
      <h2 className="text-[#D0D6F9] text-[28px]">{travel().toUpperCase()}</h2>
    </div>
  );
}

export default Destination;
