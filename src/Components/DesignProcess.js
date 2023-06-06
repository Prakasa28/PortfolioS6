import React from "react";

const CircleComponent = () => {
  const phases = ["Discover", "Define", "Ideate", "Prototype", "Test"];

  return (
    <div style={{ display: "flex", marginTop: "4rem", marginBottom: "-5rem " }}>
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
          }}
        >
          <span>{phase}</span>
        </div>
      ))}
    </div>
  );
};

export default CircleComponent;
