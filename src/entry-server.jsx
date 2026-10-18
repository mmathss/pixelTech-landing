import { renderToString } from 'react-dom/server'
import App from './App'
export { pages } from './data/pages'
export function render(pathname) {
  return renderToString(<App pathname={pathname} />)
}
