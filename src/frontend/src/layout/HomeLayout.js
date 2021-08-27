import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { auth } from "../utils/auth";

function HomeLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-white dark:bg-dark">
      <div style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Header user={auth()}></Header>
      </div>
      <div className="relative" style={{ paddingBottom: 240, paddingTop: 64 }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
