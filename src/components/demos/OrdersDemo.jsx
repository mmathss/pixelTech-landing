import { useState } from 'react'
import { ArrowRight, Search, ShoppingBag } from 'lucide-react'
import { advanceOrder, money, orderSeed, orderStates } from './model'
import useDemoState from './useDemoState'
import { trackEvent } from '../../utils/analytics'
const validate = (data) =>
  Array.isArray(data) &&
  data.length === orderSeed.length &&
  data.every(
    (o) =>
      orderSeed.some((seed) => seed.id === o.id) &&
      typeof o.customer === 'string' &&
      orderStates.includes(o.status) &&
      Array.isArray(o.items) &&
      o.items.every(
        (item) =>
          typeof item.name === 'string' &&
          Number.isFinite(item.price) &&
          Number.isSafeInteger(item.quantity),
      ) &&
      Array.isArray(o.history) &&
      o.history.every((item) => typeof item === 'string'),
  )
export default function OrdersDemo() {
  const [orders, update, reset] = useDemoState('pedidos', orderSeed, validate)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(orderSeed[0].id)
  const [message, setMessage] = useState('')
  const order = orders.find((item) => item.id === selected)
  const filtered = orders.filter((item) =>
    `${item.id} ${item.customer}`.toLowerCase().includes(search.toLowerCase()),
  )
  const advance = () => {
    update(advanceOrder(orders, order.id))
    setMessage(
      `Pedido ${order.id}: ${orderStates[orderStates.indexOf(order.status) + 1]}.`,
    )
    trackEvent('demo_action', { project: 'pedidos', action: 'order_advanced' })
  }
  return (
    <div className="demo-app" data-demo="pedidos">
      <div className="demo-app-header">
        <div>
          <span className="demo-app-eyebrow">Operación / Pedidos</span>
          <h2>Que nada se quede en el camino.</h2>
          <p>Consulta el avance de cada pedido de ejemplo.</p>
        </div>
        <button
          className="demo-reset"
          onClick={() => {
            reset()
            setSearch('')
            setSelected(orderSeed[0].id)
            setMessage('')
          }}
        >
          Restablecer demo
        </button>
      </div>
      <div className="demo-toolbar">
        <label className="demo-search">
          <Search size={16} />
          <input
            aria-label="Buscar pedido"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar por código o cliente demo"
          />
        </label>
        <span className="demo-count">{filtered.length} pedidos de ejemplo</span>
      </div>
      <div className="demo-kanban">
        {orderStates.map((status, index) => (
          <section key={status} aria-label={status}>
            <h3>
              <span className={`demo-status-dot demo-status-${index}`} />
              {status}
              <span>
                {filtered.filter((item) => item.status === status).length}
              </span>
            </h3>
            {filtered
              .filter((item) => item.status === status)
              .map((item) => (
                <button
                  key={item.id}
                  className={`demo-order-card ${selected === item.id ? 'is-selected' : ''}`}
                  onClick={() => setSelected(item.id)}
                  aria-pressed={selected === item.id}
                >
                  <span>
                    {item.id}
                    <ShoppingBag size={15} />
                  </span>
                  <strong>{item.customer}</strong>
                  <span>
                    {item.items.reduce((sum, p) => sum + p.quantity, 0)}{' '}
                    unidades
                    <strong>
                      {money(
                        item.items.reduce(
                          (sum, p) => sum + p.quantity * p.price,
                          0,
                        ),
                      )}
                    </strong>
                  </span>
                </button>
              ))}
            {!filtered.some((item) => item.status === status) && (
              <p className="demo-kanban-empty">Sin pedidos</p>
            )}
          </section>
        ))}
      </div>
      {order && (
        <div className="demo-panel demo-order-detail">
          <div>
            <span className="demo-app-eyebrow">Detalle / {order.id}</span>
            <h3>{order.customer}</h3>
            <ul>
              {order.items.map((item) => (
                <li key={item.name}>
                  <span>
                    {item.quantity} × {item.name}
                  </span>
                  <strong>{money(item.quantity * item.price)}</strong>
                </li>
              ))}
            </ul>
            <div className="demo-order-total">
              <strong>Total</strong>
              <strong>
                {money(
                  order.items.reduce(
                    (sum, item) => sum + item.quantity * item.price,
                    0,
                  ),
                )}
              </strong>
            </div>
          </div>
          <div>
            <h3>Seguimiento</h3>
            <ol className="demo-order-history">
              {order.history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
            <button
              className="demo-primary"
              onClick={advance}
              disabled={order.status === 'Entregado'}
            >
              {order.status === 'Entregado'
                ? 'Pedido entregado'
                : `Pasar a ${orderStates[orderStates.indexOf(order.status) + 1]}`}
              <ArrowRight size={16} />
            </button>
            {message && (
              <p className="demo-success" role="status">
                {message}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
