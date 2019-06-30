module.exports = {
    title: "VueFront",
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ['meta', { name: 'google-site-verification', content: 'MhRI5GLxQJ9Oirgo_krVXPsVNaJ-2qqGTRuMkLjherw' }]
    ],
    themeConfig: {
        repo: 'vuefront/vuefront',
        editLinks: true,
        docsDir: 'docs',
        sidebar: {
            "/guide/": getSideBar(),
            "/develop/": [{
                title: "Develop",
                collapsable: false,
                children: [
                    '/develop/',
                    '/develop/config',
                    '/develop/theme',
                    '/develop/app'
                ]
            }],
            "/community/": getSideBar(),
            "/cms/": [{
                title: "CMS Extensions",
                collapsable: false,
                children: [
                    '/cms/',
                    '/cms/wordpress',
                    '/cms/opencart',
                    '/cms/prestashop'
                ]
            }]
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Develop', link: '/develop/' },
            { text: 'CMS Connect', link: '/cms/' },
            { text: 'Themes', link: '/themes/' },
            { text: 'Apps', link: '/apps/' },
            { text: 'Support', link: '/support.html' }
        ],
        displayAllHeaders: true,
        sidebarDepth: 1
    }
};

function getSideBar() {
    return [{
            title: "Guide",
            collapsable: false,
            children: [
                '/guide/',
                '/guide/setup'
            ]
        },
        {
            title: "Community",
            collapsable: false,
            children: [
                '/community/'
            ]
        }
    ]
}