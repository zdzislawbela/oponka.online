import { Calendar as CalendarHeroUI, DateValue } from "@heroui/calendar";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useNavigate } from "react-router-dom";

interface Props {
  selectedDay?: DateValue;
}

export const Calendar = ({ selectedDay }: Props) => {
  const now = today(getLocalTimeZone());
  const navigate = useNavigate();

  // const disabledRanges = [
  //   [now, now.add({ days: 5 })],
  //   [now.add({ days: 3 }), now.add({ days: 10 })],
  //   [now.add({ days: 6 }), now.add({ days: 13 })],
  // ];

  // const { locale } = useLocale();

  // const isDateUnavailable = (date: DateValue) =>
  //   isWeekend(date, locale) ||
  //   disabledRanges.some(
  //     (interval) =>
  //       date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0,
  //   );

  const handleDateClick = (date: DateValue) => {
    const formattedDate = date.toString();

    navigate(`/calendar?day=${formattedDate}`);
  };

  return (
    <CalendarHeroUI
      showMonthAndYearPickers
      aria-label="Date selector"
      defaultValue={selectedDay ?? now}
      focusedValue={now}
      onChange={handleDateClick}
      // isDateUnavailable={isDateUnavailable}
    />
  );
};
