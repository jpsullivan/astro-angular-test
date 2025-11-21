import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span [ngClass]="variantClasses">
      <ng-content></ng-content>
    </span>
  `,
  styles: [`
    :host {
      display: inline-block;
    }

    span {
      display: inline-flex;
      align-items: center;
      border-radius: 9999px;
      padding: 0.25rem 0.75rem;
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 1;
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      border: 1px solid transparent;
    }

    .badge-default {
      background-color: #18181b;
      color: #fafafa;
    }

    .badge-secondary {
      background-color: #f4f4f5;
      color: #18181b;
    }

    .badge-destructive {
      background-color: #ef4444;
      color: #fef2f2;
    }

    .badge-outline {
      background-color: transparent;
      color: #18181b;
      border-color: #e4e4e7;
    }

    @media (prefers-color-scheme: dark) {
      .badge-default {
        background-color: #fafafa;
        color: #18181b;
      }

      .badge-secondary {
        background-color: #27272a;
        color: #fafafa;
      }

      .badge-destructive {
        background-color: #dc2626;
        color: #fef2f2;
      }

      .badge-outline {
        background-color: transparent;
        color: #fafafa;
        border-color: #3f3f46;
      }
    }
  `]
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'default';

  get variantClasses(): string {
    return `badge-${this.variant}`;
  }
}
