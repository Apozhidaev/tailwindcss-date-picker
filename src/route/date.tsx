import React, { memo } from "react";
import { useSearchParams } from "react-router-dom";
import type { DatePickerProps } from "../date";
import DatePicker from "../date";

export type RouteDatePickerProps = Omit<
  DatePickerProps,
  "date" | "onSelect"
> & {
  filterName: string;
  emptyValue?: boolean;
};

function RouteDatePicker({
  filterName,
  emptyValue,
  ...rest
}: RouteDatePickerProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const date = searchParams.get(filterName) || "";

  const onSelect = (value: string) => {
    searchParams.delete(filterName);

    if (value || emptyValue) {
      searchParams.set(filterName, value);
    }

    setSearchParams(searchParams, { replace: true });
  };

  return <DatePicker {...rest} date={date} onSelect={onSelect} />;
}

export type { DatePickerProps };
export { DatePicker };
export default memo(RouteDatePicker);
