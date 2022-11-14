import { createEffect, createSignal } from "solid-js";
import Navbar from "./Navbar";

function technology() {
  const [val, setVal] = createSignal(0);
  const [name, setName] = createSignal("");
  const [image, setImage] = createSignal("");
  const [deskImage,setDeskImage] = createSignal("");
  const [desc, setDesc] = createSignal("");
  const[active,setActive]=createSignal(3)
  createEffect(() => {
    console.log(val());
    const nikhil = async () => {
      const resp = await fetch("/data.json");
      const data = await resp.json();
      console.log(data.destinations);
      setName(data.technology[val()].name);
      setImage(data.technology[val()].images.landscape);
      setDeskImage(data.technology[val()].images.portrait);
      setDesc(data.technology[val()].description);
    };
    nikhil();
  }, [val()]);

  return (
    <div className=" w-[413px] select-none  bg-cover mx-auto h-[800px] flex flex-col items-center bg-[url(/assets/technology/background-technology-mobile.jpg)] sm:w-full sm:h-[936.5px] sm:bg-[url(/assets/technology/background-technology-desktop.jpg)]">
      <Navbar active={active()}/>
      <div className="sm:absolute sm:flex sm:flex-col flex flex-col justify-center items-center  sm:left-[10%] sm:top-[20%]">
      <h1 className="flex tracking-[2.8px] gap-3 sm:text-[28px] ">
        <span className="text-gray-600">03</span>
        <p>SPACE LAUNCH 101</p>
      </h1>
      <img src={image()} className=" mt-10  sm:hidden" alt="" />
<div className="sm:flex sm:justify-center  sm:gap-[8rem] sm:mt-[10rem]">
      <ul className="text-white flex sm:flex-col sm:w-max justify-center gap-5 w-full mt-10">
        <li
          onClick={() => setVal(0)}
          className={
            val() == 0
              ? "border border-white bg-white text-black sm:w-[80px] sm:h-[80px] w-[40px] flex items-center justify-center h-[40px] rounded-[30rem] "
              : "border-gray-500 cursor-pointer flex items-center sm:w-[80px] sm:h-[80px] justify-center  border w-[40px] h-[40px] rounded-[30rem]"
          }
        >
          1
        </li>
        <li
          onClick={() => setVal(1)}
          className={
            val() == 1
              ? "border border-white bg-white text-black sm:w-[80px] sm:h-[80px] w-[40px] flex items-center justify-center h-[40px] rounded-[30rem]"
              : "border-gray-500 cursor-pointer flex items-center sm:w-[80px] sm:h-[80px] justify-center border w-[40px] h-[40px] rounded-[30rem]"
          }
        >
          2
        </li>
        <li
          onClick={() => setVal(2)}
          className={
            val() == 2
              ? "border border-white bg-white text-black sm:w-[80px] sm:h-[80px] w-[40px] flex items-center justify-center h-[40px] rounded-[30rem]"
              : "border-gray-500 cursor-pointer flex items-center sm:w-[80px] sm:h-[80px] justify-center border w-[40px] h-[40px] rounded-[30rem]"
          }
        >
          3
        </li>
      </ul>
      <div className=" sm:w-[473px]">
      <h1 className="text-gray-400 mt-10 sm:text-[18px] text-center sm:text-left">THE TERMINOLOGY...</h1>
      <h2 className="text-[24px] sm:text-[56px] text-center sm:text-left">{name().toUpperCase()}</h2>
      <h3 className="text-[#D0D6F9] sm:text-left sm:text-[18px] text-center mt-5 ">{desc()}</h3>
      </div>
      </div>
      </div>
      <img src={deskImage()} className="hidden sm:block sm:absolute sm:bottom-[12%] sm:right-0  " alt="" />
    </div>
  );
}

export default technology;
