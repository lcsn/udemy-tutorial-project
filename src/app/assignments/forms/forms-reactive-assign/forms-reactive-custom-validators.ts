import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class FormsReactiveCustomValidators {
    static validateName(control: FormControl): { [s: string]: boolean } {
        if (control.value === 'Test') {
            return { 'forbiddenName': true };
        }
        return null;
    }

    static validateNameAsync(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Testproject') {
                    resolve({ 'forbiddenName': true });
                }
                else {
                    resolve(null);
                }
            }, 1200);
        });
        return promise;
    }
    
}