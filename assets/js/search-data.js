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
            },{id: "photography-chair-piles",
          title: 'Chair Piles',
          description: "Rain falls, snow melts, and chairs pile up. Take a look at the Instagram archive.",
          section: "Photography",handler: () => {
              window.location.href = "/gallery/chairpiles/";
            },},{id: "photography-when-the-day-is-ending",
          title: 'When The Day is Ending',
          description: "",
          section: "Photography",handler: () => {
              window.location.href = "/gallery/dayend/";
            },},{id: "photography-los-vallekanos",
          title: 'Los Vallekanos',
          description: "",
          section: "Photography",handler: () => {
              window.location.href = "/gallery/losvallekanos/";
            },},];
