import { Header } from './components/Header'
import { TaskArea } from './components/TaskArea'
import './global.css';
//import { v4 as uuid } from 'uuid';


export function App() {
  return (
    <div>
      <Header />
      <TaskArea />
    </div>
  )
}

