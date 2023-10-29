import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Home = () => {
  const { setShowSidebar, setShowModal } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={() => setShowSidebar(true)}>
        <FaBars />
      </button>

      <button
        className="btn"
        onClick={() => {
          setShowModal(true);
        }}
      >
        show modal
      </button>
    </main>
  );
};

export default Home;
