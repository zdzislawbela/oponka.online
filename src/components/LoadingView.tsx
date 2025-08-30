import DefaultLayout from "../layouts/default";

import { PageSection } from "./PageSection";

interface Props {
  notification: string;
}

export const LoadingView = ({ notification = "Loading..." }: Props) => {
  return (
    <DefaultLayout>
      <PageSection>
        <p className="text-lg font-medium">{notification}</p>
      </PageSection>
    </DefaultLayout>
  );
};
