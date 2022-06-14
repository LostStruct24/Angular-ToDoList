import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all'

  allItems = [
    { 
      title: 'eat', done: true
    },
    { 
      title: 'sleep', done: false
    },
  ]

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done)
  }

  addItem(title: string) {
    if(title === "") return 
    this.allItems.unshift({
      title,
      done: true
    })
  }
}
