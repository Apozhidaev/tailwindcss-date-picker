import type {
  DatePickerOptions,
  DatePickerInputElement,
  RangePickerOptions,
  RangePickerInputElement,
} from "react-temporal-picker";
import type { DatePickerProps } from "./date";
import type { RangePickerProps } from "./range";
import DatePicker from "./date";
import RangePicker from "./range";

export type {
  DatePickerProps,
  DatePickerOptions,
  DatePickerInputElement,
  RangePickerProps,
  RangePickerOptions,
  RangePickerInputElement,
};
export { DatePicker, RangePicker };
export default DatePicker;
