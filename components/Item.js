import React from "react";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
function Item() {
  return (
    <div className="relative">
      <div className="absolute w-full h-24  " />

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            style={{
              height: "250px",
              width: "250px",
              marginTop: "80px",
            }}
            loading="lazy"
            src="https://www.aesop.com/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png"
            alt=""
          />
          <h2 className="font-bold">In Two Minds facial cleanser</h2>
          <p className="text-sm mb-4">
            For the specific needs of combination skin
          </p>
        </div>

        <div>
          <img
            style={{
              height: "250px",
              width: "250px",
              marginTop: "80px",
            }}
            loading="lazy"
            src="https://www.aesop.com/u1nb1km7t5q7/X8p8nJaqVBrDKAQReq7rw/59a53d0f37256e15ad05c9e83726ee5f/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Large_901x478px.png"
            alt=""
          />
          <h2 className="font-bold">Geranium Leaf Body cleanser</h2>
          <p className="text-sm mb-4">A gentle invigorating Gel cleanser</p>
        </div>

        <div>
          <img
            style={{
              height: "250px",
              width: "250px",
              marginTop: "80px",
            }}
            loading="lazy"
            src="https://images.ctfassets.net/u1nb1km7t5q7/3EfM6zrFfHbrUaVxQSoR7A/f40aa3b013d2b7a62645644891a33b38/Aesop_Skin_Exalted_Eye_Serum_15ml_Web_Medium_535x522px.png"
            alt=""
          />
          <h2 className="font-bold">Resurrection aromatic handwash</h2>
          <p className="text-sm mb-4">A gentle cleanser for hardworking-hands</p>
        </div>

        <div>
          <img
            style={{
              height: "250px",
              width: "250px",
              marginTop: "80px",
            }}
            loading="lazy"
            src="https://www.aesop.com/u1nb1km7t5q7/7rW6gSSdQaKEYUYCzvyUAO/bbe51282897aa259c0943a39f92fe996/Aesop_Skin_Sublime_Replenishing_Night_Masque_60mL_Web_Large_901x478px.png"
            alt=""
          />
          <h2 className="font-bold">Parsley seed facial cleansing oil</h2>
          <p className="text-sm mb-4">
            Particularly suited to drive sensitive skin
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default Item;
