import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../components/layout/MainLayout";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routeGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
import ProtectedRoute from "../components/layout/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
        ]
    },
    {
        path: '/admin',
        element: <ProtectedRoute><MainLayout /></ProtectedRoute>,
        children: routeGenerator(adminPaths)
    },
    {
        path: '/faculty',
        element: <MainLayout />,
        children: routeGenerator(facultyPaths)
    },
    {
        path: '/student',
        element: <MainLayout />,
        children: routeGenerator(studentPaths)
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
]);

export default router;