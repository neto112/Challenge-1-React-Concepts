import { TaskList } from './components/TaskList'
import { Header } from './components/Header'
import './styles/global.scss'

export function App () {
  // eslint-disable-next-line react/react-in-jsx-scope
  return (<><Header /><TaskList /></>)
}
