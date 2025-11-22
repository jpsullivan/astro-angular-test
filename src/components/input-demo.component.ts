import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HlmInput } from './input.component';

@Component({
	selector: 'app-input-demo',
	standalone: true,
	imports: [CommonModule, HlmInput, ReactiveFormsModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="input-demo">
			<h3>Input Variants</h3>

			<div class="input-section">
				<div class="input-item">
					<label for="basic-input">Basic Input</label>
					<input
						id="basic-input"
						type="text"
						placeholder="Enter text..."
						hlmInput
					/>
					<code>hlmInput</code>
				</div>

				<div class="input-item">
					<label for="email-input">Email Input</label>
					<input
						id="email-input"
						type="email"
						placeholder="email@example.com"
						hlmInput
					/>
					<code>type="email"</code>
				</div>

				<div class="input-item">
					<label for="disabled-input">Disabled Input</label>
					<input
						id="disabled-input"
						type="text"
						placeholder="Disabled..."
						hlmInput
						disabled
					/>
					<code>disabled</code>
				</div>

				<div class="input-item">
					<label for="error-input">Input with Error</label>
					<input
						id="error-input"
						type="text"
						placeholder="Error state..."
						hlmInput
						[error]="true"
					/>
					<code>[error]="true"</code>
				</div>
			</div>

			<h3>Form Validation</h3>
			<form [formGroup]="demoForm" class="form-section">
				<div class="input-item">
					<label for="username">Username (required)</label>
					<input
						id="username"
						type="text"
						placeholder="Enter username..."
						hlmInput
						formControlName="username"
					/>
					<span class="error-message" *ngIf="demoForm.get('username')?.invalid && demoForm.get('username')?.touched">
						Username is required
					</span>
				</div>

				<div class="input-item">
					<label for="email">Email (required, valid email)</label>
					<input
						id="email"
						type="email"
						placeholder="email@example.com"
						hlmInput
						formControlName="email"
					/>
					<span class="error-message" *ngIf="demoForm.get('email')?.invalid && demoForm.get('email')?.touched">
						Valid email is required
					</span>
				</div>

				<div class="input-item">
					<label for="password">Password (min 8 characters)</label>
					<input
						id="password"
						type="password"
						placeholder="Enter password..."
						hlmInput
						formControlName="password"
					/>
					<span class="error-message" *ngIf="demoForm.get('password')?.invalid && demoForm.get('password')?.touched">
						Password must be at least 8 characters
					</span>
				</div>
			</form>
		</div>
	`,
	styles: [`
		.input-demo {
			padding: 2rem;
			background: #ffffff;
			border-radius: 8px;
			border: 1px solid #e4e4e7;
		}

		h3 {
			margin: 0 0 1.5rem 0;
			font-size: 1.25rem;
			font-weight: 600;
			color: #18181b;
		}

		h3:not(:first-child) {
			margin-top: 2rem;
		}

		.input-section,
		.form-section {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
		}

		.input-item {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		label {
			font-size: 0.875rem;
			font-weight: 500;
			color: #3f3f46;
		}

		code {
			font-size: 0.75rem;
			color: #71717a;
			background: #f4f4f5;
			padding: 0.25rem 0.5rem;
			border-radius: 4px;
			font-family: 'Monaco', 'Courier New', monospace;
			align-self: flex-start;
		}

		.error-message {
			font-size: 0.75rem;
			color: #dc2626;
			margin-top: -0.25rem;
		}

		@media (prefers-color-scheme: dark) {
			.input-demo {
				background: #18181b;
				border-color: #3f3f46;
			}

			h3 {
				color: #fafafa;
			}

			label {
				color: #d4d4d8;
			}

			code {
				color: #a1a1aa;
				background: #27272a;
			}

			.error-message {
				color: #f87171;
			}
		}
	`]
})
export class InputDemoComponent {
	demoForm = new FormGroup({
		username: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)]),
	});
}
