import classNames from "classnames";
import React, { useMemo, memo } from "react";
import useEvent from "react-use-event-hook";
import { CalendarIcon } from "@heroicons/react/24/outline";
import EasePicker, {
  EasePickOptions,
  AmpPlugin,
  LockPlugin,
  DateTime,
} from "react-easepick";
import { adjustLeftPosition } from "./utils";
import { datePickerCss } from "./css/date-picker";

type Props = {
  className?: string;
  date?: string;
  minDate?: string;
  maxDate?: string;
  onSelect: (date: string) => void;
  format?: string;
  placeholder?: string;
  position?: "left" | "right";
};

export function DatePickerInput({
  className,
  date,
  minDate,
  maxDate,
  onSelect,
  format = "DD MMM, YYYY",
  placeholder,
  position,
}: Props) {
  const handleSelect = useEvent(onSelect);
  const options: EasePickOptions = useMemo(
    () => ({
      css: datePickerCss,
      format,
      AmpPlugin: {
        dropdown: {
          months: true,
          years: true,
          minYear: minDate ? new DateTime(minDate).getFullYear() : undefined,
          maxYear: maxDate ? new DateTime(maxDate).getFullYear() : undefined,
        },
        resetButton: true,
        darkMode: false,
        locale: {
          resetButton: "DEL",
        },
      },
      LockPlugin: {
        minDate: minDate ? new DateTime(minDate).toJSDate() : undefined,
        maxDate: maxDate ? new DateTime(maxDate).toJSDate() : undefined,
      },
      plugins: [AmpPlugin, LockPlugin],
      setup(picker) {
        picker.on("select", (e) => {
          const { date } = e.detail;
          handleSelect(new DateTime(date).format("YYYY-MM-DD"));
        });
        picker.on("clear", () => {
          handleSelect("");
          picker.hide();
        });
        picker.on("show", () => {
          if (position === "right") {
            picker.ui.container.style.left = `${adjustLeftPosition(picker)}px`;
          }
        });
      },
    }),
    [date, minDate, maxDate, position]
  );

  return (
    <EasePicker
      className={className}
      placeholder={placeholder}
      options={options}
    />
  );
}

function DatePicker(props: Props & { filter?: boolean }) {
  const { className, filter, ...inputProps } = props;
  return (
    <div className={classNames("relative", className)}>
      <CalendarIcon className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0" />
      <DatePickerInput
        {...inputProps}
        className={classNames(
          "pl-10 pr-1 form-control form-date-picker",
          filter ? "form-filter" : ""
        )}
      />
    </div>
  );
}

export default memo(DatePicker);
