function newApi() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhttp.setRequestHeader("Content-Type", "application-json");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == XMLHttpRequest.DONE && xhttp.status === 200) {
            let data = JSON.parse(xhttp.response);
            if(data.length > 0) {
                var temp = "";
                data.forEach((u) => {
                    temp+="<tr>";
                    temp += "<td>"+u.userId+"</td>";
                    temp += "<td>"+u.id+"</td>";
                    temp += "<td>"+u.title+"</td>";
                    temp += "<td>"+u.body+"</td></tr>";
                })
                document.getElementById("data").innerHTML = temp;
            }
        }
    };
}