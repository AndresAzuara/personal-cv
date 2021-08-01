<template>
  <div id="app">
    <PxPresentation background=""></PxPresentation>
    <PxEducation></PxEducation>
    <div v-for="enterprise in enterprises" :key="enterprise.name">
      <PxExperience :enterprise="enterprise"></PxExperience>
    </div>
    <PxComponents></PxComponents>
    
    
  </div>
</template>

<script>
import PxPresentation from "@/components/PxPresentation";
import PxEducation from "@/components/PxEducation";
import PxComponents from "@/components/PxComponents";
import PxExperience from "@/components/PxExperience";

export default {
  name: "App",
  components: {
    PxPresentation,
    PxEducation,
    PxComponents,
    PxExperience
  },
  data: function(){
    return {
      enterprises: [
            {
                name: "Robert Bosch",
                position: ".NET Core Developer (Intern)",
                time: "1 year",
                tasks: [
                    "Colaborate with web pages design in front and back end",
                    "Make investigations about new technologies we could put in practice in the team's projects",
                    "Develop solutions from 0 until put them in production",
                    "Administrate the database according to user's requirements",
                    "Perform tests of my own solutions and my co-workers solutions"
                ]
            },
            {
              name: "SVAM International",
              position: ".NET Core Developer",
              time: "3 Months",
              tasks: [
                  "Design and Development of database",
                  "Backend Development using .NET Core 2.1+",
                  "Frontend Development using Angular"
              ]
            },
            {
              name: "Robert Bosch",
              position: "Full Stack Web Developer",
              time: "October 2020 - Actually",
              tasks: [
                  "Design and Development of database",
                  "Backend Development using .NET Core/Framework",
                  "Support to legacy applications using .NET Framework",
                  "Deploy and support applications through Jenkins and Octopus",
                  "Ticket resolution through SMT"
              ]
            }
        ]
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
}
</style>
