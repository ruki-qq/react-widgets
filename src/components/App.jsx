import React from "react";
import AppAccordion from "./AppAccordion";
import WikiSearch from "./WikiSearch";
import ColorPalette from "./ColorPalette";
import Translate from "./Translate";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import { Container } from "@mui/material";

const pages = [
  {
    id: 0,
    route: "/",
    name: "Accordion",
    component: <AppAccordion />,
  },
  {
    id: 1,
    route: "/wiki-search",
    name: "WikiSearch",
    component: <WikiSearch />,
  },
  {
    id: 2,
    route: "/color-picker",
    name: "Color Picker",
    component: <ColorPalette />,
  },
  { id: 3, route: "/translate", name: "Translate", component: <Translate /> },
];
const App = () => {
  return (
    <Container maxWidth="lg">
      <Header pages={pages} />
      <Routes>
        {pages.map((page) => (
          <Route key={page.id} path={page.route} element={page.component} />
        ))}
      </Routes>
    </Container>
    //   <AppAccordion items={items} />
    // <WikiSearch />
    // <ColorPalette />
  );
};

export default App;
