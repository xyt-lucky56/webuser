export const routesList = [
    {
        path: "*",
        name: "home",
        component:  resolve => require(["@/views/home/home"], resolve),
    },
    {
        path:'/',
        name: 'home',
        component: resolve => require(["@/views/home/home"], resolve),
        children:[]
    }
]