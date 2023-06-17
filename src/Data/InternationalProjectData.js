import ProblemAnalysisImage from "../assets/images/problemanalysis.png";
import EmapthyMapImage from "../assets/images/empathymap.png";
import PersonaImage from "../assets/images/persona.png";
import ProblemStatementImage from "../assets/images/problemstatement.png";
import PovTableImage from "../assets/images/pov.png";

const InternationalProjectData = {
  discoverHeading: "Discover Phase",
  discoverPhaseIntroText: "",

  firstPhase: {
    heading: "Initial problem analysis:",
    subHeadingHow: "How: ",
    how: "We used Google Jamboard to gather everyone's thoughts on the issues they were experiencing in the TQ building. Each person wrote down the problems they were facing, and we talked to other students at TQ to find out what problems they were facing. where we discussed and identified the existing problems encounter.",
    resultHeading: "Result: ",
    result:
      "Based on our sorting, the problems were divided into three categories: navigation/location, privacy, and interacting. Some specific issues mentioned were trouble finding meeting rooms, locating teachers, and moving between different floors. Additionally, we found that the most common problem faced by students at TQ building was navigation.",
    conclusionHeading: "Conclusion/recommendation ",
    conclusion:
      "In conclusion, the biggest problem that both other Fontys students and we faced was navigating around the campus. We identified that the TQ building had the most significant navigation issues. To better understand the challenges students face, our next step is to create an empathy map. This will help us put ourselves in their shoes and gain a deeper understanding of their experiences.",
    image: ProblemAnalysisImage,
  },

  defineHeading: "Define Phase",
  definePhaseIntroText: "",

  secondPhase: {
    question:
      "What specific steps can be taken to improve the organization and navigation experience for students at the Fontys TQ building?",
    subHeadingMethod: "Methods:",
    methods: "Empathy map",
    subHeadingWhy: "Why:",
    why: "We chose to do an empathy map because it helps us understand the students' experiences and feelings. By putting ourselves in their shoes, we can gain insights into their challenges, frustrations, and needs when it comes to navigating the TQ building. This understanding will allow us to develop solutions that address their specific problems and make their navigation experience better.",
    subHeadingHow: "How: ",
    how: "We talked to some students from Fontys TQ building and observed them to understand the difficulties they face while navigating in the building. We collected information about their problems and used it to create an empathy map.",
    resultHeading: "Result: ",
    result: "The result can be found on the left side.  ",
    conclusionHeading: "Conclusion/recommendation ",
    conclusion:
      "In conclusion, students at the Fontys TQ building feel lost, confused, and helpless while navigating. They struggle to find their teachers, lectures, classmates, and places to eat. They think the building is disorganized and lack spaces for relaxation and group work. They try to find help from reception and navigation screens or ask their classmates. Improving organization, clear signs, and providing designated spaces can enhance their navigation experience.",
    image: EmapthyMapImage,
  },

  persona: {
    heading: "Persona:",
    subHeadingWhy: "Why:",
    why: "Personas help us understand users and design for their needs, making better decisions. Creating personas ensures user-cantered designs that align with their goals.",
    subHeadingHow: "How: ",
    how: "To create the persona, we utilized information collected through empathy mapping and stakeholder input. With the gathered information we learned about the background, goals, and frustrations of our target audience. Subsequently, we summarized this information in a concise profile, which assists us in developing the persona.",
    resultHeading: "Result: ",
    result: "You can find the Persona on the right side.",
    conclusionHeading: "Conclusion/recommendation ",
    conclusion:
      "In conclusion, personas play a vital role in understanding users and designing for their needs. Through the use of empathy mapping and stakeholder input, we gather valuable information about our target audience's background, goals, and frustrations. This information will help us to create summaries that guide our design choices and will lead to designs that focus on users and match their goals.",
    image: PersonaImage,
  },

  problemStatement: {
    heading: "Problem Statement:",
    subHeadingWhy: "Why:",
    why: "We created a problem statement to clearly describe the issue or challenge that our target audience are facing. It helps us understand and communicate the problem in a concise way. By summarizing the problem, we can focus on finding solutions and take appropriate actions to address it effectively.",
    subHeadingHow: "How: ",
    how: "Based on the information we gathered so far, each person came up with their own issue to address. We thoroughly reviewed everything and reached a final problem statement.",
    resultHeading: "Result: ",
    result:
      "The student, who visits the building 2-4 times a week, lacks clear definitions of classes. The unwelcoming environment and structure of the building affect their work and activities conducted, hindering their ability to navigate, learn and use the space effectively.",
    conclusionHeading: "Conclusion/recommendation ",
    conclusion:
      "In conclusion, the problem is that a student who goes to TQ building regularly is having trouble because the classes are not clearly defined, the environment is unwelcoming, and the building structure is confusing. This makes it hard for the students to find their way around, learn effectively, and use the space well. To fix this, the class definitions could be improved, the environment could be more welcoming, and by enhancing the building's layout and structure.",
    image: ProblemStatementImage,
  },

  pov: {
    heading: "Point of view table:",
    subHeadingWhy: "Why:",
    why: "A POV table is a helpful tool for understanding a problem from different perspectives. It allows us to see the problem from various angles, which helps us find the root causes, consider different options, and find solutions. It's like looking at a problem from different points of view to get a complete picture and make better decisions.",
    subHeadingHow: "How: ",
    how: "To create the POV table, we used a template to identify the user and their actions. We documented the user's needs and insights, and the POV table was created by analysing the problem statement. Finally, we summarized our findings in a concise table, which helped guide our design decisions.",
    resultHeading: "Result: ",
    result: "The POV table can be seen on the left side. ",
    conclusionHeading: "Conclusion/recommendation ",
    conclusion:
      "In conclusion, a POV table is a valuable tool that allows us to gain a comprehensive understanding of a problem by considering different perspectives. By analysing the problem statement and documenting user needs and insights, we can identify root causes and explore various solutions.",
    image: PovTableImage,
  },
};

export default InternationalProjectData;
