import { Route, Routes, useParams } from "react-router-dom";
import NFT from "./NFT";

function App() {
  return (
    <Routes>
      <Route path="/:nft_id" element={<NFT />} />
      <Route
        path="*"
        element={
          <a href="/1" style={{ fontSize: "2rem", color: "white" }}>
            SHiba baaa!
          </a>
        }
      />
    </Routes>
  );
}

export default App;
