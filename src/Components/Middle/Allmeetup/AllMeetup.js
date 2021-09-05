import style from "./AllMeetup.module.css";
import React from "react";
import AllMeetupComp from "./AllMeetupComp";
import { MeetingContext } from "../../../store/meeting-context";

const AllMeetup = () => {
  const { a_meeting } = React.useContext(MeetingContext);
  return (
    <div className={style.main}>
      {a_meeting.map((item) => {
        return <AllMeetupComp key={item.id} {...item} />;
      })}
    </div>
  );
};

export default AllMeetup;
