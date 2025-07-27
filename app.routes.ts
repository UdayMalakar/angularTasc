import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { authGuardGuard ,adminGuard, userGuard} from './auth-guard.guard';
import { CreatePostComponent } from './create-post/create-post.component';
import { UserDetailesPageComponent } from './user-detailes-page/user-detailes-page.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { PostComponent } from './post/post.component';
import { SinglePostComponent } from './single-post/single-post.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent , canActivate:[authGuardGuard] },
  {path:'login',component:LoginPageComponent},
  {path:'createPost/:id',component:CreatePostComponent,canActivate:[authGuardGuard]},
  {path:'userDetails',component:UserDetailesPageComponent,canActivate:[authGuardGuard,adminGuard]},
  { path: 'user/:id', component: UserComponent, canActivate:[authGuardGuard,adminGuard] },
  { path: 'profile/:id', component: UserComponent, canActivate: [authGuardGuard] },
   { path: 'createUser', component: CreateUserComponent, canActivate: [authGuardGuard,adminGuard] },
   {path:'posts',component:PostComponent,canActivate:[authGuardGuard]},
   {path:"post/:title",component:SinglePostComponent,canActivate:[authGuardGuard]}
];
