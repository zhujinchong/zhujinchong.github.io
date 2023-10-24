import mathjax3 from "markdown-it-mathjax3";

const customElements = [
    "math",
    "maction",
    "maligngroup",
    "malignmark",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mi",
    "mlongdiv",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mscarries",
    "mscarry",
    "mscarries",
    "msgroup",
    "mstack",
    "mlongdiv",
    "msline",
    "mstack",
    "mspace",
    "msqrt",
    "msrow",
    "mstack",
    "mstack",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "semantics",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mspace",
    "mtext",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "msqrt",
    "mstyle",
    "mmultiscripts",
    "mover",
    "mprescripts",
    "msub",
    "msubsup",
    "msup",
    "munder",
    "munderover",
    "none",
    "maligngroup",
    "malignmark",
    "mtable",
    "mtd",
    "mtr",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "msline",
    "msrow",
    "mstack",
    "maction",
    "semantics",
    "annotation",
    "annotation-xml",
    "mjx-container",
    "mjx-assistive-mml",
];

// Node.js 提供的文件系统模块（fs）和路径模块（path）
const fs = require("fs");
const path = require("path");

function generateNavConfig2(articlesPath) {
    const navConfigList = [];
    const firstLevelList = fs.readdirSync(articlesPath);

    // nav: [
    //     // 一级菜单
    //     {
    //         text: "博客",
    //         // 二级菜单
    //         items: [
    //             { text: 'vitepress', link: '/articles/blog/vitepress/' },
    //             { text: '算法', link: '/articles/blog/算法/' },
    //         ]
    //     },
    //     // 一级菜单
    //     { text: "test", link: "/articles/test/" }
    // ],

    firstLevelList.forEach((firstLevelName) => {
        const secondLevelList = fs.readdirSync(`${articlesPath}/${firstLevelName}`);
        // 文件or文件夹
        let isFirstMenu = false;
        for (secondLevelName of secondLevelList) {
            if (fs.lstatSync(path.join(articlesPath, firstLevelName, secondLevelName)).isFile()) {
                isFirstMenu = true;
                break;
            }
        }
        if (isFirstMenu) {
            navConfigList.push({ text: firstLevelName, link: `/articles/${firstLevelName}/` })
        } else {
            let tmpNav = { text: firstLevelName, items: [] }
            secondLevelList.forEach((secondLevelName) => {
                tmpNav["items"].push({ text: secondLevelName, link: `/articles/${firstLevelName}/${secondLevelName}/` })
            })
            navConfigList.push(tmpNav)
        }
    })
    return navConfigList
}

function generateSidebarConfig2(articlesPath) {
    const sidebarConfig = {};
    const firstLevelList = fs.readdirSync(articlesPath);

    // sidebar: {
    //     "/articles/blog/vitepress": [
    //         {
    //             text: "vitepress",
    //             items: [
    //                 { text: "test01", link: "/articles/blog/vitepress/01VitePress+Github搭建个人博客" },
    //                 { text: "test02", link: "/articles/blog/vitepress/02新环境如何配置" },
    //             ],
    //         },
    //     ],

    // },

    // 如果只有index文件，就没有侧边栏
    firstLevelList.forEach((firstLevelName) => {
        const secondLevelList = fs.readdirSync(`${articlesPath}/${firstLevelName}`);
        // 文件or文件夹
        let isFirstMenu = false;
        for (secondLevelName of secondLevelList) {
            curPath = fs.lstatSync(path.join(articlesPath, firstLevelName, secondLevelName))
            if (curPath.isFile()) {
                isFirstMenu = true;
                break;
            }
        }
        // 如果是一级菜单
        if (isFirstMenu) {
            let isNeedSide = false
            for (filename of secondLevelList) {
                curPath = fs.lstatSync(path.join(articlesPath, firstLevelName, filename))
                if (curPath.isFile() && filename != "index.md") {
                    isNeedSide = true;
                    break;
                }
            }
            if (isNeedSide) {
                let tmpSide = { text: firstLevelName, items: [] }
                secondLevelList.forEach((filename) => {
                    if (filename !== "images" && filename !== "index.md") {
                        tmpSide["items"].push({ text: filename.slice(0, -3), link: `/articles/${firstLevelName}/${filename}` })
                    }
                })
                sidebarConfig[`/articles/${firstLevelName}`] = [tmpSide]
            }
        } else {
            secondLevelList.forEach((secondLevelName) => {
                const fileList = fs.readdirSync(`${articlesPath}/${firstLevelName}/${secondLevelName}`);
                let isNeedSide = false
                for (filename of fileList) {
                    curPath = fs.lstatSync(path.join(articlesPath, firstLevelName, secondLevelName, filename))
                    if (curPath.isFile() && filename != "index.md") {
                        isNeedSide = true;
                        break;
                    }
                }
                if (isNeedSide) {
                    let tmpSide = { text: secondLevelName, items: [] }
                    fileList.forEach((filename) => {
                        if (filename !== "images" && filename !== "index.md") {
                            tmpSide["items"].push({ text: filename.slice(0, -3), link: `/articles/${firstLevelName}/${secondLevelName}/${filename}` })
                        }
                    })
                    sidebarConfig[`/articles/${firstLevelName}/${secondLevelName}`] = [tmpSide]
                }
            })
        }
    })

    return sidebarConfig
}

const docsPath = path.dirname(__dirname); // __dirname是当前文件所属目录的绝对路径
const articlesPath = path.join(docsPath, 'articles');
const navConfig = generateNavConfig2(articlesPath);
const sidebarConfig = generateSidebarConfig2(articlesPath);


export default {
    title: "明日盈盈",
    titleTemplate: "Make each day count, Make learning a habit.",
    description: '一只程序猿', //mate标签description，多用于搜索引擎抓取摘要
    base: "/", // / 或者 /xxx/
    head: [
        ['link', { rel: 'icon', href: '/img/home.svg' }], // 网站icon
    ],
    themeConfig: {
        logo: "/img/home.png",  // 导航栏最左侧logo
        siteTitle: "Home", // 导航栏最左侧title
        nav: navConfig,
        // 导航栏右侧：社交链接
        socialLinks: [
            { icon: "github", link: "https://github.com/mingriyingying" },
        ],
        // 侧边栏：指定菜单及对应的侧边栏
        sidebar: sidebarConfig,
        // 大纲展示层级
        outline: {
            level: [1, 3]
        },
        // 博客下方显示链接：Edit this page on GitHub
        editLink: {
            pattern: 'https://github.com/mingriyingying/mingriyingying.github.io/blob/master/docs/:path',
            text: 'Edit this page on GitHub'
        },
        // 博客下方显示lastupdated时间
        lastUpdated: {
            text: 'Updated at',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },
        // 博客下方
        docFooter: {
            prev: false,
            next: false
        }
    },
    // 支持latex公式
    markdown: {
        config: (md) => {
            md.use(mathjax3);
        },
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.includes(tag),
            },
        },
    },
}
