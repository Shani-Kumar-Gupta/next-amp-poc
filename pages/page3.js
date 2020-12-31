import Layout from "../components/Layout";
// import AmpState from '../components/amp/AmpState'
// import AmpScript from '../components/amp/AmpScript'
import {
    AmpIncludeAmpList,
    AmpIncludeAmpCarousel,
    AmpIncludeAmpAccordion
} from '../components/amp/AmpCustomElement'

export const config = { amp: true };

const Page3 = (props) => (
    <>
        <Layout
            title="Welcome to AMP"
            description="Learn how to build an AMP First with Next.js."
        >
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
                <p className="subHeading">*COVID-19 Covered For International Travel Policy Only, T&C Apply.</p>
                <amp-img
                    width="220"
                    height="113"
                    src="./static/images/Group 12545.svg"
                    alt="bg travel image"
                    className="bg_img"
                ></amp-img>
            </section>
            <section>
                <h2 className="heading2">Travel Insurance</h2>
                <div className="content">
                    <ul>
                        <li>Whether travelling solo, with family or on a business ,leisure or study trips, a peaceful journey is all we need during a trip. And for us
                        at Tata AIG, your journey is as important as your destination!</li>
                        <li>Be it home turf or international locations, the Tata AIG travel insurance plans will cover your back at every step of the journey, taking care of you and your family against any
                        adverse situations, be it medical or any trip inconvenience.</li>
                        <li>Our 24X7 worldwide assistance network are always on the job to support , guide &  make your journeys a memorable one.<br />
                        So, travel the world and make memories with Tata AIG Travel Plans! </li>
                    </ul>
                </div>
                <a href="#" className="link">See More</a>
            </section>
            <amp-img
                width="325"
                height="130.7"
                src="./static/images/Group 2625.svg"
                alt="bg travel image"
                className="bg_img1"
            ></amp-img>

            <section className="advantage">
                <h2 className="heading">Advantages Of TATA AIG Insurance</h2>
                <section>
                    <div>
                        <article className="icon">
                            <amp-img
                                width="30.5"
                                height="33.4"
                                src="./static/images/Group 2750.svg"
                                alt="claim"
                            ></amp-img>
                        </article>
                    </div>
                    <p>We are from House of Tata and legacy of trust and customer-centricity precedes us</p>
                </section>
                <section>
                    <div>
                        <article className="icon">
                            <amp-img
                                width="21.6"
                                height="36.7"
                                src="./static/images/Group 2749.svg"
                                alt="service"
                            ></amp-img>
                        </article>
                    </div>
                    <p>Our processes are transparent, quick and easy to understand </p>
                </section>
                <section>
                    <div>
                        <article className="icon">
                            <amp-img
                                width="24.7"
                                height="33.3"
                                src="./static/images/Path 1651.svg"
                                alt="policy"
                            ></amp-img>
                        </article>
                    </div>
                    <p>We have no hidden conditions or illegible fine print</p>
                </section>
                <section>
                    <div>
                        <article className="icon">
                            <amp-img
                                width="26.9"
                                height="35.9"
                                src="./static/images/Group 2818.svg"
                                alt="claim"
                            ></amp-img>
                        </article>
                    </div>
                    <p>Our depreciation slabs are pre-declared </p>
                </section>
                <section>
                    <div>
                        <article className="icon">
                            <amp-img
                                width="29.9"
                                height="30"
                                src="./static/images/Group 2748.svg"
                                alt="service"
                            ></amp-img>
                        </article>
                    </div>
                    <p>We have made buying vehicle insurance online extremely simple</p>
                </section>
                <section>
                    <div>
                        <article className="icon">
                            <amp-img
                                width="36.5"
                                height="36.3"
                                src="./static/images/24h.svg"
                                alt="policy"
                            ></amp-img>
                        </article>
                    </div>
                    <p>We are available to answer your queries 24x7</p>
                </section>
                <section>
                    <div>
                        <article className="icon">
                            <amp-img
                                width="32.2"
                                height="32.2"
                                src="./static/images/puzzle-piece.svg"
                                alt="claim"
                            ></amp-img>
                        </article>
                    </div>
                    <p>We have a wide array of add-on covers to accentuate your choices</p>
                </section>
                <section>
                    <div>
                        <article className="icon">
                            <amp-img
                                width="36.4"
                                height="36.7"
                                src="./static/images/Group 2866.svg"
                                alt="service"
                            ></amp-img>
                        </article>
                    </div>
                    <p>We are widely connected to a network of 6500+ cashless garages in India</p>
                </section>
            </section>
            <section className="mainCntr">
                <h2 className="heading">What's Covered In Tata AIG Travel Insurance</h2>
                {/* <amp-accordion class="sample"
                    expand-single-section>
                    <section>
                        <h4>Section 1</h4>
                        <p>Id lacus amet. Aliquam eos nunc ut scelerisque lacinia, eu rutrum id, vestibulum aliqua vivamus luctus eu rhoncus ut, sodales id. Velit lacus, fermentum neque et sagittis, ac venenatis volutpat, dolore neque feugiat proin fermentum odio,odio arcu in eu wisi. </p>
                    </section>
                    <section>
                        <h4>Section 2</h4>
                        <p>Id lacus amet. Aliquam eos nunc ut scelerisque lacinia, eu rutrum id, vestibulum aliqua vivamus luctus eu rhoncus ut, sodales id. Velit lacus, fermentum neque et sagittis, ac venenatis volutpat, dolore neque feugiat proin fermentum odio,odio arcu in eu wisi. </p>
                    </section>
                </amp-accordion> */}
                <h2 className="heading">What's Not Covered</h2>
                <h2 className="heading">Did Not Find What You Were Looking For?</h2>
                <button on="tap:" className="btnPrimary w-100">Have us call you</button>
                <button on="tap:" className="btnSecondary renew w-100">Download Policy Wordings</button>
                <h2 className="heading">Is Your Next Destination Covered By TATA AIG Travel Insurance !</h2>
                <form className="sample-form"
                    method="post"
                    action-xhr="/documentation/examples/api/submit-form-xhr"
                    target="_top">
                    <input
                        className="glbInput"
                        type="text"
                        name="country"
                        min="1"
                        max="5"/>
                    <p>Insure your trip to Australia right now !  </p>
                </form>
                <button on="tap:" className="btnPrimary w-100">Buy Now</button>
            </section>
        </Layout>
        <style jsx>{`
      .bg_img {
        margin: 23px auto 25px;
      }
      
      .bg_img1 {
        margin: 79.2px 2.5px 100.1px 18.5px;
      }

      .subHeading {
          margin-top: 25px;
      }

      .btnPrimary {
          margin-top: 20px;
          margin-bottom: 20px;
      }

      .btnSecondary {
          margin-bottom: 100px;
      }

      .glbInput{
          margin-top: 33px;
      }

      .heading2 {
        margin: 50.7px 30px 5px;
        font-size: 23px;
        line-height: 1.22;
        letter-spacing: -0.51px;
        color: #264a9f;
      }

      .content ul {
          list-style: none;
          padding: 0;
          margin: 30px 1rem 7px 1rem ;
      }

      .content ul li {
        margin: 0px 5.4px 7px 10px;
        opacity: 0.6;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.38;
        text-align: left;
        color: #071e54;
      }

      .li-icon {
          width: 8px;
          height: 8px;
          margin: 37px 0 88px 27px;
          box-shadow: -3px -3px 6px #fff, 3px 3px 6px #bfc3cf;
          background-image: linear-gradient(to right, #35d3e1 -44%, #264a9f 110%, #195dff 139%);
      }

      .link {
          margin-left: 45px;
      }

      .advantage {
        padding: 28px 28px;
        background-color: #eff0f3;
        text-align: center;
      }

      .advantage section {
          display: flex;
          flex-direction: row;
          margin: 0px;
      }

      .advantage section .icon {
          width: 65px;
          height: 65px;
      }

      .advantage section p{
        margin: 15px 0 42px 15px;
        opacity: 0.8;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.33;
        letter-spacing: 0.12px;
        text-align: left;
        color: #071e54;
      }

      .sample-form p {
        margin: 10px 12px 28px 43px;
        opacity: 0.5;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.54;
        letter-spacing: -0.14px;
        text-align: left;
        color: #071e54;
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

export default Page3;
