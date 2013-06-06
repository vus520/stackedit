var MAIN_URL = "http://benweet.github.io/stackedit/";
var GOOGLE_API_KEY = "AIzaSyAeCU8CGcSkn0z9js6iocHuPBX4f_mMWkw";
var GOOGLE_SCOPES = [
    "https://www.googleapis.com/auth/drive.install",
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/blogger"
];
var GOOGLE_DRIVE_APP_ID = "241271498917";
var DROPBOX_APP_KEY = "lq6mwopab8wskas";
var DROPBOX_APP_SECRET = "851fgnucpezy84t";
var BITLY_ACCESS_TOKEN = "317e033bfd48cf31155a68a536b1860013b09c4c";
var DEFAULT_FILE_TITLE = "Title";
var GDRIVE_DEFAULT_FILE_TITLE = "New Markdown document";
var CHECK_ONLINE_PERIOD = 120000;
var AJAX_TIMEOUT = 30000;
var ASYNC_TASK_DEFAULT_TIMEOUT = 60000;
var ASYNC_TASK_LONG_TIMEOUT = 180000;
var SYNC_PERIOD = 180000;
var USER_IDLE_THRESHOLD = 300000;
var TEMPORARY_FILE_INDEX = "file.tempIndex";
var WELCOME_DOCUMENT_TITLE = "Welcome document";
var DOWNLOAD_PROXY_URL = "http://stackedit-download-proxy.herokuapp.com/";
var WORDPRESS_CLIENT_ID = '3185';
var WORDPRESS_PROXY_URL = "http://stackedit-wordpress-proxy.herokuapp.com/";
var SSH_PROXY_URL = "http://stackedit-ssh-proxy.herokuapp.com/";

// Use by Google's client.js
var delayedFunction = undefined;
function runDelayedFunction() {
    if(delayedFunction !== undefined) {
        delayedFunction();
    }
}

// Site dependent
var BASE_URL = "http://localhost/";
var GOOGLE_CLIENT_ID = '241271498917-lev37kef013q85avc91am1gccg5g8lrb.apps.googleusercontent.com';
var GITHUB_CLIENT_ID = 'e47fef6055344579799d';
var GATEKEEPER_URL = "http://stackedit-gatekeeper-localhost.herokuapp.com/";
var TUMBLR_PROXY_URL = "http://stackedit-tumblr-proxy-local.herokuapp.com/";

if(location.hostname.indexOf("benweet.github.io") === 0) {
    BASE_URL = MAIN_URL;
    GOOGLE_CLIENT_ID = '241271498917-jpto9lls9fqnem1e4h6ppds9uob8rpvu.apps.googleusercontent.com';
    GITHUB_CLIENT_ID = 'fa0d09514da8377ee32e';
    GATEKEEPER_URL = "http://stackedit-gatekeeper.herokuapp.com/";
    TUMBLR_PROXY_URL = "http://stackedit-tumblr-proxy.herokuapp.com/";
}

var THEME_LIST = {
    "": "Default",
    "blue-gray": "Blue-Gray",
    "night": "Night"
};

var EOE_EDITOR_CONFIG = {
        bold: "加粗 <strong> Ctrl+B",
        boldexample: "加粗内容",

        italic: "斜体 <em> Ctrl+I",
        italicexample: "斜体内容",

        link: "链接 <a> Ctrl+L",
        linkdescription: "链接说明文字",
        linkdialog: "<p><b>插入链接地址</b></p><p>http://baidu.com/ \"百度一下\"</p>",

        quote: "引用 <blockquote> Ctrl+Q",
        quoteexample: "引用内容",

        code: "代码块 <pre><code> Ctrl+K",
        codeexample: "代码块",

        image: "图片 <img> Ctrl+G",
        imagedescription: "图片说明文字",
        imagedialog: "<p><b>插入图片地址</b></p><p>http://baidu.com/logo.jpg \"百度一下\"",

        olist: "有序列表 <ol> Ctrl+O",
        ulist: "无序列表 <ul> Ctrl+U",
        litem: "列表项",

        heading: "标题节点 <h1>/<h2> Ctrl+H",
        headingexample: "标题节点",

        hr: "横线 <hr> Ctrl+R",

        undo: "撤销 - Ctrl+Z",
        redo: "重做 - Ctrl+Y",
        redomac: "重做 - Ctrl+Shift+Z",

        help: "编辑器帮助"
    };
