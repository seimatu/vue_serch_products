// const dayjs = require('dayjs');
// const now = dayjs();

import { app, BrowserWindow, ipcMain } from "electron";

// メインウィンドウ
let win;

function createWindow() {
    // メインウィンドウを作成します
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        width: 800,
        height: 600
    });

    // メインウィンドウに表示するURLを指定します
    // （今回はmain.jsと同じディレクトリのindex.html）
    // win.loadURL(`file:///src/index.html`);

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
        // if (!process.env.IS_TEST) win.webContents.openDevTools() ←ここをコメントアウト
    } else {
        createProtocol("app");
        // Load the index.html when not in development
        win.loadURL("app://./index.html");
    }

    デベロッパーツールの起動;
    win.webContents.openDevTools();

    メインウィンドウが閉じられたときの処理;
    win.on("closed", () => {
        win = null;
    });

    //  初期化が完了した時の処理
    app.on("ready", createWindow);

    // 全てのウィンドウが閉じたときの処理
    app.on("window-all-closed", () => {
        // macOSのとき以外はアプリケーションを終了させます
        if (process.platform !== "darwin") {
            app.quit();
        }
    });
    // アプリケーションがアクティブになった時の処理(Macだと、Dockがクリックされた時）
    app.on("activate", () => {
        // メインウィンドウが消えている場合は再度メインウィンドウを作成する
        if (win === null) {
            createWindow();
        }
    });

    // playwiright
    const pw = require("playwright");

    ipcMain.handle("start1", async() => {
        const browser = await pw.chromium.launch({
            headless: false
        }); // or 'chromium', 'firefox'
        const context = await browser.newContext();
        const page = await context.newPage();

        // TODO:アマゾン、楽天、ヤフーをプルダウンの入力から受ける関数を作成する。
        // thisNotification("スタートしました");
        await page.goto(
            "https://grp01.id.rakuten.co.jp/rms/nid/vc?__event=login&service_id=top"
        );

        // await page.goto('https://www.yahoo.co.jp/');
        // await page.screenshot({ path: 'example.png' });

        // if (serch === "Amazon") {
        //   await page.goto('https://www.amazon.co.jp/ap/signin?_encoding=UTF8&openid.assoc_handle=jpflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.co.jp%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26action%3Dsign-out%26path%3D%252Fgp%252Fyourstore%252Fhome%26ref_%3Dnav_AccountFlyout_signout%26signIn%3D1%26useRedirectOnSuccess%3D1');
        //   await page.screenshot({ path: 'Amozon.png' });
        // }
        // if (serch === "Yahoo") {
        //   await page.goto('https://login.yahoo.co.jp/config/login?.src=www&.done=https%3A%2F%2Faccounts.yahoo.co.jp%2Fprofile%3F.done%3Dhttps%253A%252F%252Fwww.yahoo.co.jp%252F%253F.src%253Dwww%2526t_cushion%253D1');
        //   await page.screenshot({ path: 'Yahoo.png' });
        // }
        // if (serch === "Rakuten") {
        //   await page.goto('https://grp01.id.rakuten.co.jp/rms/nid/vc?__event=login&service_id=top');
        //   await page.screenshot({ path: 'Rakuten.png' });
        // }
    });
}