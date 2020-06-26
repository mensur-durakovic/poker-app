import React from "react";
import PropTypes from "prop-types";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faDice,
  faChartBar,
  faUser,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import {
  EQUITY_CALC,
  FLOP_STATS,
  RANGE_CREATOR,
  ACCOUNT,
  SETTINGS
} from "../../constants/navigation";

function Navigation(props) {
  const { expanded, toggleNavigation, activeItem, setActiveItem } = props;
  return (
    <SideNav
      className="poker-navigation-nav"
      expanded={expanded}
      onToggle={toggleNavigation}
      onSelect={(selected) => {
        setActiveItem(selected);
      }}
    >
      <SideNav.Toggle className="poker-navigation-toggle" />
      <SideNav.Nav defaultSelected={FLOP_STATS.keyName}>
        <NavItem
          eventKey={EQUITY_CALC.keyName}
          navitemClassName={`poker-navigation-navitem${
            props.activeItem === EQUITY_CALC.keyName ? "-active" : ""
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
          eventKey={SETTINGS.keyName}
          navitemClassName={`poker-navigation-navitem${
            activeItem === SETTINGS.keyName ? "-active" : ""
          }`}
        >
          <NavIcon>
            <FontAwesomeIcon icon={faCog} className="poker-navigation-icon" />
          </NavIcon>
          <NavText>{SETTINGS.text}</NavText>
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
Navigation.propTypes = {
  expanded: PropTypes.bool.isRequired,
  toggleNavigation: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
  setActiveItem: PropTypes.func.isRequired,
};
export default Navigation;
