import { createEffect, createSignal } from "solid-js";
import Navbar from "./Navbar";

function Crew() {
  const [val, setVal] = createSignal(0);
  const [name, setName] = createSignal("");
  const [image, setImage] = createSignal("");
  const[role,setRole]=createSignal("");
  const[bio,setBio]=createSignal("");

  createEffect(() => {
    console.log(val());
    const nikhil = async () => {
      const resp = await fetch("/data.json");
      const data = await resp.json();
      console.log(data.crew);
      setName(data.crew[val()].name);
      setImage(data.crew[val()].images.png);
      setRole(data.crew[val()].role)
      setBio(data.crew[val()].bio)
    };
    nikhil();
  }, [val()]);

  return (
    <div className=" w-[413px] select-none  bg-cover mx-auto h-[800px] flex flex-col items-center bg-[url(/assets/crew/background-crew-mobile.jpg)]">
      <Navbar />
      <h1 className="flex tracking-[2.8px] gap-3">
        <span className="text-gray-600">02</span> <p>MEET YOUR CREW</p>
      </h1>
      <div className="border-gray-500 border-b w-[327px] flex justify-center">
      <img src={image()} className=" w-[177px] mt-10" alt="" />
      </div>
      
      <h2 className="text-gray-400">{role().toUpperCase()}</h2>
      <h2 className="text-[24px]">{name().toUpperCase()}</h2>
      <h3 className="text-[#D0D6F9] text-center">{bio().toUpperCase()}</h3>
    </div>
  );
}

export default Crew;
