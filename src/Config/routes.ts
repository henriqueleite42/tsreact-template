export interface IRoute {
  name: string;
  route: string;
  component: string;
  blocked?: boolean;
  navBar?: boolean;
}

// Routes

const nonAuthRoutes = {
  signIn: {
    name: "signIn",
    route: "/sign-in",
    component: "SignIn",
  },
  signUp: {
    name: "signUp",
    route: "/sign-up",
    component: "SignUp",
  },
};

const authRoutes = {
  home: {
    name: "home",
    route: "/",
    component: "Home",
    navBar: true,
  },
};

// Get route By Name

const nameRoutes: { [key: string]: string } = {};

for (const route in nonAuthRoutes) {
  nameRoutes[route] = nonAuthRoutes[route as keyof typeof nonAuthRoutes].route;
}

for (const route in authRoutes) {
  nameRoutes[route] = authRoutes[route as keyof typeof authRoutes].route;
}

// Export

export type NonAuthRoutesType = keyof typeof nonAuthRoutes;

export type AuthRoutesType = keyof typeof authRoutes;

export type AllRoutesType = NonAuthRoutesType | AuthRoutesType;

export const NON_AUTH_ROUTES = Object.values(nonAuthRoutes) as Array<IRoute>;

export const AUTH_ROUTES = Object.values(authRoutes) as Array<IRoute>;

export const ROUTES_NAME = nameRoutes as {
  [T in NonAuthRoutesType | AuthRoutesType]: string;
};
