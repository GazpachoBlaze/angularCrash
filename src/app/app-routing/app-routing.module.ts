import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { ButtonComponent } from '../components/button/button.component';
import { TasksComponent } from '../components/tasks/tasks.component';
import { TaskItemComponent } from '../components/task-item/task-item.component';
import { AddTaskComponent } from '../components/add-task/add-task.component';


const routes: Routes = [
    { path: "header", component: HeaderComponent },
    { path: "button", component: ButtonComponent },
    { path: "tasks", component: TasksComponent },
    { path: "taskItem", component: TaskItemComponent },
    { path: "addTask", component: AddTaskComponent },
    
]

@NgModule ({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []

})

export class AppRoutingModule {}