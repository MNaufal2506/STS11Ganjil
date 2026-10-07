import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl w-full mx-auto px-8 py-10">
        <Outlet />
      </main>
    </div>
  );
}
