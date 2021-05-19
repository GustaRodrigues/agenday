import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ActivitiesService {

    private name: string;
    private members: string[];
    private deadline: string;
    private tasks: Task[];
    private quantityOfTasks: number;
    private quantityOfCompletedTasks: number = 0;
    private progress: number = 0;

  constructor(aName: string, aListOfMembers: string[], aDeadline: string, aListOfTasks: Task[]) {
    this.name = aName;
    this.members = aListOfMembers;
    this.deadline = aDeadline;
    this.tasks = aListOfTasks;
    this.quantityOfTasks = this.tasks.length;
   }

  public setTasks(umaTask:Task){
    this.tasks.push(umaTask);
  }
  
  public getName() {
    return this.name;    
  }

  public getMembers(){
    return this.members;
  }

  public getDeadline(){
    return this.deadline;
  }

  public getTasks(){
    return this.tasks;
  }

  public getQuantityOfTasks(){
    return this.quantityOfTasks;
  }

  public getProgress(){ //Quando este método é chamado, a % do progresso é calculada
    this.getQuantityOfCompletedTasks();
    this.progress = Math.round((this.quantityOfCompletedTasks/this.quantityOfTasks)*100);
    return this.progress;
  }

  public getQuantityOfCompletedTasks(){ //Quando este método é chamado, calcula a quantidade de tarfeas concluídas
    this.quantityOfCompletedTasks = 0;

    for (let i = 0; i< this.tasks.length; i = i+1){
      let aTask: Task = this.tasks[i];
      this.quantityOfCompletedTasks += (aTask.getCompleted() === true ? 1 : 0); //Se a tarefas estiver compelta, ele adicona 1 ao atributo de tarefas completas
    }
    return this.quantityOfCompletedTasks;
  }
}

export class Task{
 
  private name: string;
  private completed: boolean;
  
  public constructor(aName: string){
    this.name = aName;
    this.completed = false;
  }

  public changeCompleted(){
    this.completed = !this.completed;
  }
  
  public getName(){
    return this.name;
  }

  public getCompleted(){
    return this.completed;
  }

}