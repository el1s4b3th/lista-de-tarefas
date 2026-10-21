import { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="O que precisa ser feito?"
        aria-label="Nova tarefa"
        className="flex-1 rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
      />
      <button
        type="submit"
        className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700 disabled:opacity-50"
        disabled={!title.trim()}
      >
        Adicionar
      </button>
    </form>
  )
}
