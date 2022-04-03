import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_action } from "../redux/action/action";

export default function Test_hook() {
  let stateDefault = useSelector((state) => state.FBreducer);
  let comments = useSelector((state) => state.FBreducer.comments);
  let id = useSelector((state) => state.FBreducer.id);
  // console.log(stateDefault);
  let dispatch = useDispatch();
  const [userComment, setUserComment] = useState({
    name: "",
    content: "",
    avatar: "",
  });
  let handleChange = (e) => {
    let { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    setUserComment({
      ...userComment,
      [name]: value,
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let useComment = {
      ...userComment,
      avatar: `https://i.pravatar.cc/50?u=${userComment.name}`,
    };

    dispatch(add_action(useComment));
  };

  return (
    <div className="container">
      <h3>FB app</h3>
      <div className="card text-left">
        <div className="card-header">
          {comments.map((comment, index) => (
            <div className="row" key={index}>
              <div className="col-3">
                <img src={comment.avatar} alt="1" />
              </div>
              <div className="col-9">
                <h6 className="text-danger">{comment.name}</h6>
                <p>{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
        <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <div className="card-title">Name</div>
            <input
              name="name"
              className="form-control"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <div className="card-title">Content</div>
            <input
              name="content"
              className="form-control"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mt-4">
              gui
            </button>
          </div>
        </form>
      </div>

      <div className="hinhvuong">item</div>
    </div>
  );
}
