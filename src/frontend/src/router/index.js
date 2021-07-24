import { BrowserRouter as Router, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import SplashRoute from "../components/animation/SplashRoute";
import Dashboard from "../pages/Dashboard/Dashboard";

import Login from "../pages/Login";
import Register from "../pages/Register";

import CourseDescription from "../pages/CourseDescription";
import HomePage from "../pages/HomePage";
import Header from "../components/header/Header";


export default function MyRoute() {
    return(
        <Router>
            <Header></Header>
            <Route exact path="/">
                <SplashRoute key="/">
                    <HomePage />
                </SplashRoute>
            </Route>

            <Route exact path="/dashboard">
                <SplashRoute key="/dashboard">
                    <Dashboard />
                </SplashRoute>
            </Route>


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

            <Route exact  path="/coursedescription">
                <SplashRoute key="/coursedescription">
                    <CourseDescription
                    name = "Welcome to our website"
                    category = "Category"
                    cover ="/default-class-cover.png"
                    public = {false}
                    text = "Brief description about the course. Brief description about the course."
                    content ="## 📖 About this class"
                    />
                </SplashRoute>
            </Route> 
        </Router>
    )
}