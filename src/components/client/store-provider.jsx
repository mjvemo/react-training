"use client";

import store from "@/stores";
import { Provider } from "react-redux";

export default function StoreProvider({ serverState, children }) {
  return (
    <Provider
      store={store}
      serverState={serverState}
    >
      {children}
    </Provider>
  );
}
