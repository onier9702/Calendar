
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'

export const AppRouter = () => {
  return (
    <div>
        <Routes >
            <Route path="/" element={ <CalendarScreen /> } />
            <Route path="/login" element={ <LoginScreen /> } />
        </Routes>
    </div>
  )
}
