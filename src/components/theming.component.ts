import { Component, ChangeDetectionStrategy } from '@angular/core';

interface ColorToken {
  name: string;
  property: string;
  lightOklch: string;
  darkOklch: string;
  description: string;
  usage: string;
  avoidUsage: string;
}

@Component({
  selector: 'app-theming',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="theming-page">
      <div class="intro">
        <p>This page shows all available design tokens in both light and dark modes.
        Each token is displayed with its OKLCH value and a visual color swatch.</p>
      </div>

      <div class="tokens-grid">
        @for (token of colorTokens; track token.property) {
        <div class="token-card">
          <div class="token-header">
            <h3>{{ token.name }}</h3>
            <code class="token-property">--{{ token.property }}</code>
          </div>

          <div class="color-variants">
            <div class="color-variant">
              <div class="variant-label">Light Mode</div>
              <div class="color-swatch light" [style.background-color]="oklchToCss(token.lightOklch)"></div>
              <div class="color-values">
                <div class="oklch-value">
                  <span class="value-label">OKLCH:</span>
                  <code>{{ token.lightOklch }}</code>
                </div>
              </div>
            </div>

            <div class="color-variant">
              <div class="variant-label">Dark Mode</div>
              <div class="color-swatch dark" [style.background-color]="oklchToCss(token.darkOklch)"></div>
              <div class="color-values">
                <div class="oklch-value">
                  <span class="value-label">OKLCH:</span>
                  <code>{{ token.darkOklch }}</code>
                </div>
              </div>
            </div>
          </div>

          <div class="token-description">
            <p>{{ token.description }}</p>
          </div>

          <div class="token-usage">
            <div class="usage-do">
              <strong>Use for:</strong> {{ token.usage }}
            </div>
            <div class="usage-dont">
              <strong>Avoid:</strong> {{ token.avoidUsage }}
            </div>
          </div>
        </div>
        }
      </div>

      <div class="radius-section">
        <h2>Border Radius</h2>
        <div class="token-card">
          <div class="token-header">
            <h3>Radius</h3>
            <code class="token-property">--radius</code>
          </div>
          <div class="radius-demo">
            <div class="radius-value">0.625rem (10px)</div>
            <div class="radius-examples">
              <div class="radius-box" style="border-radius: var(--radius, 0.625rem)">
                Example element with default radius
              </div>
            </div>
          </div>
          <div class="token-description">
            <p>The default border radius used throughout the design system for consistent rounded corners.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .theming-page {
      max-width: 1200px;
      margin: 0 auto;
    }

    .intro {
      margin-bottom: 2rem;
      padding: 1rem;
      background-color: oklch(0.97 0 0);
      border-radius: 0.5rem;
      border: 1px solid oklch(0.922 0 0);
    }

    @media (prefers-color-scheme: dark) {
      .intro {
        background-color: oklch(0.269 0 0);
        border-color: oklch(1 0 0 / 10%);
      }
    }

    .tokens-grid {
      display: grid;
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .token-card {
      border: 1px solid oklch(0.922 0 0);
      border-radius: 0.625rem;
      padding: 1.5rem;
      background-color: oklch(1 0 0);
    }

    @media (prefers-color-scheme: dark) {
      .token-card {
        background-color: oklch(0.205 0 0);
        border-color: oklch(1 0 0 / 10%);
      }
    }

    .token-header {
      margin-bottom: 1rem;
    }

    .token-header h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.25rem;
      color: oklch(0.145 0 0);
    }

    @media (prefers-color-scheme: dark) {
      .token-header h3 {
        color: oklch(0.985 0 0);
      }
    }

    .token-property {
      font-family: monospace;
      font-size: 0.875rem;
      color: oklch(0.556 0 0);
      background-color: oklch(0.97 0 0);
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
    }

    @media (prefers-color-scheme: dark) {
      .token-property {
        color: oklch(0.708 0 0);
        background-color: oklch(0.269 0 0);
      }
    }

    .color-variants {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 1rem;
    }

    .color-variant {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .variant-label {
      font-weight: 600;
      font-size: 0.875rem;
      color: oklch(0.556 0 0);
    }

    @media (prefers-color-scheme: dark) {
      .variant-label {
        color: oklch(0.708 0 0);
      }
    }

    .color-swatch {
      height: 80px;
      border-radius: 0.5rem;
      border: 1px solid oklch(0.922 0 0);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    @media (prefers-color-scheme: dark) {
      .color-swatch {
        border-color: oklch(1 0 0 / 10%);
      }
    }

    .color-values {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .oklch-value {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .value-label {
      font-size: 0.75rem;
      font-weight: 600;
      color: oklch(0.556 0 0);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    @media (prefers-color-scheme: dark) {
      .value-label {
        color: oklch(0.708 0 0);
      }
    }

    code {
      font-family: monospace;
      font-size: 0.875rem;
      color: oklch(0.145 0 0);
      background-color: oklch(0.97 0 0);
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      display: inline-block;
    }

    @media (prefers-color-scheme: dark) {
      code {
        color: oklch(0.985 0 0);
        background-color: oklch(0.269 0 0);
      }
    }

    .token-description {
      margin: 1rem 0;
      padding-top: 1rem;
      border-top: 1px solid oklch(0.922 0 0);
      color: oklch(0.145 0 0);
    }

    @media (prefers-color-scheme: dark) {
      .token-description {
        border-top-color: oklch(1 0 0 / 10%);
        color: oklch(0.985 0 0);
      }
    }

    .token-usage {
      display: grid;
      gap: 0.75rem;
      font-size: 0.875rem;
    }

    .usage-do {
      padding: 0.75rem;
      background-color: oklch(0.97 0 0);
      border-left: 3px solid oklch(0.646 0.222 41.116);
      border-radius: 0.25rem;
      color: oklch(0.145 0 0);
    }

    @media (prefers-color-scheme: dark) {
      .usage-do {
        background-color: oklch(0.269 0 0);
        color: oklch(0.985 0 0);
      }
    }

    .usage-dont {
      padding: 0.75rem;
      background-color: oklch(0.97 0 0);
      border-left: 3px solid oklch(0.577 0.245 27.325);
      border-radius: 0.25rem;
      color: oklch(0.145 0 0);
    }

    @media (prefers-color-scheme: dark) {
      .usage-dont {
        background-color: oklch(0.269 0 0);
        color: oklch(0.985 0 0);
        border-left-color: oklch(0.704 0.191 22.216);
      }
    }

    .radius-section {
      margin-top: 3rem;
    }

    .radius-section h2 {
      margin-bottom: 1rem;
      color: oklch(0.145 0 0);
    }

    @media (prefers-color-scheme: dark) {
      .radius-section h2 {
        color: oklch(0.985 0 0);
      }
    }

    .radius-demo {
      margin-top: 1rem;
    }

    .radius-value {
      font-weight: 600;
      margin-bottom: 1rem;
      color: oklch(0.145 0 0);
    }

    @media (prefers-color-scheme: dark) {
      .radius-value {
        color: oklch(0.985 0 0);
      }
    }

    .radius-examples {
      display: grid;
      gap: 1rem;
    }

    .radius-box {
      padding: 2rem;
      background-color: oklch(0.97 0 0);
      border: 1px solid oklch(0.922 0 0);
      text-align: center;
      color: oklch(0.145 0 0);
    }

    @media (prefers-color-scheme: dark) {
      .radius-box {
        background-color: oklch(0.269 0 0);
        border-color: oklch(1 0 0 / 10%);
        color: oklch(0.985 0 0);
      }
    }
  `]
})
export class ThemingComponent {
  colorTokens: ColorToken[] = [
    {
      name: 'Background',
      property: 'background',
      lightOklch: 'oklch(1 0 0)',
      darkOklch: 'oklch(0.145 0 0)',
      description: 'The primary background color for the entire application.',
      usage: 'Main page backgrounds, content areas, modal backgrounds',
      avoidUsage: 'Text colors, borders, or interactive elements'
    },
    {
      name: 'Foreground',
      property: 'foreground',
      lightOklch: 'oklch(0.145 0 0)',
      darkOklch: 'oklch(0.985 0 0)',
      description: 'The primary text color that contrasts with the background.',
      usage: 'Body text, headings, primary content',
      avoidUsage: 'Backgrounds, subtle text, or decorative elements'
    },
    {
      name: 'Card',
      property: 'card',
      lightOklch: 'oklch(1 0 0)',
      darkOklch: 'oklch(0.205 0 0)',
      description: 'Background color for card components and elevated surfaces.',
      usage: 'Card backgrounds, panels, elevated containers',
      avoidUsage: 'Primary page backgrounds or text'
    },
    {
      name: 'Card Foreground',
      property: 'card-foreground',
      lightOklch: 'oklch(0.145 0 0)',
      darkOklch: 'oklch(0.985 0 0)',
      description: 'Text color for content within cards.',
      usage: 'Text and content inside card components',
      avoidUsage: 'Card backgrounds or borders'
    },
    {
      name: 'Popover',
      property: 'popover',
      lightOklch: 'oklch(1 0 0)',
      darkOklch: 'oklch(0.269 0 0)',
      description: 'Background color for popover elements and tooltips.',
      usage: 'Dropdown menus, tooltips, floating panels',
      avoidUsage: 'Main content areas or permanent UI elements'
    },
    {
      name: 'Popover Foreground',
      property: 'popover-foreground',
      lightOklch: 'oklch(0.145 0 0)',
      darkOklch: 'oklch(0.985 0 0)',
      description: 'Text color for content within popovers.',
      usage: 'Text inside dropdowns, tooltips, and popovers',
      avoidUsage: 'Popover backgrounds or decorative elements'
    },
    {
      name: 'Primary',
      property: 'primary',
      lightOklch: 'oklch(0.205 0 0)',
      darkOklch: 'oklch(0.922 0 0)',
      description: 'The primary brand color for key actions and interactive elements.',
      usage: 'Primary buttons, links, active states, brand elements',
      avoidUsage: 'Large background areas, body text, or subtle UI elements'
    },
    {
      name: 'Primary Foreground',
      property: 'primary-foreground',
      lightOklch: 'oklch(0.985 0 0)',
      darkOklch: 'oklch(0.205 0 0)',
      description: 'Text color that contrasts with the primary color.',
      usage: 'Text on primary buttons and primary-colored backgrounds',
      avoidUsage: 'Regular text or non-primary interactive elements'
    },
    {
      name: 'Secondary',
      property: 'secondary',
      lightOklch: 'oklch(0.97 0 0)',
      darkOklch: 'oklch(0.269 0 0)',
      description: 'Secondary color for less prominent actions and elements.',
      usage: 'Secondary buttons, alternative actions, background accents',
      avoidUsage: 'Primary actions, main content text, or critical alerts'
    },
    {
      name: 'Secondary Foreground',
      property: 'secondary-foreground',
      lightOklch: 'oklch(0.205 0 0)',
      darkOklch: 'oklch(0.985 0 0)',
      description: 'Text color for content on secondary backgrounds.',
      usage: 'Text on secondary buttons and secondary-colored elements',
      avoidUsage: 'Primary content or high-emphasis text'
    },
    {
      name: 'Muted',
      property: 'muted',
      lightOklch: 'oklch(0.97 0 0)',
      darkOklch: 'oklch(0.269 0 0)',
      description: 'Muted background color for subtle, less prominent areas.',
      usage: 'Disabled states, subtle backgrounds, code blocks',
      avoidUsage: 'Active elements, primary content, or important information'
    },
    {
      name: 'Muted Foreground',
      property: 'muted-foreground',
      lightOklch: 'oklch(0.556 0 0)',
      darkOklch: 'oklch(0.708 0 0)',
      description: 'Muted text color for secondary information.',
      usage: 'Helper text, placeholders, timestamps, metadata',
      avoidUsage: 'Primary headings, important actions, or critical information'
    },
    {
      name: 'Accent',
      property: 'accent',
      lightOklch: 'oklch(0.97 0 0)',
      darkOklch: 'oklch(0.371 0 0)',
      description: 'Accent color for highlighting and drawing attention.',
      usage: 'Hover states, selected items, highlighted content',
      avoidUsage: 'Primary actions, body text, or permanent highlights'
    },
    {
      name: 'Accent Foreground',
      property: 'accent-foreground',
      lightOklch: 'oklch(0.205 0 0)',
      darkOklch: 'oklch(0.985 0 0)',
      description: 'Text color for content on accent backgrounds.',
      usage: 'Text on accent-colored backgrounds and elements',
      avoidUsage: 'Regular body text or non-accented areas'
    },
    {
      name: 'Destructive',
      property: 'destructive',
      lightOklch: 'oklch(0.577 0.245 27.325)',
      darkOklch: 'oklch(0.704 0.191 22.216)',
      description: 'Color for destructive or error-related actions and states.',
      usage: 'Delete buttons, error messages, critical warnings',
      avoidUsage: 'Success messages, informational alerts, or standard actions'
    },
    {
      name: 'Border',
      property: 'border',
      lightOklch: 'oklch(0.922 0 0)',
      darkOklch: 'oklch(1 0 0 / 10%)',
      description: 'Default border color for dividers and outlines.',
      usage: 'Component borders, dividers, separators, outlines',
      avoidUsage: 'Thick borders, decorative elements, or primary focus indicators'
    },
    {
      name: 'Input',
      property: 'input',
      lightOklch: 'oklch(0.922 0 0)',
      darkOklch: 'oklch(1 0 0 / 15%)',
      description: 'Border color specifically for form inputs.',
      usage: 'Text fields, select boxes, form control borders',
      avoidUsage: 'Buttons, cards, or non-form-related borders'
    },
    {
      name: 'Ring',
      property: 'ring',
      lightOklch: 'oklch(0.708 0 0)',
      darkOklch: 'oklch(0.556 0 0)',
      description: 'Focus ring color for keyboard navigation and accessibility.',
      usage: 'Focus indicators, keyboard navigation highlights',
      avoidUsage: 'Permanent borders, decorative outlines, or hover states'
    },
    {
      name: 'Chart 1',
      property: 'chart-1',
      lightOklch: 'oklch(0.646 0.222 41.116)',
      darkOklch: 'oklch(0.488 0.243 264.376)',
      description: 'First color in the chart color palette.',
      usage: 'First data series in charts and graphs',
      avoidUsage: 'UI elements, text, or non-chart visualizations'
    },
    {
      name: 'Chart 2',
      property: 'chart-2',
      lightOklch: 'oklch(0.6 0.118 184.704)',
      darkOklch: 'oklch(0.696 0.17 162.48)',
      description: 'Second color in the chart color palette.',
      usage: 'Second data series in charts and graphs',
      avoidUsage: 'UI elements, text, or non-chart visualizations'
    },
    {
      name: 'Chart 3',
      property: 'chart-3',
      lightOklch: 'oklch(0.398 0.07 227.392)',
      darkOklch: 'oklch(0.769 0.188 70.08)',
      description: 'Third color in the chart color palette.',
      usage: 'Third data series in charts and graphs',
      avoidUsage: 'UI elements, text, or non-chart visualizations'
    },
    {
      name: 'Chart 4',
      property: 'chart-4',
      lightOklch: 'oklch(0.828 0.189 84.429)',
      darkOklch: 'oklch(0.627 0.265 303.9)',
      description: 'Fourth color in the chart color palette.',
      usage: 'Fourth data series in charts and graphs',
      avoidUsage: 'UI elements, text, or non-chart visualizations'
    },
    {
      name: 'Chart 5',
      property: 'chart-5',
      lightOklch: 'oklch(0.769 0.188 70.08)',
      darkOklch: 'oklch(0.645 0.246 16.439)',
      description: 'Fifth color in the chart color palette.',
      usage: 'Fifth data series in charts and graphs',
      avoidUsage: 'UI elements, text, or non-chart visualizations'
    },
    {
      name: 'Sidebar',
      property: 'sidebar',
      lightOklch: 'oklch(0.985 0 0)',
      darkOklch: 'oklch(0.205 0 0)',
      description: 'Background color for sidebar navigation.',
      usage: 'Sidebar backgrounds, navigation panels',
      avoidUsage: 'Main content area, modal backgrounds'
    },
    {
      name: 'Sidebar Foreground',
      property: 'sidebar-foreground',
      lightOklch: 'oklch(0.145 0 0)',
      darkOklch: 'oklch(0.985 0 0)',
      description: 'Text color for sidebar content.',
      usage: 'Sidebar navigation text, menu items',
      avoidUsage: 'Sidebar backgrounds, active states'
    },
    {
      name: 'Sidebar Primary',
      property: 'sidebar-primary',
      lightOklch: 'oklch(0.205 0 0)',
      darkOklch: 'oklch(0.488 0.243 264.376)',
      description: 'Primary color for sidebar interactive elements.',
      usage: 'Active sidebar items, primary sidebar actions',
      avoidUsage: 'Sidebar background, inactive menu items'
    },
    {
      name: 'Sidebar Primary Foreground',
      property: 'sidebar-primary-foreground',
      lightOklch: 'oklch(0.985 0 0)',
      darkOklch: 'oklch(0.985 0 0)',
      description: 'Text color for primary sidebar elements.',
      usage: 'Text on active/primary sidebar items',
      avoidUsage: 'Inactive sidebar text, backgrounds'
    },
    {
      name: 'Sidebar Accent',
      property: 'sidebar-accent',
      lightOklch: 'oklch(0.97 0 0)',
      darkOklch: 'oklch(0.269 0 0)',
      description: 'Accent color for sidebar hover and focus states.',
      usage: 'Sidebar hover states, focused menu items',
      avoidUsage: 'Active states, permanent highlights'
    },
    {
      name: 'Sidebar Accent Foreground',
      property: 'sidebar-accent-foreground',
      lightOklch: 'oklch(0.205 0 0)',
      darkOklch: 'oklch(0.985 0 0)',
      description: 'Text color for accented sidebar elements.',
      usage: 'Text on hovered/focused sidebar items',
      avoidUsage: 'Active item text, sidebar backgrounds'
    },
    {
      name: 'Sidebar Border',
      property: 'sidebar-border',
      lightOklch: 'oklch(0.922 0 0)',
      darkOklch: 'oklch(1 0 0 / 10%)',
      description: 'Border color for sidebar dividers and separators.',
      usage: 'Sidebar borders, menu separators',
      avoidUsage: 'Content borders, focus indicators'
    },
    {
      name: 'Sidebar Ring',
      property: 'sidebar-ring',
      lightOklch: 'oklch(0.708 0 0)',
      darkOklch: 'oklch(0.439 0 0)',
      description: 'Focus ring color for sidebar interactive elements.',
      usage: 'Focus indicators for sidebar navigation items',
      avoidUsage: 'Permanent borders, hover states'
    }
  ];

  oklchToCss(oklch: string): string {
    return oklch;
  }
}
