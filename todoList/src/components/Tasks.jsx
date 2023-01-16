import styles from './Tasks.module.css'
import thrash from '../assets/thrash.svg'
import check from '../assets/check.svg'
import uncheck from '../assets/unchecked.svg'

export function Tasks({content, deleteTask ,propsTask}) {
    function handleDeleteTask() {
        deleteTask(propsTask)
    }

    function handleCompletedTask() {
        
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
                <img onClick={handleCompletedTask} src={uncheck}/>
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