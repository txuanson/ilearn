import Header from "../components/header/Header";
function HomeLayout({ children }) {
    return (
        <div>
            <Header user = {false}></Header>
            <div className="relative">
                {children}
            </div>
        </div>
    );
}

export default HomeLayout;