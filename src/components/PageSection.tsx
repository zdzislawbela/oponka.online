import { cn } from "@heroui/theme";
import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}
export const PageSection = ({
  children,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-8 md:py-10",
        className,
      )}
    >
      {children}
    </section>
  );
};
