import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  form: FormGroup = new FormGroup({
  username: new FormControl(''),
  password: new FormControl(''),
});

submit() {
  if (this.form.valid) {
    this.submitEM.emit(this.form.value);
  }
}
@Input() error: string | undefined;

@Output() submitEM = new EventEmitter();

}
