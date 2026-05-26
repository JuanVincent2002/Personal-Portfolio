import { useState } from "react";
import Particles from "./components/Particles/Particles";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import HUDCorner from "./components/HUDCorner/HUDCorner";
import LandingPage from "./components/LandingPage/LandingPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import WorkPage from "./components/WorkPage/WorkPage";
import OrgPage from "./components/OrgPage/OrgPage";
import CertPage from "./components/CertPage/CertPage";
import ContactPage from "./components/ContactPage/ContactPage";
import "./App.css";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState("home");

  const pages = { profile: ProfilePage, projects: ProjectPage, work: WorkPage, org: OrgPage, cert: CertPage, contact: ContactPage };
  const PageComp = pages[page];

  return (
    <div className="app">
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      {loaded && (
        <>
          <Particles />
          <HUDCorner pos="tl" />
          <HUDCorner pos="tr" />
          <HUDCorner pos="bl" />
          <HUDCorner pos="br" />
          {page === "home"
            ? <LandingPage onNavigate={setPage} />
            : <PageComp onBack={() => setPage("home")} />
          }
        </>
      )}
    </div>
  );
}