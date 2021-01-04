import PropTypes from "prop-types";
import NextHead from "next/head";
import { AmpIncludeAmpInstallServiceworker } from "./amp/AmpCustomElement";

// Your app's theme color
//const THEME_COLOR = '#005af0'

/**
 * A sample page layout installing the AMP Serviceworker by default.
 *
 * @param {Props} props
 */
const Layout = (props) => (
  <>
    <NextHead>
      <title>{props.title || ""}</title>
      <meta name="description" content={props.description || ""} />
      {/* <meta name="theme-color" content={THEME_COLOR} /> */}
      <link rel="icon" sizes="192x192" href="/static/images/icons-192.png" />
      <link rel="apple-touch-icon" href="/static/images/icons-192.png" />
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </NextHead>

    {props.children}

    <AmpIncludeAmpInstallServiceworker />
    <amp-install-serviceworker
      src="/serviceworker.js"
      data-iframe-src="/install-serviceworker.html"
      layout="nodisplay"
    />

    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: Poppins, sans-serif;
        min-height: 100vh;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        background-color: #f5f5f5;
      }

      .headerbar {
          z-index: 999;
          top: 0;
          width: 100%;
          display: flex;
          align-items: center;
      }

      .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px;
          box-shadow: 
            8px 8px 12px 0 rgba(0, 0, 0, 0.1),
            -8px -8px 12px 0 #fff;
          border-radius: 5px;                
          height: 70px;                
          width: 70px;
        }

      .mainCntr{
          text-align:center;
      }

      .heading {
          margin: 34px 30px 5px;
          font-size: 23px;
          line-height: 1.22;
          letter-spacing: -0.51px;
          color: #264a9f;
      }

      .subHeading {
          margin: 0px 30px 27px;
          opacity: 0.6;
          color: #071e54;                
          font-size: 13px;
          font-weight: 500;
          line-height: 1.38;                
      }

      .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-items:center;
      }

      .grid-3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          justify-items: center;
      }

      .flex-bw{
        display:flex;
        justify-content:space-between;
        align-items:center;
      }

      .flex-center{
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .w-50{
        width: 153px;
      }

      .w-100{
        width: 300px;
      }

      .btnSecondary {
          height: 50px;               
          border-radius: 33px;
          border: none;
          outline:none;
          font-weight: bold
          color: #264a9f;
          box-shadow: -3px -3px 6px #fff, 3px 3px 6px #bfc3cf;
          background-image: linear-gradient(81deg,  #eff0f3 16%,#e5e6eb 93%);    
      }

      .btnPrimary {
          height: 50px;
          color: white;
          border: none;
          outline:none;
          font-weight: bold                
          border-radius: 33px;
          box-shadow: -3px -3px 6px #fff, 3px 3px 6px #bfc3cf;
          background-image: linear-gradient(to right,#35d3e1 -45% , #264a9f 110%, #195dff 140%);
      }

      .link{
          opacity: 0.5;                
          font-size: 13px;
          font-weight: 500;
          line-height: 1.54;
          letter-spacing: -0.14px;
          color: #071e54;
      } 

      .glbInput {
        width: 322px;
        height: 50px;
        border-radius: 25px;
        color: #071e54;
        opacity: .8;
        border: none;
        outline: none;
        box-shadow: inset 3px 3px 6px #bfc3cf, inset -3px -3px 6px #fff;
        background: transparent;
        font-size: 14px;
        font-weight: 600;
        padding: 20px 0 20px 25px;
      }
    `}</style>
  </>
);

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Layout;
