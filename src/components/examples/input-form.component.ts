import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HlmInput } from '../input.component';

@Component({
	selector: 'app-input-form',
	standalone: true,
	imports: [CommonModule, HlmInput, ReactiveFormsModule],
	template: `
		<form [formGroup]="form" class="w-2/3 space-y-6">
			<div class="grid w-full max-w-sm items-center gap-1.5">
				<label for="username">Username</label>
				<input type="text" id="username" placeholder="Username" hlmInput formControlName="username" />
			</div>
		</form>
	`,
	styles: [`
		.w-2\/3 {
			width: 66.666667%;
		}
		.space-y-6 > * + * {
			margin-top: 1.5rem;
		}
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
export class InputFormComponent {
	form = new FormGroup({
		username: new FormControl('', [Validators.required]),
	});
}
