import classNames from "classnames";
import merge from "lodash.merge";
import React, { memo, useMemo } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import {
  RangePicker as RangePickerInput,
  RangePickerProps as RangePickerInputProps,
  RangePickerOptions,
} from "react-temporal-picker";

export type RangePickerProps = RangePickerInputProps & {
  filter?: boolean;
  defaultOptions?: RangePickerOptions;
};

function RangePicker({
  className,
  filter,
  defaultOptions,
  placeholder = "Start date – End date",
  ...inputProps
}: RangePickerProps) {
  const options: RangePickerOptions = useMemo(() => {
    return merge(
      {
        rangeOptions: {
          delimiter: " – ",
        },
        extraOptions: {
          dropdown: {
            months: true,
            years: true,
          },
          resetButton: true,
        },
      },
      defaultOptions,
      inputProps.options
    );
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
