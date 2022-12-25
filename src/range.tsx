import classNames from "classnames";
import React, { memo } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import {
  RangePicker as RangePickerInput,
  RangePickerProps as RangePickerInputProps,
} from "react-ease-picker";

export type RangePickerProps = RangePickerInputProps & { filter?: boolean };

function RangePicker({ className, filter, ...inputProps }: RangePickerProps) {
  return (
    <div className={classNames("relative", className)}>
      <CalendarIcon className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0" />
      <RangePickerInput
        {...inputProps}
        className={classNames(
          "pl-10 pr-1 form-control form-range-picker",
          filter ? "form-filter" : ""
        )}
      />
    </div>
  );
}

export default memo(RangePicker);
