function getXHR(url, data) {
    const xhr = new XMLHttpRequest();
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(data);
    xhr.open("get", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            console.log(xhr.responseText);
        }
    };
}
