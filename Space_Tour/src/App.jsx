import { createSignal } from "solid-js";
import Navbar from "./static/Navbar";

function App() {
  const [enable, setEnable] = createSignal(true);
  return (
    <div className=" w-[413px]  bg-cover mx-auto h-[720px] flex flex-col items-center  bg-[url(./assets/home/background-home-mobile.jpg)]">
      <Navbar />
      <h1>SO, YOU WANT TO TRAVEL TO</h1>
      <h2 className="text-[80px]">SPACE</h2>
      <h3 className="text-center ">
        Let’s face it; if you want to go to space, you might <br /> as well
        genuinely go to outer space and not hover <br /> kind of on the edge of
        it. Well sit back, and relax <br /> because we’ll give you a truly out
        of this world <br /> experience!
      </h3>

      <div
        id="explore outer"
        className={
          enable()
            ? "w-[100px] absolute bottom-[370px] h-[100px] rounded-[10rem] transition-all ease-linear flex items-center justify-center bg-[#979797] opacity-50 "
            : "w-[250px] absolute bottom-[310px] h-[250px] rounded-[10rem] transition-all ease-linear  flex items-center justify-center bg-[#979797] opacity-50 "
        }
      ></div>

      <div
        id="explore_inner"
        className="w-[150px] h-[150px] bottom-[360px] absolute rounded-[10rem] flex items-center justify-center  bg-white "
        onMouseEnter={() => setEnable(!enable())}
        onMouseLeave={() => setEnable(!enable())}
      >
        <a href="/destination/moon">
          <p className="text-black text-[20px] select-none ">EXPLORE</p>
        </a>
      </div>
    </div>
  );
}

export default App;
