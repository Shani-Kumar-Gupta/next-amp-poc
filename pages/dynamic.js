import Layout from "../components/Layout";
import axios from "axios";

export const config = { amp: true };

const Dynamic = ({ host, pageData }) => {
  return (
    <section role="main" className="mainCntr">
      <h2 className="heading">
        Secure Your Car With The Super Insurance Plan!
      </h2>
      <p className="subHeading">
        Comprehensive, Third Party And Own Damage Car Insurance At Tempting
        Premiums
      </p>
    </section>
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
