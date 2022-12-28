import React, { memo } from "react";
import { useSearchParams } from "react-router-dom";
import type { DatePickerProps } from "../date";
import DatePicker from "../date";

export type RouteDatePickerProps = Omit<
  DatePickerProps,
  "date" | "onSelect"
> & {
  filterName: string;
  defaultDate?: string;
};

function RouteDatePicker({
  filterName,
  defaultDate = "",
  filter,
  ...rest
}: RouteDatePickerProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const date = searchParams.has(filterName)
    ? searchParams.get(filterName)
    : defaultDate;

  const onSelect = (value: string) => {
    searchParams.delete(filterName);

    if (value !== defaultDate) {
      searchParams.set(filterName, value);
    }

    setSearchParams(searchParams, { replace: true });
  };

  return (
    <DatePicker
      {...rest}
      date={date || ""}
      onSelect={onSelect}
      filter={filter === undefined ? searchParams.has(filterName) : filter}
    />
  );
}

export type { DatePickerProps };
export { DatePicker };
export default memo(RouteDatePicker);
