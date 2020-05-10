interface RouteInterface {
  name: string;
  fullRoute: string;
  component: string;
  authOnly: boolean;
  blocked: boolean;
  navBar: boolean;
}

const NON_AUTH_ROUTES: Array<RouteInterface> = [];

const AUTH_ROUTES: Array<RouteInterface> = [];

class Routes {
  static getNonAuth = () => NON_AUTH_ROUTES;

  static getAuth = () => AUTH_ROUTES;
}

export default Routes;
