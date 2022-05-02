let iframe = document.getElementById("iframe");
let toggle_editor_btn = document.getElementById("toggle_editor_btn");
let getCode = document.getElementById("getCode");
let show_code = false;
iframe.contentDocument.designMode = "on";
toggle_editor_btn.addEventListener("click", () => {
    if (iframe.contentDocument.designMode == "on") {
        iframe.contentDocument.designMode = "off";
    } else {
        iframe.contentDocument.designMode = "on";
    }
});

function change(cmd) {
    textEditorDocument.document.execCommand(cmd, true, null)
}

function change_tow(cmd, more) {
    textEditorDocument.document.execCommand(cmd, true, more)
}
getCode.addEventListener("click", function () {
    if (show_code) {
        textEditorDocument.document.getElementsByTagName("body")[0].innerHTML = textEditorDocument.document.getElementsByTagName("body")[0].textContent
        show_code = false;
    } else {
        textEditorDocument.document.getElementsByTagName("body")[0].textContent = textEditorDocument.document.getElementsByTagName("body")[0].innerHTML
        show_code = true;
    }
});