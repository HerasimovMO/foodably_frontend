import { AuthGuard } from './shared/auth.guard';
import { SignUpComponent } from './shared/forms/sign-up/sign-up.component';
import { LoginComponent } from './shared/forms/login/login.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogArticleComponent } from './blogs/blog-article/blog-article.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  {path:'landing',component:LandingComponent},
  { path: 'blogs', component: BlogsComponent },
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  { path: 'blogs/:id', component: BlogArticleComponent },
  { path: 'profile',
    redirectTo: '/profile/shoppinglist',
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard], children: [
      { path: 'shoppinglist', component: ShoppingListComponent , canActivate:[AuthGuard]}
    ]},
  { path: 'search', component: SearchComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'viewRecipe', component: ViewRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
