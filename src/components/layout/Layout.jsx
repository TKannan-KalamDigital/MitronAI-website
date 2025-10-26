import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="mx-auto">{/* <Navbar /> */}</div>
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
