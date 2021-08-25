import { useState } from 'react'
import '../styles/tasklist.scss'
import { FiTrash, FiCheckSquare } from 'react-icons/fi'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  // adicionar item da lista;
  function handleCreateNewTask() {
    if(!newTaskTitle) return;
    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false
    }
    // renderiza new value que estão no array cópia
    // que será o array atualizado (setTasks)
      setTasks(tarefa => [...tarefa, newTask])
      // Ele limpa o input
        setNewTaskTitle('')
    }

    // marcar e desmarcar um item da lista
  function handleToggleTaskCompletion(id: number) {
    // Ele mapeia o array e atualiza o isComplete
    const changeTask = tasks.map(task => task.id === id ? {
      // Ele atualiza a informação segundo o check.
      ...task, isComplete: !task.isComplete} : task);
      setTasks(changeTask)
    }

  // remover um item da lista pelo ID
  function handleRemoveTask(id: number) {
  const filterTasks = tasks.filter(remove => remove.id !== id);
  setTasks(filterTasks);
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button 
          type="submit" data-testid="add-task-button" 
          onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button 
              type="button" data-testid="remove-task-button" 
              onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}