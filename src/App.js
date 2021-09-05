import MainHeader from "./Components/Header/MainHeader";
import "./App.css";
import React from "react";
import ContextProvider from "./store/meeting-context";
import MeetingForm from "./Components/Middle/Addmeetup/MeetingForm";
import AllMeetup from "./Components/Middle/Allmeetup/AllMeetup";
import SubmissionMsg from "./Components/Middle/Addmeetup/SubmissionMsg";
import FavoriteMeeting from "./Components/Middle/Favouritemeetup/FavouriteMeeting";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <ContextProvider>
      <MainHeader />
      <Route exact path="/allmeetup">
        <AllMeetup />
      </Route>
      <Route exact path="/addmeetup">
        <MeetingForm />
      </Route>
      <Route path="/submittd">
        <SubmissionMsg />
      </Route>
      <Route path="/favouritemeeting"> 
        <FavoriteMeeting />
      </Route>
    </ContextProvider>
  );
}

export default App;
