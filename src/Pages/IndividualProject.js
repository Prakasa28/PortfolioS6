import React from "react";
import Header from "../Components/Header";
import individualProjectData from "../Data/IndividualProjectData";
import ExpertInterview from "../Pdf/IPexpertInterview.pdf";
// import CompetitiveAnalysis from "../Pdf/Competitive Analysis.pdf";
import LiteratureResearch from "../Pdf/IPliteratureStudy.pdf";
import TrendAnalysis from "../Pdf/IPtrendAnalysis.pdf";
import SketchPrototype from "../Pdf/IPsketchPrototype.pdf";
import UsabilityTest from "../Pdf/IPusabilityTest.pdf";
// import DesignProcess from "../Components/DesignProcess";

function IndividualProject() {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div className="container mx-auto max-width pt-6 pb-16">
          <div className="flex flex-col justify-center items-center mt-32 mb-32">
            <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-7xl xl:leading-tight font-bold">
              {individualProjectData.group1.heading}
            </h1>
            <p className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-xl xl:leading-tight m-3">
              {individualProjectData.group1.subHeading}
            </p>
          </div>

          <div
            div
            className="flex flex-col justify-center items-center mt-20 mb-20"
          >
            <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-4xl xl:leading-tight font-bold">
              {individualProjectData.group2.heading}
            </h1>
            <br />
            <br />
            <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight ">
              {individualProjectData.group2.introText}
            </p>
            {/* <DesignProcess /> */}
          </div>
          {/* Add your content here */}
        </div>
        <h1
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mt-16 mb-16 bg-gradient "
          style={{
            //   backgroundColor: "#0ea5e9",
            padding: "2rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {individualProjectData.group2.subHeading}
        </h1>
        <div className="container mx-auto max-width pt-6 pb-16">
          {/* <h1>{groupProjectData.group3.question}</h1>
          <p>
            {" "}
            {groupProjectData.group3.subHeading}
            {groupProjectData.group3.methods}
          </p>
          <p>{groupProjectData.group3.text}</p>
          <h1>{groupProjectData.group3.whyLiterature}</h1>
          <p>{groupProjectData.group3.literatureAnswer}</p> */}
          <div className="">
            <h1 className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight ">
              {individualProjectData.group3.introText}
            </h1>

            <br />
            <br />
            <h1 className="text-3xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold ">
              {individualProjectData.group3.researchquestionHeading}
            </h1>
            <br />
            <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
              {individualProjectData.group3.mainQuestion}
            </p>
            <br />
            <div className="ml-6">
              <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight ">
                {individualProjectData.group3.subQuestion1}
              </p>
              <br />
              <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight ">
                {individualProjectData.group3.subQuestion2}
              </p>
              <br />
              <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight ">
                {individualProjectData.group3.subQuestion3}
              </p>
            </div>
            <br />
            <h1 className="text-3xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold ">
              {individualProjectData.group3.resultsHeading}
            </h1>
            <br />

            <div className="flex flex-row flex-row-reverse gap-5 items-center">
              <div style={{ flex: "1" }}>
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {individualProjectData.group3.question1}
                </p>
                <br />
                <div className="flex flex-row gap-2">
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                    {individualProjectData.group3.subHeading}
                  </p>
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                    {individualProjectData.group3.methods}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                    {individualProjectData.group3.subheadingWhy}
                  </p>
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                    {individualProjectData.group3.why}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                    {individualProjectData.group3.subheadingHow}
                  </p>
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                    {individualProjectData.group3.how}
                  </p>
                </div>

                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                    {individualProjectData.group3.resultHeading}
                  </p>
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                    {individualProjectData.group3.results}
                  </p>
                </div>
                <br />

                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                    {individualProjectData.group3.conclusionHeading}
                  </p>
                  <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                    {individualProjectData.group3.conclusion}
                  </p>
                </div>
                <br />
                <div
                  id="targetSection"
                  className="flex flex-col text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight "
                >
                  <div className="flex flex-row">
                    <p className="mr-2 font-bold">Literature study:</p>
                    {"   "}
                    <a
                      href={LiteratureResearch}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                <img src={individualProjectData.group3.image} alt="Prototype" />
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
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {individualProjectData.questionGroup2.question2}
                </p>
                <br />
                <div className="flex flex-row gap-2">
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                    {individualProjectData.questionGroup2.subHeading}
                  </p>
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                    {individualProjectData.questionGroup2.methods}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                    {individualProjectData.questionGroup2.subheadingWhy}
                  </p>
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                    {individualProjectData.questionGroup2.why}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                    {individualProjectData.questionGroup2.subheadingHow}
                  </p>
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                    {individualProjectData.questionGroup2.how}
                  </p>
                </div>

                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                    {individualProjectData.questionGroup2.resultHeading}
                  </p>
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                    {individualProjectData.questionGroup2.results}
                  </p>
                </div>

                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                    {individualProjectData.questionGroup2.conclusionHeading}
                  </p>
                  <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                    {individualProjectData.questionGroup2.conclusion}
                  </p>
                </div>
                <br />

                <div className="flex flex-col text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight ">
                  <div className="flex flex-row">
                    <p className="mr-2 font-bold">Trend analysis:</p>
                    {"   "}
                    <a
                      href={TrendAnalysis}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="flex flex-row flex-row-reverse gap-5 items-center">
              <div style={{ flex: "1" }}>
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {individualProjectData.questionGroup3.question3}
                </p>
                <br />
                <div className="flex flex-row gap-2">
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                    {individualProjectData.questionGroup3.subHeading}
                  </p>
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                    {individualProjectData.questionGroup3.methods}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                    {individualProjectData.questionGroup3.subheadingWhy}
                  </p>
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                    {individualProjectData.questionGroup3.why}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                    {individualProjectData.questionGroup3.subheadingHow}
                  </p>
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                    {individualProjectData.questionGroup3.how}
                  </p>
                </div>

                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                    {individualProjectData.questionGroup3.resultHeading}
                  </p>
                  <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                    {individualProjectData.questionGroup3.results}
                  </p>
                </div>

                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                    {individualProjectData.questionGroup3.conclusionHeading}
                  </p>
                  <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                    {individualProjectData.questionGroup3.conclusion}
                  </p>
                </div>
                <br />

                <div className="flex flex-col text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight ">
                  <div className="flex flex-row">
                    <p className="mr-2 font-bold">Expert interview:</p>
                    {"   "}
                    <a
                      href={ExpertInterview}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                <img
                  src={individualProjectData.questionGroup3.image}
                  alt="Prototype"
                />
              </div>
            </div>
          </div>
        </div>
        <h1
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mt-16 mb-16 bg-gradient "
          style={{
            //   backgroundColor: "#0ea5e9",
            padding: "2rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {individualProjectData.secondPhaseHeading}
        </h1>
        <div className="container mx-auto max-width pt-6 pb-16">
          <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight mb-20">
            {individualProjectData.secondPhase.introText}
          </p>
          <div className="flex flex-row">
            <div style={{ flex: "1" }}>
              <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                {individualProjectData.secondPhase.question}
              </p>
              <br />
              <div className="flex flex-row gap-2">
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {individualProjectData.secondPhase.subHeading}
                </p>
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {individualProjectData.secondPhase.methods}
                </p>
              </div>
              <br />
              <div className="flex flex-col gap-2">
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {individualProjectData.secondPhase.subheadingWhy}
                </p>
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {individualProjectData.secondPhase.why}
                </p>
              </div>
              <br />
              <div className="flex flex-col gap-2">
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {individualProjectData.secondPhase.subheadingHow}
                </p>
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {individualProjectData.secondPhase.how}
                </p>
              </div>
              <br />
              <div className="flex flex-col gap-2">
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {individualProjectData.secondPhase.resultHeading}
                </p>
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {individualProjectData.secondPhase.results}
                </p>
              </div>

              <br />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {individualProjectData.secondPhase.conclusionHeading}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {individualProjectData.secondPhase.conclusion}
                </p>
              </div>
              <br />

              <div className="flex flex-col text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight ">
                <div className="flex flex-row">
                  <p className="mr-2 font-bold">Sketch,Prototype:</p>
                  {"   "}
                  <a
                    href={SketchPrototype}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
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
        </div>

        <h1
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mt-16 mb-16 bg-gradient "
          style={{
            //   backgroundColor: "#0ea5e9",
            padding: "2rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {individualProjectData.thirdPhaseHeading}
        </h1>
        <div className="container mx-auto max-width pt-6 pb-16">
          <div className="flex flex-row flex-row-reverse gap-5 items-center">
            <div style={{ flex: "1" }}>
              <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                {individualProjectData.thirdPhase.question}
              </p>
              <br />
              <div className="flex flex-row gap-2">
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {individualProjectData.thirdPhase.subHeading}
                </p>
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {individualProjectData.thirdPhase.methods}
                </p>
              </div>
              <br />
              <div className="flex flex-col gap-2">
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {individualProjectData.thirdPhase.subheadingWhy}
                </p>
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {individualProjectData.thirdPhase.why}
                </p>
              </div>
              <br />
              <div className="flex flex-col gap-2">
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {individualProjectData.thirdPhase.subheadingHow}
                </p>
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {individualProjectData.thirdPhase.how}
                </p>
              </div>
              <br />
              <div className="flex flex-col gap-2">
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {individualProjectData.thirdPhase.resultHeading}
                </p>
                <p className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {individualProjectData.thirdPhase.results}
                </p>
              </div>

              <br />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight font-bold">
                  {individualProjectData.thirdPhase.conclusionHeading}
                </p>
                <p className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight">
                  {individualProjectData.thirdPhase.conclusion}
                </p>
              </div>
              <br />

              <div className="flex flex-col text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight ">
                <div className="flex flex-row">
                  <p className="mr-2 font-bold">Usability test:</p>
                  {"   "}
                  <a
                    href={UsabilityTest}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
              <img
                src={individualProjectData.thirdPhase.image}
                alt="Prototype"
              />
            </div>
          </div>
        </div>
        <h1
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mt-16 mb-16 bg-gradient "
          style={{
            //   backgroundColor: "#0ea5e9",
            padding: "2rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {individualProjectData.reflectionHeading}
        </h1>
        <div className="container mx-auto max-width pt-6 pb-16">
          <p
            className="text-lg text-dark-heading dark:text-light-heading md: xl:leading-tight"
            dangerouslySetInnerHTML={{
              __html: individualProjectData.reflection,
            }}
          ></p>
        </div>
      </main>
    </div>
  );
}

export default IndividualProject;
