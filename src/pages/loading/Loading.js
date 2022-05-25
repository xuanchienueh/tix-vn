import React from "react";
import { useSelector } from "react-redux";

export default function Loading() {
  let { isLoading } = useSelector((state) => state.LoadingReducer);

  return isLoading ? (
    <div className="fixed inset-0 z-50 text-white bg-white">
      <div className="flex items-center justify-center w-screen h-screen">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
          alt="1"
          className="w-12"
        />
      </div>
    </div>
  ) : (
    ""
  );
}
