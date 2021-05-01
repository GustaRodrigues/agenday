import { Injectable } from '@angular/core';
import { ActivitiesService } from './activities.service';
import { Task } from './activities.service';


@Injectable({
  providedIn: 'root'
})

export class ActivitiesManagerService { //Esta classe utiliza o padrão de projeto Singleton

  private static instance: ActivitiesManagerService;
  public listOfActivities: ActivitiesService[] = [];

  private constructor() { 
    this.insertExample();
  }

  public static getInstance(): ActivitiesManagerService{ //Implementação do Singleton
    if (!ActivitiesManagerService.instance){
      ActivitiesManagerService.instance = new ActivitiesManagerService();
    }
    return ActivitiesManagerService.instance;
  }
  
  public createActivity(aName: string, aListOfMembers: string[], aDeadline: string, aListOfTasks: Task[]){
     let anActivite = new ActivitiesService(aName, aListOfMembers, aDeadline, aListOfTasks);
     this.listOfActivities.push(anActivite);
  }

  public insertExample(){ //Método utilizado para criar Atividades, para testar-las 

    let task1: Task = new Task("Criar Interface");
    let task2: Task = new Task("Melhorar o Backend");
    let task3: Task = new Task("Criar Rota");

    let tasks: Task[] = [task1, task2, task3];

    this.createActivity(
      "Aplicativo Mobile",
      ["Adyrnney","Flavio Germano","Gustavo","Rodrigo","Vinicius"], 
      "04/28/2021", tasks
    );
    
    let task4: Task = new Task("Criar VTP");
    let task5: Task = new Task("Criar VL");

    let tasks2: Task[] = [task4, task5];

    this.createActivity(
      "Trabalho de Redes",
      ["Adyrnney","Flavio Germano","Gustavo","Rodrigo","Vinicius"], 
      "05/13/2021", tasks2
    );

    let task6: Task = new Task("Criar JFlap");
    let task7: Task = new Task("Deinifir Linguagem");
    let task8: Task = new Task("Implementar");

    let tasks3: Task[] = [task6, task7, task8];


    this.createActivity(
      "APS Automatos",
      ["Adyrnney","Flavio Germano","Gustavo","Rodrigo","Vinicius"], 
      "05/18/2021", tasks3
    );
    
    let task9: Task = new Task("Criar Servidor");
    let task10: Task = new Task("Criar Cliente");
    let task11: Task = new Task("Implentar conexão");
    let task12: Task = new Task("Criar o Jogo");

    let tasks4: Task[] = [task9, task10, task11, task12];

    this.createActivity(
      "APS Sistemas Distribuídos",
      ["Adyrnney","Flavio Germano","Gustavo","Rodrigo","Vinicius"], 
      "05/21/2021", tasks4
    );
  
  }
}