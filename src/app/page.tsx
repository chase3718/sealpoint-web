import styles from './page.module.css';
import TodoList from './components/todoList/todoList';

export default function Home() {
	return (
		<div className={styles.page}>
			<TodoList />
		</div>
	);
}
