import style from "./FavoriteMeeting.module.css";
import React from "react";
import FavoriteMeetingComp from "./FavoriteMeetingComp";
import { MeetingContext } from "../../../store/meeting-context";

const FavouriteMeeting = () => {
  const { f_meeting } = React.useContext(MeetingContext);

  return (
    <div className={style.main}>
      {f_meeting.map((item, idx) => {
        return <FavoriteMeetingComp key={idx} {...item} />;
      })}
    </div>
  );
};

export default FavouriteMeeting;
