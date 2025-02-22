import "./index.scss";

import { Plugin, Menu } from "siyuan";

export default class Main extends Plugin {
    onload() {
        console.log("Hello World!");
        this.init();
    }

    private init() {
        console.log("init");
        // 注册icon
        this.addIcons(`
            <symbol id="icon-halo" viewBox="0 0 300 300">
                <text stroke-width="0" transform="matrix(13.9781 0 0 12.6787 -1017.43 -1284.64)" 
                    stroke="#000" text-anchor="start" font-family="Noto Sans JP" 
                    font-size="24" y="122.08925" x="74.794" fill="currentColor">H</text>
            </symbol>
        `);
        // 添加按钮
        this.addTopBar({
            icon: "icon-halo",
            title: "Halo",
            callback: this.openMenu,
            position: "right",
        });
    }

    private openMenu(event: MouseEvent) {
        // 创建菜单
        const menu = new Menu("HaloMainMenu");
        menu.addItem({
            icon: "icon-halo",
            label: "同步 Moment",
            click: () => {
                console.log("Halo");
            },
        });
        menu.open({x:event.clientX, y:event.clientY});
    }
}