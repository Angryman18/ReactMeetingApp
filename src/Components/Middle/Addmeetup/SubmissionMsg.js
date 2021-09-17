import React from "react";
import style from "./AddMeetup.module.css";

const SubmissionMsg = () => {
  return (
    <div className={style.main}>
      <div className={style.msg}>
          <h3>Success!</h3>
          <p>Your Form is Submitted Successfully</p>
      </div>
    </div>
   
  );
};

export default SubmissionMsg;
