"use client";

import { Members } from "./Members";
import { Hooks } from "./Hooks";
import styles from "@/app/style.module.css";

export default function Page() {
  return (
    <div>
      <h2>Page</h2>
      <Members />
      <Hooks />
    </div>
  );
}
