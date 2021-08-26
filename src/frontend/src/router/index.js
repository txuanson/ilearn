import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SplashRoute from "../components/animation/SplashRoute";
import TutorDashBoard from "../pages/TutorDashboard/TutorDashboard";
import ViewSection from "../pages/Section/ViewSection";
import Admin from "../pages/Admin/Admin";
import RegularRoute from "./regular";

export default function MyRoute() {
    return (
        <Router>
            <Switch>
                <Route path="/tutor">
                    <SplashRoute key="/tutor">
                        <TutorDashBoard />
                    </SplashRoute>
                </Route>

                <Route path="/admin">
                    <SplashRoute key="/admin">
                        <Admin />
                    </SplashRoute>
                </Route>

                <Route path="/section/:course_id/:section_id">
                    <SplashRoute key="/section/:course_id:/section_id">
                        <ViewSection />
                    </SplashRoute>
                </Route>

                <Route path="/">
                    <SplashRoute key="/">
                        <RegularRoute />
                    </SplashRoute>
                </Route>

                
            </Switch>
        </Router>
    )
}