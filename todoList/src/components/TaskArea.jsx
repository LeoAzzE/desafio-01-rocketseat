import styles from './TaskArea.module.css';
import { Tasks } from './Tasks';
import Clipboard from '../assets/Clipboard.svg';
import { useState } from 'react';
import plus from '../assets/plus.svg';
import { v4 as uuidv4 } from 'uuid';

export function TaskArea() {
    const [tasks, setTask] = useState([
        
    ])

    const [valueText, setNewValue] = useState('')

   function handleCreateNewTask() {
        event.preventDefault()
        setTask ([
            {
                id: uuidv4(),
                isCompleted: false,
                content: valueText,
            },
            ...tasks
        ])
        setNewValue('')
   }

   function handleNewTaskChange() {
    setNewValue(event.target.value)

   }

   function deleteTask(task) {
        const filterListWithoutDeletedOne = tasks.filter(tasks =>{
            return tasks.id !== task.id
        })
        setTask(filterListWithoutDeletedOne)
   }

    function taskCompleted(Tasks) {
        const tasksCompleted = tasks.map(task => {
            if (task.id === Tasks.id) {
              return Tasks
            } else {
              return task
            }
        })
        setTask(tasksCompleted)
    }

    const checkIfTaskIsComplete = tasks.filter(task => {
        return task.isCompleted === true
    })

    return (
        <div>
        <form onSubmit={handleCreateNewTask} className={styles.formTask}>
        <textarea required
            name = "task"
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewTaskChange}
            value={valueText}
            >
        </textarea>
        <button type="submit">
            <div className={styles.boxButton}>
                <div className={styles.create}>Criar</div>
                <img src={plus} alt="plus" />
            </div>
        </button>
    </form>  
        <main className={styles.wrapper}>
            <section className={styles.tasksCounter}>
                <div className={styles.numberTask}>
                    <div className={styles.firstContent}>Tarefas criadas</div>
                    <div className={styles.contentTaskOne}>{tasks.length}</div>
                </div>
                <div className={styles.numberTask}>
                    <div className={styles.secondContent}>Concluídas</div>
                    <div className={styles.contentTaskTwo}>{checkIfTaskIsComplete.length} de {tasks.length}</div>
                </div>
            </section>
            <main className={styles.tasksOn}>
               {tasks.map(task => {
                    return <Tasks 
                    taskCompleted = {taskCompleted} 
                    propsTask={task} 
                    key={task.id} 
                    content={task.content} 
                    deleteTask={deleteTask}/>
               })}
               
            </main>
            <main className={styles.taskList}>
                <div>
                    <img src={Clipboard} alt="logoTask" />
                </div>
                <div className={styles.messages}>
                    <div className={styles.text1}>Você ainda não tem tarefas cadastradas</div>
                    <div className={styles.text2}>Crie tarefas e organize seus itens a fazer</div>
                </div>
                
            </main>
        </main>
        </div>
    )
}