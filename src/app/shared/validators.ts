import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function rePasswordValidatorFactory(targetControl: AbstractControl): ValidatorFn {
    return function rePasswordValidator(control: AbstractControl): ValidationErrors | null {
        console.log(targetControl);
        console.log(control);
        const areTheSame = targetControl.value === control.value;
        return areTheSame ? null : { rePasswordValidator: true };
    };
}