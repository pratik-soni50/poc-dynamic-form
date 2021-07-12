import { Component } from '@angular/core';
import { FieldBase } from './field-base';
import { DropdownField, TextField } from './text-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions: FieldBase<string>[] = [

    new DropdownField({
      key: 'brave',
      label: 'Bravery Rating',
      options: [
        {key: 'solid',  value: 'Solid'},
        {key: 'great',  value: 'Great'},
        {key: 'good',   value: 'Good'},
        {key: 'unproven', value: 'Unproven'}
      ],
      order: 3
    }),

    new TextField({
      key: 'firstName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 1
    }),

    new TextField({
      key: 'emailAddress',
      label: 'Email',
      type: 'email',
      order: 2
    })
  ];
}
