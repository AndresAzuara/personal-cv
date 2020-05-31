<template>
<div>
    <section class="flex">
        <div class="w-full mt-10">
            <img class="object-center" style="margin-left: 40%" height="15%" width="15%" :src="this.img.src" :alt="this.img.alt"/>
        </div>
        
    </section>
    <p class="w-full mb-10">The following tools/softwares, are those things I can use with no problems every day, I have experience on every of the next points:</p>
    <div class="flex flex-wrap">
        <div v-for="(tool, index) in tools" :key="index" class="sm:w-full md:w-1/2 lg:w-1/3 px-20">
            <div class="max-w-sm rounded overflow-hidden shadow-lg mr-0">
                <img class="w-1/3 mr-auto ml-auto" :src="tool.image" :alt="tool.name">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{tool.name}}</div>
                    <p class="text-gray-700 text-base">
                        {{tool.description}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "PxComponents",
    data: function(){
        return {
            img: {
                src: require("@/assets/dev.png"),
                alt: "Dev logo"
            },
            tools: [
                {
                    image: require("@/assets/powerbi.png"),
                    name: "Power BI",
                    description: "One of the best BI software which provides interactive tools' visualizations and capability to develop Business Intelligence, it is familiar and friendly so the user can create their own reports"
                },
                {
                    image: require("@/assets/css3.png"),
                    name: "CSS3",
                    description: "The programming language style sheet which you can create the most beautiful style to your project; also I have the basic knowledge about some of the most famouse preprocessors."
                },
                {
                    image: require("@/assets/html.png"),
                    name: "HTML5",
                    description: "HTML is necesary to create the structure of every web page, even if you use a front-end framework as this page does it, you need to know html"
                }
                ,{
                    image: require("@/assets/blazor.png"),
                    name: "Blazor",
                    description: "It is the new Microsft's solution to create back and front end using their own language which is C# and .NET core."
                },
                {
                    image: require("@/assets/bootstrap.png"),
                    name: "Bootstrap",
                    description: "On of the most common used frameworks, for it's simplicity to create pre-builded components. The most popular component is the grid which helps to make a faster development"
                },
                {
                    image: require("@/assets/cplusplus.png"),
                    name: "C++",
                    description: "It's the first programming language I learned, it gaves me the programming's fundaments, and actually I can develop desktop solutions"
                }
                ,
                {
                    image: require("@/assets/csharp.png"),
                    name: "C#",
                    description: "This is my most used backend language, I use it with .NET Core or .NET Framework; a great part of the projects which I have developed were created using C# .NET Core"
                }
                ,
                {
                    image: require("@/assets/git.png"),
                    name: "Git",
                    description: "The most famouse version's control systems, it is so known because of it's simplicity and really easy to learn."
                }
                ,
                {
                    image: require("@/assets/js.png"),
                    name: "JavaScript",
                    description: "Really helpfull language when you are developing web pages because it helps to manipulate the DOM and integrate the result of requests called to multiple API's to the DOM. I have used it to implement some fron-end javascript frameworks"
                }
                ,
                {
                    image: require("@/assets/logo.png"),
                    name: "Vue",
                    description: "My favorite front-end javascript framework, it helps to create a better markup architechture in an easier way. As additional data, this site was created using Vue.JS"
                }
                ,
                {
                    image: require("@/assets/sql.png"),
                    name: "SQL Server",
                    description: "I have used so many DBMS but this is the one which I have used for more time than any other, it has a great integration with .NET Core using Entity Framework, so it helps to make petitions from C# to the DBMS."
                }
                ,
                {
                    image: require("@/assets/tailwind.png"),
                    name: "Tailwindcss",
                    description: "It is a great options to create styles with a CSS framework, it has simple classes which represents specified selector's properties. Bootstrap has pre-builded components, on the other side, tailwind has pre-builded classes which helps to create the component"
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>