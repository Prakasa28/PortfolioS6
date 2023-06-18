import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import individualProjectData from "../Data/IndividualProjectData";
import ExpertInterview from "../Pdf/IPexpertInterview.pdf";
import LiteratureResearch from "../Pdf/IPliteratureStudy.pdf";
import TrendAnalysis from "../Pdf/IPtrendAnalysis.pdf";
import SketchPrototype from "../Pdf/IPsketchPrototype.pdf";
import UsabilityTest from "../Pdf/IPusabilityTest.pdf";
import ProjectPlan from "../Pdf/IPprojectplan.pdf";

function IndividualProject() {
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
        <div className="container mx-auto max-width pt-6 pb-16" id="main">
          <div className="flex flex-col justify-center items-center mt-32 mb-32">
            <h1 className="text-2xl text-dark-heading xl:text-7xl    font-bold">
              {individualProjectData.group1.heading}
            </h1>
            <p className="text-2xl text-dark-heading xl:text-lg    m-3">
              {individualProjectData.group1.subHeading}
            </p>
          </div>

          <div
            div
            className="flex flex-col justify-center items-center mt-20 mb-20"
          >
            <h1 className="text-xl text-dark-heading font-bold">
              {individualProjectData.group2.heading}
            </h1>
            <br />
            <br />
            <p className="text-lg text-dark-heading    ">
              {individualProjectData.group2.introText}
            </p>
          </div>
          <br />
          <section id="Project-Plan">
            <div>
              <h1 className="text-xl text-dark-heading font-bold">
                {individualProjectData.projectPlanHeading}
              </h1>
              <br />
              <p
                className="text-lg text-dark-heading    "
                dangerouslySetInnerHTML={{
                  __html: individualProjectData.projectPlanText,
                }}
              ></p>
              <br />
              <div>
                <a href={ProjectPlan} target="_blank" rel="noopener noreferrer">
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
          </section>
        </div>
        <h1
          className="text-2xl text-dark-heading xl:text-5xl    font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {individualProjectData.group2.subHeading}
        </h1>
        <div className="container mx-auto max-width pt-6 pb-16">
          <div className="">
            <h1 className="text-lg text-dark-heading    ">
              {individualProjectData.group3.introText}
            </h1>

            <br />
            <br />
            <h1 className="text-2xl text-dark-heading    font-bold ">
              {individualProjectData.group3.researchquestionHeading}
            </h1>
            <br />
            <p className="text-lg text-dark-heading    font-bold">
              {individualProjectData.group3.mainQuestion}
            </p>
            <br />
            <div className="ml-6">
              <p className="text-lg text-dark-heading    ">
                {individualProjectData.group3.subQuestion1}
              </p>
              <br />
              <p className="text-lg text-dark-heading    ">
                {individualProjectData.group3.subQuestion2}
              </p>
              <br />
              <p className="text-lg text-dark-heading    ">
                {individualProjectData.group3.subQuestion3}
              </p>
            </div>
            <br />
            <h1 className="text-2xl text-dark-heading    font-bold ">
              {individualProjectData.group3.resultsHeading}
            </h1>
            <br />
            <section id="Literature-study">
              <div className="flex flex-row flex-row-reverse gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-lg text-dark-heading    font-bold">
                    {individualProjectData.group3.question1}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {individualProjectData.group3.subHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {individualProjectData.group3.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {individualProjectData.group3.subheadingWhy}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {individualProjectData.group3.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {individualProjectData.group3.subheadingHow}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {individualProjectData.group3.how}
                    </p>
                  </div>

                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {individualProjectData.group3.resultHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {individualProjectData.group3.results}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {individualProjectData.group3.conclusionHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {individualProjectData.group3.conclusion}
                    </p>
                  </div>
                  <br />
                  <div
                    id="targetSection"
                    className="flex flex-col text-lg text-dark-heading    "
                  >
                    <div>
                      <a
                        href={LiteratureResearch}
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
                    src={individualProjectData.group3.image}
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

            <section id="Trend-analysis">
              <div className="flex flex-row gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-lg text-dark-heading    font-bold">
                    {individualProjectData.questionGroup2.question2}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {individualProjectData.questionGroup2.subHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {individualProjectData.questionGroup2.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {individualProjectData.questionGroup2.subheadingWhy}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {individualProjectData.questionGroup2.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {individualProjectData.questionGroup2.subheadingHow}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {individualProjectData.questionGroup2.how}
                    </p>
                  </div>

                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {individualProjectData.questionGroup2.resultHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {individualProjectData.questionGroup2.results}
                    </p>
                  </div>

                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {individualProjectData.questionGroup2.conclusionHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {individualProjectData.questionGroup2.conclusion}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col text-lg text-dark-heading    ">
                    <div>
                      <a
                        href={TrendAnalysis}
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
                    src={individualProjectData.questionGroup2.image}
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

            <section id="Expert-Interview">
              <div className="flex flex-row flex-row-reverse gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-lg text-dark-heading    font-bold">
                    {individualProjectData.questionGroup3.question3}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {individualProjectData.questionGroup3.subHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {individualProjectData.questionGroup3.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {individualProjectData.questionGroup3.subheadingWhy}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {individualProjectData.questionGroup3.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {individualProjectData.questionGroup3.subheadingHow}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {individualProjectData.questionGroup3.how}
                    </p>
                  </div>

                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {individualProjectData.questionGroup3.resultHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {individualProjectData.questionGroup3.results}
                    </p>
                  </div>

                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-dark-heading    font-bold">
                      {individualProjectData.questionGroup3.conclusionHeading}
                    </p>
                    <p className="text-lg text-dark-heading   ">
                      {individualProjectData.questionGroup3.conclusion}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col text-lg text-dark-heading    ">
                    <div>
                      <a
                        href={ExpertInterview}
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
                    src={individualProjectData.questionGroup3.image}
                    alt="Prototype"
                  />
                  <a
                    href="https://cmdmethods.nl/cards/library/expert-interview"
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
          </div>
        </div>
        <h1
          className="text-2xl text-dark-heading xl:text-5xl   font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {individualProjectData.secondPhaseHeading}
        </h1>
        <div className="container mx-auto max-width pt-6 pb-16">
          <p className="text-lg text-dark-heading    mb-20">
            {individualProjectData.secondPhase.introText}
          </p>
          <section id="Prototyping">
            <div className="flex flex-row">
              <div style={{ flex: "1" }}>
                <p className="text-lg text-dark-heading    font-bold">
                  {individualProjectData.secondPhase.question}
                </p>
                <br />
                <div className="flex flex-row gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {individualProjectData.secondPhase.subHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {individualProjectData.secondPhase.methods}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {individualProjectData.secondPhase.subheadingWhy}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {individualProjectData.secondPhase.why}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {individualProjectData.secondPhase.subheadingHow}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {individualProjectData.secondPhase.how}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {individualProjectData.secondPhase.resultHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {individualProjectData.secondPhase.results}
                  </p>
                </div>

                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {individualProjectData.secondPhase.conclusionHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {individualProjectData.secondPhase.conclusion}
                  </p>
                </div>
                <br />

                <div className="flex flex-col text-lg text-dark-heading    ">
                  <div>
                    <a
                      href={SketchPrototype}
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
              <div style={{ width: "50%", flex: "1" }}>
                <img
                  src={individualProjectData.secondPhase.image}
                  alt="Prototype"
                />
              </div>
            </div>
          </section>
        </div>

        <h1
          className="text-2xl text-dark-heading xl:text-5xl   font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {individualProjectData.thirdPhaseHeading}
        </h1>
        <div className="container mx-auto max-width pt-6 pb-16">
          <section id="Usability-testing">
            <div className="flex flex-row flex-row-reverse gap-5 items-center">
              <div style={{ flex: "1" }}>
                <p className="text-lg text-dark-heading    font-bold">
                  {individualProjectData.thirdPhase.question}
                </p>
                <br />
                <div className="flex flex-row gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {individualProjectData.thirdPhase.subHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {individualProjectData.thirdPhase.methods}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {individualProjectData.thirdPhase.subheadingWhy}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {individualProjectData.thirdPhase.why}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {individualProjectData.thirdPhase.subheadingHow}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {individualProjectData.thirdPhase.how}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {individualProjectData.thirdPhase.resultHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {individualProjectData.thirdPhase.results}
                  </p>
                </div>

                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {individualProjectData.thirdPhase.conclusionHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {individualProjectData.thirdPhase.conclusion}
                  </p>
                </div>
                <br />

                <div className="flex flex-col text-lg text-dark-heading    ">
                  <div>
                    <a
                      href={UsabilityTest}
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
                  src={individualProjectData.thirdPhase.image}
                  alt="Prototype"
                />
                <a
                  href="https://cmdmethods.nl/cards/lab/usability-testing"
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
        </div>
        <section id="Reflection">
          <h1
            className="text-2xl text-dark-heading xl:text-5xl   font-bold mt-16 mb-16 bg-gradient "
            style={{
              padding: "4rem",
              width: "100%",
              textAlign: "center",
            }}
          >
            {individualProjectData.reflectionHeading}
          </h1>
          <div className="container mx-auto max-width pt-6 pb-16">
            <p className="text-xl text-dark-heading  font-bold">
              {individualProjectData.reflectionSubHeading}
            </p>
            <br />
            <p
              className="text-lg text-dark-heading   "
              dangerouslySetInnerHTML={{
                __html: individualProjectData.reflection,
              }}
            ></p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default IndividualProject;
