module.exports = {
  name: "Rail Batyrshin",
  title: "Software Engineer",
  facts: {
    Residence: `
      <a href="https://www.google.com/maps/place/Osh/@40.5201157,72.7667115,13z/data=!4m6!3m5!1s0x38bdac017f5a2e85:0xe0a3c61dc6f47b95!8m2!3d40.5139985!4d72.8160976!16zL20vMDRyMWg2?entry=ttu">
        <i class="fa fa-home fact-icon"></i>Osh, KG
      </a>
    `,
    LinkedIn: `
      <a href="https://www.linkedin.com/in/rail-batyrshin-852125235/">
        <i class="fab fa-linkedin fact-icon"></i>Rail Batyrshin
      </a>
    `,
    GitHub:
      '<a href="https://github.com/TangoPJ"><i class="fab fa-github fact-icon"></i>TangoPJ</a>',
    Mobile:
      '<a href="tel:+996555240064"><i class="fa fa-phone fact-icon"></i>+996555240064</a>',
    Email:
      '<a href="mailto:rail.batyrshin.js@gmail.com"><i class="fa fa-envelope fact-icon"></i>rail.batyrshin.js@gmail.com</a>',
  },
  skills: [
    ["Typescript", 100],
    ["HTML5", 100],
    ["CSS", 100],
    ["React", 100],
    ["Vue3.js", 75],
    ["ChakraUI", 100],
    ["RxJS", 100],
    ["OAuth", 100],
    ["REST", 100],
    ["CI/CD", 75],
    ["NodeJS", 75],
    ["SQL", 75],
    ["Git", 100],
    ["Jira", 100],
  ],
  positions: [
    {
      company: "MadDevs",
      location: "Bishkek, KG",
      title: "Frontend Engineer",
      period: "Aug 2021 - Sep 2022",
      skills: ["Typescript", "Vue2.js", "Nuxt", "NodeJS", "Express", "AWS s3"],
      contents: `
  [MadDevs](https://maddevs.io/) is a website of the MadDevs that helps users to find the basic information about the company,
read useful articles in a blog section, place an order for software development via the contact form and much more.

As a developer, I'm responsible for:

* Participation in team development
* Developing backend with NodeJS (Express) / AWS s3
* Developing frontend with Vue2.js (Nuxt) / Prismic CMS
* Developing responsive version of a UI by the given design
* Integration third party services such as [Mad-radiator](https://github.com/maddevsio/mad-radiator), [Seo-analyzer](https://www.npmjs.com/package/seo-analyzer), [Sendpulse](https://sendpulse.com/)
`,
    },
    {
      company: "MadDevs",
      location: "Bishkek, KG",
      title: "Frontend Engineer",
      period: "Sep 2022 - Mar 2023",
      skills: ["Typescript", "Vue3.js", "Quasar", "Amcharts library"],
      contents: `
  [Enji](https://enji.ai/) - big platform to engineering teams observability for enterprises

My responsibilities in this project were:

* Participation in software development under the guidance of a team lead
* Developing frontend with TypeScript, Vue3.js/Quasar, creating internal pages with tables
* Integration of third-party services
* Refactoring and optimization of the existing code base
* Successfully integrated authentication and authorization services into the project,
ensuring secure access control and user management - together with backend developers
`,
    },
  ],
};
