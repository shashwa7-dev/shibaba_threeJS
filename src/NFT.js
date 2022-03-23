import { Canvas } from "@react-three/fiber";
import Box from "./Component/Box";
import styled from "styled-components";
import { OrbitControls, Stage, Stars } from "@react-three/drei";
import { Suspense, useState } from "react";
import Shiba from "./Component/Shiba";
import Shiba2 from "./Component/Shiba2";
import Shiba3 from "./Component/Shiba3";
import Shiba4 from "./Component/Shiba4";

import { useParams } from "react-router-dom";

const RenderModal = ({ id, show3D }) => {
  switch (id) {
    case 1:
      return <Shiba show3D={show3D} />;
      break;
    case 2:
      return <Shiba2 show3D={show3D} />;
      break;
    case 3:
      return <Shiba3 show3D={show3D} />;
      break;
    case 4:
      return <Shiba4 show3D={show3D} />;
      break;
    default:
      return <Box show3D={show3D} />;
      break;
  }
};

function NFT() {
  const [show3D, setShow3D] = useState(false);
  const { nft_id } = useParams();
  return (
    <Wrapper>
      <Canvas className="canvas">
        {show3D && <OrbitControls enableZoom={false} />}
        <Stars />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 3]} intensity={1} />
        <Suspense fallback={null}>
          <Stage preset="rembrandt" intensity={1} environment="city">
            <RenderModal id={parseInt(nft_id)} show3D={show3D} />
          </Stage>
        </Suspense>
      </Canvas>

      {/* html elements */}
      {show3D && (
        <button
          className="stop3D-btn action-btn"
          onClick={() => setShow3D(false)}
        >
          X
        </button>
      )}
      <button className="play3D-btn action-btn" onClick={() => setShow3D(true)}>
        3D mode
      </button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;

  canvas {
    height: 100vh;
  }
  .action-btn {
    padding: 0.5rem;
    margin: 1rem;
    border: 1px solid white;
    font-family: inherit;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
  }
  .stop3D-btn {
    position: absolute;
    top: 0;
    right: 0;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .play3D-btn {
    position: absolute;
    bottom: 0;
  }
`;

export default NFT;
