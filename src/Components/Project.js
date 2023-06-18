import React from "react";
import { Link } from "react-router-dom";

function Project({ title, image, description, path }) {
  const handleClick = () => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo(0, 0);
  };
  return (
    <Link to={path} onClick={handleClick}>
      <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300">
        <img src={image} alt="" loading="lazy" />
        <div className=" p-4">
          <h1 className=" font-semibold text-lg pt-1">{title}</h1>
          <p className="text-content pt-4 font-light">{description}</p>
        </div>
      </article>
    </Link>
  );
}

export default Project;
