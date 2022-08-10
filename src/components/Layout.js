import React from "react";
import { Link, Outlet } from "react-router-dom"

import strings from "../string.js"
function Layout() {
    return (
        <div>

            <li>
                <Link to="/">{strings.Home}</Link>

            </li>
            <li>
                <Link to="/cources">{strings.Cources}</Link>

            </li>
            <li>
                <Link to="/dailyFeed">{strings.DailyFeed}</Link>

            </li>
            <li>
                <Link to="/aboutPage">{strings.AboutUs}</Link>

            </li>
            <li>
                <Link to="/loginPage">{strings.Login}</Link>

            </li>
            <Outlet />
        </div>
    )
}

export default Layout;