import classNames from "classnames";
import React, { memo } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import {
  DatePicker as DatePickerInput,
  DatePickerProps as DatePickerInputProps,
} from "react-ease-picker";

export type DatePickerProps = DatePickerInputProps & { filter?: boolean };

function DatePicker({ className, filter, ...inputProps }: DatePickerProps) {
  return (
    <div className={classNames("relative", className)}>
      <CalendarIcon className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0" />
      <DatePickerInput
        {...inputProps}
        className={classNames(
          "pl-10 pr-1 form-input form-input-date-picker",
          filter ? "form-input-filter" : ""
        )}
      />
    </div>
  );
}

export default memo(DatePicker);
