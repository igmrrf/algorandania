import React, { Suspense, Fragment, lazy } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import UserLayout from "./containers/layouts/user-layout";
import AdminLayout from "./containers/layouts/admin-layout";
import MainLayout from "./containers/layouts/main-layout";
import Landing from "./views/guest/home";
import LoadingScreen from "./components/shared-components/loading-screen";
import GuestGuard from "./helpers/guest-guard";
import UserGuard from "./helpers/user-guard";
import AdminGuard from "./helpers/admin-guard";

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  // Routes with no Layout
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("./views/extra/not-found")),
  },
  {
    exact: true,
    guard: GuestGuard,
    path: "/login",
    component: lazy(() => import("./views/auth/login")),
  },
  {
    exact: true,
    path: "/login-unprotected",
    component: lazy(() => import("./views/auth/login")),
  },
  {
    exact: true,
    guard: GuestGuard,
    path: "/register",
    component: lazy(() => import("./views/auth/register")),
  },
  {
    exact: true,
    path: "/register-unprotected",
    component: lazy(() => import("./views/auth/register")),
  },
  {
    exact: true,
    guard: GuestGuard,
    path: "/forgot-password",
    component: lazy(() => import("./views/auth/forgot-password")),
  },
  {
    exact: true,
    path: "/forgot-password-unprotected",
    component: lazy(() => import("./views/auth/forgot-password")),
  },

  //User Routes
  {
    path: "/account",
    guard: UserGuard,
    layout: UserLayout,
    routes: [
      {
        exact: true,
        path: "/account/dashboard",
        component: lazy(() => import("./views/account/dashboard")),
      },
      {
        exact: true,
        path: "/account/deposit",
        component: lazy(() => import("./views/account/deposit")),
      },
      {
        exact: true,
        path: "/account/settings",
        component: lazy(() => import("./views/account/settings")),
      },
      {
        exact: true,
        path: "/account/withdrawal",
        component: lazy(() => import("./views/account/withdrawal")),
      },
      {
        exact: true,
        path: "/account/support",
        component: lazy(() => import("./views/account/support")),
      },
      {
        exact: true,
        path: "/account/transactions",
        component: lazy(() => import("./views/account/transactions")),
      },
      {
        exact: true,
        path: "/account/referral",
        component: lazy(() => import("./views/account/referral")),
      },
      {
        exact: true,
        path: "/account/balances",
        component: lazy(() => import("./views/account/balances")),
      },
    ],
  },

  //Admin Routes
  {
    path: "/app",
    guard: AdminGuard,
    layout: AdminLayout,
    routes: [
      {
        exact: true,
        path: "/app/dashboard",
        component: lazy(() => import("./views/admin/dashboard")),
      },
      {
        exact: true,
        path: "/app/users",
        component: lazy(() => import("./views/admin/users")),
      },

      {
        exact: true,
        path: "/app/users/view/:id",
        component: lazy(() => import("./views/admin/user-view-edit")),
      },
      {
        exact: true,
        path: "/app/transactions",
        component: lazy(() => import("./views/admin/transactions")),
      },
      {
        exact: true,
        path: "/app/banks",
        component: lazy(() => import("./views/admin/banks")),
      },

      {
        exact: true,
        path: "/app/deposited",
        component: lazy(() => import("./views/admin/deposited")),
      },

      {
        exact: true,
        path: "/app/settings",
        component: lazy(() => import("./views/admin/settings")),
      },
    ],
  },

  // Landing Routes
  {
    path: "*",
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: "/",
        component: Landing,
      },
      {
        exact: true,
        path: "/contact",
        component: lazy(() => import("./views/guest/contact")),
      },
      {
        exact: true,
        path: "/pricing",
        component: lazy(() => import("./views/guest/pricing")),
      },
      {
        exact: true,
        path: "/kyc-policy",
        component: lazy(() => import("./views/guest/kyc-policy")),
      },
      {
        exact: true,
        path: "/privacy-policy",
        component: lazy(() => import("./views/guest/privacy-policy")),
      },
      {
        exact: true,
        path: "/payment-policy",
        component: lazy(() => import("./views/guest/payment-policy")),
      },
      {
        component: () => <Redirect to="/404" />,
      },
    ],
  },
];
export default routes;
