import { Component } from '@angular/core';
import { HlmInput } from '../input.component';

@Component({
	selector: 'app-input-with-label',
	standalone: true,
	imports: [HlmInput],
	template: `
		<div class="grid w-full max-w-sm items-center gap-1.5">
			<label for="email">Email</label>
			<input type="email" id="email" placeholder="Email" hlmInput />
		</div>
	`,
	styles: [`
		.grid {
			display: grid;
		}
		.w-full {
			width: 100%;
		}
		.max-w-sm {
			max-width: 24rem;
		}
		.items-center {
			align-items: center;
		}
		.gap-1\.5 {
			gap: 0.375rem;
		}
		label {
			font-size: 0.875rem;
			font-weight: 500;
			color: #09090b;
		}
		@media (prefers-color-scheme: dark) {
			label {
				color: #fafafa;
			}
		}
	`]
})
export class InputWithLabelComponent {}
