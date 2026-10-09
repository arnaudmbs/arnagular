import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { ProductService } from '../services/product-service';
import { inject } from '@angular/core';

// ─────────────────────────────────────────────────────────────────────────────
// VALIDATEUR ASYNCHRONE (async validator)
// ─────────────────────────────────────────────────────────────────────────────
// Un validateur "classique" (synchrone) répond immédiatement. Mais parfois, la
// réponse dépend du SERVEUR : "ce nom de produit est-il déjà pris ?". On ne peut
// pas répondre instantanément → on utilise un validateur ASYNCHRONE.
//
// Un AsyncValidatorFn renvoie une Promise (ou un Observable) qui se résout par :
//   - null                       → tout va bien (le nom est libre)
//   - un objet ValidationErrors  → erreur (ici la clé 'nomDejaPris')
//
// Pendant l'attente, Angular met le contrôle dans l'état `pending` (utile pour
// afficher un petit "Vérification en cours...").
//
// Ici, `setTimeout` SIMULE le temps de réponse d'un vrai appel HTTP (500 ms).
// ─────────────────────────────────────────────────────────────────────────────

export function nomProduitUniqueAsyncValidator(
    productService: ProductService
): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
        const nom = (control.value ?? '').trim();

        // Champ vide : on ne test rien, on laisse le validateur 'required' gérer
        if (!nom) {
            return Promise.resolve(null);
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                let existeDeja$ = productService.productExists$(nom).subscribe({
                    next: (data) => resolve(data ? { nomDejaPris: true } : null)
                })
            },500);

        })
    }
}
