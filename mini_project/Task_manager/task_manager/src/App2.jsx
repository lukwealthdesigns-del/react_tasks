import { useState } from "react";
import Header from './Header';
import AddTaskForm from './AddTaskForm';
import FilterButtons from './FilterButtons';
import TaskList from './TaskList';
import Stats from './Stats';
import './TaskManager.css'; 


function App2() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Learn React Components', completed: false },
        { id: 2, text: 'Build a project', completed: false},
        { id: 3, text: 'Practice coding', completed: true}
    ]);

    const [filter, setFilter] = useState('all');

    // Add new task
    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };
        setTasks([...tasks, newTask]);
    }

    // Toggle task completion
    function toggleTask(id) {
        setTasks(tasks.map(task =>
            task.id == id ? { ...task, completed: !task.completed } : task
        ));
    }

    // Delete task
    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    // Edit task
    function editTask(id, newText) {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, text: newText } : task
        ));
    }

    // Filter tasks
    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true; // 'all
    });


    return(
        <div className="app">
            <Header />
            <AddTaskForm onAddTask={addTask}/>
            <FilterButtons currentFilter={filter} onFilterChange={setFilter}/>
            <Stats tasks={tasks}/>
            <TaskList
                tasks={filteredTasks}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onEdit={editTask}
            />
        </div>
    )
}


export default App2;