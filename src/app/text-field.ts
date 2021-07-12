import { FieldBase } from './field-base';

export class TextField extends FieldBase<string> {
  controlType = 'textbox';
}

export class DropdownField extends FieldBase<string> {
  controlType = 'dropdown';
}

