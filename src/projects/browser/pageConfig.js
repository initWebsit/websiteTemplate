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
    headerThemeM: 1,                // 1-蓝色底返回导航主题、2-黑色底返回导航主题、3-蓝底logo导航主题、4-黑底logo导航主题
    headerPadM: 1,                  // 0-不填充、1-填充
    headerRechage: 0,               // 0-不显示、1-显示
}

export default [
    {
        title: 'About Us',
        platform: ['pc', 'h5'],
        default: true,
        path: 'about',
        component: $q.is.desktop ? Loadable(() => import('./about/index')) : Loadable(() => import('./about/indexMobile')),
        pageConfig: {
            pcNavStatus: 1,
            h5NavStatus: 1,
            headerThemeM: 4
        }
    },
    {
        title: 'Technology',
        platform: ['pc', 'h5'],
        path: 'technology',
        component: Loadable(() => import('./technology')),
        pageConfig: {
            pcNavStatus: 1,
            h5NavStatus: 1,
            headerThemeM: 4
        }
    },
    {
        title: 'Trust and Safety',
        platform: ['pc', 'h5'],
        path: 'safety',
        component: Loadable(() => import('./safety')),
        pageConfig: {
            pcNavStatus: 1,
            h5NavStatus: 1,
            headerThemeM: 4
        }
    },
    {
        title: 'Join Us',
        platform: ['pc', 'h5'],
        path: 'join',
        component: Loadable(() => import('./join')),
        pageConfig: {
            pcNavStatus: 1,
            h5NavStatus: 1,
            headerThemeM: 4
        }
    },
    {
        title: 'User Agreement',
        platform: ['pc', 'h5'],
        path: 'agreement',
        component: Loadable(() => import('./agreement')),
        pageConfig: {
            headerThemeM: 2
        }
    },
    {
        title: 'Privacy Policy',
        platform: ['pc', 'h5'],
        path: 'privacy',
        component: Loadable(() => import('./privacy')),
        pageConfig: {
            headerThemeM: 2
        }
    }
];