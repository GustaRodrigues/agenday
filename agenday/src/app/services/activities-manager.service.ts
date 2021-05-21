import { Injectable } from '@angular/core';
import { ActivitiesService } from './activities.service';
import { Task } from './activities.service';

import { Storage } from'@ionic/storage';
import { StorageService } from './storage-offline.service';



@Injectable({
  providedIn: 'root'
})

export class ActivitiesManagerService { //Esta classe utiliza o padrão de projeto Singleton

  private static instance: ActivitiesManagerService;
  public listOfActivities: ActivitiesService[] = [];
  public name: any;
  public storage: Storage;
  public storageService: StorageService;

  private constructor() { 
    this.storage = new Storage();
    this.storageService  = new StorageService(this.storage);

    this.getValue();
    // this.insertExample();
  }



  public static getInstance(): ActivitiesManagerService{ //Implementação do Singleton
    if (!ActivitiesManagerService.instance){
      ActivitiesManagerService.instance = new ActivitiesManagerService();
    }
    return ActivitiesManagerService.instance;
  }
  
  public createActivity(aName: string, aListOfMembers: string[], aDeadline: string, aListOfTasks, number?: Number){
    let tasks: Task[] = [];

    if(Array.isArray(aListOfTasks)){
      for(let i=0; i < aListOfTasks.length; i += 1){
          let aTask: Task = new Task(aListOfTasks[i]);
          tasks.push(aTask);
      }
    } 
    if(typeof aListOfTasks === "string"){
      let aTask: Task = new Task(aListOfTasks);
      tasks.push(aTask);
    }
    
    let anActivite = new ActivitiesService(aName, aListOfMembers, aDeadline, tasks);
    this.listOfActivities.push(anActivite);
   
    console.log(this.listOfActivities.length)
    if(number == 1){

    }else {
      this.setValue();
    }
    

  }

  public insertExample(){ //Método utilizado para criar Atividades, para testar-las 

    this.createActivity(
      "Aplicativo Mobile",
      ["Adyrnney","Flavio Germano","Gustavo","Rodrigo","Vinicius"], 
      "04/28/2021", ["Criar Interface", "Melhorar o Backend", "Criar Rota"]
    );

    this.createActivity(
      "Trabalho de Redes",
      ["Adyrnney","Flavio Germano","Gustavo","Rodrigo","Vinicius"], 
      "05/13/2021", ["Criar VTP", "Criar VL"]
    );

    this.createActivity(
      "APS Automatos",
      ["Adyrnney","Flavio Germano","Gustavo","Rodrigo","Vinicius"], 
      "05/18/2021", ["Criar JFlap", "Deinifir Linguagem", "Implementar"]
    );

    this.createActivity(
      "APS Sistemas Distribuídos",
      ["Adyrnney","Flavio Germano","Gustavo","Rodrigo","Vinicius"], 
      "05/21/2021", ["Criar Servidor", "Criar Cliente", "Implentar conexão", "Criar o Jogo"]
    );

    
  }

  async setValue() {
    console.log(this.listOfActivities);
    await this.storage.set('activates', this.listOfActivities);
  }


  async getValue() {
    console.log(this.listOfActivities.length);
   const name  = await this.storage.get('activates');
   console.log(`Esse é o tamanho ${name.length} `);
   let aTasks: String [] = [];
   for (let value of name) {
     for(let task of value.tasks){
       aTasks.push(task.name);
     }

     this.createActivity(value.name,value.members, value.deadline, aTasks, 1);    
     
    }
   
  }
  

}