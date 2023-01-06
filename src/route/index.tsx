import type {
  DatePickerOptions,
  DatePickerInputElement,
  RangePickerOptions,
  RangePickerInputElement,
} from "react-temporal-picker";
import type { DatePickerProps, RouteDatePickerProps } from "./date";
import type { RangePickerProps, RouteRangePickerProps } from "./range";
import RouteDatePicker, { DatePicker } from "./date";
import RouteRangePicker, { RangePicker } from "./range";

export type {
  DatePickerProps,
  RangePickerProps,
  DatePickerOptions,
  DatePickerInputElement,
  RouteDatePickerProps,
  RouteRangePickerProps,
  RangePickerOptions,
  RangePickerInputElement,
};
export { DatePicker, RangePicker, RouteDatePicker, RouteRangePicker };
export default RouteDatePicker;
