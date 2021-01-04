import Layout from "../components/Layout";
import axios from "axios";
import { AmpIncludeAmpSidebar } from "../components/amp/AmpCustomElement";

export const config = { amp: true };

const Dynamic = ({ host, pageData }) => {
  console.log(pageData?.header);
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
            <li className="nav-item">
              <a href="#idTwo" on="tap:idTwo.scrollTo">
                Nav item 2
              </a>
            </li>
            <li className="nav-item">Nav item 3</li>
            <li className="nav-item">
              <a href="#idFour" on="tap:idFour.scrollTo">
                Nav item 4
              </a>
            </li>
            <li className="nav-item">Nav item 5</li>
            <li className="nav-item">Nav item 6</li>
          </ul>
        </nav>
      </amp-sidebar>
      <Layout
        title="Welcome to AMP"
        description="Learn how to build an AMP First with Next.js."
      >
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
        <section role="main" className="mainCntr">
          <h2 className="heading">
            Secure Your Car With The Super Insurance Plan!
          </h2>
          <p className="subHeading">
            Comprehensive, Third Party And Own Damage Car Insurance At Tempting
            Premiums
          </p>
        </section>
      </Layout>
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

// amp-script requires absolute URLs, so we create a property `host` which we can use to calculate the script URL.
export async function getServerSideProps({ req }) {
  try {
    const res = await axios.get("https://dev10bn.tataaig.com/homepages", {
      headers: {
        cms: true,
      },
    });
    return {
      props: {
        host: `${getProtocol(req)}://${req.headers.host}`,
        pageData: res.data[0],
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        host: `${getProtocol(req)}://${req.headers.host}`,
        pageData: null,
      },
    };
  }

  // WARNING: This is a generally unsafe application unless you're deploying to a managed platform like Vercel.
  // Be sure your load balancer is configured to not allow spoofed host headers.
}

function getProtocol(req) {
  if (req.connection.encrypted) {
    return "https";
  }
  const forwardedProto = req.headers["x-forwarded-proto"];
  if (forwardedProto) {
    return forwardedProto.split(/\s*,\s*/)[0];
  }
  return "http";
}

export default Dynamic;
