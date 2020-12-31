import Layout from '../components/Layout'
import AmpState from '../components/amp/AmpState'
import AmpScript from '../components/amp/AmpScript'
import {
    AmpIncludeAmpList,
    AmpIncludeAmpCarousel,
} from '../components/amp/AmpCustomElement'

export const config = { amp: true }

const Home = (props) => (
    <>
        <Layout
            title="Welcome to AMP"
            description="Learn how to build an AMP First with Next.js."
        >
            <main>
                <header className="headerbar">
                    <div className="logo">
                        <amp-img className="home-button" src="./static/images/LOGO2.png" width="54" height="53"></amp-img>
                    </div>
                </header>
                <h2 className="heading">Secure Your Car With The Super Insurance Plan!</h2>
                <p className="comp">Comprehensive, Third Party And Own Damage Car Insurance At Tempting Premiums</p>
                <div className="click">
                    <button on="tap:" className="renew">
                        <div>Renew</div>
                        <div>Existing TATA AIG Policy</div>
                    </button>
                    <button on="tap:" className="getprice">Get Price</button>
                </div>
                <div className="col-12" style={{ textAlign: "center" }}>
                    <amp-img width="220" height="113" src="./static/images/Group 12164.svg"></amp-img>
                </div>
                <footer className="footer">
                    <div className="addition">Additional Services</div>
                    <div className="policy">
                        <article className="claim">
                            <amp-img width="23" height="28" src="./static/images/Group 2807.svg" alt="claim"></amp-img>
                        </article>
                        <article className="claim">
                            <amp-img width="23" height="28" src="./static/images/Path 1457.svg" alt="claim"></amp-img>
                        </article>
                        <article className="claim">
                            <amp-img width="23" height="28" src="./static/images/Group 2533.svg" alt="claim"></amp-img>
                        </article>
                    </div>
                </footer>
            </main>
        </Layout>
        <style jsx>{`
            main {
                margin: 0 auto;
                max-width: 800px;
            }
            .home-button {
                margin-top: 8px;
            }
            main .headerbar {
                z-index: 999;
                top: 0;
                width: 100%;
                display: flex;
                align-items: center;
            }

            .addition{
                width: 227px;
                height: 32px;
                margin: 0 32px 20px 31px;
                font-family: Poppins;
                font-size: 23px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.22;
                letter-spacing: -0.51px;
                text-align: center;
                color: #264a9f;
            }

            .heading {
                width: 292px;
                height: 60px;
                margin: 34px 41px 5px 42px;
                font-family: Poppins;
                font-size: 23px;
                font-weight: 400;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.22;
                letter-spacing: -0.51px;
                text-align: center;
                color: #264a9f;
            }
            
            .click {
                display: grid;
                grid-template-columns: 1fr 1fr;
                margin-top: -25px;
            }

            .policy {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                margin-left: -25px;
                margin-right: 20px
            }

            .renew {
                width: 153px;
                height: 50px;
                margin: 27px 16px 50.1px 21px;
                border-radius: 33px;
                border: none;
                font-weight: bold
                color: #264a9f;
                box-shadow: -3px -3px 6px #fff, 3px 3px 6px #bfc3cf;
                background-image: linear-gradient(284deg, #e5e6eb 93%, #eff0f3 16%);    
            }

            .renew div:first-child {
                margin-top: 0;
            }
            .renew div:nth-child(2) {
                font-size: 9px;
                color: #264a9f;
                margin-top: -2px;
            }

            .existing {
                width: 105px;
                height: 11px;
                margin: 20px 0 0;
                font-family: Poppins;
                font-size: 9px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.44;
                letter-spacing: -0.1px;
                text-align: center;
                color: #264a9f;
            }

            .getprice {
                width: 151px;
                height: 50px;
                color: white;
                border: none;
                font-weight: bold
                margin: 27px 28px 50.1px 16px;
                border-radius: 33px;
                box-shadow: -3px -3px 6px #fff, 3px 3px 6px #bfc3cf;
                background-image: linear-gradient(to right,#35d3e1 -45% , #264a9f 110%, #195dff 140%);
            }

            .comp {
                width: 317px;
                height: 38px;
                margin: 5px 35px 27px;
                opacity: 0.6;
                font-family: Poppins;
                font-size: 13px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.38;
                letter-spacing: normal;
                text-align: center;
                color: #071e54;
            }

            .claim {
                align-items: center;
                background-color: #f5f5f5;
                box-shadow: 
                  inset 12px 12px 16px 0 rgba(0, 0, 0, 0.1),
                  inset -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                display: grid;
                height: 80px;
                justify-content: center;
                width: 80px;
            }

            .footer {
                width: 375px;
                height: 206px;
                margin: 75.7px 0 0;
                padding: 40px 48px 41px 49px;
                background-color: #eff0f3
            }

            .logo {
                align-items: center;
                background-color: #f5f5f5;
                margin: 10px;
                box-shadow: 
                  12px 12px 16px 0 rgba(0, 0, 0, 0.1),
                  -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
                border-radius: 5px;
                display: flex;
                height: 80px;
                justify-content: center;
                width: 80px;
              }
            .site-name {
                margin: auto;
            }
            article {
                margin-top: 50px;
            }
            `
        }</style>
    </>
)

// amp-script requires absolute URLs, so we create a property `host` which we can use to calculate the script URL.
export async function getServerSideProps({ req }) {
    // WARNING: This is a generally unsafe application unless you're deploying to a managed platform like Vercel.
    // Be sure your load balancer is configured to not allow spoofed host headers.
    return { props: { host: `${getProtocol(req)}://${req.headers.host}` } }
}

function getProtocol(req) {
    if (req.connection.encrypted) {
        return 'https'
    }
    const forwardedProto = req.headers['x-forwarded-proto']
    if (forwardedProto) {
        return forwardedProto.split(/\s*,\s*/)[0]
    }
    return 'http'
}

export default Home
