import { Component, OnInit } from '@angular/core';
import { Item } from './types';
import { CardService } from './services/card/card.service.service'
// @ts-ignore
import { v4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  items: Item[] = [];
  title: string = 'to-do-list';

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.getItems().subscribe(data => {
     this.items = data as Item[];
    });
  };

  filterItems = (status: string): Item[] => {
    return this.items.filter((el) => el.status === status)
  };

  addItem(status: string, content: string, checked: boolean) {
    const data = {
      status,
      content,
      checked,
      id: v4(),
    }
    this.cardService.createItem(data).then(() => {});
  }

  editItem(data: Item) {
    console.log(data, 'data from parent')

    this.cardService.editItem(data);
  }

  removeItem(id: string) {
    this.cardService.deleteItem(id)
  }
}
