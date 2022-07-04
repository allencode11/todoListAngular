import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../types'
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string = ''
  @Input() items: Array<Item> = []
  @Output() removeItemEvent = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  removeItem = (id: number): void => {
    this.removeItemEvent.emit(id)
  }
}
