import { createSignal } from "solid-js";
import Navbar from "./Navbar";

function App() {
  const [enable, setEnable] = createSignal(true);
  const[active,setActive]=createSignal(0)
  return (
    <div className=" w-[413px]  bg-cover mx-auto h-[800px] flex flex-col  items-center  bg-[url(/assets/home/background-home-mobile.jpg)] sm:w-full sm:bg-[url(/assets/home/background-home-desktop.jpg)] sm:h-[936.5px]">
      <Navbar active={active()}/>

      <div className="sm:absolute sm:left-[10%] sm:top-[40%]">
        <h1 className="sm:text-[28px] text-center sm:text-left">SO, YOU WANT TO TRAVEL TO</h1>
        <h2 className="text-[80px] text-center sm:text-left sm:text-[150px]">SPACE</h2>
        <h3 className="text-center sm:text-left sm:text-[18px] ">
          Let’s face it; if you want to go to space, you might <br /> as well
          genuinely go to outer space and not hover <br /> kind of on the edge
          of it. Well sit back, and relax <br /> because we’ll give you a truly
          out of this world <br /> experience!
        </h3>
      </div>

      <div
        id="explore outer"
        className={
          enable()
            ? "w-[100px] h-[100px] sm:right-[15%] absolute top-[54.5vh] rounded-[10rem] transition-all ease-linear flex items-center justify-center bg-[#979797] opacity-50 "
            : "w-[250px] h-[250px] sm:right-[7%] sm:w-[400px] sm:h-[400px] absolute top-[41vh] sm:top-[40vh]   rounded-[30rem] transition-all ease-linear  flex items-center justify-center bg-[#979797] opacity-50 "
        }
      ></div>

      <div
        id="explore_inner"
        className="w-[150px]  sm:right-[10.8%] h-[150px] sm:h-[274px] sm:w-[274px] top-[47.5vh] absolute rounded-[10rem] flex items-center justify-center  bg-white "
        onMouseEnter={() => setEnable(!enable())}
        onMouseLeave={() => setEnable(!enable())}
      >
        <a href="/destination">
          <p className="text-black text-[20px] select-none sm:text-[32px]">EXPLORE</p>
        </a>
      </div>
    </div>
  );
}

export default App;
