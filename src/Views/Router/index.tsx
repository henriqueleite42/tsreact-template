import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthOnlyRoutes from "./AuthOnlyRoutes";
import loadRoute from "./loadRoute";

import Loading from "Components/Loading";

import { useGlobalConfig } from "Hooks/useGlobalConfig";

import { NON_AUTH_ROUTES, AUTH_ROUTES } from "Config/routes";

const Router: React.FC = () => {
  const { theme } = useGlobalConfig();

  return (
    <Suspense fallback={<Loading />}>
      <div data-theme={theme}>
        <BrowserRouter>
          <Switch>
            {NON_AUTH_ROUTES.map(route => (
              <Route
                exact
                key={route.name}
                path={route.fullRoute}
                component={loadRoute(route)}
              />
            ))}
            <AuthOnlyRoutes>
              {AUTH_ROUTES.map(route => (
                <Route
                  exact
                  key={route.name}
                  path={route.fullRoute}
                  component={loadRoute(route)}
                />
              ))}
            </AuthOnlyRoutes>
          </Switch>
        </BrowserRouter>
      </div>
    </Suspense>
  );
};

export default Router;
