import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function rePasswordValidatorFactory(targetControl: AbstractControl): ValidatorFn {
    return function rePasswordValidator(control: AbstractControl): ValidationErrors | null {
        const match = targetControl.value === control.value;
        return match ? null : { rePasswordValidator: true };
    };
}

export function SumHigherThanZero(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const isHigher = (value > 0);
    console.log(value);
    console.log(!!isHigher);
    return ((isHigher) || (value == undefined) || (value == null) || (value == 0) ||( value == '')) ? null : { sumHigherThanZero: true };
}