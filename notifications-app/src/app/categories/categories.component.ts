import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {

  categories:string[] = Object.values(Category);

  constructor() { }

  ngOnInit(): void {
  }

  click(category:string):void{
    this.selectedCategoryEmitter.emit(category)
  }

  @Output()
  selectedCategoryEmitter = new EventEmitter<string>();

}
