import { Component } from '@angular/core';
import { HlmInput } from '../input.component';

@Component({
	selector: 'app-input-with-button',
	standalone: true,
	imports: [HlmInput],
	template: `
		<div class="flex w-full max-w-sm items-center space-x-2">
			<input type="email" placeholder="Email" hlmInput />
			<button type="submit" class="btn-submit">Subscribe</button>
		</div>
	`,
	styles: [`
		.flex {
			display: flex;
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
		.space-x-2 > * + * {
			margin-left: 0.5rem;
		}
		.btn-submit {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			border-radius: 0.375rem;
			font-size: 0.875rem;
			font-weight: 500;
			height: 2.25rem;
			padding: 0.5rem 1rem;
			background-color: #09090b;
			color: #fafafa;
			border: none;
			cursor: pointer;
			transition: background-color 0.2s;
		}
		.btn-submit:hover {
			background-color: #18181b;
		}
		@media (prefers-color-scheme: dark) {
			.btn-submit {
				background-color: #fafafa;
				color: #09090b;
			}
			.btn-submit:hover {
				background-color: #e4e4e7;
			}
		}
	`]
})
export class InputWithButtonComponent {}
