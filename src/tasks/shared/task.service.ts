import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService { 
  tasks: Task[] = [
    { id: 1, description: 'Task 1', completed: false },
    { id: 2, description: 'Task 2', completed: false },
    { id: 3, description: 'Task 3', completed: true },
    { id: 4, description: 'Task 4', completed: false },
    { id: 5, description: 'Task 5', completed: false },
    { id: 6, description: 'Task 6', completed: false },
    { id: 7, description: 'Task 7', completed: false },
    { id: 8, description: 'Task 8', completed: false },
    { id: 9, description: 'Task 9', completed: false },
    { id: 10, description: 'Task 10', completed: true }
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((value) => value.id == id); 

    return task;
  }

  create(task: Task) {
    let lastId = 0;

    if (this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id;
    }

    task.id = lastId + 1;

    this.tasks.push(task);

    return task;
  }

  update(task: Task) {
    const taskArray = this.getById(task.id);

    if (taskArray) {
      taskArray.description = task.description;
      taskArray.completed =  task.completed;
    }

    return taskArray;
  }

  delete(id: number) {
    const index = this.tasks.findIndex((value) => value.id == id);

    this.tasks.splice(index, 1);
  }
}
