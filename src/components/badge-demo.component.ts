import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BadgeComponent } from './badge.component';

@Component({
  selector: 'app-badge-demo',
  standalone: true,
  imports: [BadgeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="badge-demo">
      <h3>Badge Variants</h3>
      <div class="badge-grid">
        <div class="badge-item">
          <app-badge>Default</app-badge>
          <code>variant="default"</code>
        </div>
        <div class="badge-item">
          <app-badge variant="secondary">Secondary</app-badge>
          <code>variant="secondary"</code>
        </div>
        <div class="badge-item">
          <app-badge variant="destructive">Destructive</app-badge>
          <code>variant="destructive"</code>
        </div>
        <div class="badge-item">
          <app-badge variant="outline">Outline</app-badge>
          <code>variant="outline"</code>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .badge-demo {
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

    .badge-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1.5rem;
    }

    .badge-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    code {
      font-size: 0.75rem;
      color: #71717a;
      background: #f4f4f5;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-family: 'Monaco', 'Courier New', monospace;
    }

    @media (prefers-color-scheme: dark) {
      .badge-demo {
        background: #18181b;
        border-color: #3f3f46;
      }

      h3 {
        color: #fafafa;
      }

      code {
        color: #a1a1aa;
        background: #27272a;
      }
    }
  `]
})
export class BadgeDemoComponent {}
