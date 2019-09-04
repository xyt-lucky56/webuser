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
        children:[
            {
                path: '/system',
                name: 'system',
                component: resolve => require(["@/views/system/system"], resolve),
            },
            {
                path: '/user',
                name: 'user',
                component: resolve => require(["@/views/user/user"], resolve),
            },
            {
                path: '/role',
                name: 'role',
                component: resolve => require(["@/views/role/role"], resolve),
            },
            {
                path: '/permissions',
                name: 'permissions',
                component: resolve => require(["@/views/permissions/permissions"], resolve),
            },
            {
                path: '/subsystem',
                name: 'subsystem',
                component: resolve => require(["@/views/system/subsystem"], resolve),
            },
            {
                path: '/subrole',
                name: 'subrole',
                component: resolve => require(["@/views/role/subrole"], resolve),
            },
        ]
    }
]