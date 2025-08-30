import { Calendar } from "../components/calendar";
import { LoadingView } from "../components/LoadingView";
import { PageSection } from "../components/PageSection";
import { TitleSection } from "../components/TitleSection";
import { UnauthorisedView } from "../components/UnauthorisedView";

import { useAuthUser } from "@/hooks/useAuthUser";
import DefaultLayout from "@/layouts/default";

export default function DashboardPage() {
  const { user, isLoadingUser } = useAuthUser();

  if (isLoadingUser) {
    return <LoadingView notification="Checking access..." />;
  }

  if (!user) {
    return <UnauthorisedView title="Dashboard" />;
  }

  return (
    <DefaultLayout>
      <PageSection>
        <TitleSection>Dashboard</TitleSection>
      </PageSection>
      <PageSection>
        <Calendar />
      </PageSection>
    </DefaultLayout>
  );
}
