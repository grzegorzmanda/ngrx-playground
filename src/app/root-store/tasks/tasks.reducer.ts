import { ActionTypes, ActionTypesUnion } from './tasks.actions';

export interface Task {
  task: string;
  createdAt?: Date;
}

export interface TasksState {
  tasks: Task[];
  inProgress: boolean;
  newTask: Task;
}

export const initialState: TasksState = {
  tasks: [],
  inProgress: false,
  newTask: null
};

export function tasksReducer(state = initialState, action: ActionTypesUnion) {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return {
        ...state,
        inProgress: true,
        newTask: action.payload.task,
      };
    case ActionTypes.ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [action.payload.task, ...state.tasks],
        inProgress: false
      };
    case ActionTypes.ADD_TASK_FAILURE:
      return { ...state, inProgress: false };
    default:
      return state;
  }
}
