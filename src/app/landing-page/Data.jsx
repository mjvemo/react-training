"use client";
import { useState } from "react";

export const lisa = [
  {
    name: "Lalisa Manobal",
    age: 26,
    sons: ["Leo", "Loui", "Lucca", "Lilly", "Love"],
    from: "Thailand",
    group: "BlackPink",
  },
];

export function Toolbar({ likeImage, loveImage }) {
  return (
    <div>
      <Button onClick={likeImage}>Like</Button>
      <Button onClick={loveImage}>Love</Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button className="buttonLoveLike" onClick={onClick}>
      {children}
    </button>
  );
}
