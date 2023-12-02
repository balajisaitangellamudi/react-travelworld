import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
export default Layout;
