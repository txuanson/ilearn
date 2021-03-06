import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import SplashRoute from "../components/animation/SplashRoute";
import TutorDashBoard from "../pages/TutorDashboard/TutorDashboard";
import ViewSection from "../pages/Section/ViewSection";
import Admin from "../pages/Admin/Admin";
import RegularRoute from "./regular";
import { auth } from "../utils/auth";
import { useEffect, useState } from "react";

export default function MyRoute() {
    const user = auth();
    const userData = user.user_data ? user.user_data : undefined;

    return (
        <Router>
            <Switch>
                <Route path="/tutor">
                    {
                        userData && userData.role >= 5
                            ?
                            <SplashRoute key="/tutor">
                                <TutorDashBoard />
                            </SplashRoute>
                            :
                            <Redirect to="/" />
                    }
                </Route>

                <Route path="/admin">
                    {
                        userData && userData.role == 10
                            ?
                            <SplashRoute key="/admin">
                                <Admin />
                            </SplashRoute>
                            :
                            <Redirect to="/" />
                    }
                </Route>

                <Route path="/section/:course_id/:section_id">
                    {
                        !userData ?
                            <Redirect to="/" /> :
                            <SplashRoute key="/section/:course_id:/section_id">
                                <ViewSection />
                            </SplashRoute>}
                </Route>

                <Route path="/">
                    <SplashRoute key="/">
                        <RegularRoute userData={userData} />
                    </SplashRoute>
                </Route>


            </Switch>
        </Router>
    )
}