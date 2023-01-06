import styles from './Input.module.css'
import plus from '../assets/plus.svg'

export function Input() {
    return(
        <form className={styles.formTask}>
        <textarea placeholder='Adicione uma nova tarefa'>
            
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