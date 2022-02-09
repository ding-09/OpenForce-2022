import codeflow from "../Components/Team/team/codeflow.png"
import eclipse from "./Org/eclipse.png";
import apache from "./Org/ShardingSphere.jpeg";
import mojaglobal from "./Org/mojaglobal.png"
import metacall from "./Org/metacall.png"
import hypreldgerindia from "./Org/hypreldgerindia.jpeg"
import jina from "./Org/jina.png"
import mlsa from "./Org/MLSA badge.png"
import codezoned from "./Org/codezoned.png"
import asyncapi  from "./Org/asyncapi.jpg"
import joomla from "./Org/joomla.png"
import springcloud from "./Org/springcloud.png"
import angular from "./Org/angular.png"
import Layer5 from "./Org/Layer5.png"

const orgData = [
    {
        _id : "ac4fe61022d4425b8bd46c470115e78e",
        logo : apache,
        name : "Apache ShardingSphere",
        tagline : "Apache ShardingSphere is an open source Big Data ecosystem, and one of the most successful Apache Software Foundation projects.",
        website : "https://shardingsphere.apache.org/",
        tags : ["GSoC", "AWS Summit","AnitaB.org GHC, Open Source Day","The Apache Software Foundation's","ApacheCon"],
    },
    {
        _id : "f1b990459a304e6680bd3f3be28db7cc",
        logo : eclipse,
        name : "Eclipse AQAvit",
        tagline : "A community effort to improve the quality of OpenJDK binaries being produced by a variety of distributors/vendors (including IBM, Red Hat, Microsoft, Alibaba, Azul, Huawei and others).",
        website : "https://projects.eclipse.org/projects/adoptium.aqavit",
        tags : ["Outreachy", "CanOSP", "Grace Hopper", "OpenForce"],
    },
    {
        _id : "fffc25e8bca742c1927096f520af09a1",
        logo : hypreldgerindia,
        name : "Hyperledger",
        tagline : "Hyperledger Foundation is a non profit organization that brings together all the necessary resources and infrastructure to ensure thriving and stable ecosystems around open source software blockchain projects.",
        website : "https://wiki.hyperledger.org/",
        tags : [],
    },
    {
        _id : "dec174ee44f74a43be4c84bfa702f94e",
        logo : mojaglobal,
        name : "moja global",
        tagline : "moja global is a not for profit, collaborative project that brings together a community of experts to develop open-source software.",
        website : "https://github.com/moja-global",
        tags : ["GSoC","GSoD","Outreachy","Linux Foundation Experience"],
    },
    {
        _id : "b742d07af3254174be3ca3dc8af87ad2",
        logo : mlsa,
        name : "Microsoft Learn Student Ambassadors",
        tagline : "The Microsoft Learn Student Ambassadors community is for students who want to use tech to solve real-world problems with like-minded peers, establish themselves as mentors and leaders in their community, and amplify their impact.",
        website : "https://studentambassadors.microsoft.com/",
        tags : [],
    },
    {
        _id : "a9d686b1cd8447d3bee45c88f3cd376a",
        logo : metacall,
        name : "Meta Call",
        tagline : "Deploy Functions, Services or Static Files in seconds. Supporting Node.js, Python, Ruby, C# and more. ",
        website : "https://github.com/metacall",
        tags :["GSoC","GSoD","Outreachy","Linux Foundation Experience"], 
    },
    {
        _id : "dbcc55eef69f4297b9388485f8dae6a3",
        logo : jina,
        name : "Jina.AI",
        tagline : "Jina is a neural search framework that empowers anyone to build SOTA and scalable deep learning search applications in minutes.",
        website : "https://github.com/jina-ai/",
        tags :["MLH","Openforce"], 
    },
    {
        _id : "75be68303dbe4daf8400988c626d2b79",
        logo : codezoned,
        name : "codezoned",
        tagline : "Codezoned is an opensource NPO which is targeting on educating and spreading its core belief by making college and school students contribute to opensource. We develop FOSS (Free Open-source software) for NGOs, Conduct Hackathons across colleges and organisations and give digital literacy education to less privileged children.",
        website : "https://codezoned.com/",
        tags :["Uhack 2018","Hack against covid","Run to save a life!"], 
    },
    {
        _id : "f1b1de620848441db84c2673070914d8",
        logo : asyncapi,
        name : "AsyncApi Initiative",
        tagline : "Welcome to the Open-Source (OSS) AsyncAPI Initiative, part of the Linux Foundation. AsyncAPI seeks to improve the current state of Event-Driven Architectures (EDAs) and the tooling system around them. ❤️ We are a caring community 👐🏿, shaping the future of how you work with #EventDrivenArchitecture; no matter if it is Kafka or WebSocket.",
        website : "https://www.asyncapi.com/",
        tags :[], 
    },
    {
        _id : "c70fa0bd2880457bac386f7bf08eb2c2",
        logo : joomla,
        name : "Joomla",
        tagline : "Joomla! is the only major CMS that is built entirely by volunteers from all over the world. We have a strong community bond and all take pleasure in building something that has a large global impact. If you are interested in volunteering please head over to the volunteer portal.",
        website : "https://www.joomla.org/",
        tags :["Google Summer of Code", "Summer 2021 of Open Source Promotion Plan"], 
    },
    {
        _id : "82bf5a83c6cb41a99bc6b3444d281b54",
        logo : springcloud,
        name : "Spring Cloud",
        tagline : "Spring Cloud provides tools for developers to quickly build some of the common patterns in distributed systems (e.g. configuration management, service discovery, circuit breakers, intelligent routing, micro-proxy, control bus, one-time tokens, global locks, leadership election, distributed sessions, cluster state). Coordination of distributed systems leads to boiler plate patterns, and using Spring Cloud developers can quickly stand up services and applications that implement those patterns.",
        website : "https://spring.io/projects/spring-cloud",
        tags :[], 
    },
    {
        _id : "a5c1d8e2761747a8a3f40317d9b6390c",
        logo : angular,
        name : "Angular",
        tagline : `Angular (commonly referred to as "Angular 2+" or "Angular CLI") is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.`,
        website : "https://angular.io/",
        tags :[], 
    },
    {
        _id : "7aa9d887abc84d269a4443e3a30c63e0",
        logo : Layer5,
        name : "Layer5",
        tagline : `Layer5 is community-first and represents the largest collection of service mesh projects and their maintainers in the world. Layer5 is open source-first in that we create and steward initiatives that push the service mesh-centric envelope of Cloud Native. Our shared commitment to the open source spirit compels our community members to push Layer5 projects forward.`,
        website : "https://layer5.io/",
        tags :["Google Summer of Code" , "Docs", "LFX" ], 
    },
    {
        _id : "83f8130fb45743a3a2b7b4c40e9c5f6c",
        logo : codeflow,
        name : "Codeflow",
        tagline : "Codeflow, an organisation that serves the ultimate purpose of ‘Learning must go on’,  is an organization whose main motive is to empower the student community by bringing opportunities for growth, organizing webinars, hackathons and open source events and much more. ",
        website : "https://www.linkedin.com/company/codefloworg/",
        tags :["Organizer","Openforce"], 
    },
]

/* orgIDs{
    
    
    
    
    
    
    
    
    
    
    
    db069cbfe3a44e25be074c4297d8bd3c
    6460f24cff034bd0aa3c1732f3bd34a7
    fc79b870ad524ede87c0fac9347a87fe
    38c7f2c463ea4f119cc3b4b4cdce2acd
    4de2ce3d67884ae3b0f0b63ab872fa9a
    968d7e02987e466b91d1600c7892e831
}
*/
// Jina is a neural search framework that empowers anyone to build SOTA and scalable deep learning search applications in minutes.
export default orgData;