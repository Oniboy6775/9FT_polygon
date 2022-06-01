import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaStrava } from "react-icons/fa";
const FAQ = () => {
  return (
    <Container>
      <h1 className="title">Road map</h1>
      <div className="title-underline"></div>
      <VerticalTimeline className="timeline">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--grey-800)",
            color: "var(--grey-200)",
          }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="PHASE 1"
          iconStyle={{ background: "var(--primary-500)", color: "black" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title title">Phase 1</h3>
          <h4 className="vertical-timeline-element-subtitle">Website Launch</h4>
          <br />- Growing Social organically <br /> -1st Mint of “20” 9FT’s of
          which 3 will be Whitelist <br /> -Mint Date: To be announced on
          Discord <br /> -1 Whitelist spot Raffle <br /> -2 Contest for 2
          whitelist spots
          {/* </p> */}
          <br />
          <br />
          <h5>Traits to expect?</h5>
          <p>
            (Shapes: RADIANT CUT, PRINCESS CUT, PEAR BRILLIANT, MARQUIS
            BRILLIANT, EMERALD CUT, CUSHION BRILLIANT, OVAL BRILLIANT) (Size:
            1.00 to 1.49 Carat) (Color: F, G or H) (Clarity: VVS2, VS1, VS2 or
            SI1) (Polish & Symmetry: Excellent, Very Good or Good)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--grey-800)",
            color: "var(--grey-200)",
          }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="PHASE 2"
          iconStyle={{ background: "var(--primary-500)", color: "black" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title title">Phase 2</h3>
          <h4 className="vertical-timeline-element-subtitle">
            2nd Mint of “7” 9FT’s of which 1 will be Whitelist
          </h4>
          - Mint Date: To be announced on Discord <br />
          <br />
          -1 White list contest <br />- 9FT Merch Launch <br />
          <br />
          <h5>Traits to expect?</h5>
          <p>
            (Shapes: PEAR BRILLIANT, MARQUIS BRILLIANT, EMERALD CUT, CUSHION
            BRILLIANT, OVAL BRILLIANT) (Size: 1.50 to 2.01 Carat) (Color: G, H,
            I or K) (Clarity: VS1, VS2 or SI1) (Polish & Symmetry: Excellent or
            Very Good)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--grey-800)",
            color: "var(--grey-200)",
          }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="PHASE 3"
          iconStyle={{ background: "var(--primary-500)", color: "black" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title title">Phase 3</h3>
          <h4 className="vertical-timeline-element-subtitle">
            3rd Mint of “9” 9FT’s of which 2 will be whitelisted
          </h4>
          - Mint Date: To be announced on Discord <br />
          <br />
          -1 Whitelist spot Raffle
          <br />- 1 White list contest <br />
          -Merch Giveaway Contest
          <h5>Traits to expect?</h5>
          <p>
            (Shapes: MARQUIS BRILLIANT, EMERALD CUT, CUSHION BRILLIANT, OVAL
            BRILLIANT) (Size: 1.50 to 2.01 Carat) (Color: G, H or J) (Clarity:
            VVS2, VS1, VS2 or SI1) (Polish & Symmetry: Excellent, Very Good)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--grey-800)",
            color: "var(--grey-200)",
          }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="PHASE 4"
          iconStyle={{ background: "var(--primary-500)", color: "black" }}
          icon={<FaStrava />}
        >
          <h3 className="vertical-timeline-element-title title">Phase 4</h3>
          <h4 className="vertical-timeline-element-subtitle">
            4th Mint of “9” 9FT’s of which 2 will be whitelisted
          </h4>
          - Mint Date: To be announced on Discord <br />
          <br />- 2 Contest for 2 whitelist spots
          <h5>Traits to expect?</h5>
          <p>
            (Shapes: RADIANT CUT, PEAR BRILLIANT, EMERALD CUT, CUSHION
            BRILLIANT) (Size: 1.65 to 2.44 Carat) (Color: F, G, I or J)
            (Clarity: VVS2, VS1 or VS2) (Polish & Symmetry: Excellent or Very
            Good)
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
};

export default FAQ;
const Container = styled.div`
  padding-top: 4rem;
  .timeline {
    z-index: 1;
  }
`;
