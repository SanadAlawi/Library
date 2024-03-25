import { lazy } from "react";

export const Home = lazy(() => import("./Home"))
export const Genres = lazy(() => import("./Genres"))
export const Category = lazy(() => import("./Category"))
export const Book = lazy(() => import("./Book"))
export const Login = lazy(() => import("./Login"))
export const Cart = lazy(() => import("./Cart"))
export const ErrorPage = lazy(() => import("./ErrorPage"))
export const Layout = lazy(() => import("./Layout"))
