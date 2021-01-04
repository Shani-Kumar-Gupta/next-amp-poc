import React from "react";
import { AmpIncludeAmpAccordion } from "../components/amp/AmpCustomElement";

export const config = { amp: true };

const AccTest = () => {
  return (
    <>
      <AmpIncludeAmpAccordion />
      <h1>accordian test</h1>
      <amp-accordian>
        <section id="section1" expanded>
          <h2>Section 1</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            quae, hic unde voluptas omnis autem accusantium
          </p>
        </section>
        <section>
          <h2>Section 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            repudiandae soluta ut dicta, minima architecto totam aliquid,
          </p>
        </section>
        <section>
          <h2>Section 3</h2>
          <div>Bunch of awesome content</div>
        </section>
      </amp-accordian>
    </>
  );
};

export default AccTest;
