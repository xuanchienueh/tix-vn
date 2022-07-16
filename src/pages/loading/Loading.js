import React from "react";
import { useSelector } from "react-redux";

export default function Loading() {
  let { isLoading } = useSelector((state) => state.LoadingReducer);

  return isLoading ? (
    <div className="fixed inset-0 z-50 text-white bg-white">
      <div className="flex items-center justify-center w-screen h-screen">
        <div>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-border text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-border text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-border text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
