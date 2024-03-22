import { lazy } from "react";

export const Home = lazy(() => import("./Home"))
export const Menu = lazy(() => import("./Menu"))
export const Category = lazy(() => import("./Category"))
export const Product = lazy(() => import("./Product"))
export const Login = lazy(() => import("./Login"))
export const Cart = lazy(() => import("./Cart"))
export const ErrorPage = lazy(() => import("./ErrorPage"))
export const Layout = lazy(() => import("./Layout"))
