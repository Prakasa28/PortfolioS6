import React from "react";
import Header from "../Components/Header";
import internationalProjectData from "../Data/InternationalProjectData";

function InternationalProject() {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <h1
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mt-16 mb-16 bg-gradient "
          style={{
            //   backgroundColor: "#0ea5e9",
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {internationalProjectData.discoverHeading}
        </h1>
        <div className="container mx-auto max-width pt-6 pb-16">
          <p
            className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight "
            dangerouslySetInnerHTML={{
              __html: internationalProjectData.discoverPhaseIntroText,
            }}
          ></p>
          <br />
          <br />

          <div className="flex flex-row gap-5 items-center">
            <div style={{ flex: "1" }}>
              <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                {internationalProjectData.firstPhase.heading}
              </p>
              <br />

              <br />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.firstPhase.subHeadingHow}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {internationalProjectData.firstPhase.how}
                </p>
              </div>
              <br />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.firstPhase.resultHeading}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {internationalProjectData.firstPhase.result}
                </p>
              </div>
              <br />

              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.firstPhase.conclusionHeading}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
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

        <h1
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mt-16 mb-16 bg-gradient "
          style={{
            //   backgroundColor: "#0ea5e9",
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {internationalProjectData.defineHeading}
        </h1>
        <div className="container mx-auto max-width pt-6 pb-16">
          <p
            className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight "
            dangerouslySetInnerHTML={{
              __html: internationalProjectData.discoverPhaseIntroText,
            }}
          ></p>
          <br />
          <br />

          <div className="flex flex-row flex-row-reverse gap-5 items-center">
            <div style={{ flex: "1" }}>
              <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                {internationalProjectData.secondPhase.question}
              </p>
              <br />
              <div className="flex flex-row gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.secondPhase.subHeadingMethod}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {internationalProjectData.secondPhase.methods}
                </p>
              </div>
              <br />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.secondPhase.subHeadingWhy}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {internationalProjectData.secondPhase.why}
                </p>
              </div>

              <br />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.secondPhase.subHeadingHow}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {internationalProjectData.secondPhase.how}
                </p>
              </div>
              <br />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.secondPhase.resultHeading}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {internationalProjectData.secondPhase.result}
                </p>
              </div>
              <br />

              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.secondPhase.conclusionHeading}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="flex flex-row gap-5 items-center">
            <div style={{ flex: "1" }}>
              <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                {internationalProjectData.persona.heading}
              </p>
              <br />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.persona.subHeadingWhy}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {internationalProjectData.persona.why}
                </p>
              </div>

              <br />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.persona.subHeadingHow}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {internationalProjectData.persona.how}
                </p>
              </div>
              <br />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.persona.resultHeading}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {internationalProjectData.persona.result}
                </p>
              </div>
              <br />

              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.persona.conclusionHeading}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
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

          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="flex flex-row flex-row-reverse gap-5 items-center">
            <div style={{ flex: "1" }}>
              <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                {internationalProjectData.problemStatement.heading}
              </p>
              <br />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.problemStatement.subHeadingWhy}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {internationalProjectData.problemStatement.why}
                </p>
              </div>

              <br />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.problemStatement.subHeadingHow}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {internationalProjectData.problemStatement.how}
                </p>
              </div>
              <br />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.problemStatement.resultHeading}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {internationalProjectData.problemStatement.result}
                </p>
              </div>
              <br />

              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.problemStatement.conclusionHeading}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
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

          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="flex flex-row  gap-5 items-center">
            <div style={{ flex: "1" }}>
              <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                {internationalProjectData.pov.heading}
              </p>
              <br />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.pov.subHeadingWhy}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {internationalProjectData.pov.why}
                </p>
              </div>

              <br />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.pov.subHeadingHow}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {internationalProjectData.pov.how}
                </p>
              </div>
              <br />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.pov.resultHeading}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {internationalProjectData.pov.result}
                </p>
              </div>
              <br />

              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {internationalProjectData.pov.conclusionHeading}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {internationalProjectData.pov.conclusion}
                </p>
              </div>
              <br />
            </div>
            <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
              <img src={internationalProjectData.pov.image} alt="Prototype" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default InternationalProject;
