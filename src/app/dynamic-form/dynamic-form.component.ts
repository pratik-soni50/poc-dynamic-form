
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../field-base';
import { FormFieldControlService } from '../form-field-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})

export class DynamicFormComponent implements OnInit {

  @Input() questions: FieldBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: FormFieldControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as FieldBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
