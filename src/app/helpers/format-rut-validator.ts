import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { validateRut } from 'rutlib';

export function formatRutValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const rutValid = validateRut(value);

        return !rutValid ? { rutValid: true } : null;
    }
}