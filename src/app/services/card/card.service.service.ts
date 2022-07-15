import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, DocumentReference } from '@angular/fire/compat/firestore';
import { Item } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private firestore: AngularFirestore) { };

  createItem(data: Item):  Promise<DocumentReference<Item>> {
    return this.firestore.collection('items').add(data) as  Promise<DocumentReference<Item>> ;
  };

  getItems(): Observable<Item[]> {
    return this.firestore.collection('items').valueChanges() as  Observable<Item[]>;
  };

  editItem(item: Item): void {
    const itemsRef = this.firestore.collection('items').ref;
    const p = itemsRef.where('id', '==', item.id)
    p.get().then((p) => {
      const id: string = p.docs[0].id;
      this.firestore.collection('items').doc(id).update(item).then(()=>{console.log(id, 'updated')});
      return true;
    })
  };


  deleteItem(itemId: string): boolean {
    const itemsRef = this.firestore.collection('items').ref;
    const p = itemsRef.where('id', '==', itemId)
    p.get().then((p) => {
      const id: string = p.docs[0].id;
      this.firestore.collection('items').doc(id).delete().then(()=>{console.log(id, 'deleted')});
      return true;
    })

    return false;
  };

}
