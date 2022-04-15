import React from 'react'

function Main() {
  return (
    <div className="flex flex-col m-2 md:grid grid-cols-2 mb-20 mt-20 ">
      <div className="pl-4 pr-4">
        <img

          src="https://www.aesop.com/u1nb1km7t5q7/5p4kQ5J36JqP6pf14suXYn/fe1defbf3eb5029dde3de9512b8bbc95/Aesop_Rick_Owens_2022_Web_Homepage_Secondary_2_Mid_Desktop_2560x1440px.jpg"
          alt=""
        />
      </div>
      <div className="mr-6 ml-6 mt-6 md:mt-0 mx-auto space-y-4">
        <h3>Limited Release</h3>

        <h1 className="text-2xl font-bold">Stoic Aromatique Candle</h1>

        <p className=" w-96 ">
          The synergy between Aesop and Rick Owens’s steadfast aesthetic codes
          finds expression in a fragrant candle—an illuminating display of
          benevolent strength.
        </p>

        <button className="mt-2 p-2 sm:p-2 sm:font-normal md:font-bold text-purple-500 lg:font-bold bg-white rounded-full shadow-md lg:m-2 lg:p-3 hover:shadow-xl active:scale-90 transition duration-150">
          Discover Stoic Aromatic Candle
        </button>
      </div>
    </div>
  );
}

export default Main