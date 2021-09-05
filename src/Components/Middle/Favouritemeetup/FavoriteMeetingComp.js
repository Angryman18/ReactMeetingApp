import React from "react";
import style from "./FavoriteMeeting.module.css";

const FavoriteMeetingComp = (props) => {

    const {id, title, venue, detail} = props

  return (
    <div className={style.content}>
      <div className={style.content__head}>
        <h2>{title}</h2>
        <div className={style.inner}>
          <div id={style.child}>
            <h4>Location: {venue}</h4>
            <h4>Time: 16:50 Hours</h4>
          </div><hr></hr>
          <div id={style.child}>
            <h4>Detail: {detail}</h4>
            <h4>Member: 20 </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteMeetingComp;
