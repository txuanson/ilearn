import { Route, Switch } from "react-router-dom"
import SplashRoute from "../components/animation/SplashRoute";

import Login from "../pages/Login";
import Register from "../pages/Register";
import CourseDescription from "../pages/CourseDescription";
import HomePage from "../pages/HomePage";
import HomeLayout from "../layout/HomeLayout";


export default function RegularRoute() {
    return (
        <HomeLayout>
            <Switch>
                <Route exact path="/login">
                    <SplashRoute key="/login">
                        <Login></Login>
                    </SplashRoute>
                </Route>

                <Route exact path="/register">
                    <SplashRoute key="/register">
                        <Register></Register>
                    </SplashRoute>
                </Route>

                <Route path="/course">
                    <SplashRoute key="/course">
                        <CourseDescription
                            name="Welcome to our website"
                            category="Category"
                            cover="/logo512.png"
                            public={false}
                            text="Brief description about the course. Brief description about the course."
                            content="## 📖 About this class"
                        />
                    </SplashRoute>
                </Route>

                <Route exact path="/register">
                    <SplashRoute key="/register">
                        <Register></Register>
                    </SplashRoute>
                </Route>

                <Route path="/">
                    <SplashRoute key="/">
                        <HomePage />
                    </SplashRoute>
                </Route>
            </Switch>
        </HomeLayout>
    )
}