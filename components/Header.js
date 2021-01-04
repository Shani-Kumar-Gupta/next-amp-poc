import { AmpIncludeAmpSidebar } from "./amp/AmpCustomElement";
export const config = { amp: true };

const Header = ({ pageData }) => {
  return (
    <>
      <AmpIncludeAmpSidebar />

      <amp-sidebar
        id="sidebar1"
        layout="nodisplay"
        side="right"
        className="navbar-menu"
      >
        <div className="flex-bw">
          <div className="logo">
            <amp-img
              src="./static/images/LOGO2.png"
              width="54"
              height="53"
              alt="logo"
            ></amp-img>
          </div>
          <div
            className="navbar-trigger nav-menu-icon flex-center"
            role="button"
            tabIndex={0}
            on="tap:sidebar1.toggle"
          >
            <amp-img
              src="./static/images/modalCrossIcon.svg"
              width="20"
              height="20"
              alt="close"
            ></amp-img>
          </div>
        </div>
        <nav className="nav">
          <ul className="label">
            <li className="nav-item nav-dropdown">
              <a href="#">sd,nfdvbn.</a>
            </li>
            {pageData &&
              pageData.header.NavLinks.map(({ _id, title, hoverTitle }) => (
                <li key={_id} className="nav-item">
                  <a href={"#"} title={hoverTitle}>
                    {title}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </amp-sidebar>
      <header className="headerbar flex-bw">
        <div className="logo">
          <amp-img
            className="home-button"
            src="./static/images/LOGO2.png"
            width="54"
            height="53"
            alt="logo"
          ></amp-img>
        </div>
        <div
          className="nav-menu-icon navbar-trigger"
          role="button"
          tabIndex={0}
          on="tap:sidebar1.toggle"
        >
          <amp-img
            src="./static/images/navIcon.svg"
            width="30"
            height="30"
            alt="menu"
          ></amp-img>
        </div>
      </header>
      <style jsx>{`
        .navbar-menu {
          width: 100%;
          max-width: 100vw;
        }
        .nav-menu-icon {
          margin-right: 2rem;
          border-radius: 50%;
          background: linear-gradient(53deg, #eff0f3 17%, #e5e6eb 88%);
          box-shadow: -3px -3px 6px #fff, 3px 3px 6px rgba(0, 0, 0, 0.1);
          padding: 3px;
          width: 40px;
          height: 40px;
          outline: none;
        }
      `}</style>
    </>
  );
};

export default Header;
