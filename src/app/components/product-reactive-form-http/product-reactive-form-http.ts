import { Component, inject, OnInit, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor } from '@angular/material/button';
import { ProductService } from '../../services/product-service';
import { AsyncPipe } from '@angular/common';
import { champsDifferentsValidator } from '../../validators/champs-differents-validator';
import { nomProduitUniqueAsyncValidator } from '../../validators/nom-produit-unique-asyncvalidator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatError, MatLabel, MatInput, MatOption, MatSelect, MatIcon, MatAnchor, AsyncPipe, MatHint],
  selector: 'app-product-reactive-form-http',
  styleUrl: './product-reactive-form-http.scss',
  templateUrl: './product-reactive-form-http.html',
})
export class ProductReactiveFormHttp implements OnInit {
  private productService = inject(ProductService);
  private snackbar = inject(MatSnackBar);

  categories = signal<string[]>([]);
  productAdded = output();

  form = new FormGroup(
    {
      name: new FormControl('',
        {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.minLength(5)
          ],
          asyncValidators: [nomProduitUniqueAsyncValidator(this.productService)]
        }),
      description: new FormControl('',
        {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50)
          ],
          asyncValidators: []
        }),
      price: new FormControl(0,
        {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.min(0.01)
          ],
          asyncValidators: []
        }),
      category: new FormControl('',
        {
          nonNullable: true,
          validators: [
            Validators.required
          ],
          asyncValidators: []
        }),
      stock: new FormControl(0,
        {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.min(0)
          ],
          asyncValidators: []
        })
    },
    // On ajoute le validator sur le formgroup en dernier dans son constructeur
    champsDifferentsValidator('name', 'description')
  )

  onSubmit(): void {
    if (this.form.invalid) return;

    console.log(this.form.getRawValue());

    this.productService.createProduct$(this.form.getRawValue()).subscribe({
      next: (response) => {
        this.snackbar.open(`Produit ${response.name} créé avec l'id ${response.id}`, "", { duration: 3000 });
        this.form.reset();
        this.productAdded.emit();
      },
      error: (err) => this.snackbar.open(err, '', { duration: 3000 }),
    });


  }

  ngOnInit(): void {
    this.productService.getProductsCategories$().subscribe({
      // On définit notre Observer
      next: (response) => {
        this.categories.set([...response]);
      },
      error: (err) => { console.log(`Erreur du backEnd : ${err.message || err}`); }
    })
  }
}
