import { Component } from '@angular/core';
import { HlmInput } from '../input.component';

@Component({
	selector: 'app-input-default',
	standalone: true,
	imports: [HlmInput],
	template: `
		<input type="email" placeholder="Email" hlmInput />
	`,
})
export class InputDefaultComponent {}
