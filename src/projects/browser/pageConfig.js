import Loadable from '@loadable/component';

export const defaultPageConfig = {
    auth: false,                    // 是否需要登录
    pcNavStatus: 0,                 // 0-非导航、1-显示、2-登录下显示、3-非登录下显示
    pageThemeD: 1,                  // 1-蓝色主题
    headerThemeD: 1,                // 1-黑色实底主题、2-透明主题
    headerPadD: 1,                  // 0-不填充、1-填充
    footerStatusD: 1,               // 0-不显示底部、1-显示底部
    h5NavStatus: 0,                 // 0-非导航、1-显示、2-登录下显示、3-非登录下显示
    pageThemeM: 1,                  // 1-蓝色主题
    headerThemeM: 1,                // 1-透明底返回导航主题、2-黑色底返回导航主题、3-透明底logo导航主题、4-黑底logo导航主题
    headerPadM: 1,                  // 0-不填充、1-填充
    footerStatusM: 1,               // 0-不显示底部、1-显示底部
    headerRechage: 0,               // 0-不显示、1-显示
}

export default [
    {
        title: 'Home',
        platform: ['pc', 'h5'],
        default: true,
        path: 'home',
        component: Loadable(() => import('./home/index')),
        pageConfig: {
            pcNavStatus: 1,
            h5NavStatus: 1,
            headerPadD: 0,
            headerPadM: 0,
            headerThemeD: 2,
            headerThemeM: 3
        }
    },
    {
        title: 'Become an Agent',
        platform: ['pc', 'h5'],
        default: true,
        path: 'agent',
        component: Loadable(() => import('./agent/index')),
        pageConfig: {
            pcNavStatus: 1,
            h5NavStatus: 1,
            headerPadD: 0,
            headerPadM: 0,
            headerThemeD: 2,
            headerThemeM: 3
        }
    },
    {
        title: 'Become a Streamer',
        platform: ['pc', 'h5'],
        default: true,
        path: 'streamer',
        component: Loadable(() => import('./streamer/index')),
        pageConfig: {
            pcNavStatus: 1,
            h5NavStatus: 1,
            headerPadD: 0,
            headerPadM: 0,
            headerThemeD: 2,
            headerThemeM: 3
        }
    },
    {
        title: 'Contact us',
        platform: ['pc', 'h5'],
        default: true,
        path: 'contact',
        component: Loadable(() => import('./contact/index')),
        pageConfig: {
            pcNavStatus: 1,
            h5NavStatus: 1,
            headerPadD: 0,
            headerPadM: 0,
            headerThemeD: 2,
            headerThemeM: 3,
            footerStatusD: 0
        }
    }
];
