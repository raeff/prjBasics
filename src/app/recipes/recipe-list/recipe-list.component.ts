import { Component, OnInit, EventEmitter , Output } from '@angular/core';
import { Recipe }  from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output()  recipeWasSelected = new EventEmitter<Recipe>();
  recipes : Recipe[]=[
  new Recipe('test recipe' ,  'this is a test recipe','https://upload.wikimedia.org/wikipedia/commons/9/9d/Bucatini_allamatriciana.jpg'  ),
  new Recipe('test recipe' ,  'this is a test recip','https://upload.wikimedia.org/wikipedia/commons/9/9d/Bucatini_allamatriciana.jpg')
];
  constructor() { }
  ngOnInit() {
  }
onRecipeSelected(recipe:Recipe){
  this.recipeWasSelected.emit(recipe);
}
}   
