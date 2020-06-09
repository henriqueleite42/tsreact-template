export interface RouteInterface {
  name: string;
  fullRoute: string;
  component: string;
  blocked?: boolean;
  navBar: boolean;
}

export const NON_AUTH_ROUTES: Array<RouteInterface> = [
  {
    name: "home",
    fullRoute: "/",
    component: "Home",
    navBar: true,
  },
];

export const AUTH_ROUTES: Array<RouteInterface> = [];
