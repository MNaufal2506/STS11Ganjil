import { useRoutes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./components/HomePage";
import HomeDetailPage from "./components/HomeDetailPage";
import AboutPage from "./components/AboutPage";
import TestimonyPage from "./components/TestimonyPage";
import FaqPage from "./components/FaqPage";
import NotFoundPage from "./components/NotFoundPage";

const routes = [
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home/:id", element: <HomeDetailPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "testimony", element: <TestimonyPage /> },
      { path: "faq", element: <FaqPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
];

export default function App() {
  return useRoutes(routes);
}
