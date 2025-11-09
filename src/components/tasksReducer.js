export const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case 'set_tasks':
      return action.tasks
    case 'delete_task': {
      const updatedTasks = tasks.filter((task, idx) => action.index !== idx)
      return updatedTasks
    }
    case 'add_task': {
      const newTask = {
        completed: false,
        description: action.description,
      }

      const updatedTasks = [...tasks, newTask]
      return updatedTasks
    }
    case 'update_task': {
      const updatedTasks = tasks.map((task, idx) => {
        if (action.index == idx) {
          return { ...task, [action.field]: action.value };
        }
        return task;
      });

      return updatedTasks
    }
  }
}