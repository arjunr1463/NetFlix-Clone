import React, { useEffect, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { CgPlayListAdd } from "react-icons/cg";
import axios from "./axios";
import { ApiKey } from "./constant";
import { imageUrl } from "./constant";

import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`/trending/all/week?api_key=${ApiKey}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[5]);
      });
  }, []);
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${
            movie ? imageUrl + movie.backdrop_path : ""
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "480px",
        }}
      >
        <div className="gradient">
          <div className="flex flex-col justify-start  text-white  h-[500px] mx-10  gap-10 w-[100vw] pt-20">
            <div className="w-120 h-20 ">
              <h className="text-[60px] font-bold">
                {movie ? movie.title : ""}
              </h>
            </div>
            <div className="flex gap-3 w-[30vw] -mt-7 ">
              <div className="bg-[red] rounded-[1rem] w-[80px] h-[30px] flex justify-center items-center hover:bg-red-600 duration-150">
                <button className="flex items-center justify-center font-bold text-[18px]">
                  <BsFillPlayFill />
                  PLAY
                </button>
              </div>
              <div className="bg-[#eaeded] rounded-[1rem] w-[100px] h-[30px]  flex justify-center items-center hover:bg-white/50 duration-150">
                <button className="flex items-center justify-center font-bold text-[18px] text-black">
                  <CgPlayListAdd />
                  MY LIST
                </button>
              </div>
            </div>
            <div className="h-[100vh] w-[50vw]">
              <p className="text-[18px] max-w-md line-height:1.3 font-bold ">
                {movie ? movie.overview : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
