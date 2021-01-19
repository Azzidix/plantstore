import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  createPlant(record: any) {
    return this.firestore.collection('/Plants').add(record);
  }

  readPlant() {
    return this.firestore.collection('/Plants').snapshotChanges();
  }

  updatePlant(id: string, record: any) {
    this.firestore.doc('/Plants/' + id).update(record);
  }

  deletePlant(id: string) {
    this.firestore.doc('/Plants/' + id).delete();
  }
}
