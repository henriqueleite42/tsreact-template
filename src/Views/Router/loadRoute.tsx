import React from "react";

import { RouteInterface } from "@config/routes";

const loadRoute = (route: RouteInterface): React.FC => {
  const Element = React.lazy(() => import(`../${route.component}`));

  if (route.navBar) {
    const NavBar = React.lazy(() => import("@views/NavBar"));

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
