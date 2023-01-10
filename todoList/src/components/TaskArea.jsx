import styles from './TaskArea.module.css'
import { Tasks } from './Tasks'
import Clipboard from '../assets/Clipboard.svg'

export function TaskArea() {
    return (
        <main className={styles.wrapper}>
            <section className={styles.tasksCounter}>
                <div className={styles.numberTask}>
                    <div className={styles.firstContent}>Tarefas criadas</div>
                    <div className={styles.contentTask}>0</div>
                </div>
                <div className={styles.numberTask}>
                    <div className={styles.secondContent}>Concluídas</div>
                    <div className={styles.contentTask}>0</div>
                </div>
            </section>
            <main className={styles.tasksOn}>
                <Tasks/>
                <Tasks/>
                <Tasks/>
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
    )
}