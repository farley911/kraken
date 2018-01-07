import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private testForm: FormGroup;
  private something: FormControl = new FormControl('', Validators.required);

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.testForm = formBuilder.group({
      something: this.something
    });
  }

  private onSubmit(data: any) {
    console.log(data.value.something);
  }
}
