import { PropsWithChildren } from "react";

import { PageSection } from "./PageSection";
import { title } from "./primitives";

export const TitleSection = ({ children }: PropsWithChildren) => {
  return (
    <PageSection>
      <h1 className={title()}>{children}</h1>
    </PageSection>
  );
};
