import styles from './Input.module.css'
import plus from '../assets/plus.svg'
import { Tasks } from './Tasks'
import { useState } from 'react'


export function Input() {
    function handleCreateNewTask() {
        event.preventDefault()
        
    }

    function handleNewTaskChange() {

    }

    return(  
        <form onSubmit={handleCreateNewTask} className={styles.formTask}>
        <textarea onChange={handleNewTaskChange} name = "task" placeholder='Adicione uma nova tarefa'>
            
        </textarea>
        <button type="submit">
            <div className={styles.boxButton}>
                <div className={styles.create}>Criar</div>
                <img src={plus} alt="plus" />
            </div>
        </button>
    </form>  
    )
}