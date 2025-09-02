import React from "react";
import { SiBlender, SiAutodesk, SiAdobe ,SiAdobephotoshop ,SiPhotopea} from "react-icons/si";
import { Col, Row } from "react-bootstrap";
import MayaSVG from "../../Assets/Projects/maya.png";
import SubstancePainterSVG from "../../Assets/Projects/substance.png";

// const Extra = () => {
//   return (
//      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//         <Col xs={4} md={2} className="tech-icons">
//               <SiAdobephotoshop />
//             </Col>
//          <Col xs={4} md={2} className="tech-icons">
//         <SiAdobe title="Substance Painter" />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//          <SiAutodesk title="Autodesk Maya" />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//          <SiBlender title="Blender" />
//       </Col>      
//      <Col xs={4} md={2} className="tech-icons">
//               <SiPhotopea />
//             </Col>

//             <Col xs={3} md={2} className="tech-icons">
//             <img src={MayaSVG} alt="Autodesk Maya" title="Autodesk Maya" className="w-5 h-5" />
//             </Col>

//             <Col xs={4} md={2} className="tech-icons">
//             <img src={SubstancePainterSVG} alt="Substance Painter" title="Substance Painter" className="w-8 h-9" />
//             </Col>


//       </Row>
//   );
// };
// export default Extra;




const Extra = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* React Icons */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop size={60} />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiAdobe size={60} title="Substance Painter" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAutodesk size={60} title="Autodesk Maya" />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender size={60} title="Blender" />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <SiPhotopea size={60} />
      </Col>

      {/* Custom images */}
      <Col xs={4} md={2} className="tech-icons">
        <img 
          src={MayaSVG} 
          alt="Autodesk Maya" 
          title="Autodesk Maya" 
          style={{ width: 60, height: 60, objectFit: "contain" }} 
        />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img 
          src={SubstancePainterSVG} 
          alt="Substance Painter" 
          title="Substance Painter" 
          style={{ width: 60, height: 60, objectFit: "contain" }} 
        />
      </Col>

    </Row>
  );
};

export default Extra;

