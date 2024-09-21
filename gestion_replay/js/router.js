// const route = (event) => {
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     handleLocation();
// };
// const routes = {
//     404: "/pages/404.html",
//     "/": "/pages/home.html",
//     "/testApi": "/pages/testApi.html",
//     "/lorem": "/pages/lorem.html",
// };

// const handleLocation = async () => {
//     const path = window.location.pathname;
//     const route = routes[path] || routes[404];
//     const html = await fetch(route).then((data) => data.text());
//     document.getElementById("main-page").innerHTML = html;
// };

// window.onpopstate = handleLocation;
// window.route = route;

// handleLocation();

document.addEventListener('click', (e) => {
    const {target} = e;
    if(!target.matches("nav li a")) {
        return;
    }
    e.preventDefault();
    urlRoute();
})

const urlRoutes = {
    404: {
        template: "/pages/404.html",
        title: "",
        description: ""
    },
    "/": {
        template: "/pages/testApi.html",
        description: ""
    },
    "/about": {
        template: "/pages/about.html",
        description: ""
    },
    "/contact": {
        template: "/pages/contact.html",
        description: ""
    }
}

const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    urlLocationHandler();
}

const urlLocationHandler = async () => {

}