import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import Header from "../Components/Header";
import internationalProjectData from "../Data/InternationalProjectData";

function InternationalProject() {
  const externalVideoUrl = "https://youtu.be/nnT1Ob5OEzc";
  const mainVideoUrl = "https://youtu.be/SfCb_ypBv00";

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
            <h1 className="text-2xl text-dark-heading   xl:text-7xl  font-bold">
              {internationalProjectData.internationalProjectHeading}
            </h1>
            <p className="text-2xl text-dark-heading   xl:text-lg  m-3">
              {internationalProjectData.internationalProjectSubheading}
            </p>
          </div>
        </div>

        <div className="container mx-auto max-width pt-6 pb-16">
          <div className="flex flex-row gap-5 items-center">
            <div style={{ flex: "1" }}>
              <p className="text-xl text-dark-heading    font-bold">
                {internationalProjectData.introHeading}
              </p>
              <br />

              <p
                className="text-lg text-dark-heading   "
                dangerouslySetInnerHTML={{
                  __html: internationalProjectData.introText,
                }}
              ></p>
            </div>
            <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
              <img src={internationalProjectData.introImage} alt="Prototype" />
            </div>
          </div>
        </div>

        <h1
          className="text-2xl text-dark-heading   xl:text-5xl  font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {internationalProjectData.discoverHeading}
        </h1>

        <section id="Initial-problem-analysis">
          <div className="container mx-auto max-width pt-6 pb-16">
            <p
              className="text-lg text-dark-heading    "
              dangerouslySetInnerHTML={{
                __html: internationalProjectData.discoverPhaseIntroText,
              }}
            ></p>
            <br />
            <br />

            <div className="flex flex-row gap-5 items-center">
              <div style={{ flex: "1" }}>
                <p className="text-xl text-dark-heading    font-bold">
                  {internationalProjectData.firstPhase.heading}
                </p>
                <br />

                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.firstPhase.subHeadingHow}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.firstPhase.how}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.firstPhase.resultHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.firstPhase.result}
                  </p>
                </div>
                <br />

                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.firstPhase.conclusionHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.firstPhase.conclusion}
                  </p>
                </div>
                <br />
              </div>
              <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                <img
                  src={internationalProjectData.firstPhase.image}
                  alt="Prototype"
                />
              </div>
            </div>
          </div>
        </section>

        <h1
          className="text-xl text-dark-heading   xl:text-5xl  font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {internationalProjectData.defineHeading}
        </h1>

        <div className="container mx-auto max-width pt-6 pb-16">
          <p
            className="text-lg text-dark-heading    "
            dangerouslySetInnerHTML={{
              __html: internationalProjectData.definePhaseIntroText,
            }}
          ></p>
          <br />
          <br />

          <section id="Empathy-map">
            <div className="flex flex-row flex-row-reverse gap-5 items-center">
              <div style={{ flex: "1" }}>
                <p className="text-lg text-dark-heading    font-bold">
                  {internationalProjectData.secondPhase.question}
                </p>
                <br />
                <div className="flex flex-row gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.secondPhase.subHeadingMethod}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.secondPhase.methods}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.secondPhase.subHeadingWhy}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.secondPhase.why}
                  </p>
                </div>

                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.secondPhase.subHeadingHow}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.secondPhase.how}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.secondPhase.resultHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.secondPhase.result}
                  </p>
                </div>
                <br />

                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.secondPhase.conclusionHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.secondPhase.conclusion}
                  </p>
                </div>
                <br />
              </div>
              <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                <img
                  src={internationalProjectData.secondPhase.image}
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

          <section id="Persona">
            <div className="flex flex-row gap-5 items-center">
              <div style={{ flex: "1" }}>
                <p className="text-xl text-dark-heading    font-bold">
                  {internationalProjectData.persona.heading}
                </p>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.persona.subHeadingWhy}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.persona.why}
                  </p>
                </div>

                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.persona.subHeadingHow}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.persona.how}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.persona.resultHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.persona.result}
                  </p>
                </div>
                <br />

                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.persona.conclusionHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.persona.conclusion}
                  </p>
                </div>
                <br />
              </div>
              <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                <img
                  src={internationalProjectData.persona.image}
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

          <section id="Problem-Statement">
            <div className="flex flex-row flex-row-reverse gap-5 items-center">
              <div style={{ flex: "1" }}>
                <p className="text-xl text-dark-heading    font-bold">
                  {internationalProjectData.problemStatement.heading}
                </p>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.problemStatement.subHeadingWhy}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.problemStatement.why}
                  </p>
                </div>

                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.problemStatement.subHeadingHow}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.problemStatement.how}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.problemStatement.resultHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.problemStatement.result}
                  </p>
                </div>
                <br />

                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {
                      internationalProjectData.problemStatement
                        .conclusionHeading
                    }
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.problemStatement.conclusion}
                  </p>
                </div>
                <br />
              </div>
              <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                <img
                  src={internationalProjectData.problemStatement.image}
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

          <section id="Point-of-view">
            <div className="flex flex-row  gap-5 items-center">
              <div style={{ flex: "1" }}>
                <p className="text-xl text-dark-heading    font-bold">
                  {internationalProjectData.pov.heading}
                </p>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.pov.subHeadingWhy}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.pov.why}
                  </p>
                </div>

                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.pov.subHeadingHow}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.pov.how}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.pov.resultHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.pov.result}
                  </p>
                </div>
                <br />

                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.pov.conclusionHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.pov.conclusion}
                  </p>
                </div>
                <br />
              </div>
              <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                <img src={internationalProjectData.pov.image} alt="Prototype" />
              </div>
            </div>
          </section>

          <br />
          <br />
          <br />
          <br />
          <br />

          <section id="Finalising-concept">
            <div className="flex flex-row flex-row-reverse  gap-5 items-center">
              <div style={{ flex: "1" }}>
                <p className="text-xl text-dark-heading    font-bold">
                  {internationalProjectData.finalisingConcept.heading}
                </p>

                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.finalisingConcept.subHeadingHow}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.finalisingConcept.how}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.finalisingConcept.resultHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.finalisingConcept.result}
                  </p>
                </div>
                <br />

                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {
                      internationalProjectData.finalisingConcept
                        .conclusionHeading
                    }
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.finalisingConcept.conclusion}
                  </p>
                </div>
                <br />
              </div>
              <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                <img
                  src={internationalProjectData.finalisingConcept.image}
                  alt="Prototype"
                />
              </div>
            </div>
          </section>
        </div>

        <h1
          className="text-2xl text-dark-heading   xl:text-5xl  font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {internationalProjectData.ideateHeading}
        </h1>

        <div className="container mx-auto max-width pt-6 pb-16">
          <p
            className="text-lg text-dark-heading    "
            dangerouslySetInnerHTML={{
              __html: internationalProjectData.ideatePhaseIntroText,
            }}
          ></p>
          <br />
          <br />

          <section id="Storyboard">
            <div className="flex flex-row gap-5 items-center">
              <div style={{ flex: "1" }}>
                <p className="text-lg text-dark-heading    font-bold">
                  {internationalProjectData.storyBoard.question}
                </p>
                <br />
                <div className="flex flex-row gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.storyBoard.subHeadingMethod}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.storyBoard.methods}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.storyBoard.subHeadingWhy}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.storyBoard.why}
                  </p>
                </div>

                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.storyBoard.subHeadingHow}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.storyBoard.how}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.storyBoard.resultHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.storyBoard.result}
                  </p>
                </div>
                <br />

                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.storyBoard.conclusionHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.storyBoard.conclusion}
                  </p>
                </div>
                <br />
              </div>
              <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                <img
                  src={internationalProjectData.storyBoard.image}
                  alt="Prototype"
                />
              </div>
            </div>
          </section>
        </div>

        <h1
          className="text-2xl text-dark-heading   xl:text-5xl  font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {internationalProjectData.prototypeHeading}
        </h1>

        <div className="container mx-auto max-width pt-6 pb-16">
          <p
            className="text-lg text-dark-heading    "
            dangerouslySetInnerHTML={{
              __html: internationalProjectData.prototypeIntroText,
            }}
          ></p>
          <br />
          <br />

          <section id="Concept-video">
            <div className="flex flex-row gap-5 items-center">
              <div style={{ flex: "1" }}>
                <p className="text-xl text-dark-heading    font-bold">
                  {internationalProjectData.prototype.heading}
                </p>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.prototype.subHeadingHow}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.prototype.how}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading    font-bold">
                    {internationalProjectData.prototype.resultHeading}
                  </p>
                  <p className="text-lg text-dark-heading   ">
                    {internationalProjectData.prototype.result}
                  </p>
                </div>
                <br />
              </div>
              <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                <ReactPlayer url={externalVideoUrl} controls />
              </div>
            </div>
          </section>
        </div>

        <div className="container mx-auto max-width pt-6 pb-16">
          <div className="flex flex-row gap-5 items-center">
            <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
              <p className="text-xl text-dark-heading    font-bold">
                {internationalProjectData.mainVideoHeading}
              </p>
              <br />
              <img src={internationalProjectData.scriptImage} alt="Prototype" />
            </div>
            <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
              <ReactPlayer url={mainVideoUrl} controls />
            </div>
          </div>
        </div>

        <section id="Reflection">
          <h1
            className="text-2xl text-dark-heading   xl:text-5xl  font-bold mt-16 mb-16 bg-gradient "
            style={{
              padding: "4rem",
              width: "100%",
              textAlign: "center",
            }}
          >
            {internationalProjectData.reflectionHeading}
          </h1>

          <div className="container mx-auto max-width pt-6 pb-16">
            <p className="text-xl text-dark-heading  font-bold">
              {internationalProjectData.reflectionSubHeading}
            </p>
            <br />
            <p
              className="text-lg text-dark-heading   "
              dangerouslySetInnerHTML={{
                __html: internationalProjectData.reflection,
              }}
            ></p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default InternationalProject;
