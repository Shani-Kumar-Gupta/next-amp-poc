export const config = { amp: true };

const Page2 = (props) => (
  <>
    <header className="headerbar">
      <div className="logo">
        <amp-img
          className="home-button"
          src="./static/images/LOGO2.png"
          width="54"
          height="53"
          alt="logo"
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
      <button on="tap:" className="btnPrimary w-100">
        Get Price
      </button>

      <amp-img
        width="220"
        height="113"
        src="./static/images/Group 12164.svg"
        alt="bg car image"
        className="bg_img"
      ></amp-img>
    </section>
    <footer className="footer">
      <h2 className="heading">Additional Services</h2>
      <div className="grid-3">
        <section>
          <article className="icon">
            <amp-img
              width="23"
              height="28"
              src="./static/images/Group 2807.svg"
              alt="claim"
            ></amp-img>
          </article>
          <a href="#" className="link">
            Claim
          </a>
        </section>
        <section>
          <article className="icon">
            <amp-img
              width="29"
              height="30"
              src="./static/images/Path 1457.svg"
              alt="service"
            ></amp-img>
          </article>
          <a href="#" className="link">
            Service
          </a>
        </section>
        <section>
          <article className="icon">
            <amp-img
              width="30"
              height="35"
              src="./static/images/Group 2533.svg"
              alt="policy"
            ></amp-img>
          </article>
          <a href="#" className="link">
            Print Policy
          </a>
        </section>
      </div>
    </footer>

    <style jsx>{`
      .bg_img {
        margin: 50px auto 25px;
      }

      .footer {
        padding: 40px 50px;
        background-color: #eff0f3;
        text-align: center;
      }

      .footer .heading {
        margin: 0 auto 20px;
      }

      .grid-3 > section {
        display: grid;
        place-items: center;
      }

      .icon {
        display: grid;
        place-items: center;
        box-shadow: inset 12px 12px 16px 0 rgba(0, 0, 0, 0.1),
          inset -8px -8px 12px 0 #fff;
        border-radius: 50%;
        height: 50px;
        width: 50px;
      }

      .existing {
        margin: 20px 0 0;

        font-size: 9px;
        font-weight: 500;
        line-height: 1.44;
        letter-spacing: -0.1px;
        text-align: center;
        color: #264a9f;
      }
    `}</style>
  </>
);

// amp-script requires absolute URLs, so we create a property `host` which we can use to calculate the script URL.
export async function getServerSideProps({ req }) {
  // WARNING: This is a generally unsafe application unless you're deploying to a managed platform like Vercel.
  // Be sure your load balancer is configured to not allow spoofed host headers.
  return { props: { host: `${getProtocol(req)}://${req.headers.host}` } };
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

export default Page2;
