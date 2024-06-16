import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar/Navbar";
import Footer from "./layout/Footer/Footer";
import PageWrapper from "./layout/PageWrapper/PageWrapper";
import PageSkeleton from "./component/UI/Loading/PageSkeleton";

//lazy loading routes for improved  performance.
const PeopleIndexPage = lazy(() => import("./pages/people/PeopleIndex"));
const PeopleDetailPage = lazy(() => import("./pages/people/DetailPage"));
const Error404 = lazy(() => import("./pages/error/Error404"));

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <PageWrapper>
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/" element={<PeopleIndexPage />} />
            <Route path="/:id" element={<PeopleDetailPage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </PageWrapper>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
