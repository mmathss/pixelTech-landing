import { useEffect, useState } from 'react'
import { CalendarDays, Clock, Check } from 'lucide-react'
import {
  bookingServices,
  localDate,
  reserveSlot,
  slots,
  tomorrow,
} from './model'
import useDemoState from './useDemoState'
import { trackEvent } from '../../utils/analytics'
const validate = (data) =>
  Array.isArray(data) &&
  data.every(
    (b) =>
      typeof b.id === 'string' &&
      /^\d{4}-\d{2}-\d{2}$/.test(b.date) &&
      slots.includes(b.time) &&
      bookingServices.includes(b.service),
  )
export default function BookingDemo() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])
  const [bookings, update, reset] = useDemoState('reservas', [], validate)
  const [date, setDate] = useState(tomorrow)
  const [time, setTime] = useState('')
  const [service, setService] = useState(bookingServices[0])
  const [message, setMessage] = useState(null)
  const daily = bookings
    .filter((item) => item.date === date)
    .sort((a, b) => a.time.localeCompare(b.time))
  const submit = (event) => {
    event.preventDefault()
    try {
      update(
        reserveSlot(bookings, { id: crypto.randomUUID(), date, time, service }),
      )
      setMessage({
        ok: true,
        text: `Reserva confirmada para el ${date} a las ${time}.`,
      })
      setTime('')
      trackEvent('demo_action', {
        project: 'reservas',
        action: 'booking_created',
      })
    } catch (error) {
      setMessage({ ok: false, text: error.message })
    }
  }
  return (
    <div className="demo-app" data-demo="reservas">
      <div className="demo-app-header">
        <div>
          <span className="demo-app-eyebrow">Agenda / Reservas</span>
          <h2>Un espacio para cada cita.</h2>
          <p>Explora el flujo con una persona ficticia: Cliente demo.</p>
        </div>
        <button
          className="demo-reset"
          onClick={() => {
            reset()
            setMessage(null)
            setTime('')
          }}
        >
          Restablecer demo
        </button>
      </div>
      <div className="demo-booking-layout">
        <form className="demo-panel demo-form" onSubmit={submit}>
          <h3>
            <CalendarDays size={19} />
            Nueva reserva
          </h3>
          <label>
            Servicio
            <select
              value={service}
              onChange={(event) => setService(event.target.value)}
            >
              {bookingServices.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label>
            Fecha
            <input
              type="date"
              value={date}
              min={localDate()}
              max="2099-12-31"
              required
              onChange={(event) => {
                setDate(event.target.value)
                setTime('')
                setMessage(null)
              }}
            />
          </label>
          <fieldset>
            <legend>Horario disponible · Sesiones de 1 hora</legend>
            <div className="demo-slots">
              {slots.map((slot) => {
                const unavailable =
                  bookings.some((b) => b.date === date && b.time === slot) ||
                  new Date(`${date}T${slot}:00`) <= now
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={unavailable || !date}
                    aria-pressed={time === slot}
                    aria-label={`${slot}${unavailable ? ', no disponible' : ''}`}
                    onClick={() => setTime(slot)}
                  >
                    {slot}
                    {time === slot && <Check size={13} />}
                  </button>
                )
              })}
            </div>
          </fieldset>
          <button
            className="demo-primary"
            type="submit"
            disabled={!time || !date}
          >
            Confirmar reserva
          </button>
          {message && (
            <p
              role={message.ok ? 'status' : 'alert'}
              className={message.ok ? 'demo-success' : 'demo-error'}
            >
              {message.text}
            </p>
          )}
        </form>
        <div className="demo-panel demo-agenda">
          <h3>
            <Clock size={19} />
            Agenda del día
          </h3>
          <p>
            {date
              ? new Date(`${date}T12:00:00`).toLocaleDateString('es-PE', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                })
              : 'Selecciona una fecha'}
          </p>
          {daily.length ? (
            <ul>
              {daily.map((item) => (
                <li key={item.id}>
                  <span className="demo-booking-time">{item.time}</span>
                  <div>
                    <strong>{item.service}</strong>
                    <span>Cliente demo · 1 hora</span>
                  </div>
                  <button
                    aria-label={`Cancelar reserva de las ${item.time}`}
                    onClick={() => {
                      update(bookings.filter((b) => b.id !== item.id))
                      setMessage({
                        ok: true,
                        text: `Reserva de las ${item.time} cancelada.`,
                      })
                      trackEvent('demo_action', {
                        project: 'reservas',
                        action: 'booking_cancelled',
                      })
                    }}
                  >
                    Cancelar
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="demo-empty">
              <CalendarDays size={34} />
              <strong>Tu agenda está libre.</strong>
              <span>Crea una reserva para ver cómo aparece aquí.</span>
            </div>
          )}
          <div className="demo-agenda-note">
            Sin envíos ni citas reales. La disponibilidad se comparte solo entre
            las reservas de esta sesión.
          </div>
        </div>
      </div>
    </div>
  )
}
