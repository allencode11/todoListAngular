import { Injectable } from '@angular/core';
import { IModal } from '../../types';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public display: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  open() {
    this.display.next(true);
  }

  close() {
    this.display.next(false);
  }
}
