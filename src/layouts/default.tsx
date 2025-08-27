import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main w-screen min-h-screen p-4">
        <Outlet />
      </main>
      <footer className="footer bg-green-900 text-white p-4 text-center">
        <p>Live code</p>
      </footer>
    </>
  );
}
