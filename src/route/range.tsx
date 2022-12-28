import React, { memo } from "react";
import { useSearchParams } from "react-router-dom";
import type { RangePickerProps } from "../range";
import RangePicker from "../range";

export type RouteRangePickerProps = Omit<
  RangePickerProps,
  "startDate" | "endDate" | "onSelect"
> & {
  startFilterName: string;
  endFilterName: string;
  emptyValue?: boolean;
};

function RouteRangePicker({
  startFilterName,
  endFilterName,
  emptyValue,
  ...rest
}: RouteRangePickerProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const startDate = searchParams.get(startFilterName) || "";
  const endDate = searchParams.get(endFilterName) || "";

  const onSelect = (start: string, end: string) => {
    searchParams.delete(startFilterName);
    searchParams.delete(endFilterName);

    if (start || emptyValue) {
      searchParams.set(startFilterName, start);
    }
    if (end || emptyValue) {
      searchParams.set(endFilterName, end);
    }

    setSearchParams(searchParams, { replace: true });
  };

  return (
    <RangePicker
      {...rest}
      startDate={startDate}
      endDate={endDate}
      onSelect={onSelect}
    />
  );
}

export type { RangePickerProps };
export { RangePicker };
export default memo(RouteRangePicker);
