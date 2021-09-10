import React from "react";
import Fade from "react-reveal/Fade";
import Section from "elements/Section";

import ImgClient01 from "assets/images/clients-01.svg";
import ImgClient02 from "assets/images/clients-02.svg";
import ImgClient03 from "assets/images/clients-03.svg";
import ImgClient04 from "assets/images/clients-04.svg";
import ImgClient05 from "assets/images/clients-05.svg";
export default function Client() {
  return (
    <Section className="clients">
      <Fade bottom delay={500}>
        <div class="container">
          <div class="clients-inner section-inner has-top-divider has-bottom-divider">
            <ul class="list-reset">
              <li>
                <img src={ImgClient01} alt="Clients 01" />
              </li>
              <li>
                <img src={ImgClient02} alt="Clients 02" />
              </li>
              <li>
                <img src={ImgClient03} alt="Clients 03" />
              </li>
              <li>
                <img src={ImgClient04} alt="Clients 04" />
              </li>
              <li>
                <img src={ImgClient05} alt="Clients 05" />
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </Section>
  );
}
