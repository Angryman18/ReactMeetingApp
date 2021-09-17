import React from "react";
import style from "./AllMeetup.module.css";
import Button from "../../UI/Button/Button";
import { MeetingContext } from "../../../store/meeting-context";
import { useContext } from "react";

const AllMeetupComp = (props) => {
  const { id, title, venue, detail } = props;
  const [buttonText, setButtonText] = React.useState("✔ Add to Favourite");

  const { favmeeting, f_meeting, removefav } = useContext(MeetingContext);

  const addtoFav = (e) => {
    e.preventDefault();

    const obj = {
      id,
      title,
      venue,
      detail,
    };
    if (buttonText === "✔ Add to Favourite") {
      favmeeting(obj);
    } else {
      removefav(id);
    }
  };

  React.useEffect(() => {
    const ifExist = f_meeting.find((item) => {
      return item.id === id;
    });
    if (ifExist) {
      setButtonText("✖ Remove from Favourite");
    } else {
      setButtonText("✔ Add to Favourite");
    }
  }, [f_meeting, id]);

  return (
    <div className={style.content}>
      <h2>{title}</h2>
      <div className={style.inner}>
          <div id={style.child}>
            <h4>Location: {venue}</h4>
            <h4>Time: 16:50 Hours</h4>
          </div><hr></hr>
          <div id={style.child}>
            <h4>Detail: {detail}</h4>
            <h4>Member: 20 Nos</h4>
          </div>
        </div>
      <div className={style.center}>
        <Button
          buttonProps={{ onClick: addtoFav }}
          buttonText={buttonText}
          buttonStyle={
            buttonText !== "✔ Add to Favourite" ? style.addtoFav : style.added
          }
        />
      </div>
    </div>
  );
};

export default AllMeetupComp;
