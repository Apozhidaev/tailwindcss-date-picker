export const ampCss = /* css */ `
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
  outline: none;
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
`;