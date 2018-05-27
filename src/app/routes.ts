import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { MessagesComponent } from 'app/messages/messages.component';
import { MemberListComponent } from 'app/members/member-list/member-list.component';
import { ListsComponent } from 'app/lists/lists.component';
import { AuthGuard } from 'app/_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
            {path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
            {path: 'messages', component: MessagesComponent},
            {path: 'lists', component: ListsComponent},
        ]
    },    
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
