import React from "react";
import {useRoutes} from "react-routes-dom";
import Home from "pages/Home";

const ProjectRoutes = () => {
    let element = useRoutes([
        {path: "/", element: <Home /> },
        {path: "*", element: <NotFound /> },
        {
            path: "signup", 
            element: <SignUp />,
        },
        {
            path: "login", 
            element: <Login />,
        },
        {
            path: "desktop1", 
            element: <Desktop1 />,
        },
        {
            path: "desktop2", 
            element: <Desktop2 />,
        },
        {
            path: "desktopfour", 
            element: <Desktopfour />,
        },
    ]);

    return element;
};

export default ProjectRoutes;