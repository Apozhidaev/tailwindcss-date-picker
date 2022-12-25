import React, { memo } from "react";
import { useSearchParams } from "react-router-dom";
import DatePicker, { DatePickerProps as Props } from "../date";

export type DatePickerProps = Omit<Props, "date" | "onSelect"> & {
  filterName: string;
  emptyValue?: boolean;
};

function RouteDatePicker({ filterName, emptyValue, ...rest }: DatePickerProps) {
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

export default memo(RouteDatePicker);
