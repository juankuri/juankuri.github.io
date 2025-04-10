import { Component } from '@angular/core';
import { InterestsService } from '../services/interests-service/interests.service';
import { Interests } from '../models/interests/interests.model';
import { map } from 'rxjs/operators';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {
  interests: Interests[] = [];

  constructor(private interestsService: InterestsService) {
    this.interestsService.getInterests()
      .snapshotChanges()
      .pipe(
        map((changes: DocumentChangeAction<Interests>[]) =>
          changes.map(c =>
            ({ id: c.payload.doc.id, ...c.payload.doc.data() as Interests })
          )
        )
      )
      .subscribe((data: Interests[]) => {
        this.interests = data;
      });
  }
}
