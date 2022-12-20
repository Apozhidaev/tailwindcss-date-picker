import classNames from "classnames";
import React, { useMemo, memo } from "react";
import useEvent from "react-use-event-hook";
import EasePicker, {
  EasePickOptions,
  AmpPlugin,
  LockPlugin,
  DateTime,
  Core,
} from "react-easepick";

const css = `
:host {
  --color-bg-default: #fff;
  --color-bg-secondary: #f9f9f9;
  --color-fg-default: #333;
  --color-fg-primary: var(--ease-color-fg-primary, #2e6fda);
  --color-fg-secondary: #748194;
  --color-fg-selected: #fff;
  --color-fg-muted: #9e9e9e;
  --color-fg-accent: #e63757;
  --color-btn-primary-bg: var(--ease-color-btn-primary-bg, #2e6fda);
  --color-btn-primary-fg: var(--ease-color-btn-primary-fg, #fff);
  --color-btn-primary-border: var(--ease-color-btn-primary-border, #2e6fda);
  --color-btn-primary-hover-bg: var(--ease-color-btn-primary-hover-bg, #2e6fda);
  --color-btn-primary-hover-fg: #fff;
  --color-btn-primary-hover-border: var(--ease-color-btn-primary-hover-border, #2e6fda);
  --color-btn-primary-disabled-bg: var(--ease-color-btn-primary-disabled-bg, #80aff8);
  --color-btn-primary-disabled-fg: #fff;
  --color-btn-primary-disabled-border: var(--ease-color-btn-primary-disabled-border, #80aff8);;
  --color-btn-secondary-bg: #fff;
  --color-btn-secondary-fg: #748194;
  --color-btn-secondary-border: #748194;
  --color-btn-secondary-hover-bg: #748194;
  --color-btn-secondary-hover-fg: #fff;
  --color-btn-secondary-hover-border: #748194;
  --color-btn-secondary-disabled-bg: #b5bbc4;
  --color-btn-secondary-disabled-fg: #fff;
  --color-btn-secondary-disabled-border: #b5bbc4;
  --color-border-default: #ddd;
  --color-border-locked: #f9f9f9;
  --day-width: 42px;
  --day-height: 37px;
  --border-radius: 2px;
  --primary-color: var(--ease-primary-color, #2e6fda);
  --secondary-color: #748194;
  --white-color: #fff;
  --black-color: #333;
  --lightgray-color: #f9f9f9;
  --gray-color: #9e9e9e;
  --red-color: #e63757;
}
.container[data-theme="dark"] {
  --color-bg-default: #22272e;
  --color-bg-secondary: #2d333b;
  --color-bg-locked: #ec775c;
  --color-bg-unavailable: #545d68;
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
* {
  box-sizing: border-box;
}
.container {
  border-radius: 4px;
  color: var(--color-fg-default);
  cursor: default;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
  font-size: 0.8em;
  height: 0;
  overflow: hidden;
  pointer-events: all;
  position: absolute;
  transform: scale(0);
  transform-origin: top left;
  transition: transform 0.3s ease-out;
}
.container.calc {
  height: auto;
  transform: none;
  transition: none;
  visibility: hidden;
}
.container.show {
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  height: auto;
  transform: scale(1);
}
.container.inline {
  box-shadow: 0 7px 14px 0 rgba(65, 69, 88, 0.1),
    0 3px 6px 0 rgba(0, 0, 0, 0.07);
  height: auto;
  left: 0;
  position: relative;
  top: 0;
  transform: scaleY(1);
}
.container > main {
  background-color: var(--color-bg-default);
}
.container > footer,
.container > header {
  background-color: var(--color-bg-secondary);
  padding: 10px;
}
.container > footer .footer-buttons {
  -moz-column-gap: 5px;
  column-gap: 5px;
  display: flex;
  justify-content: flex-end;
}
.container > footer .footer-buttons > button {
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  cursor: pointer;
  padding: 5px 10px;
}
.container > footer .footer-buttons > button.apply-button {
  background-color: var(--color-btn-primary-bg);
  border-color: var(--color-btn-primary-border);
  color: var(--color-btn-primary-fg);
}
.container > footer .footer-buttons > button.apply-button:hover {
  background-color: var(--color-btn-primary-hover-bg);
  border-color: var(--color-btn-primary-hover-border);
  color: var(--color-btn-primary-hover-fg);
}
.container > footer .footer-buttons > button.apply-button:disabled {
  background-color: var(--color-btn-primary-disabled-bg);
  border-color: var(--color-btn-primary-disabled-border);
  color: var(--color-btn-primary-disabled-fg);
  cursor: default;
}
.container > footer .footer-buttons > button.cancel-button {
  background-color: var(--color-btn-secondary-bg);
  border-color: var(--color-btn-secondary-border);
  color: var(--color-btn-secondary-fg);
}
.container > footer .footer-buttons > button.cancel-button:hover {
  background-color: var(--color-btn-secondary-hover-bg);
  border-color: var(--color-btn-secondary-hover-border);
  color: var(--color-btn-secondary-hover-fg);
}
.container > footer .footer-buttons > button.cancel-button:disabled {
  background-color: var(--color-btn-secondary-disabled-bg);
  border-color: var(--color-btn-secondary-disabled-border);
  color: var(--color-btn-secondary-disabled-fg);
  cursor: default;
}
.grid-1 {
  grid-template-columns: repeat(1, 1fr);
}
.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}
.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}
.grid-4 {
  grid-template-columns: repeat(4, 1fr);
}
.grid-5 {
  grid-template-columns: repeat(5, 1fr);
}
.grid-6 {
  grid-template-columns: repeat(6, 1fr);
}
.grid-7 {
  grid-template-columns: repeat(7, 1fr);
}
.grid-8 {
  grid-template-columns: repeat(8, 1fr);
}
.grid-9 {
  grid-template-columns: repeat(9, 1fr);
}
.grid-10 {
  grid-template-columns: repeat(10, 1fr);
}
.grid-11 {
  grid-template-columns: repeat(11, 1fr);
}
.grid-12 {
  grid-template-columns: repeat(12, 1fr);
}
.calendars {
  display: grid;
}
.calendars:not(.grid-1) .calendar > .header .month-name {
  order: 2;
  text-align: center;
}
.calendars:not(.grid-1) .calendar > .header .previous-button {
  order: 1;
  visibility: hidden;
}
.calendars:not(.grid-1) .calendar > .header .next-button {
  order: 3;
  visibility: hidden;
}
.calendars:not(.grid-1) .calendar:first-child > .header .previous-button,
.calendars:not(.grid-1) .calendar:last-child > .header .next-button {
  visibility: visible;
}
.calendar {
  padding: 10px;
}
.calendar > .header {
  align-items: center;
  -moz-column-gap: 5px;
  column-gap: 5px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.calendar > .header .month-name {
  flex: 1;
  font-size: 15px;
  font-weight: 500;
}
.calendar > .header .month-name > span {
  font-weight: 700;
}
.calendar > .header button {
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 2px;
  color: var(--color-btn-secondary-fg);
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 4px 7px;
}
.calendar > .header button:hover {
  background-color: var(--color-bg-secondary);
}
.calendar > .header button:hover > img,
.calendar > .header button:hover > svg {
  fill: var(--color-fg-primary);
  color: var(--color-fg-primary);
}
.calendar > .header button > img,
.calendar > .header button > svg {
  fill: var(--color-btn-secondary-fg);
  color: var(--color-btn-secondary-fg);
  pointer-events: none;
  transform: scale(0.7);
}
.calendar > .daynames-row,
.calendar > .days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 2px;
}
.calendar > .daynames-row > .day,
.calendar > .daynames-row > .dayname,
.calendar > .days-grid > .day,
.calendar > .days-grid > .dayname {
  align-items: center;
  cursor: default;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  justify-content: center;
}
.calendar > .daynames-row > .dayname {
  color: var(--color-fg-muted);
  font-size: 12px;
  padding: 5px 0;
}
.calendar > .days-grid > .day {
  border: 1px solid transparent;
  border-radius: 2px;
  height: var(--day-height);
  max-height: var(--day-height);
  max-width: var(--day-width);
  min-height: var(--day-height);
  min-width: var(--day-width);
  padding: 10px 0;
  width: var(--day-width);
}
.calendar > .days-grid > .day:hover {
  border: 1px solid var(--color-fg-primary);
  color: var(--color-fg-primary);
}
.calendar > .days-grid > .day.today {
  color: var(--color-fg-accent);
}
.calendar > .days-grid > .day.selected {
  background-color: var(--color-fg-primary);
  color: var(--color-fg-selected);
}
@media (max-width: 480px) {
  .container:not(.inline) {
    transform: scaleY(0) !important;
    transform-origin: bottom center !important;
  }
  .container:not(.inline).show {
    bottom: 0 !important;
    left: 0 !important;
    position: fixed !important;
    right: 0 !important;
    top: auto !important;
    transform: scaleY(1) !important;
  }
  .container {
    width: 100%;
  }
  .calendars {
    grid-template-columns: repeat(1, 1fr);
  }
  .calendars .calendar {
    box-sizing: border-box;
    width: 100%;
  }
  .calendars .calendar:nth-child(n + 2) {
    display: none;
  }
  .calendars .calendar > .days-grid > .day {
    height: auto;
    max-height: unset;
    max-width: unset;
    min-height: unset;
    min-width: unset;
    width: auto;
  }
  .calendars .calendar > .header:not(.no-next-month) .next-button {
    visibility: visible;
  }
}
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
.container > main:not([class*="preset-"]) {
  flex-direction: column;
}
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
`;

type SomeDate = string | number | Date;

type Props = {
  className?: string;
  date?: SomeDate;
  minDate?: SomeDate;
  maxDate?: SomeDate;
  onSelect: (date: string) => void;
  format?: string;
  placeholder?: string;
  position?: "left" | "right";
};

function adjustLeftPosition(picker: Core) {
  const rect = (picker.options.element as HTMLElement).getBoundingClientRect();
  const wrapper = picker.ui.wrapper.getBoundingClientRect();

  picker.ui.container.classList.add("calc");
  const container = picker.ui.container.getBoundingClientRect();
  picker.ui.container.classList.remove("calc");

  return rect.left - wrapper.left - container.width + rect.width;
}

export function DatePickerInput({
  className,
  date,
  minDate,
  maxDate,
  onSelect,
  format = "DD MMM, YYYY",
  placeholder,
  position,
}: Props) {
  const handleSelect = useEvent(onSelect);
  const options: EasePickOptions = useMemo(
    () => ({
      css,
      format,
      AmpPlugin: {
        dropdown: {
          months: true,
          years: true,
          minYear: minDate ? new DateTime(minDate).getFullYear() : undefined,
          maxYear: maxDate ? new DateTime(maxDate).getFullYear() : undefined,
        },
        resetButton: true,
        darkMode: false,
        locale: {
          resetButton: "DEL",
        },
      },
      LockPlugin: {
        minDate,
        maxDate,
      },
      plugins: [
        AmpPlugin,
        LockPlugin,
      ],
      setup(picker) {
        picker.on("select", (e) => {
          const { date } = e.detail;
          handleSelect(
            new DateTime(date).format("YYYY-MM-DD"),
          );
        });
        picker.on("clear", () => {
          handleSelect("");
          picker.hide();
        });
        picker.on("show", () => {
          if (position === "right") {
            picker.ui.container.style.left = `${adjustLeftPosition(picker)}px`;
          }
        });
      },
    }),
    [
      String(date),
      String(minDate),
      String(maxDate),
      position,
    ]
  );

  return (
    <EasePicker
      className={className}
      placeholder={placeholder}
      options={options}
    />
  );
}

function DatePicker(props: Props & { filter?: boolean }) {
  const { className, filter, ...inputProps } = props;
  return (
    <div className={classNames("relative", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
      <DatePickerInput
        {...inputProps}
        className={classNames(
          "pl-10 pr-1 form-control form-date-picker",
          filter ? "form-filter" : ""
        )}
      />
    </div>
  );
}

export default memo(DatePicker);
