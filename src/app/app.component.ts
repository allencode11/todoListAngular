import { Component } from '@angular/core';
import { Item } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string = 'to-do-list';
  items: Array<Item> = [
    {
      id: 1,
      content: 'First item for to do card',
      status: 'to-do',
      checked: false
    },
    {
      id: 2,
      content: 'Second item for to do card',
      status: 'to-do',
      checked: false
    },
    {
      id: 3,
      content: 'One item for in progress',
      status: 'in-progress',
      checked: false
    },
    {
      id: 4,
      content: 'Second item for in progress',
      status: 'in-progress',
      checked: false
    },
    {
      id: 5,
      content: 'One item for done',
      status: 'done',
      checked: false
    },
    {
      id: 6,
      content: 'Second item for done',
      status: 'done',
      checked: false
    }
    ]

  filterArr = (arr: Array<Item>, sel: string): Array<Item> => {
    const arrR = arr.filter(el => el.status === sel);

    return arrR;
  }

  addItem = (status: string, content: string, checked: boolean): Array<Item> => {
    console.log("here")

    const item: Item = {
      id: this.items.length + 1,
      content: content,
      status: status,
      checked: checked
    }

    this.items.push(item)
    console.log(this.items)

    return this.items
  }

  removeItem = (id: number) => {
    this.items = this.items.filter(el => el.id !== id)
  }
}
