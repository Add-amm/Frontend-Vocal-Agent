import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function DashboardLayout() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex overflow-hidden">
      <Sidebar />
      <main className="flex-1 ml-72 flex flex-col h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
