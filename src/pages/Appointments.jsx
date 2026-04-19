const upcomingAppointments = [
  {
    id: 1,
    month: 'Oct',
    day: '24',
    specialty: 'Physical Therapy',
    doctor: 'Dr. Elena Vance',
    title: 'Lower Back Re-assessment',
    time: '09:30 AM — 10:30 AM',
    location: 'Main Wing, Suite 402',
    status: 'Confirmed',
    large: true,
  }
]

const pastAppointments = [
  {
    id: 1,
    icon: 'lab_profile',
    service: 'Blood Analysis',
    dept: 'Pathology Dept • Lab 2',
    date: 'Oct 12, 2023',
    time: '08:00 AM',
    status: 'Completed',
    statusColor: 'text-secondary',
    dotColor: 'bg-secondary',
    action: 'Download Results',
  },
  {
    id: 2,
    icon: 'stethoscope',
    service: 'Dental Hygiene',
    dept: 'Dr. Sarah Laine',
    date: 'Sep 28, 2023',
    time: '02:15 PM',
    status: 'Completed',
    statusColor: 'text-secondary',
    dotColor: 'bg-secondary',
    action: 'View Notes',
  },
  {
    id: 3,
    icon: 'psychology',
    service: 'Mental Health Session',
    dept: 'Dr. Aris Vance',
    date: 'Sep 05, 2023',
    time: '11:00 AM',
    status: 'No Show',
    statusColor: 'text-on-surface-variant',
    dotColor: 'bg-outline-variant',
    action: 'Reschedule',
  },
]

export default function Appointments() {
  return (
    <div className="px-10 py-8 max-w-7xl w-full mx-auto space-y-12">
      {/* Page Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-extrabold tracking-tight text-on-background font-headline">Appointment History</h2>
          <p className="text-on-surface-variant">Manage your upcoming visits and review past consultations.</p>
        </div>
      </section>

      {/* Upcoming Consultations */}
      {upcomingAppointments.length > 0 && (
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="w-12 h-[2px] bg-secondary-container" />
          <h3 className="text-sm font-bold font-headline text-on-background uppercase tracking-wider">Upcoming Consultations</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {upcomingAppointments.map((appt, i) => (
            <div
              key={appt.id}
              className={`${i === 0 ? 'lg:col-span-2' : 'lg:col-span-1'} bg-surface-container-low rounded-xl p-8 relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 p-6">
                <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${appt.status === 'Confirmed' ? 'bg-secondary-container text-on-secondary-fixed' : 'bg-tertiary-container text-on-tertiary-container'}`}>
                  {appt.status}
                </span>
              </div>
              <div className="flex flex-col h-full justify-between gap-8">
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-xl bg-white flex flex-col items-center justify-center shadow-sm flex-shrink-0">
                    <span className="text-xs font-bold text-on-surface-variant uppercase">{appt.month}</span>
                    <span className="text-2xl font-bold text-primary">{appt.day}</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-on-surface-variant text-sm font-medium">{appt.specialty} • {appt.doctor}</p>
                    <h4 className="text-xl font-bold font-headline text-on-surface">{appt.title}</h4>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-on-surface-variant">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-lg">schedule</span>
                        <span className="text-sm">{appt.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-lg">location_on</span>
                        <span className="text-sm">{appt.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 border border-outline-variant/20 text-on-surface-variant py-3 rounded-xl font-bold text-sm hover:bg-error-container hover:text-on-error-container transition-all active:scale-95">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      )}

      {/* Past Appointments */}
      <section className="space-y-6 pb-8">
        <div className="flex items-center gap-4">
          <span className="w-12 h-[2px] bg-secondary-container" />
          <h3 className="text-sm font-bold font-headline text-on-background uppercase tracking-wider">Past Appointments</h3>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-12 px-8 py-4 bg-surface-container-low/50 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
            <div className="col-span-4">Service &amp; Provider</div>
            <div className="col-span-3">Date &amp; Time</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-3 text-right">Actions</div>
          </div>

          {pastAppointments.map((appt, idx) => (
            <div
              key={appt.id}
              className={`grid grid-cols-12 px-8 py-6 items-center hover:bg-surface-container-low/30 transition-colors ${idx < pastAppointments.length - 1 ? 'border-b border-surface-container-low' : ''}`}
            >
              <div className="col-span-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">{appt.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">{appt.service}</p>
                  <p className="text-xs text-on-surface-variant">{appt.dept}</p>
                </div>
              </div>
              <div className="col-span-3">
                <p className="text-sm font-medium text-on-surface">{appt.date}</p>
                <p className="text-xs text-on-surface-variant">{appt.time}</p>
              </div>
              <div className="col-span-2">
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${appt.statusColor}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${appt.dotColor}`} />
                  {appt.status}
                </span>
              </div>
              <div className="col-span-3 flex justify-end gap-2">
                <button className="px-4 py-2 rounded-lg text-xs font-bold text-primary hover:bg-surface-container-highest transition-all">
                  {appt.action}
                </button>
                <button className="px-3 py-2 rounded-lg text-xs font-bold text-on-surface-variant hover:bg-surface-container-highest transition-all">
                  <span className="material-symbols-outlined text-lg">more_vert</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
