export default {
    title: "明日盈盈",
    description: '一个vue3组件库',//mate标签description，多用于搜索引擎抓取摘要
    // base: "/notes/", // 根目录
    themeConfig: {
        // 导航栏左侧：logo和title
        logo: "/vitepress/home.svg",
        siteTitle: "Home",
        // 导航栏右侧：菜单
        nav: [
            { text: "博客", link: "/blog/" },
            { text: "Java", link: "/java/" }
        ],
        // 导航栏最右侧：社交链接
        socialLinks: [
            { icon: "github", link: "https://gitee.com/geeksdidi" },
        ],
        // 侧边栏：首页不要侧边栏；特定页面才有的侧边栏
        sidebar: {
            "/blog/": [
                {
                    text: "Test",
                    items: [
                        { text: "test01", link: "/blog/test01" },
                        { text: "test02", link: "/blog/test02" },
                    ],
                },
            ],
        },
    }
}
