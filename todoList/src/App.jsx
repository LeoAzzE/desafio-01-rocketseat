import { Header } from './components/Header'
import { Input } from './components/Input'
import { TaskArea } from './components/TaskArea'
import './global.css';
import styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header />
      <Input />
      <TaskArea />
    </div>
  )
}

