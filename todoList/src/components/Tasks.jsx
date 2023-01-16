import styles from './Tasks.module.css'
import thrash from '../assets/thrash.svg'
import check from '../assets/check.svg'
import uncheck from '../assets/unchecked.svg'

let unchecked = uncheck;

export function Tasks({content, deleteTask}) {
    function handleDeleteTask() {
        deleteTask(content)
    }

    return(
        <div className={styles.container}>
            <main className={styles.tasksWrapper}>
                <div className={styles.wrapperPhrases}>
                   <div className={styles.phrase1}></div>
                   <div className={styles.phrase2}></div>
                </div>
            </main>
            <div>
                <img src={check} alt="check" />
            </div>
            
            <div className={styles.contentTask}>
                {content}
            </div>
            <div>
                <img onClick={handleDeleteTask} src={thrash} />
            </div>
        </div>
    )
}