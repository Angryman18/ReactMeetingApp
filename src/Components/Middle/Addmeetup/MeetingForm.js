import React from "react";
import Input from "../../UI/Input";
import style from "./AddMeetup.module.css";
import Button from "../../UI/Button/Button";
import { MeetingContext } from "../../../store/meeting-context";

const MeetingForm = () => {
  const [submit, setSubmit] = React.useState({
    submit: false,
    error: false,
    msg: null
  });

  const meetupName = React.useRef(null);
  const meetupVenue = React.useRef(null);
  const meetupDetail = React.useRef(null);

  const {addmeeting} = React.useContext(MeetingContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const meeting = meetupName.current.value;
    const venue = meetupName.current.value;
    const detail = meetupName.current.value;

    if (
      meeting.trim().length > 0 &&
      venue.trim().length > 0 &&
      detail.trim().length > 0
    ) {
      const obj = {
        id: Math.random(),
        title: meeting,
        venue: venue,
        detail: detail,
      };
      addmeeting(obj);
      meetupName.current.value = "";
      meetupVenue.current.value = "";
      meetupDetail.current.value = "";
      setSubmit(prestate => {
        return {error: false, submit: true, msg: "Meeting has been Added!"}
      });
    } else {
      setSubmit(prestate => {
        return {submit: false, error: true, msg: "Invalid Form Input Detected"}
      });
    }
  };
  

  return (
    <div className={style.main}>
      <form onSubmit={submitHandler} className={style.contentWrapper}>
        {submit.submit && <p className={style.msg}>{submit.msg}</p>}
        {submit.error && <p className={style.errorMsg}>{submit.msg}</p>}
        <div className={style.content}>
          <label>Enter Meetup Name: </label>
          <Input
            ref={meetupName}
            inputStyle={style.inputStyle}
            inputClass={{
              type: "text",
              placeholder: "Enter Meeting Title",
            }}
          />
        </div>

        <div className={style.content}>
          <label>Meetup Venue: </label>
          <Input
            ref={meetupVenue}
            inputStyle={style.inputStyle}
            inputClass={{
              type: "text",
              placeholder: "Enter Meeting Venue",
            }}
          />
        </div>
        <div className={style.content}>
          <label>Enter Meeting Detail: </label>
          <Input
            ref={meetupDetail}
            inputStyle={style.inputStyle}
            inputClass={{
              type: "text",
              placeholder: "Enter Meeting Detail",
            }}
          />
        </div>
        <div className={style.buttonStyle__main}>
          <Button buttonText="Add Meeting" buttonStyle={style.buttonStyle} />
        </div>
      </form>
    </div>
  );
};

export default React.memo(MeetingForm);
