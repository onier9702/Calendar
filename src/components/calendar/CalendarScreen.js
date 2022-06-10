
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';



import { CalendarEvent } from './CalendarEvent';
import { Navbar } from '../ui/Navbar';
import { CalendarModal } from './CalendarModal';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';

export const CalendarScreen = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month' );



  const localizer = momentLocalizer(moment);

  const events = [{
    title: "Birthady of Messi",
    start: moment().toDate(),
    end: moment().add( 2,'hours' ).toDate(),
    bgcolor: '#fafafa',
    notes: 'Buy a house',
    user: {
      uid: '123',
      name: 'Onier',
    }

  }];

  const eventStyleGetter = (event, start, end, isSelected) => {

    const style = {

      backgroundColor: 'green',
      color: 'black',

    };
    return style;
  };

  const dispatch = useDispatch();

  const onDoubleClick = (e) => {

    dispatch( openModal() );
  };

  const onSelectEvent = (e) => {
    // e.preventDefault();
    dispatch( eventSetActive(e) );
    dispatch( openModal() );
    
  };

  const onViewChange = (e) => {
    localStorage.setItem('lastView', e);
    setLastView(e);

  };

  return (
    <div>
        <Navbar />

        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelectEvent}
          onView={onViewChange}
          view={lastView}
          eventPropGetter={eventStyleGetter}
          components={ {
            event: CalendarEvent,
          } }
        />

        <AddNewFab />
        <CalendarModal />

    </div>
  )
}