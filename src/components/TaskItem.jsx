export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="group flex items-center gap-3 px-4 py-3">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Marcar "${task.title}" como concluída`}
        className="h-5 w-5 cursor-pointer accent-indigo-600"
      />
      <span
        className={`flex-1 break-words ${task.completed ? 'text-slate-400 line-through' : 'text-slate-800'}`}
      >
        {task.title}
      </span>
      <button
        type="button"
        onClick={() => onDelete(task.id)}
        aria-label={`Excluir "${task.title}"`}
        className="rounded px-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
      >
        ✕
      </button>
    </li>
  )
}
