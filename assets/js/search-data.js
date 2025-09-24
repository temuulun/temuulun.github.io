// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Collection of working papers",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-gallery",
              title: "Gallery",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/gallery/";
              },
            },{id: "photography-los-vallekanos",
          title: 'Los Vallekanos',
          description: "",
          section: "Photography",handler: () => {
              window.location.href = "/gallery/losvallekanos/";
            },},{id: "photography-portfolio-2",
          title: 'Portfolio 2',
          description: "",
          section: "Photography",handler: () => {
              window.location.href = "/gallery/portfolio2/";
            },},];
