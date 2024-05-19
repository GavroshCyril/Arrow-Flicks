import { Route, Routes } from "react-router-dom";
import { HomePage, NotFoundPage, RatedMoviesPage, MovieDetailPage } from "./pages";
import { SidebarLayout } from "layouts/SidebarLayout";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

function App() {
  return (
    <>
      <MantineProvider>
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:title" element={<MovieDetailPage />} />
            <Route path="/rated-movies" element={<RatedMoviesPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MantineProvider>
    </>
  );
}

export default App;
