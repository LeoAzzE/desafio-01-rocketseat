import styles from './Tasks.module.css'
import thrash from '../assets/thrash.svg'
import check from '../assets/check.svg'
import uncheck from '../assets/unchecked.svg'

export function Tasks({deleteTask ,propsTask, taskCompleted}) {
    function handleDeleteTask() {
        deleteTask(propsTask)
    }

    function handleCompletedTask() {
        const onConcluded = propsTask.isCompleted ? false : true
        const newTaskProps = {...propsTask, isCompleted: onConcluded }
        taskCompleted(newTaskProps)
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
                <img onClick={handleCompletedTask} src={propsTask.isCompleted ? uncheck : check}/>
            </div>
            
            <div className={propsTask.isCompleted ? styles.taskCompleted : styles.contentTask}>
                {propsTask.content}
                
            </div>
            <div>
                <img onClick={handleDeleteTask} src={thrash} />
            </div>
        </div>
    )
}