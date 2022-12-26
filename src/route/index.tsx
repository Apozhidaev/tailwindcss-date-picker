import type { DatePickerProps, RouteDatePickerProps } from "./date";
import type { RangePickerProps, RouteRangePickerProps } from "./range";
import RouteDatePicker, { DatePicker } from "./date";
import RouteRangePicker, { RangePicker } from "./range";

export type {
  DatePickerProps,
  RangePickerProps,
  RouteDatePickerProps,
  RouteRangePickerProps,
};
export { DatePicker, RangePicker, RouteDatePicker, RouteRangePicker };
export default RouteDatePicker;
