import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  imports: [MatStepper, ReactiveFormsModule, MatStep, MatFormFieldModule,MatInput,MatButton],
  selector: 'app-em08',
  styleUrl: './em08.scss',
  templateUrl: './em08.html',
})
export class Em08 {
  form1 = new FormGroup( 
    {
      username: new FormControl('',
                            {
                              nonNullable: true,
                              validators: [
                                Validators.required,
                                Validators.minLength(3)
                              ],
                              asyncValidators: []
                            }),
      password: new FormControl('',
                                    {
                                      nonNullable: true,
                                      validators: [
                                        Validators.required,
                                        Validators.minLength(6),
                                        Validators.maxLength(50)
                                      ],
                                      asyncValidators: []
                                    })
    }
  )
  form2 = new FormGroup( 
    {
      firstname: new FormControl('',
                            {
                              nonNullable: true,
                              validators: [
                                Validators.required
                              ],
                              asyncValidators: []
                            }),
      lastname: new FormControl('',
                            {
                              nonNullable: true,
                              validators: [
                                Validators.required
                              ],
                              asyncValidators: []
                            }),
      email: new FormControl(0,
                              {
                                nonNullable: true,
                                validators: [
                                  Validators.required,
                                  Validators.email 
                                ],
                                asyncValidators: []
                              })
    }
  )
}
