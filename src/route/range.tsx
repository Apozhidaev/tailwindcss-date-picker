import React, { memo } from "react";
import { useSearchParams } from "react-router-dom";
import type { RangePickerProps } from "../range";
import RangePicker from "../range";

export type RouteRangePickerProps = Omit<
  RangePickerProps,
  "value" | "startDate" | "endDate" | "onSelect" | "onClear"
> & {
  startFilterName: string;
  endFilterName: string;
  defaultStartDate?: string;
  defaultEndDate?: string;
};

function RouteRangePicker({
  startFilterName,
  endFilterName,
  defaultStartDate = "",
  defaultEndDate = "",
  filter,
  ...rest
}: RouteRangePickerProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const startDate = searchParams.has(startFilterName)
    ? searchParams.get(startFilterName)
    : defaultStartDate;
  const endDate = searchParams.has(endFilterName)
    ? searchParams.get(endFilterName)
    : defaultEndDate;

  const onSelect = (start: string, end: string) => {
    searchParams.delete(startFilterName);
    searchParams.delete(endFilterName);

    if (start !== defaultStartDate) {
      searchParams.set(startFilterName, start);
    }
    if (end !== defaultEndDate) {
      searchParams.set(endFilterName, end);
    }

    setSearchParams(searchParams, { replace: true });
  };

  return (
    <RangePicker
      {...rest}
      startDate={startDate || ""}
      endDate={endDate || ""}
      onSelect={onSelect}
      onClear={() => onSelect("", "")}
      filter={
        filter === undefined
          ? searchParams.has(startFilterName) || searchParams.has(endFilterName)
          : filter
      }
    />
  );
}

export type { RangePickerProps };
export { RangePicker };
export default memo(RouteRangePicker);
