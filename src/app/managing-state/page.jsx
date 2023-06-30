"use client";
import { State } from "./State";
import { country as data } from "@/data/country";

export default function Page() {
  return (
    <div>
      <State country={data}></State>
    </div>
  );
}
