export const ampCss: string = `
.container.amp-plugin .calendars .calendar > .header .month-name {
  align-items: center;
  -moz-column-gap: 5px;
  column-gap: 5px;
  display: flex;
  justify-content: center;
}
.container.amp-plugin .calendars .calendar > .header .month-name select {
  border: none;
  font-size: 14px;
  padding: 3px;
}
.container.amp-plugin
  .calendars
  .calendar
  > .header
  .month-name
  select.month-name--dropdown {
  font-weight: 700;
}
.container.amp-plugin .calendars .calendar > .header .reset-button {
  order: 4;
}
.container.amp-plugin
  .calendars.calendars:not(.grid-1)
  .calendar
  > .header
  .reset-button {
  visibility: hidden;
}
.container.amp-plugin
  .calendars.calendars:not(.grid-1)
  .calendar:last-child
  > .header
  .reset-button {
  visibility: visible;
}
.container.amp-plugin.week-numbers .calendar > .daynames-row,
.container.amp-plugin.week-numbers .calendar > .days-grid {
  grid-template-columns: 30px repeat(7, 1fr);
}
.container.amp-plugin.week-numbers .calendar > .daynames-row .wnum-header,
.container.amp-plugin.week-numbers .calendar > .daynames-row .wnum-item,
.container.amp-plugin.week-numbers .calendar > .days-grid .wnum-header,
.container.amp-plugin.week-numbers .calendar > .days-grid .wnum-item {
  align-items: center;
  color: var(--color-fg-muted);
  display: flex;
  font-size: 12px;
  justify-content: center;
}
.container[data-theme="dark"] {
  --color-bg-default: #22272e;
  --color-bg-secondary: #2d333b;
  --color-bg-inrange: #2c542e;
  --color-bg-locked: #ec775c;
  --color-bg-unavailable: #545d68;
  --color-bg-tooltip: #9e9e9e;
  --color-fg-default: #adbac7;
  --color-fg-primary: #46954a;
  --color-fg-secondary: #202122;
  --color-fg-muted: #9e9e9e;
  --color-fg-accent: #ec775c;
  --color-fg-locked: #9e9e9e;
  --color-btn-primary-bg: #2d333b;
  --color-btn-primary-fg: #46954a;
  --color-btn-primary-border: #46954a;
  --color-btn-primary-hover-bg: #46954a;
  --color-btn-primary-hover-fg: #fff;
  --color-btn-primary-hover-border: #46954a;
  --color-btn-secondary-bg: #2d333b;
  --color-btn-secondary-fg: #adbac7;
  --color-btn-secondary-border: #adbac7;
  --color-btn-secondary-hover-bg: #adbac7;
  --color-btn-secondary-hover-fg: #202122;
  --color-btn-secondary-hover-border: #adbac7;
  --color-border-default: #373e47;
  --color-border-locked: #2d333b;
}
`;