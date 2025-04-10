import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Skills } from '../../models/skills/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  accesoSkill = "skill service running...";
  private dbPath = '/skills';

  skillRef: AngularFirestoreCollection<Skills>;

  constructor(private db: AngularFirestore) {
    this.skillRef = db.collection(this.dbPath);
  }

  getSkills(): AngularFirestoreCollection<Skills> {
    return this.skillRef;
  }
}