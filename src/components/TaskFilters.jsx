import { FILTERS } from '../constants/filters.js'

export default function TaskFilters({ current, onChange }) {
  return (
    <div className="flex gap-1">
      {Object.entries(FILTERS).map(([key, { label }]) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={`rounded-md px-3 py-1 text-sm transition ${
            current === key ? 'bg-indigo-100 font-medium text-indigo-700' : 'text-slate-500 hover:bg-slate-100'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
