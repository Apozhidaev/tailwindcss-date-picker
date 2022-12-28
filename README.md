# tailwindcss-date-picker

DatePicker and RangePicker base on [react-ease-picker](https://www.npmjs.com/package/react-ease-picker).

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
        minDate="2020-01-01"
        maxDate="2023-01-01"
        onSelect={(date) => {
          console.log(date);
        }}
      />
      <RangePicker
        onSelect={(start, end) => {
          console.log(start, end);
        }}
        presets={[
          {
            label: "Last Week",
            startDate: "2022-01-01",
            endDate: "2023-01-01",
          },
          {
            label: "Last Month",
            startDate: "2021-01-01",
            endDate: "2023-01-01",
          },
        ]}
        position="right"
      />
    </div>
  );
}

export default App;

```
 
### Props

```typescript
type DatePickerProps = {
  className?: string;
  minDate?: string;
  maxDate?: string;
  format?: string;
  placeholder?: string;
  position?: "left" | "right";
  resetButton?: boolean;
  firstDay?: number;
  lang?: string;
  zIndex?: number;
  scrollToDate?: boolean;
  documentClick?: boolean | (() => void);
  autoApply?: boolean;
  cancelText?: string;
  applyText?: string;
  filter?: boolean;
  date?: string;
  onSelect: (date: string) => void;
}

type RangePickerPreset = {
  label: string;
  startDate?: string;
  endDate?: string;
};

type RangePickerProps = {
  className?: string;
  minDate?: string;
  maxDate?: string;
  format?: string;
  placeholder?: string;
  position?: "left" | "right";
  resetButton?: boolean;
  firstDay?: number;
  lang?: string;
  zIndex?: number;
  scrollToDate?: boolean;
  documentClick?: boolean | (() => void);
  autoApply?: boolean;
  cancelText?: string;
  applyText?: string;
  filter?: boolean;
  presets?: RangePickerPreset[];
  startDate?: string;
  endDate?: string;
  onSelect: (start: string, end: string) => void;
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
  defaultDate?: string;
  className?: string;
  minDate?: string;
  maxDate?: string;
  format?: string;
  placeholder?: string;
  position?: "left" | "right";
  resetButton?: boolean;
  firstDay?: number;
  lang?: string;
  zIndex?: number;
  scrollToDate?: boolean;
  documentClick?: boolean | (() => void);
  autoApply?: boolean;
  cancelText?: string;
  applyText?: string;
  filter?: boolean;
}

type RangePickerProps = {
  startFilterName: string;
  endFilterName: string;
  defaultStartDate?: string;
  defaultEndDate?: string;
  className?: string;
  minDate?: string;
  maxDate?: string;
  format?: string;
  placeholder?: string;
  position?: "left" | "right";
  resetButton?: boolean;
  firstDay?: number;
  lang?: string;
  zIndex?: number;
  scrollToDate?: boolean;
  documentClick?: boolean | (() => void);
  autoApply?: boolean;
  cancelText?: string;
  applyText?: string;
  presets?: RangePickerPreset[];
  filter?: boolean;
};

```

## Customize
```css
:root {
  --ease-color-bg-default: #fff;
  --ease-color-bg-secondary: #f3f4f6;
  --ease-color-fg-default: #1e293b;
  --ease-color-fg-primary: #2e6fda;
  --ease-color-fg-secondary: #64748b;
  --ease-color-fg-selected: #fff;
  --ease-color-fg-muted: #64748b;
  --ease-color-fg-accent: #e63757;
  --ease-color-btn-primary-bg: #2e6fda;
  --ease-color-btn-primary-fg: #fff;
  --ease-color-btn-primary-border: #2e6fda;
  --ease-color-btn-primary-hover-bg: #2c67cd;
  --ease-color-btn-primary-hover-fg: #fff;
  --ease-color-btn-primary-hover-border: #2c67cd;
  --ease-color-btn-primary-disabled-bg: #80aff8;
  --ease-color-btn-primary-disabled-fg: #fff;
  --ease-color-btn-primary-disabled-border: #80aff8;
  --ease-color-btn-secondary-bg: #fff;
  --ease-color-btn-secondary-fg: #475569;
  --ease-color-btn-secondary-border: #cbd5e1;
  --ease-color-btn-secondary-hover-bg: #64748b;
  --ease-color-btn-secondary-hover-fg: #fff;
  --ease-color-btn-secondary-hover-border: #64748b;
  --ease-color-btn-secondary-disabled-bg: #cbd5e1;
  --ease-color-btn-secondary-disabled-fg: #fff;
  --ease-color-btn-secondary-disabled-border: #cbd5e1;
  --ease-color-border-default: #cbd5e1;
  --ease-color-border-locked: #f9f9f9;
  --ease-day-width: 43px;
  --ease-day-height: 37px;
  --ease-z-index: 40;
  --ease-border-radius: 2px;
  --ease-primary-color: #2e6fda;
  --ease-secondary-color: #64748b;
  --ease-font-family: inherit;
  --ease-box-shadow: 0 4px 28px 0 rgb(0 0 0 / 12%);
  --ease-month-name-font-weight: 700;
  --ease-color-fg-locked: #9e9e9e;
  --ease-color-bg-locked: #ffab91;
  --ease-color-bg-unavailable: #f9f9f9;
}
```
