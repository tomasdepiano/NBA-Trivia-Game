import { Outlet } from "react-router-dom";

export default function LoginPage() {
  const path = window.location.pathname;

  const isHome = path === "/" ? true : false;

  return (
    <>
      {isHome && (
        <>
          <div>Please Log Into Your Account</div>
          <form>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <label>
              Password:
              <input type="text" name="password" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <button>Create an Account</button>
        </>
      )}
      <Outlet />
    </>
  );
}
