import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NotesPrivateComponent } from './notes-private/notes-private.component';
import { TaskComponent } from './task/task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsernameDetailsComponent } from './username-details/username-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const APP_ROUTES: Routes = [
	{ path: '', pathMatch: 'full', component: LandingComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'notes/private', component: NotesPrivateComponent },
	{ path: 'gohome', redirectTo: '/home' },
	{ path: 'task', component: TaskComponent },
	{ path: 'task/:id', component: TaskDetailsComponent },
	{ path: 'user/:uid', component: UserDetailsComponent },
	{ path: 'username/:username', component: UsernameDetailsComponent },
	{ path: 'product/:product:_id', component: ProductDetailsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);