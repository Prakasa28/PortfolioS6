import React from "react";

const CircleComponent = () => {
  const phases = ["Discover", "Define", "Ideate", "Prototype", "Test"];

  return (
    <div style={{ display: "flex", marginTop: "4rem", marginBottom: "-5rem" }}>
      {phases.map((phase, index) => (
        <div
          key={index}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            backgroundColor: "white",
            border: "2px solid black",
            marginRight: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0px 0px 10px 2px rgba(0, 0, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        >
          <span>{phase}</span>
        </div>
      ))}
    </div>
  );
};

export default CircleComponent;
