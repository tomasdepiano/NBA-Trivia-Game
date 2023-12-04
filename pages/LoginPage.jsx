import { Outlet } from "react-router-dom";

export default function LoginPage() {
  const path = window.location.pathname;

  const isHome = path === "/" ? true : false;

  return (
    <div>
      {isHome && <>Hello from Login page!</>}
      <Outlet />
    </div>
  );
}
