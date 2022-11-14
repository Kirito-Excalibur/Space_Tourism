import { createEffect, createSignal } from "solid-js";
import Navbar from "./Navbar";

function Crew() {
  const [val, setVal] = createSignal(0);
  const [name, setName] = createSignal("");
  const [image, setImage] = createSignal("");
  const [role, setRole] = createSignal("");
  const [bio, setBio] = createSignal("");
  const [active, setActive] = createSignal(2);
  createEffect(() => {
    console.log(val());
    const nikhil = async () => {
      const resp = await fetch("/data.json");
      const data = await resp.json();
      console.log(data.crew);
      setName(data.crew[val()].name);
      setImage(data.crew[val()].images.png);
      setRole(data.crew[val()].role);
      setBio(data.crew[val()].bio);
    };
    nikhil();
  }, [val()]);

  return (
    <div className=" w-[413px] select-none bg-cover mx-auto h-[800px] flex flex-col items-center sm:w-full sm:h-[936.5px] bg-[url(/assets/crew/background-crew-mobile.jpg)] sm:bg-[url(/assets/crew/background-crew-desktop.jpg)]">
      <Navbar active={active()} />

      <div className="sm:absolute sm:left-[10%] sm:top-[18%] sm:block flex justify-center items-center flex-col">
        <h1 className="flex tracking-[2.8px] gap-3 ">
          <span className="text-gray-600 sm:text-[28px]">02</span>{" "}
          <p className="sm:text-[28px]">MEET YOUR CREW</p>
        </h1>
        <div className="border-gray-500 border-b w-[327px] flex justify-center sm:hidden">
          <img
            src={image()}
            className=" w-[177px] h-[222px] mt-10 sm:h-[704px] sm:w-[568.07px] sm:absolute sm:bottom-0 sm:right-[10%]"
            alt=""
          />
        </div>

        <ul className="text-white sm:hidden flex justify-center gap-5 w-full mt-10">
          <li
            onClick={() => setVal(0)}
            className={
              val() == 0
                ? "bg-white border w-[10px] h-[10px] rounded-[30rem] "
                : "bg-gray-700 cursor-pointer border-gray-700 border w-[10px] h-[10px] rounded-[30rem]"
            }
          ></li>
          <li
            onClick={() => setVal(1)}
            className={
              val() == 1
                ? "bg-white border w-[10px] h-[10px] rounded-[30rem]"
                : "bg-gray-700 cursor-pointer border-gray-700 border w-[10px] h-[10px] rounded-[30rem]"
            }
          ></li>
          <li
            onClick={() => setVal(2)}
            className={
              val() == 2
                ? "bg-white border w-[10px] h-[10px] rounded-[30rem]"
                : "bg-gray-700 cursor-pointer border-gray-700 border w-[10px] h-[10px] rounded-[30rem]"
            }
          ></li>
          <li
            onClick={() => setVal(3)}
            className={
              val() == 3
                ? "bg-white border w-[10px] h-[10px] rounded-[30rem]"
                : "bg-gray-700 cursor-pointer border-gray-700 border w-[10px] h-[10px] rounded-[30rem]"
            }
          ></li>
        </ul>

        <h2 className="text-gray-400 mt-10 sm:text-[32px] sm:mt-[20rem]">
          {role().toUpperCase()}
        </h2>
        <h2 className="text-[24px] sm:text-[58px]">{name().toUpperCase()}</h2>
        <h3 className="text-[#D0D6F9] text-center mt-5 sm:w-[30%] sm:text-left">
          {bio().toUpperCase()}
        </h3>

        <ul className="text-white sm:flex hidden   gap-5 w-full mt-10">
          <li
            onClick={() => setVal(0)}
            className={
              val() == 0
                ? "bg-white border w-[10px] h-[10px] rounded-[30rem] "
                : "bg-gray-700 cursor-pointer border-gray-700 border w-[10px] h-[10px] rounded-[30rem]"
            }
          ></li>
          <li
            onClick={() => setVal(1)}
            className={
              val() == 1
                ? "bg-white border w-[10px] h-[10px] rounded-[30rem]"
                : "bg-gray-700 cursor-pointer border-gray-700 border w-[10px] h-[10px] rounded-[30rem]"
            }
          ></li>
          <li
            onClick={() => setVal(2)}
            className={
              val() == 2
                ? "bg-white border w-[10px] h-[10px] rounded-[30rem]"
                : "bg-gray-700 cursor-pointer border-gray-700 border w-[10px] h-[10px] rounded-[30rem]"
            }
          ></li>
          <li
            onClick={() => setVal(3)}
            className={
              val() == 3
                ? "bg-white border w-[10px] h-[10px] rounded-[30rem]"
                : "bg-gray-700 cursor-pointer border-gray-700 border w-[10px] h-[10px] rounded-[30rem]"
            }
          ></li>
        </ul>
      </div>
      <div className="border-gray-500  w-[327px]  justify-center hidden sm:flex">
          <img
            src={image()}
            className=" w-[177px] h-[222px] mt-10 sm:h-[704px] sm:w-[568.07px] sm:absolute sm:bottom-0 sm:right-[10%]"
            alt=""
          />
        </div>
    </div>
  );
}

export default Crew;
