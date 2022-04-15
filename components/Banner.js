import Image from "next/image";

function Banner() {
  return (
    <div className="relative  h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] ">
      <video
        autoPlay
        loop
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          objectFit: "cover",
          width: "100%",
          height: "98%",
        }}
      >
        <source
          src="https://www.aesop.com/u1nb1km7t5q7/5KhJ5MYhOwcf3aJxnKyMa2/6fa42814e6580b551b1e6fe7c0468e68/Aesop_Healthy_Skin_Eye_Serum_2022_Web_Homepage_Primary_Tablet_1536x1230px.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute top-1/3  text-center w-full">
        <p className=" text-white text-sm sm:text-lg">A feast for the eyes</p>
        <h2 className="text-white font-bold text-sm sm:text-lg ml-5 mt-2">
          Introducing Exalted Eye Serum
        </h2>
      </div>
      <div className="absolute top-2/4   text-center w-full">
        <button className="mt-2 p-2 sm:p-2 sm:font-normal md:font-bold text-purple-500 lg:font-bold bg-white rounded-full shadow-md lg:m-2 lg:p-3 hover:shadow-xl active:scale-90 transition duration-150">
          Discover Exalted Eye serum
        </button>
      </div>
    </div>
  );
}

export default Banner;
