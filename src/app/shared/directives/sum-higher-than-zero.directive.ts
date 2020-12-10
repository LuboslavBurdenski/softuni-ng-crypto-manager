


import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, AbstractControl } from '@angular/forms';
import { SumHigherThanZero } from '../validators';


@Directive({
  selector: '[ngModel][sumValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: SumHigherThanZeroDirective, multi: true }]
})
export class SumHigherThanZeroDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return SumHigherThanZero(control);
  }
}