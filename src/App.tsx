import { Route, Routes } from "react-router-dom";

import LogoutPage from "./pages/logout";
import CalendarPage from "./pages/calendar";
import { paths } from "./config/paths";

import IndexPage from "@/pages/index";
import LoginPage from "@/pages/login";
import DashboardPage from "@/pages/dashboard";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path={paths.home} />
      <Route element={<LoginPage />} path={paths.login} />
      <Route element={<LogoutPage />} path={paths.logout} />
      <Route element={<DashboardPage />} path={paths.dashboard} />
      <Route element={<CalendarPage />} path={paths.calendar} />
    </Routes>
  );
}

export default App;
