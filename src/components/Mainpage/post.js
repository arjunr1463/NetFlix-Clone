import React, { useEffect, useState } from "react";
import "./post.css";
import axios from "./axios";
import Youtube from "react-youtube";
import { ApiKey, imageUrl } from "./constant";

function Post(props) {
  const [post, setPost] = useState([]);
  const [url, setUrl] = useState();

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setPost(response.data.results);
    });
  });
  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handle = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${ApiKey}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrl(response.data.results[0]);
        } else {
          console.log("Erorrrrrr.........");
        }
      });
  };
  return (
    <div className="mx-10 h-100 w-[100vw]">
      <div className="my-3 mt-">
        <h
          className={
            props.isSmall ? "smallhead" : "text-white text-[30px] font-bold"
          }
        >
          {props.title}
        </h>
      </div>
      <div
        className={
          props.isSmall
            ? "flex items-center gap-5 over overflow-x-scroll overflow-y-hidden scrollbar post h-[30vh] w-[100vw] cursor-pointer"
            : "flex items-center gap-8 over overflow-x-scroll overflow-y-hidden scrollbar post h-[40vh] w-[100vw] cursor-pointer"
        }
      >
        {post.map((obj) => {
          return (
            <img
              onClick={() => handle(obj.id)}
              src={`${imageUrl + obj.backdrop_path}`}
              alt=""
              className={
                props.isSmall
                  ? "w-[40vw] h-40 hover:scale-110  duration-200"
                  : "w-[60vw] h-60 hover:scale-110 duration-200"
              }
            />
          );
        })}
      </div>

      {url && <Youtube opts={opts} videoId={url.key} />}
    </div>
  );
}

export default Post;
