import { Injectable } from '@angular/core';
import { ElementFinder } from 'protractor';
import { ActivitiesService } from './activities.service';
import { Task } from './activities.service';

import { Storage } from'@ionic/storage';
import { StorageService } from './storage-offline.service';
import { type } from 'node:os';
import { Console } from 'node:console';

@Injectable({
  providedIn: 'root'
})

export class ActivitiesManagerService { //Esta classe utiliza o padrão de projeto Singleton

  private static instance: ActivitiesManagerService;
  public listOfActivities: ActivitiesService[] = [];
  public name: any;

  private constructor(private storage?: Storage,
    private storageService?: StorageService) { 
    
    this.insertExample();
  }

  public static getInstance(): ActivitiesManagerService{ //Implementação do Singleton
    if (!ActivitiesManagerService.instance){
      ActivitiesManagerService.instance = new ActivitiesManagerService();
    }
    return ActivitiesManagerService.instance;
  }
  
  public createActivity(aName: string, aListOfMembers: string[], aDeadline: string, aListOfTasks){
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
    await this.storage.set('activates',this.listOfActivities);
  }

  async getValue() {
    const name = await this.storage.get('activates');
    console.log(name[0].members);
  }
  

}