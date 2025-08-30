import DefaultLayout from "../layouts/default";

import { PageSection } from "./PageSection";
import { TitleSection } from "./TitleSection";

interface Props {
  title: string;
}

export const UnauthorisedView = ({ title }: Props) => {
  return (
    <DefaultLayout>
      <TitleSection>{title}</TitleSection>
      <PageSection>
        <div className="inline-block max-w-lg text-center justify-center">
          <p className="mt-4 text-default-500">
            Log in to see BookedIn in action.
          </p>
        </div>
      </PageSection>
    </DefaultLayout>
  );
};
