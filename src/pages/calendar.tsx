import { useNavigate } from "react-router-dom";
import { getLocalTimeZone, parseDate, today } from "@internationalized/date";
import { useEffect } from "react";

import { Calendar } from "../components/calendar";
import { LoadingView } from "../components/LoadingView";
import { PageSection } from "../components/PageSection";
import { UnauthorisedView } from "../components/UnauthorisedView";
import { CalendarDayTable } from "../components/CalendarDayTable";
import { useSearchParamByName } from "../hooks/useSearchParamByName";
import { addCalendarEvent } from "../addCalendarEvent";

import { useAuthUser } from "@/hooks/useAuthUser";
import DefaultLayout from "@/layouts/default";

export default function CalendarPage() {
  const { user, isLoadingUser } = useAuthUser();
  const day = useSearchParamByName("day");
  const now = today(getLocalTimeZone());
  const navigate = useNavigate();

  console.log(user);
  useEffect(() => {
    if (!day && !isLoadingUser) {
      navigate(`/calendar?day=${now.toString()}`, { replace: true });
    }
  }, [day, isLoadingUser, now, navigate]);

  if (isLoadingUser) {
    return <LoadingView notification="Checking access..." />;
  }

  if (!day) {
    return <LoadingView notification="Loading..." />;
  }

  if (!user) {
    return <UnauthorisedView title="Calendar" />;
  }

  const handleAddNewEvent = () => {
    console.log("Add new event");
    addCalendarEvent();
  };

  return (
    <DefaultLayout>
      <button onClick={handleAddNewEvent}>Add new</button>
      <PageSection>
        <Calendar selectedDay={parseDate(day)} />
      </PageSection>
      <PageSection>
        <CalendarDayTable />
      </PageSection>
    </DefaultLayout>
  );
}
