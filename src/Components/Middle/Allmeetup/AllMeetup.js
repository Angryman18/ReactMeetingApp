import style from "./AllMeetup.module.css";
import React from "react";
import AllMeetupComp from "./AllMeetupComp";
import { MeetingContext } from "../../../store/meeting-context";

const AllMeetup = () => {
  const { a_meeting } = React.useContext(MeetingContext);
  return (
    <div className={style.main}>
      <AllMeetupComp
        key="e1"
        title="Business Meeting"
        venue="Dubai"
        detail="Price hike of raw materials"
      />
      {a_meeting.map((item) => {
        return <AllMeetupComp key={item.id} {...item} />;
      })}
      
    </div>
  );
};

export default AllMeetup;
