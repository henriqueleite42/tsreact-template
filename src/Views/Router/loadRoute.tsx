import React from "react";

const loadRoute = (viewName: string, navBar: boolean): React.FC => {
  const Element = React.lazy(() => import(`../${viewName}`));

  if (navBar) {
    const NavBar = React.lazy(() => import("../NavBar"));

    const ElementWithNavBar: React.FC = () => (
      <NavBar>
        <Element />
      </NavBar>
    );

    return ElementWithNavBar;
  } else {
    return Element;
  }
};

export default loadRoute;
