import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function rePasswordValidatorFactory(targetControl: AbstractControl): ValidatorFn {
    return function rePasswordValidator(control: AbstractControl): ValidationErrors | null {
        const match = targetControl.value === control.value;
        return match ? null : { rePasswordValidator: true };
    };
}