import "./App.css";
import "./index.css";
import { navigation } from "../data";
import Approach from "./components/Approach";
import Clients from "./components/Clients";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Hero from "./components/Hero";
import RecentProjects from "./components/RecentProjects";
import { FloatingDock } from "./components/ui/Floating-dock";
import { navigationIconMap } from "./lib/iconMaps";

function App() {
  const dockItems = navigation.map((item) => ({
    title: item.title,
    href: item.href,
    icon: navigationIconMap[item.iconKey],
  }));

  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-purple-100 px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingDock items={dockItems} desktopClassName={undefined} mobileClassName={undefined} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

export default App;
