import { useState } from 'react'
import { Package, AlertTriangle, ArrowDownUp, Search } from 'lucide-react'
import { inventorySeed, money, moveStock } from './model'
import useDemoState from './useDemoState'
import { trackEvent } from '../../utils/analytics'
const initial = { products: inventorySeed, history: [] }
const validate = (data) =>
  Array.isArray(data.products) &&
  data.products.length === inventorySeed.length &&
  data.products.every(
    (p) =>
      inventorySeed.some((seed) => seed.id === p.id) &&
      typeof p.name === 'string' &&
      typeof p.category === 'string' &&
      Number.isFinite(p.price) &&
      Number.isSafeInteger(p.min) &&
      Number.isSafeInteger(p.stock) &&
      p.stock >= 0,
  ) &&
  Array.isArray(data.history) &&
  data.history.every(
    (item) =>
      typeof item.id === 'string' &&
      typeof item.name === 'string' &&
      ['entrada', 'salida'].includes(item.direction) &&
      Number.isSafeInteger(item.quantity),
  )
export default function InventoryDemo() {
  const [state, update, reset] = useDemoState('inventario', initial, validate)
  const [search, setSearch] = useState('')
  const [lowOnly, setLowOnly] = useState(false)
  const [form, setForm] = useState({
    product: inventorySeed[0].id,
    quantity: '1',
    direction: 'entrada',
  })
  const [message, setMessage] = useState(null)
  const low = state.products.filter((p) => p.stock <= p.min)
  const products = state.products.filter(
    (p) =>
      `${p.name} ${p.id}`.toLowerCase().includes(search.toLowerCase()) &&
      (!lowOnly || p.stock <= p.min),
  )
  const submit = (event) => {
    event.preventDefault()
    try {
      const products = moveStock(
        state.products,
        form.product,
        Number(form.quantity),
        form.direction,
      )
      const product = state.products.find((p) => p.id === form.product)
      update({
        products,
        history: [
          {
            id: crypto.randomUUID(),
            name: product.name,
            direction: form.direction,
            quantity: Number(form.quantity),
          },
          ...state.history,
        ].slice(0, 30),
      })
      setMessage({
        ok: true,
        text: `Movimiento registrado: ${form.direction} de ${form.quantity} unidades de ${product.name}.`,
      })
      trackEvent('demo_action', {
        project: 'inventario',
        action: 'stock_movement',
      })
    } catch (error) {
      setMessage({ ok: false, text: error.message })
    }
  }
  return (
    <div className="demo-app" data-demo="inventario">
      <div className="demo-app-header">
        <div>
          <span className="demo-app-eyebrow">Almacén / Vista general</span>
          <h2>Inventario</h2>
          <p>Todo tu stock en un solo lugar.</p>
        </div>
        <button
          className="demo-reset"
          onClick={() => {
            reset()
            setMessage(null)
            setSearch('')
            setLowOnly(false)
          }}
        >
          Restablecer demo
        </button>
      </div>
      <div className="demo-metrics">
        <div>
          <Package size={18} />
          <span>Productos</span>
          <strong>{state.products.length}</strong>
        </div>
        <div>
          <AlertTriangle size={18} />
          <span>Stock bajo</span>
          <strong>{low.length}</strong>
        </div>
        <div>
          <ArrowDownUp size={18} />
          <span>Unidades disponibles</span>
          <strong>{state.products.reduce((sum, p) => sum + p.stock, 0)}</strong>
        </div>
      </div>
      <div className="demo-inventory-layout">
        <div>
          <div className="demo-toolbar">
            <label className="demo-search">
              <Search size={16} />
              <input
                aria-label="Buscar producto"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar producto o código"
              />
            </label>
            <label className="demo-checkbox">
              <input
                type="checkbox"
                checked={lowOnly}
                onChange={(event) => setLowOnly(event.target.checked)}
              />
              Solo stock bajo
            </label>
          </div>
          <div className="demo-table-scroll">
            <table>
              <caption className="sr-only">
                Productos del inventario de demostración
              </caption>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Stock</th>
                  <th>Precio</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <strong>{p.name}</strong>
                      <small>
                        {p.id} · {p.category}
                      </small>
                    </td>
                    <td data-testid={`stock-${p.id}`}>{p.stock}</td>
                    <td>{money(p.price)}</td>
                    <td>
                      <span
                        className={`demo-badge ${p.stock <= p.min ? 'demo-badge-warning' : ''}`}
                      >
                        {p.stock <= p.min ? 'Reponer' : 'Disponible'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {products.length === 0 && (
              <p className="demo-empty">No hay productos con esos filtros.</p>
            )}
          </div>
        </div>
        <form className="demo-panel demo-form" onSubmit={submit}>
          <h3>Registrar movimiento</h3>
          <label>
            Producto
            <select
              value={form.product}
              onChange={(event) =>
                setForm({ ...form, product: event.target.value })
              }
            >
              {state.products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Tipo de movimiento
            <select
              value={form.direction}
              onChange={(event) =>
                setForm({ ...form, direction: event.target.value })
              }
            >
              <option value="entrada">Entrada de stock</option>
              <option value="salida">Salida de stock</option>
            </select>
          </label>
          <label>
            Cantidad
            <input
              type="number"
              min="1"
              max="10000"
              step="1"
              required
              value={form.quantity}
              onChange={(event) =>
                setForm({ ...form, quantity: event.target.value })
              }
            />
          </label>
          <button type="submit" className="demo-primary">
            Registrar movimiento
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
      </div>
      <div className="demo-history">
        <h3>Últimos movimientos</h3>
        {state.history.length ? (
          <ul>
            {state.history.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <strong>
                  {item.direction === 'entrada' ? '+' : '−'}
                  {item.quantity} unidades
                </strong>
              </li>
            ))}
          </ul>
        ) : (
          <p>Registra un movimiento para ver su trazabilidad aquí.</p>
        )}
      </div>
    </div>
  )
}
