import { useState } from 'react'
import TaskForm from './components/TaskForm.jsx'
import TaskItem from './components/TaskItem.jsx'
import TaskFilters from './components/TaskFilters.jsx'
import { FILTERS } from './constants/filters.js'
import { useLocalStorage } from './hooks/useLocalStorage.js'

export default function App() {
  const [tasks, setTasks] = useLocalStorage('lista-de-tarefas:tasks', [])
  const [filter, setFilter] = useState('all')

  const visibleTasks = tasks.filter(FILTERS[filter].predicate)
  const pendingCount = tasks.filter((task) => !task.completed).length
  const hasCompleted = tasks.some((task) => task.completed)

  function addTask(title) {
    setTasks((prev) => [...prev, { id: crypto.randomUUID(), title, completed: false }])
  }

  function toggleTask(id) {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  function clearCompleted() {
    setTasks((prev) => prev.filter((task) => !task.completed))
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-slate-100 px-4 py-12">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-indigo-700">Lista de Tarefas</h1>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <TaskForm onAdd={addTask} />

          {tasks.length > 0 ? (
            <>
              <ul className="mt-6 divide-y divide-slate-100 rounded-lg border border-slate-100">
                {visibleTasks.map((task) => (
                  <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
                ))}
                {visibleTasks.length === 0 && (
                  <li className="px-4 py-6 text-center text-slate-400">Nenhuma tarefa neste filtro.</li>
                )}
              </ul>

              <footer className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-slate-500">
                <span>
                  {pendingCount} {pendingCount === 1 ? 'tarefa pendente' : 'tarefas pendentes'}
                </span>
                <TaskFilters current={filter} onChange={setFilter} />
                <button
                  type="button"
                  onClick={clearCompleted}
                  disabled={!hasCompleted}
                  className="hover:text-red-600 disabled:invisible"
                >
                  Limpar concluídas
                </button>
              </footer>
            </>
          ) : (
            <p className="mt-6 text-center text-slate-400">Nenhuma tarefa ainda. Adicione a primeira acima!</p>
          )}
        </div>
      </div>
    </main>
  )
}
