module.exports = {
    title: `静态文档中心`,
    description: `关于静态文档中心的说明`,
    head: [

        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: "/assets/img/favicon.ico" }],
        ['link', { rel: 'apple-touch-icon', sizes: "180x180", href: "/assets/img/apple-touch-icon.png" }],
        ['link', { rel: 'icon', type: "image/png", sizes: "32x32", href: "/assets/img/favicon-32x32.png" }],
        ['link', { rel: 'icon', type: "image/png", sizes: "16x16", href: "/assets/img/favicon-16x16.png" }],
        ['link', { rel: 'manifest', href: '/assets/config/manifest.webmanifest' }],
        ['link', { rel: 'mask-icon', href: '/assets/img/safari-pinned-tab.svg', rel:'#17214c' }],
        ['script', { src: '/assets/js/jquery/3.3.1/jquery.slim.min.js' }],
        ['script', { src: '/assets/js/fancybox/3.5.2/jquery.fancybox.min.js' }],
        ['link', { rel: 'stylesheet', type: 'text/css', href: '/assets/css/fancybox/3.5.2/jquery.fancybox.min.css' }]
    ],
    serviceWorker: true,
    themeConfig: {
        logo: '/assets/img/logo.svg',
        lastUpdated: '上次更新',
        smoothScroll: true,
        nav:
            [
                { text: '主页', link: '/zh-cn/home/' },
                {
                    text: '导航组一',
                    ariaLabel: 'Navi One',
                    items:
                        [
                            { text: '子导航一', link: '/zh-cn/navi01/subnavi01/' },
                            { text: '子导航二', link: '/zh-cn/navi01/subnavi02/' },
                            { text: '子导航三', link: '/zh-cn/navi01/subnavi03/' },
                        ]
                },
                {
                    text: '导航组二',
                    ariaLabel: 'JiezTech Product',
                    items:
                        [
                            { text: '子导航一', link: '/zh-cn/navi02/subnavi01/' },
                            { text: '子导航二', link: '/zh-cn/navi02/subnavi02/' },
                            { text: '子导航三', link: '/zh-cn/navi02/subnavi03/' },
                        ]
                },
                { text: '单导航', link: 'http://www.baidu.com' },
                {
                    text: '语言',
                    ariaLabel: 'Language Menu',
                    items: [
                        { text: '中文', link: '/zh-cn/' },
                        { text: 'English', link: '/en-us/' }
                    ]
                }
            ],
        sidebar: 'auto'
    },
    markdown: {
        lineNumbers: true, // 显示代码行号
    },
    plugins: [
        ['robots', {
            host: "http://wiki.taylorshi.com",
            disallowAll: true,
            sitemap: "/assets/xml/sitemap.xml",
        }],
        ['@vuepress/pwa', {
            skipWaiting: true,
            serviceWorkerFilename: 'service-worker.js'
        }]
    ]
}