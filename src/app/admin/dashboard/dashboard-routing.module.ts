import { Page404Component } from "./../../authentication/page404/page404.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { DashboardComponent } from "./dashboard.component";
import {TaskComponent} from "../../task/task.component";
const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,

  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}


//
// const routes: Routes = [
//   {
//     path: "",
//     component: TaskComponent,
//   },
// ];
//
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class TaskRoutingModule {}
