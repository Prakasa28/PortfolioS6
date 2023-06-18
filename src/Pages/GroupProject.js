import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import groupProjectData from "../Data/GroupProjectData";
import DesignProcess from "../Components/DesignProcess";
// import UsabilityTest from "../Pdf/IPusabilityTest.pdf";
import CompetitiveAnalysis from "../Pdf/GPcompetitiveanalysis.pdf";
import Interview from "../Pdf/GPinterview.pdf";
import LiteratureStudy from "../Pdf/GPliteraturestudy.pdf";
import IframeComponent from "../Components/Iframe";
import ProjectAgreement from "../Pdf/projectagreement.pdf";
import ProjectPlan from "../Pdf/GPprojectplan.pdf";
import Prototype from "../Pdf/GPprototype.pdf";
import C4model from "../Pdf/C4model.pdf";
import UserTestReport from "../Pdf/usertestreport.pdf";
import SubQuestoins from "../Pdf/GPsubquestions.pdf";

function GroupProject() {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      const section = location.hash.substr(1); // Remove the leading '#'
      const targetElement = document.getElementById(section);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (location.hash) {
      // Wait for the component to render before scrolling
      setTimeout(scrollToSection, 0);
    }
  }, [location]);
  return (
    <div>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div className="container mx-auto max-width pt-6 pb-16">
          <div className="flex flex-col justify-center items-center mt-32 mb-32">
            <h1 className="text-2xl text-dark-heading  text-4xl xl:text-7xl  font-bold">
              {groupProjectData.group1.heading}
            </h1>
            <p className="text-2xl text-dark-heading  text-4xl xl:text-lg  m-3">
              {groupProjectData.group1.subHeading}
            </p>
          </div>
          <div>
            <h1 className="text-xl text-dark-heading font-bold">
              {groupProjectData.introHeading}
            </h1>
            <br />
            <p className="text-lg text-dark-heading">
              {" "}
              {groupProjectData.introText}
            </p>
            <br />
            <br />
            <br />
          </div>
          <section id="Team-Canvas">
            <h1 className="text-xl text-dark-heading font-bold">
              {groupProjectData.teamcanvas}
            </h1>
            <br />
            <p
              className="text-lg text-dark-heading"
              dangerouslySetInnerHTML={{
                __html: groupProjectData.teamcanvasText,
              }}
            ></p>
            <br />
            <IframeComponent
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FM3E2VGFKRj9ETcwruuv4UA%2FTeam-Canvas%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DgqLLjQv7uyyB0V7G-1"
              title="Example"
              width="100%"
              height="450"
            />
          </section>
          <br />
          <br />
          <br />

          <section id="Project-Plan">
            <div className="flex flex-row gap-5">
              <div>
                <h1 className="text-xl text-dark-heading   font-bold">
                  {groupProjectData.projectagreement}
                </h1>
                <br />
                <p
                  className="text-lg text-dark-heading    "
                  dangerouslySetInnerHTML={{
                    __html: groupProjectData.projectagreementText,
                  }}
                ></p>
                <br />

                <div>
                  <a
                    href={ProjectAgreement}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="bg-gradient"
                      style={{
                        fontSize: "16px",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                      }}
                    >
                      <p className="font-bold"> View document</p>
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <h1 className="text-xl text-dark-heading font-bold">
                  {groupProjectData.projectplan}
                </h1>
                <br />
                <p
                  className="text-lg text-dark-heading    "
                  dangerouslySetInnerHTML={{
                    __html: groupProjectData.projectplanText,
                  }}
                ></p>
                <br />

                <div>
                  <a
                    href={ProjectPlan}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="bg-gradient"
                      style={{
                        fontSize: "16px",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                      }}
                    >
                      <p className="font-bold"> View document</p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <section id="Brainstrom-Sub-Questions">
            <div className="flex flex-row flex-row-reverse gap-5 items-center">
              <div style={{ flex: "1" }}>
                <p className="text-xl text-dark-heading    font-bold">
                  {groupProjectData.brainstromSubQuestions.question}
                </p>
                <br />
                <div className="flex flex-row gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {groupProjectData.brainstromSubQuestions.subHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {groupProjectData.brainstromSubQuestions.methods}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {groupProjectData.brainstromSubQuestions.subheadingWhy}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {groupProjectData.brainstromSubQuestions.why}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {groupProjectData.brainstromSubQuestions.subHeadingHow}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {groupProjectData.brainstromSubQuestions.how}
                  </p>
                </div>

                <br />

                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {groupProjectData.brainstromSubQuestions.resultHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {groupProjectData.brainstromSubQuestions.results}
                  </p>
                </div>
                <br />

                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {groupProjectData.brainstromSubQuestions.conclusionHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {groupProjectData.brainstromSubQuestions.conclusion}
                  </p>
                </div>

                <br />
                <div className="flex flex-col text-lg text-dark-heading    ">
                  <div>
                    <a
                      href={SubQuestoins}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="bg-gradient"
                        style={{
                          fontSize: "16px",
                          padding: "10px 20px",
                          border: "none",
                          borderRadius: "5px",
                        }}
                      >
                        <p className="font-bold"> View document</p>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                <div className="flex flex-col">
                  <div style={{ flex: "1", alignItems: "center" }}>
                    <img
                      src={groupProjectData.brainstromSubQuestions.image}
                      alt="Prototype"
                    />
                  </div>
                  <div style={{ flex: "1", alignItems: "center" }}>
                    <IframeComponent
                      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FbEwjKbB2OMDHxowklid8K0%2FResearch-Questions-Brainstorm%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DGqfs4xmkbnx8LYsy-1"
                      title="Example"
                      width="100%"
                      height="400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div
            div
            className="flex flex-col justify-center items-center mt-20 mb-20"
          >
            <h1 className="text-2xl text-dark-heading    font-bold">
              {groupProjectData.group2.heading}
            </h1>
            <DesignProcess />
          </div>
        </div>
        <h1
          className="text-2xl text-dark-heading  text-4xl   font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {groupProjectData.group2.subHeading}
        </h1>
        <div className="container mx-auto max-width pt-6 pb-16">
          <div>
            <p
              className="text-lg text-dark-heading    "
              dangerouslySetInnerHTML={{
                __html: groupProjectData.group4.discoverPhase,
              }}
            ></p>
            <br />
            <br />

            <section id="Literature-Study">
              <div className="flex flex-row flex-row-reverse gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-lg text-dark-heading    font-bold">
                    {groupProjectData.firstPhase.question}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.firstPhase.subHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.firstPhase.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.firstPhase.subheadingWhy}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.firstPhase.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.firstPhase.subHeadingHow}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.firstPhase.how}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.firstPhase.resultHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.firstPhase.results}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.firstPhase.conclusionHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.firstPhase.conclusion}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col text-lg text-dark-heading    ">
                    <div>
                      <a
                        href={LiteratureStudy}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          className="bg-gradient"
                          style={{
                            fontSize: "16px",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                          }}
                        >
                          <p className="font-bold"> View document</p>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <img
                    src={groupProjectData.firstPhase.image}
                    alt="Prototype"
                  />
                  <a
                    href="https://cmdmethods.nl/cards/library/literature-study"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="text-lg text-dark-heading    font-bold">
                      Image source
                    </p>
                  </a>
                </div>
              </div>
            </section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <section id="Competitive-analysis">
              <div className="flex flex-row gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-lg text-dark-heading    font-bold">
                    {groupProjectData.questionTwo.question}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.questionTwo.subHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.questionTwo.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.questionTwo.subheadingWhy}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.questionTwo.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.questionTwo.subHeadingHow}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.questionTwo.how}
                    </p>
                  </div>

                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.questionTwo.resultHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.questionTwo.results}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.questionTwo.conclusionHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.questionTwo.conclusion}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col text-lg text-dark-heading    ">
                    <div>
                      <a
                        href={CompetitiveAnalysis}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          className="bg-gradient"
                          style={{
                            fontSize: "16px",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                          }}
                        >
                          <p className="font-bold"> View document</p>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <img
                    src={groupProjectData.questionTwo.image}
                    alt="Prototype"
                  />
                </div>
              </div>
            </section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <section id="User-interview">
              <div className="flex flex-row flex-row-reverse gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-lg text-dark-heading    font-bold">
                    {groupProjectData.questionThree.question}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.questionThree.subHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.questionThree.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.questionThree.subheadingWhy}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.questionThree.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.questionThree.subHeadingHow}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.questionThree.how}
                    </p>
                  </div>

                  <br />

                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.questionThree.resultHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.questionThree.results}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.questionThree.conclusionHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.questionThree.conclusion}
                    </p>
                  </div>

                  <br />
                  <div className="flex flex-col text-lg text-dark-heading    ">
                    <div>
                      <a
                        href={Interview}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          className="bg-gradient"
                          style={{
                            fontSize: "16px",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                          }}
                        >
                          <p className="font-bold"> View document</p>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <div className="flex flex-col">
                    <div style={{ flex: "1", alignItems: "center" }}>
                      <img
                        src={groupProjectData.questionThree.image}
                        alt="Prototype"
                      />
                    </div>
                    <div style={{ flex: "1", alignItems: "center" }}>
                      <IframeComponent
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F1W3etVKZ2IdlwSM5JUonb6%2FInterview-Questions%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DdekREdA0X1k0CyEU-1"
                        title="Example"
                        width="100%"
                        height="400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>

        <h1
          className="text-2xl text-dark-heading  text-4xl   font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {groupProjectData.secondPhaseHeading}
        </h1>

        <div className="container mx-auto max-width pt-6 pb-16">
          <section id="Story-board">
            <div>
              <p className="text-lg text-dark-heading   ">
                {groupProjectData.secondPhase.text}
              </p>

              <div className="flex flex-row gap-5 items-center mt-24">
                <div style={{ flex: "1" }}>
                  <p className="text-lg text-dark-heading    font-bold">
                    {groupProjectData.secondPhase.question}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.secondPhase.subHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.secondPhase.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.secondPhase.subheadingWhy}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.secondPhase.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.secondPhase.subHeadingHow}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.secondPhase.how}
                    </p>
                  </div>

                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.secondPhase.resultHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.secondPhase.results}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.secondPhase.conclusionHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.secondPhase.conclusion}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col text-lg text-dark-heading    "></div>
                </div>
                <div style={{ height: "30", flex: "1", alignItems: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={groupProjectData.secondPhase.image1}
                        alt="Prototype"
                        style={{ height: "300px", margin: "5px" }}
                      />
                      <img
                        src={groupProjectData.secondPhase.image2}
                        alt="Prototype"
                        style={{ height: "300px", margin: "5px" }}
                      />
                      <img
                        src={groupProjectData.secondPhase.image3}
                        alt="Prototype"
                        style={{ height: "300px", margin: "5px" }}
                      />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={groupProjectData.secondPhase.image4}
                        alt="Prototype"
                        style={{ height: "300px", margin: "5px" }}
                      />
                      <img
                        src={groupProjectData.secondPhase.image5}
                        alt="Prototype"
                        style={{ height: "300px", margin: "5px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-24">
            <section id="Finalising-concept">
              <div className="flex flex-row flex-row-reverse  gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-xl text-dark-heading  font-bold">
                    {groupProjectData.finalisingConcept.question}
                  </p>
                  <br />

                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.finalisingConcept.subHeadingHow}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.finalisingConcept.how}
                    </p>
                  </div>

                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.finalisingConcept.resultHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.finalisingConcept.results}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.finalisingConcept.conclusionHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.finalisingConcept.conclusion}
                    </p>
                  </div>

                  <br />
                </div>

                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <div className="flex flex-col gap-4">
                    <div style={{ flex: "1", alignItems: "center" }}>
                      <img
                        src={groupProjectData.finalisingConcept.image}
                        alt="Prototype"
                        style={{ maxHeight: "400px" }}
                      />
                    </div>
                    <div style={{ flex: "1", alignItems: "center" }}>
                      <IframeComponent
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRJZBLueS8ST0gA67ZdHmeh%2FFinalizing-Concept%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DkeSbwDFzMWml47AS-1"
                        title="Example"
                        width="100%"
                        height="400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <h1
          className="text-2xl text-dark-heading  text-4xl   font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {groupProjectData.thirdPhaseHeading}
        </h1>

        <div className="container mx-auto max-width pt-6 pb-16">
          <p className="text-lg text-dark-heading   ">
            {groupProjectData.thirdPhaseText}
          </p>

          <div className="mt-24">
            <section id="Finalising-features">
              <div className="flex flex-row flex-row-reverse gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-xl text-dark-heading font-bold">
                    {groupProjectData.thirdPhaseMoscow.question}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.thirdPhaseMoscow.subHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.thirdPhaseMoscow.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.thirdPhaseMoscow.subheadingWhy}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.thirdPhaseMoscow.why}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.thirdPhaseMoscow.subHeadingHow}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.thirdPhaseMoscow.how}
                    </p>
                  </div>

                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.thirdPhaseMoscow.resultHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.thirdPhaseMoscow.results}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.thirdPhaseMoscow.conclusionHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.thirdPhaseMoscow.conclusion}
                    </p>
                  </div>

                  <br />
                </div>

                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <div className="flex flex-col">
                    <div style={{ flex: "1", alignItems: "center" }}>
                      <img
                        src={groupProjectData.thirdPhaseMoscow.image}
                        alt="Prototype"
                        style={{ Width: "100%", Height: "100%" }}
                      />
                      <a
                        href="https://www.komododigital.co.uk/insights/how-to-use-the-moscow-prioritisation-technique-to-execute-software-projects/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p className="text-lg text-dark-heading    font-bold">
                          Image source
                        </p>
                      </a>
                    </div>
                    <br />
                    <div style={{ flex: "1", alignItems: "center" }}>
                      <IframeComponent
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FxVPbjUqw85PQHT3FQNmOiZ%2FMosCow%3Ftype%3Dwhiteboard%26t%3DRfY32DsDeNnOVPoj-1"
                        title="Example"
                        width="100%"
                        height="400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-24">
            <section id="Mood-board">
              <div className="flex flex-row  gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-lg text-dark-heading    font-bold">
                    {groupProjectData.thirdPhase.question}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.thirdPhase.subHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.thirdPhase.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.thirdPhase.subheadingWhy}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.thirdPhase.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.thirdPhase.subHeadingHow}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.thirdPhase.how}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.thirdPhase.resultHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.thirdPhase.results}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.thirdPhase.conclusionHeading}
                    </p>
                    <p
                      className="text-lg text-dark-heading  "
                      dangerouslySetInnerHTML={{
                        __html: groupProjectData.thirdPhase.conclusion,
                      }}
                    ></p>
                  </div>
                  <br />
                </div>
                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <img
                    src={groupProjectData.thirdPhase.image}
                    alt="Prototype"
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="mt-24">
            <section id="User-flow">
              <div className="flex flex-row flex-row-reverse  gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-lg text-dark-heading    font-bold">
                    {groupProjectData.userflow.question}
                  </p>
                  <br />
                  <p className="text-lg text-dark-heading    font-bold">
                    {groupProjectData.userflow.heading}
                  </p>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.userflow.subheadingWhy}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.userflow.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.userflow.subHeadingHow}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.userflow.how}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.userflow.resultHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.userflow.results}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.userflow.conclusionHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.userflow.conclusion}
                    </p>
                  </div>
                  <br />
                </div>
                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <img src={groupProjectData.userflow.image} alt="Prototype" />
                </div>
              </div>
            </section>
          </div>
        </div>

        <h1
          className="text-2xl text-dark-heading  text-4xl   font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {groupProjectData.fourthPhaseHeading}
        </h1>

        <section id="Prototyping">
          <div className="container mx-auto max-width pt-6 pb-16">
            <p className="text-lg text-dark-heading   ">
              {groupProjectData.fourthPhaseText}
            </p>
            <div className="mt-24">
              <div className="flex flex-row flex-row-reverse gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-lg text-dark-heading    font-bold">
                    {groupProjectData.fourthPhase.question}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.fourthPhase.subHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.fourthPhase.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.fourthPhase.subheadingWhy}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.fourthPhase.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.fourthPhase.subHeadingHow}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.fourthPhase.how}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.fourthPhase.resultHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.fourthPhase.results}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.fourthPhase.conclusionHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.fourthPhase.conclusion}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col text-lg text-dark-heading    ">
                    <div>
                      <a
                        href={Prototype}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          className="bg-gradient"
                          style={{
                            fontSize: "16px",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                          }}
                        >
                          <p className="font-bold"> View document</p>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <div className="flex flex-col">
                    <div style={{ flex: "1", alignItems: "center" }}>
                      <img
                        src={groupProjectData.fourthPhase.image}
                        alt="Prototype"
                        style={{ Height: "300px;" }}
                      />
                    </div>
                    <div style={{ flex: "1", alignItems: "center" }}>
                      <IframeComponent
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FGGHb3WXmJlHUf2uv1AedNB%2FExposure-limit%3Ftype%3Ddesign%26node-id%3D0%253A1%26t%3DU5lzDRoviM6qFP1L-1"
                        title="Example"
                        width="100%"
                        height="400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto max-width pt-6 pb-16">
          <div className="mt-24">
            <section id="C4-Model">
              <div className="flex flex-row  gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-xl text-dark-heading    font-bold">
                    {groupProjectData.c4.heading}
                  </p>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.c4.subHeadingHow}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.c4.how}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.c4.resultHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.c4.results}
                    </p>
                  </div>
                  <br />

                  <div>
                    <a href={C4model} target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-gradient"
                        style={{
                          fontSize: "16px",
                          padding: "10px 20px",
                          border: "none",
                          borderRadius: "5px",
                        }}
                      >
                        <p className="font-bold"> View document</p>
                      </button>
                    </a>
                  </div>
                  <br />
                </div>
                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <img src={groupProjectData.c4.image} alt="Prototype" />
                </div>
              </div>
            </section>
          </div>
        </div>
        <h1
          className="text-2xl text-dark-heading  text-4xl   font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {groupProjectData.userTestHeading}
        </h1>

        <div className="container mx-auto max-width pt-6 pb-16">
          <div className="mt-24">
            <section id="Usability-Testing">
              <div className="flex flex-row flex-row-reverse  gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-lg text-dark-heading    font-bold">
                    {groupProjectData.userTest.question}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.userTest.subHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.userTest.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.userTest.subheadingWhy}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.userTest.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.userTest.subHeadingHow}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.userTest.how}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.userTest.resultHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.userTest.results}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {groupProjectData.userTest.conclusionHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {groupProjectData.userTest.conclusion}
                    </p>
                  </div>
                  <br />
                  <div>
                    <a
                      href={UserTestReport}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="bg-gradient"
                        style={{
                          fontSize: "16px",
                          padding: "10px 20px",
                          border: "none",
                          borderRadius: "5px",
                        }}
                      >
                        <p className="font-bold"> View document</p>
                      </button>
                    </a>
                  </div>
                </div>
                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <img src={groupProjectData.userTest.image} alt="Prototype" />
                </div>
              </div>
            </section>
          </div>
        </div>

        <section id="Reflection">
          <h1
            className="text-2xl text-dark-heading  text-4xl   font-bold mt-16 mb-16 bg-gradient "
            style={{
              padding: "4rem",
              width: "100%",
              textAlign: "center",
            }}
          >
            {groupProjectData.reflectionHeading}
          </h1>
          <div className="container mx-auto max-width pt-6 pb-16">
            <div className="mt-20">
              <p className="text-xl text-dark-heading  font-bold">
                {groupProjectData.reflectionSubHeading}
              </p>
              <br />
              <p
                className="text-lg text-dark-heading   "
                dangerouslySetInnerHTML={{
                  __html: groupProjectData.reflection,
                }}
              ></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default GroupProject;
