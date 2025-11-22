import { Component } from '@angular/core';
import { HlmInput } from '../input.component';

@Component({
	selector: 'app-input-disabled',
	standalone: true,
	imports: [HlmInput],
	template: `
		<input type="email" placeholder="Email" hlmInput disabled />
	`,
})
export class InputDisabledComponent {}
