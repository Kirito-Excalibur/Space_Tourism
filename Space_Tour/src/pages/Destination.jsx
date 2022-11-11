import { useParams } from "@solidjs/router";
import Navbar from "../Navbar";

function Destination() {
  const params = useParams();
  return (
    <div className=" w-[413px]  bg-cover mx-auto h-[720px] flex flex-col items-center bg-[url(../public/assets/destination/background-destination-mobile.jpg)]">
      <Navbar />
      <h1 className="flex tracking-[2.8px] gap-3">
        <span className="text-gray-600">01</span> <p>PICK YOUR DESTINATION</p>
      </h1>

      <img
        src="src/assets/destination/image-moon.png"
        className="w-[170px] mt-10"
        alt=""
      />

      <h1 className="text-white"> {params.name}</h1>
    </div>
  );
}

export default Destination;
