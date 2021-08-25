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
import Category from "../components/Category/Category";
import { useEffect, useState } from "react";
import { getAllCategory } from "../api/homePage";

export default function RegularRoute() {
    const [category, setCategory] = useState([]);

  useEffect(async () => {
    try {
      const res = await getAllCategory()
      setCategory(res);
      console.log(res)
    } catch (err) {
      console.log("fail");
    }
  }, []);
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

                <Route exact path="/course/61091a399133be00223bec1a">
                    <SplashRoute key="/course/61091a399133be00223bec1a">
                        <CourseDescription
                            course_id="61091a399133be00223bec1a"/>
                    </SplashRoute>
                </Route>
                
                <Route path="/course">
                    <SplashRoute key="/course">
                        <CourseDescription
                            _id ='001'
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
                {category.map((item) => (
                    <Route path={"/category/" + item._id}>
                    <SplashRoute key={"/category/" + item._id}>
                        <Category idCategory = {item._id} nameCategory = {item.name}></Category>
                    </SplashRoute>
                    </Route>
            ))}
                
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