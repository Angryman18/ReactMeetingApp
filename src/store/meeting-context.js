import React from "react";

export const MeetingContext = React.createContext();

const defaultState = {
  a_meeting: [], //all meeting
  f_meeting: [], // favourite meeting
};

const Reducer = (state, actions) => {
  switch (actions.type) {
    case "add":
      const meeting = [...state.a_meeting, actions.item]
      return {...state, a_meeting: meeting.reverse()}
    case "favmeeting":
      const getMeeting = actions.meeting;
      const ifMeetingExist = state.f_meeting.find(item => {
        return item.id === getMeeting.id
      })

      if (!ifMeetingExist) {
        const newMeeting = [...state.f_meeting, actions.meeting]
        return {...state, f_meeting: newMeeting.reverse()}
      }
      return state
    case "removefav":
      const newFavMeeting = state.f_meeting.filter(item => {
        return item.id !== actions.id
      })
      return {...state, f_meeting: newFavMeeting}
    default:
      return state;

  }
};

const ContextProvider = (props) => {
  const [state, dispatcher] = React.useReducer(Reducer, defaultState);

const addmeeting = (meeting) => {
  dispatcher({type: "add", item: meeting})
}

const favmeeting = (obj) => {
  dispatcher({type: "favmeeting", meeting: obj})
}

const removefav = (id) => {
  dispatcher({type: "removefav", id: id})
}

  const defaultValue = {
    a_meeting: [...state.a_meeting], //all meeting
    f_meeting: [...state.f_meeting],
    addmeeting: addmeeting, // adding all meeting to a_meeting
    favmeeting: favmeeting,
    removefav: removefav
  };

  return (
    <MeetingContext.Provider value={defaultValue}>
      {props.children}
    </MeetingContext.Provider>
  );
};

export default ContextProvider;
