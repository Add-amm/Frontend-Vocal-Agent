import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Appointments from './pages/Appointments'
import Settings from './pages/Settings'
import BookAppointment from './pages/BookAppointment'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<DashboardLayout />}>
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/book" element={<BookAppointment />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
