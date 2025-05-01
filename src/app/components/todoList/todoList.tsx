'use client';
import { Amplify } from 'aws-amplify';
import outputs from '@/../amplify_outputs.json';
Amplify.configure(outputs);
import { useEffect, useState } from 'react';
import type { Schema } from '@/../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export default function TodoList() {
	const [todos, setTodos] = useState<Schema['Show']['type'][]>([]);

	const fetchTodos = async () => {
		const { data: items } = await client.models.Show.list();
		setTodos(items);
	};

	useEffect(() => {
		fetchTodos();
	}, []);

	const createTodo = async () => {
		await client.models.Show.create({
			show_id: '1',
			address: '123 Main St',
			description: 'A great show',
			show_time: new Date().getTime(),
			thumbnail: 'https://example.com/image.jpg',
			ticket_id: 'ticket123',
			venue_name: 'Theater 1',
		})
			.then((res) => {
				console.log('Todo created:', res);
			})
			.catch((err) => {
				console.error('Error creating todo:', err);
			});
	};

	return (
		<div>
			<button onClick={createTodo}>Add new todo</button>
			<ul>
				{todos.map(({ show_id, venue_name }) => (
					<li key={show_id}>{venue_name}</li>
				))}
			</ul>
		</div>
	);
}
