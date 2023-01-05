# tailwindcss-date-picker

DatePicker and RangePicker base on [react-temporal-picker](https://www.npmjs.com/package/react-temporal-picker).

## How to Use

Step 1.
```bash
npm i @tailwind-rc/date-picker
```

Step 2.

Add to `tailwind.config.cjs`
```diff
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
+   "./node_modules/@tailwind-rc/**/*.{js,ts,jsx,tsx}",
],
```

Step 3.
```jsx
import { DatePicker, RangePicker } from "@tailwind-rc/date-picker";

function App() {
  return (
    <div className="p-10 grid grid-cols-2 gap-4">
      <DatePicker
        onSelect={(date) => {
          console.log(date);
        }}
        filter
      />
      <RangePicker
        onSelect={(start, end) => {
          console.log(start, end);
        }}
        options={{
          position: "right",
          lockOptions: {
            minDate: "2020-01-01"
          },
          presetOptions: {
            presets: [
              {
                label: "Last Week",
                start: "2022-01-01",
                end: "2023-01-01",
              },
              {
                label: "Last Month",
                start: "2021-01-01",
                end: "2023-01-01",
              },
              {
                label: "Last Year",
                start: "2019-01-01",
                end: "2023-01-01",
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default App;

```
 
### Props

```typescript
type DatePickerProps = {
  date?: string;
  value?: string;
  onSetup?: (picker: PlainPicker) => void;
  onSelect?: (date: string) => void;
  onClear?: () => void;
  options?: DatePickerOptions;
  filter?: boolean;
};

type RangePickerProps = {
  startDate?: string;
  endDate?: string;
  value?: string;
  onSetup?: (picker: PlainPicker) => void;
  onSelect?: (start: string, end: string) => void;
  onClear?: () => void;
  options: RangePickerOptions;
  filter?: boolean;
};
```

## Use with React Router

```bash
npm i react-router-dom
```

```jsx
import { RouteDatePicker, RouteRangePicker } from "@tailwind-rc/date-picker/route";

```

### Props

```typescript
type DatePickerProps = {
  filterName: string;
  defaultDate?: string; // yyyy-mm-dd
  onSetup?: (picker: PlainPicker) => void;
  onSelect?: (date: string) => void;
  onClear?: () => void;
  options?: DatePickerOptions;
  filter?: boolean;
};

type RangePickerProps = {
  startFilterName: string;
  endFilterName: string;
  defaultStartDate?: string; // yyyy-mm-dd
  defaultEndDate?: string; // yyyy-mm-dd
  onSetup?: (picker: PlainPicker) => void;
  onSelect?: (start: string, end: string) => void;
  onClear?: () => void;
  options: RangePickerOptions;
  filter?: boolean;
};
```

## Customize
```css
:root {
  --temporal-picker-color-bg-default: #fff;
  --temporal-picker-color-bg-secondary: #f2f5f8;
  --temporal-picker-color-fg-default: #1e293b;
  --temporal-picker-color-fg-primary: #2e6fda;
  --temporal-picker-color-fg-secondary: #64748b;
  --temporal-picker-color-fg-selected: #fff;
  --temporal-picker-color-fg-muted: #64748b;
  --temporal-picker-color-fg-accent: #e63757;
  --temporal-picker-color-btn-primary-bg: #2e6fda;
  --temporal-picker-color-btn-primary-fg: #fff;
  --temporal-picker-color-btn-primary-border: #2e6fda;
  --temporal-picker-color-btn-primary-hover-bg: #2c67cd;
  --temporal-picker-color-btn-primary-hover-fg: #fff;
  --temporal-picker-color-btn-primary-hover-border: #2c67cd;
  --temporal-picker-color-btn-primary-disabled-bg: #80aff8;
  --temporal-picker-color-btn-primary-disabled-fg: #fff;
  --temporal-picker-color-btn-primary-disabled-border: #80aff8;
  --temporal-picker-color-btn-secondary-bg: #fff;
  --temporal-picker-color-btn-secondary-fg: #475569;
  --temporal-picker-color-btn-secondary-border: #cbd5e1;
  --temporal-picker-color-btn-secondary-hover-bg: #f8fafc;
  --temporal-picker-color-btn-secondary-hover-fg: #475569;
  --temporal-picker-color-btn-secondary-hover-border: #cbd5e1;
  --temporal-picker-color-btn-secondary-disabled-bg: #cbd5e1;
  --temporal-picker-color-btn-secondary-disabled-fg: #fff;
  --temporal-picker-color-btn-secondary-disabled-border: #cbd5e1;
  --temporal-picker-color-border-default: #cbd5e1;
  --temporal-picker-color-border-locked: #f9f9f9;
  --temporal-picker-day-width: 43px;
  --temporal-picker-day-height: 37px;
  --temporal-picker-z-index: 40;
  --temporal-picker-border-radius: 2px;
  --temporal-picker-primary-color: #2e6fda;
  --temporal-picker-secondary-color: #64748b;
  --temporal-picker-font-family: inherit;
  --temporal-picker-box-shadow: 0 4px 28px 0 rgb(0 0 0 / 12%);
  --temporal-picker-month-name-font-weight: 700;
  --temporal-picker-focus-color: #94a3b8;
  --temporal-picker-select-outline-color: #e5e7eb;
  --temporal-picker-color-fg-locked: #9e9e9e;
  --temporal-picker-color-bg-locked: #ffab91;
  --temporal-picker-color-bg-unavailable: #f9f9f9;
  --temporal-picker-color-bg-inrange: #e6effe;
  --temporal-picker-color-bg-tooltip: #fff;
  --temporal-picker-color-fg-tooltip: #1e293b;
}
```
