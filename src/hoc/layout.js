import React, { useState } from "react";
import Navigation from "../components/navigation/navigation";
import EquityCalculatorPage from "../pages/equityCalculatorPage";
import FlopStats from "../components/flopStats/flopStats";
import { EQUITY_CALC, FLOP_STATS } from "../constants/navigation";

export default function Layout() {
  const [expanded, setExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState(EQUITY_CALC.keyName);

  const toggleNavigation = () => {
    const oldValue = expanded;
    setExpanded(!oldValue);
  };

  const getActivePage = () => {
    switch (activeItem) {
      case EQUITY_CALC.keyName:
        return <EquityCalculatorPage />;
      case FLOP_STATS.keyName:
        return <FlopStats />;
      default:
        return <EquityCalculatorPage />;
    }
  };

  return (
    <div className="site-wrapper">
      <Navigation
        expanded={expanded}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        toggleNavigation={toggleNavigation}
      />
      <main className={`layout-container${expanded ? "-expanded" : ""}`}>
        {getActivePage()}
      </main>
    </div>
  );
}
