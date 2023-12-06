import React, { useState } from 'react';

interface TodoListProps {
    initialTasks?: string[];
}

const TodoList: React.FC<TodoListProps> = ({ initialTasks = [] }) => {
    const [tasks, setTasks] = useState<string[]>(initialTasks);
    const [newTask, setNewTask] = useState<string>('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleRemoveTask = (index: number) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleTaskInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.target.value);
    };

    return (
        <div className="todo-list">
            <h2>Lista de Tareas</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleRemoveTask(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <input type="text" value={newTask} onChange={handleTaskInputChange} />
            <button onClick={handleAddTask}>Añadir Tarea</button>
        </div>
    );
};

export default TodoList;
