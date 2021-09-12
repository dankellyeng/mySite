import React, { useState, FunctionComponent } from "react";
// @ts-ignore
import styled from "styled-components";
import moment from "moment";

import { TodoList } from "../components/TodoList";
import { AddTodoForm } from "../components/AddTodoForm";
// @ts-ignore

import { Button, Container } from "react-bootstrap";
import { LoginDemo } from "../components/LoginDemo";
import "../App.css";
import { People } from "../components/People";
import { PeopleInput } from "../components/PeopleInput";
// import Calendar from '../components/Calendar';

import { Calendar, View, DateLocalizer, Event } from "react-big-calendar";

import { momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("ko", {
  week: {
    dow: 1,
  },
});

const localizer = momentLocalizer(moment);

const allViews: View[] = ["agenda", "day", "week", "month"];

interface Props {
  localizer: DateLocalizer;
}

interface EventProps {
  event: CalendarEvent;
}

// const allViews: View[] = ['agenda', 'day', 'week', 'month'];

class CalendarEvent {
  title: string;
  allDay: boolean;
  start: Date;
  end: Date;
  desc: string;
  resourceId?: string;
  tooltip?: string;
  complete?: boolean;

  constructor(
    _title: string,
    _start: Date,
    _endDate: Date,
    _allDay?: boolean,
    _desc?: string,
    _resourceId?: string,
    _complete?: boolean
  ) {
    this.title = _title;
    this.allDay = _allDay || false;
    this.start = _start;
    this.end = _endDate;
    this.desc = _desc || "";
    this.resourceId = _resourceId;
    this.complete = _complete || false;
  }
}

let now = moment().toDate();
let later = moment().add(1, "hours").toDate();

let now1 = moment().add(2, "hours").toDate();
let later1 = moment().add(3, "hours").toDate();

let val = "Mon Sep 06 2021 09:00:00 GMT+1000";
console.log(moment(val).toDate());

// const d = new Date(2021, 8, 6, 9);
// const e = new Date(2021, 8, 6, 10);

const eventsArray: CalendarEvent[] = [
  {
    start: new Date(2021, 8, 6, 9),
    end: new Date(2021, 8, 6, 10),
    title: "Rest",
    allDay: false,
    desc: "",
    complete: false,
  },
  {
    start: new Date(2021, 8, 7, 9),
    end: new Date(2021, 8, 7, 10),
    title: "2km run",
    allDay: false,
    desc: "",
    complete: false,
  },
  {
    start: new Date(2021, 8, 7, 9),
    end: new Date(2021, 8, 7, 10),
    title: "1km walk",
    allDay: false,
    desc: "",
    complete: false,
  },

  {
    start: new Date(2021, 8, 7, 9),
    end: new Date(2021, 8, 7, 10),
    title: "2 push ups",
    allDay: false,
    desc: "",
    complete: false,
  },
  {
    start: new Date(2021, 8, 8, 9),
    end: new Date(2021, 8, 8, 10),
    title: "30 mins movement",
    allDay: false,
    desc: "",
    complete: false,
  },
  {
    start: new Date(2021, 8, 8, 9),
    end: new Date(2021, 8, 8, 10),
    title: "2 sit ups",
    allDay: false,
    desc: "",
    complete: false,
  },

  {
    start: new Date(2021, 8, 9, 9),
    end: new Date(2021, 8, 9, 10),
    title: "Rest",
    allDay: false,
    desc: "",
    complete: false,
  },

  {
    start: new Date(2021, 8, 10, 9),
    end: new Date(2021, 8, 10, 10),
    title: "1km run",
    allDay: false,
    desc: "",
    complete: false,
  },
  {
    start: new Date(2021, 8, 10, 10),
    end: new Date(2021, 8, 10, 11),
    title: "2km walk",
    allDay: false,
    desc: "",
    complete: false,
  },
  {
    start: new Date(2021, 8, 10, 11),
    end: new Date(2021, 8, 10, 12),
    title: "2 push ups",
    allDay: false,
    desc: "",
    complete: false,
  },
  {
    start: new Date(2021, 8, 11, 9),
    end: new Date(2021, 8, 11, 10),
    title: "30 mins movement",
    allDay: false,
    desc: "",
    complete: false,
  },
  {
    start: new Date(2021, 8, 11, 9),
    end: new Date(2021, 8, 11, 10),
    title: "2 sit ups",
    allDay: false,
    desc: "",
    complete: false,
  },
];

const markEventDone = (event: CalendarEvent) => {
  event.complete = true;
  console.log({ eventsArray });
};

function CustomEvent({ event }: EventProps) {
  console.log({ event });
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Button
          className="globalButtonTiny"
          style={{ backgroundColor: event.complete ? "green" : "#3fa2dd" }}
          onClick={() => markEventDone(event)}
        >
          {event.title}
        </Button>
      </div>
    </div>
  );
}

export const Routine = () => {
  const [events, setEvents] = useState(eventsArray);
  const [modal, setShowModal] = useState(false);

  const handleSelect = () => {
    setShowModal(true);

    let newEvent = {} as CalendarEvent;
    newEvent.start = moment().toDate();
    newEvent.end = moment().toDate();

    setEvents([...eventsArray, newEvent]);
  };

  console.log(events);

  return (
    <div>
      <h1 className="title">Routine</h1>

      <Container style={styles.centrePage}>
        <Calendar
          selectable
          localizer={localizer}
          events={events}
          defaultView="month"
          views={allViews}
          defaultDate={new Date()}
          onSelectEvent={(event) => markEventDone(event)}
          onDoubleClickEvent={(event) => markEventDone(event)}
          onSelectSlot={() => handleSelect()}
          style={{
            height: "95%",
            width: "100%",
            backgroundColor: "white",
          }}
          components={{ eventWrapper: CustomEvent }}
          startAccessor="start"
          endAccessor="end"
          titleAccessor="title"
        />
      </Container>
    </div>
  );
};

const styles = {
  centrePage: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    height: "100vh",
  },
  button: {
    // height: ,
    padding: 2,
  },
};
