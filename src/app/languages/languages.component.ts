import { Component } from '@angular/core';
import { LanguagesService } from '../services/languages-service/languages.service';
import { Languages } from '../models/languages/languages.model';
import { map } from 'rxjs/operators';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  languages: Languages[] = [];

  constructor(private languagesService: LanguagesService) {
    this.languagesService.getLanguages()
      .snapshotChanges()
      .pipe(
        map((changes: DocumentChangeAction<Languages>[]) =>
          changes.map(c =>
            ({ id: c.payload.doc.id, ...c.payload.doc.data() as Languages })
          )
        )
      )
      .subscribe((data: Languages[]) => {
        this.languages = data;
      });
  }
}
