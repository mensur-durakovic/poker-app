import React, { useState } from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faDice,
  faChartBar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  EQUITY_CALC,
  FLOP_STATS,
  RANGE_CREATOR,
  ACCOUNT,
} from "../../constants/navigation";

export default function Navigation(props) {
  const [activeItem, setActiveItem] = useState(EQUITY_CALC.keyName);
console.log(props);
  return (
    <SideNav
      className="poker-navigation-nav"
      expanded={props.expanded}
      onToggle={props.toggleNavigation}
      onSelect={(selected) => {
        console.log("selected", selected);
        setActiveItem(selected);
      }}
    >
      <SideNav.Toggle className="poker-navigation-toggle" />
      <SideNav.Nav defaultSelected={EQUITY_CALC.keyName}>
        <NavItem
          eventKey={EQUITY_CALC.keyName}
          navitemClassName={`poker-navigation-navitem${
            activeItem === EQUITY_CALC.keyName ? "-active" : ""
          }`}
        >
          <NavIcon>
            <FontAwesomeIcon
              icon={faDollarSign}
              className="poker-navigation-icon"
            />
          </NavIcon>
          <NavText>{EQUITY_CALC.text}</NavText>
        </NavItem>
        <NavItem
          eventKey={FLOP_STATS.keyName}
          navitemClassName={`poker-navigation-navitem${
            activeItem === FLOP_STATS.keyName ? "-active" : ""
          }`}
        >
          <NavIcon>
            <FontAwesomeIcon
              icon={faChartBar}
              className="poker-navigation-icon"
            />
          </NavIcon>
          <NavText>{FLOP_STATS.text}</NavText>
        </NavItem>
        <NavItem
          eventKey={RANGE_CREATOR.keyName}
          navitemClassName={`poker-navigation-navitem${
            activeItem === RANGE_CREATOR.keyName ? "-active" : ""
          }`}
        >
          <NavIcon>
            <FontAwesomeIcon icon={faDice} className="poker-navigation-icon" />
          </NavIcon>
          <NavText>{RANGE_CREATOR.text}</NavText>
        </NavItem>
        <NavItem
          eventKey={ACCOUNT.keyName}
          navitemClassName={`poker-navigation-navitem${
            activeItem === ACCOUNT.keyName ? "-active" : ""
          }`}
        >
          <NavIcon>
            <FontAwesomeIcon icon={faUser} className="poker-navigation-icon" />
          </NavIcon>
          <NavText>{ACCOUNT.text}</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}
