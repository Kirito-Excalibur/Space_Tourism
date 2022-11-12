import { createSignal } from "solid-js";

function Navbar() {
  const [enable, setEnable] = createSignal(true);

  return (
    <div className="relative flex justify-between w-[90%] m-5">
      <img
        className="w-[40px] h-[40px]"
        src="/assets/shared/logo.svg"
        alt=""
      />

      <img
        onClick={() => setEnable(!enable())}
        className="relative w-[40px] h-[40px] cursor-pointer"
        src="/assets/shared/icon-hamburger.svg"
        alt=""
      />

      <div
        className={
          enable()
            ? " z-20 top-0 bg-gray-800 bg-blend-multiply  fixed h-full transition-all w-[254px] -right-[270px] flex flex-col  items-end"
            : "z-20 top-0 bg-gray-800 fixed bg-blend-multiply h-full transition-all w-[254px] right-0 flex flex-col  items-end"
        }
      >
        <img
          className="w-[40px] h-[40px] mr-5 mt-5 cursor-pointer"
          onClick={() => setEnable(!enable())}
          src="/assets/shared/icon-close.svg"
          alt=""
        />
        <ul className=" w-full pl-10 text-xl flex flex-col gap-3 text-white">
          <li>
            <a href="/">
              <h1>00 Home</h1>
            </a>
          </li>
          <li>
            <a href="/destination">
              <h1>01 Destination</h1>
            </a>
          </li>
          <li>
            <a href="/new">  <h1>02 Crew</h1></a>
          
          </li>
          <li>
            <h1>03 Technology</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
