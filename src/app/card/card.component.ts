import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { Item } from '../types'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() title: string = '';
  @Input() items: Item[] = [];

  @Output() removeItemEvent = new EventEmitter<string>();
  @Output() editItemEvent = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

  editItemEv(data: Item): void {
    this.editItemEvent.emit(data)
  }

  removeItemEv(id: string): void {
    this.removeItemEvent.emit(id)
  }
}
