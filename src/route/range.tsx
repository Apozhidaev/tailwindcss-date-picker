import React, { memo } from "react";
import { useSearchParams } from "react-router-dom";
import RangePicker, { RangePickerProps as Props } from "../range";

export type RangePickerProps = Omit<Props, "startDate" | "endDate" | "onSelect"> & {
  startFilterName: string;
  endFilterName: string;
  emptyValue?: boolean;
};

function RouteRangePicker({
  startFilterName,
  endFilterName,
  emptyValue,
  ...rest
}: RangePickerProps) {
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
      searchParams.set(startFilterName, end);
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

export default memo(RouteRangePicker);
