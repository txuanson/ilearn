import { Route, Switch } from "react-router-dom"
import SplashRoute from "../components/animation/SplashRoute";

import Login from "../pages/Login";
import Register from "../pages/Register";
import CourseDescription from "../pages/CourseDescription";
import HomePage from "../pages/HomePage";
import HomeLayout from "../layout/HomeLayout";
import ListSection from "../pages/ListSection";
import CreateNewSection from "../pages/CreateNewSection";
import Profile from "../pages/Profile";

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
                            name="Introduction to Programming"
                            category="Test"
                            tutor="Tutor-name"
                            cover="/default-class-cover.png"
                            public={false}
                            text="C++ is a cross-platform language that can be used to create high-performance applications. C++ is fun and easy to learn!"
                            content="## 📖 About this class"
                            start="Saturday, 7/8/2021"
                            subscriber='100'
                            view='123456'
                        />
                    </SplashRoute>
                </Route>

                <Route exact path="/register">
                    <SplashRoute key="/register">
                        <Register></Register>
                    </SplashRoute>
                </Route>

                <Route path="/homepage">
                    <SplashRoute key="/homepage">
                        <HomePage />
                    </SplashRoute>
                </Route>
                <Route exact path="/tutors/section">
                    <SplashRoute key="/tutors/section">
                        <CreateNewSection/>
                    </SplashRoute>
                </Route>
                <Route exact path="/tutors/course/001/section">
                    <SplashRoute key="/tutors/course/001/section">
                        <ListSection/>
                    </SplashRoute>
                </Route>

                <Route exact path="/profile">
                    <SplashRoute key="/profile">
                     <Profile></Profile>
                    </SplashRoute>
                </Route>
            </Switch>
        </HomeLayout>
    )
}