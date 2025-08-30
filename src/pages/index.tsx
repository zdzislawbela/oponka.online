import { getAnalytics } from "firebase/analytics";

import { firebaseApp } from "../firebase";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  getAnalytics(firebaseApp);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-6 py-10 md:py-16">
        <div className="inline-block max-w-2xl text-center justify-center">
          <h1>
            <span className={title()}>Welcome to&nbsp;</span>
            <span className={title()}>Booked</span>
            <span className={title({ color: "yellow" })}>In</span>
          </h1>
          <div className={subtitle({ class: "mt-4" })}>
            The smart way to manage your client appointments, schedules, and
            communication — all in one place.
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
