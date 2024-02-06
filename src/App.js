import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./theme";
import HomePage from "./pages/HomePage";
import HeroDetailsPage from "./pages/HeroDetailsPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hero/:id" element={<HeroDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
