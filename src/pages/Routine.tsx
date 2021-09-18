import React, { useState, useEffect } from "react";
import moment from "moment";
import { API } from "aws-amplify";
import DatePicker from "react-datepicker";

import { Button, Container, Modal } from "react-bootstrap";
import "../App.css";

import { Calendar, View, DateLocalizer, Event } from "react-big-calendar";

import { momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { listEvents } from "../graphql/queries";
import {
  createEvent as createEventMutation,
  deleteEvent as deleteEventMutation,
} from "../graphql/mutations";

moment.locale("ko", {
  week: {
    dow: 1,
  },
});

const localizer = momentLocalizer(moment);

const allViews: View[] = ["agenda", "day", "week", "month"];

const initialFormState = {
  title: "",
  allDay: false,
  // start: moment().toDate(),
  // end: moment().toDate(),
  desc: " ",
  complete: false,
};

interface Props {
  localizer: DateLocalizer;
}

interface EventProps {
  event: CalendarEvent;
}

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

const markEventDone = (event: CalendarEvent) => {
  event.complete = true;
};

function CustomEvent({ event }: EventProps) {
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
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [modal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const apiData: any = await API.graphql({ query: listEvents });
    setEvents(apiData.data.listEvents.items);
  }

  async function handleSelect({ start, end }: any) {
    setShowModal(true);

    // let newEvent = {} as CalendarEvent;
    // newEvent.start = moment().toDate();
    // newEvent.end = moment().toDate();

    // let formDataTemp = { start: start, end: end, ...formData };

    // setFormData(formDataTemp);

    setStartDate(start);
    setEndDate(end);
    // setEvents([...eventsArray, newEvent]);
    // return createEvent(start, end);
  }

  const handleClose = () => {
    setShowModal(false);
  };

  async function createEvent() {
    if (!formData.title || !formData.desc) return;
    let formDataTemp = { start: startDate, end: endDate, ...formData };
    console.log({ formDataTemp });
    await API.graphql({
      query: createEventMutation,
      variables: { input: formDataTemp },
    });
    setEvents([...events, formDataTemp]);
    setFormData(initialFormState);
    setShowModal(false);
  }

  async function deleteEvent({ title }: any) {
    const newEventsArray = events.filter((event) => event.title !== title);
    setEvents(newEventsArray);
    await API.graphql({
      query: deleteEventMutation,
      variables: { input: { title } },
    });
  }

  // function handleEndChange(end: any) {
  //   setEndDate(end);
  //   setFormData({ ...formData, end: end });
  // }

  // function handleStartChange(start: any) {
  //   setStartDate(start);
  //   setFormData({ ...formData, start: start });
  // }

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
          onDoubleClickEvent={(event) => deleteEvent(event)}
          onSelectSlot={handleSelect}
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
        {/* <AddEventModal /> */}
        <Modal show={modal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Event title"
                value={formData.title}
              />
              {/* <input
              type="date"
              onChange={(e) =>
                setFormData({ ...formData, start: moment(e.target.value) })
              }
              placeholder="Event Start"
              value={formData.start}
            />
            <input
              type="date"
              onChange={(e) =>
                setFormData({ ...formData, end: moment(e.target.value) })
              }
              placeholder="Event End"
              value={formData.end}
            /> */}
              {/* <DatePicker
              name="start"
              selected={startDate}
              onChange={handleStartChange}
            />
            <DatePicker
              name="end"
              selected={endDate}
              onChange={handleEndChange}
            /> */}

              {/* <input
              onChange={(e) =>
                setFormData({ ...formData, desc: e.target.value })
              }
              placeholder="Event description"
              value={formData.desc}
            /> */}

              {/* <select id="repeat" name="Repeat Event">
                <option value="Never">Never</option>
                <option value="Weekly">Weekly</option>
                <option value="Fortnightly">Fortnightly</option>
              </select> */}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="secondary" onClick={createEvent}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
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
