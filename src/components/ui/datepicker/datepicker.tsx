import React, { useEffect } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import "../../../../node_modules/react-datepicker/dist/react-datepicker.min.css";

export type DateType = Date | null;

export interface DatePickerProps {
  date: DateType;
  dateSetter: React.Dispatch<DateType>;
}

export const DatePicker = ({
  date,
  dateSetter,
  ...props
}: DatePickerProps): JSX.Element => {
  useEffect(() => {
    registerLocale("ru", ru);
  }, []);

  return (
    <ReactDatePicker
      selected={date}
      onChange={(e) => dateSetter(e)}
      locale="ru"
      {...props}
    />
  );
};
