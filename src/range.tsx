import classNames from "classnames";
import React, { memo, useMemo } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import {
  RangePicker as RangePickerInput,
  RangePickerProps as RangePickerInputProps,
  RangePickerOptions,
} from "react-temporal-picker";

export type RangePickerProps = RangePickerInputProps & { filter?: boolean };

function RangePicker({
  className,
  filter,
  placeholder = "Start date – End date",
  ...inputProps
}: RangePickerProps) {
  const options: RangePickerOptions = useMemo(() => {
    return {
      ...inputProps.options,
      rangeOptions: {
        delimiter: " – ",
        ...inputProps.options?.rangeOptions,
      },
      extraOptions: {
        dropdown: {
          months: true,
          years: true,
          ...inputProps.options?.extraOptions?.dropdown,
        },
        resetButton: true,
        ...inputProps.options?.extraOptions,
      },
    };
  }, [inputProps.options]);
  return (
    <div className={classNames("relative", className)}>
      <CalendarIcon className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0" />
      <RangePickerInput
        {...inputProps}
        placeholder={placeholder}
        options={options}
        className={classNames(
          "pl-10 pr-1 form-input form-input-range-picker",
          filter ? "form-input-filter" : ""
        )}
      />
    </div>
  );
}

export default memo(RangePicker);
