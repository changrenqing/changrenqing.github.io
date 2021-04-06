!(function (window) {

    function createIndexShadowTextElement() {
        var titleString = "长人青，2021";
        var elementString = "";
        for (var i = 0; i < titleString.length; i++) {
            var e = titleString[i];
            elementString += '\
            <div class="word-white word-basics title-hover">\
                ' + e + '\
                <div class="word word-basics">\
                    ' + e + '\
                </div>\
                <div class="word-shadow word-basics">\
                    ' + e + '\
                </div>\
            </div>';
        }
        var title = document.getElementById("title");
        title.innerHTML = elementString;
    }

    function createIndexLinksElement() {
        var links = [
            {
                link: "./pages/blog.html",
                linkName: ["博", "客"]
            }, 
            {
                link: "./pages/gallery.html",
                linkName: ["摄", "影"]
            }, 
            {
                link: "./pages/about.html",
                linkName: ["关", "于"]
            }
        ];
        var elementString = "";
        for (var i = 0; i < links.length; i++) {
            var linkName = links[i].linkName;
            var link = links[i].link;
            elementString += '<a href="' + link + '" class="link-item">';
            for (var j = 0; j < linkName.length; j++) {
                var linkText = linkName[j];
                elementString += '\
                <div class="word-white word-basics-small">\
                    ' + linkText + '\
                    <div class="word word-basics-small">\
                        ' + linkText + '\
                    </div>\
                    <div class="word-shadow word-basics-small">\
                        ' + linkText + '\
                    </div>\
                </div>';
            }
            elementString += '</a>';
        }
        var link = document.getElementById("link");
        link.innerHTML = elementString;
    }

    window.CHANG_REN_QING = {
        createIndexShadowTextElement: createIndexShadowTextElement,
        createIndexLinksElement: createIndexLinksElement
    }
})(window);

window.CHANG_REN_QING.createIndexShadowTextElement();
window.CHANG_REN_QING.createIndexLinksElement();