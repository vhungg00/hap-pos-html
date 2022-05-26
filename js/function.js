let abc = true;
$(document).ready(function () {
    functionInit();
    swup.on("contentReplaced", functionInit);
    swup.on("contentReplaced", function () {
        let body = document.querySelector("body");
        body.scrollIntoView();
        hideLoading();
        abc = true;
    });

    swup.on("transitionStart", function (event) {
        showLoading("Đang tải...");
    });
    swup.on("transitionEnd", function () {
        hideLoading();
    });
});


const functionInit = () => {
    InitChangeTypePassword()
}
function InitChangeTypePassword () {
    
}