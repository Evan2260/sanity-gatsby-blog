export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60e637d9acf8541e17c366ed",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-pqwtbkyb",
                  apiId: "2bef0737-ef00-4869-ab2b-23fe19664055",
                },
                {
                  buildHookId: "60e637d96b12811ff8712db8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-2oo9sc7e",
                  apiId: "fbd379de-751d-4889-a611-63fb9e4512c6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Evan2260/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-2oo9sc7e.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
