define([
    "underscore",
    "config"
], function(_) {
	var date = new Date();
	var month = date.getMonth() + 1;
    var settings = {
        layoutOrientation: "horizontal",
        lazyRendering: true,
        editorFontSize: 14,
        defaultContent: "\n\n> "+date.getFullYear()+"年"+ month +"月"+date.getDay()+"日.",
        commitMsg: "Published by http://benweet.github.io/stackedit",
        template: [
            '<!DOCTYPE html>\n',
            '<html>\n',
            '<head>\n',
            '<title><%= documentTitle %></title>\n',
            '</head>\n',
            '<body><%= documentHTML %></body>\n',
            '</html>'
        ].join(""),
        sshProxy: SSH_PROXY_URL,
        extensionSettings: {}
    };

    if(_.has(localStorage, "settings")) {
        _.extend(settings, JSON.parse(localStorage.settings));
    }

    return settings;
});