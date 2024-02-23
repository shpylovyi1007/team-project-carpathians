let newWindow;

function openWindow() {
    newWindow = window.open('./img/Rectangle 58.jpg');
}

function closeWindow() {
    if (newWindow) {
        newWindow.close();
    }
}