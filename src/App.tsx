import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import Home from "./pages/Home";
import { NoMatch } from "./pages/NoMatch";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import "./components/styles.css";
import { Supervisa } from "./pages/Supervisa";
function App() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="supervisa" element={<Supervisa />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
