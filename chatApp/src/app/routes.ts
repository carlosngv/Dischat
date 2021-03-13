import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./chat/pages/home/home.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'chat',
        loadChildren: () => import('./chat/chat-routing.module').then(m => m.ChatRoutingModule),
    },
    {
        path: '**',
        redirectTo: '',
    },
];
