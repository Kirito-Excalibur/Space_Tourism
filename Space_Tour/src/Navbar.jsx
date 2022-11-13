import { createSignal } from "solid-js";

function Navbar({active}) {
  const [enable, setEnable] = createSignal(true);

  return (
    <div className="relative flex justify-between w-[90%] m-5">
      <img className="w-[40px] h-[40px]" src="/assets/shared/logo.svg" alt="" />

      <img
        onClick={() => setEnable(!enable())}
        className="relative w-[40px] h-[40px] cursor-pointer sm:hidden"
        src="/assets/shared/icon-hamburger.svg"
        alt=""
      />

      <div
        className={
          enable()
            ? " z-20 top-0  backdrop-blur-sm  fixed h-full sm:h-[96px] sm:mt-[20px] sm:flex-row transition-all w-[254px] sm:items-center  -right-[270px] flex sm:right-0 sm:w-1/2  flex-col  items-end"
            : "z-20 top-0 bg-gray-800 fixed bg-blend-multiply h-full transition-all w-[254px] right-0 flex flex-col  items-end"
        }
      >
        <img
          className="w-[40px] h-[40px] mr-5 mt-5 cursor-pointer sm:hidden"
          onClick={() => setEnable(!enable())}
          src="/assets/shared/icon-close.svg"
          alt=""
        />
        <ul className="sm:tracking-widest w-full pl-10 sm:pl-0  text-xl flex sm:justify-center flex-col sm:flex-row gap-3 sm:gap-[5rem] sm:h-full sm:items-center text-white">
          <li className={active==0?"sm:border-b-4 sm:h-full sm:flex sm:items-center":"sm:hover:border-b-4  sm:hover:border-gray-500 sm:h-full sm:flex sm:items-center"}>
            <a href="/">
              <h1>00 Home</h1>
            </a>
          </li>
          <li className={active==1?"sm:border-b-4 sm:h-full sm:flex sm:items-center":"sm:hover:border-b-4  sm:hover:border-gray-500 sm:h-full sm:flex sm:items-center"}>
            <a href="/destination">
              <h1>01 Destination</h1>
            </a>
          </li>
          <li className={active==2?"sm:border-b-4 sm:h-full sm:flex sm:items-center":"sm:hover:border-b-4  sm:hover:border-gray-500 sm:h-full sm:flex sm:items-center"}>
            <a href="/crew">
 
              <h1>02 Crew</h1>
            </a>
          </li >
          <li className={active==3?"sm:border-b-4 sm:h-full sm:flex sm:items-center":"sm:hover:border-b-4  sm:hover:border-gray-500 sm:h-full sm:flex sm:items-center"}>
            <a href="/technology">
     
              <h1>03 Technology</h1>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
