import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalVideo from "react-modal-video";
import "./PageModal.scss";
import { OPEN_MODAL_YOUTUBE } from "../../redux/actions/CarouselAction/ActionName";

export default function PageModal() {
  const [isOpen, setOpen] = useState(false);
  let KeywordLinkYoutube = useSelector(
    (state) => state.CarouselReducer.openTrailer.link
  );
  const dispatch = useDispatch();
  const buttonOpenTrailer = useRef();
  useEffect(() => {
    dispatch({
      type: OPEN_MODAL_YOUTUBE,
      payload: { link: "", domButtonOpenTrailer: buttonOpenTrailer.current },
    });
  }, []);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={`${KeywordLinkYoutube}`}
        onClose={() => setOpen(false)}
      />

      <button
        className="btn-primary hidden"
        ref={buttonOpenTrailer}
        onClick={() => setOpen(true)}
      >
        VIEW DEMO
      </button>
    </React.Fragment>
  );
}
