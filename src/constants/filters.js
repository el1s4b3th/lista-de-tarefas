export const FILTERS = {
  all: { label: 'Todas', predicate: () => true },
  active: { label: 'Pendentes', predicate: (task) => !task.completed },
  completed: { label: 'Concluídas', predicate: (task) => task.completed },
}
