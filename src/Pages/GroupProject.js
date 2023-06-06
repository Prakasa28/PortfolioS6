import React from "react";
import Header from "../Components/Header";
import groupProjectData from "../Data/GroupProjectData";
import UserInterview from "../Pdf/User Interviews.pdf";
import CompetitiveAnalysis from "../Pdf/Competitive Analysis.pdf";
import LiteratureResearch from "../Pdf/Literature Research.pdf";
import DesignProcess from "../Components/DesignProcess";

function groupProject() {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div className="container mx-auto max-width pt-6 pb-16">
          <div className="flex flex-col justify-center items-center mt-32 mb-32">
            <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-7xl xl:leading-tight font-bold">
              {groupProjectData.group1.heading}
            </h1>
            <p className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-xl xl:leading-tight m-3">
              {groupProjectData.group1.subHeading}
            </p>
          </div>

          <div
            div
            className="flex flex-col justify-center items-center mt-20 mb-20"
          >
            <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-2xl xl:leading-tight font-bold">
              {groupProjectData.group2.heading}
            </h1>
            <DesignProcess />
          </div>
          {/* Add your content here */}
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
          {groupProjectData.group2.subHeading}
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
          <div className="m-16">
            <p
              className="text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight "
              dangerouslySetInnerHTML={{
                __html: groupProjectData.group4.discoverPhase,
              }}
            ></p>
            <br />
            <br />
            <div className="flex flex-col text-xl text-dark-heading dark:text-light-heading md: xl:leading-tight ">
              <div className="flex flex-row p-3">
                <p className="mr-2 font-bold">Literature study:</p>
                {"   "}
                <a
                  href={LiteratureResearch}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PDF
                </a>
              </div>
              <div className="flex flex-row p-3">
                <p className="mr-2 font-bold">competitive analysis:</p>
                {"   "}
                <a
                  href={CompetitiveAnalysis}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PDF
                </a>
              </div>
              <div className="flex flex-row p-3">
                <p className="mr-2 font-bold">user interviews:</p>
                {"   "}
                <a
                  href={UserInterview}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PDF
                </a>
              </div>
              <h1 className="mt-16 mb-4 font-bold">
                {groupProjectData.group4.heading}
              </h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: groupProjectData.group4.conclusion,
                }}
              ></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default groupProject;
