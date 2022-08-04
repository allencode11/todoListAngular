import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public open: boolean = true;

  constructor(private modal: ModalService) {
  }

  ngOnInit(): void {
  }

  openModal($event: Event): boolean {
    // console.log(this.modal)
    $event.preventDefault();
    // this.modal.toggleModal('auth');
    return this.open;
  }
}
