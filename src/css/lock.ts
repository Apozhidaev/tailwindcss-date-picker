export const lockCss: string = `
:host {
  --color-fg-locked: #9e9e9e;
  --color-bg-locked: #ffab91;
  --color-bg-unavailable: #f9f9f9;
}
.container.lock-plugin
  .calendars
  .calendar:first-child
  > .header.no-previous-month
  .previous-button,
.container.lock-plugin
  .calendars
  .calendar:last-child
  > .header.no-next-month
  .next-button {
  visibility: hidden;
}
.container.lock-plugin .calendar > .days-grid > .day.not-available {
  background-color: var(--color-bg-unavailable);
  color: var(--color-fg-locked);
  font-style: italic;
  pointer-events: none;
}
.container.lock-plugin .calendar > .days-grid > .day.locked {
  background-color: transparent;
  border: 1px solid var(--color-border-locked);
  color: var(--color-fg-locked);
  pointer-events: none;
}
.container.lock-plugin
  .calendar
  > .days-grid
  > .day.locked:not(.start):not(.end) {
  background-image: repeating-linear-gradient(
    135deg,
    transparent,
    var(--color-bg-locked) 2px,
    transparent 2px,
    transparent 4px
  );
  font-style: italic;
}
.container.lock-plugin .preset-plugin-container > button:disabled {
  color: var(--color-fg-locked);
  pointer-events: none;
}
`;