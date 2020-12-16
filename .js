var name = window.prompt("Внесете го вашето име:");
function myFunction(tmpId) {

    komentar = document.getElementById("text"+tmpId).value;
    if(komentar.length >0)
    {
        var nov_komentar = document.createElement("ul");
        var t=new Date();
        var time= t.getFullYear();
        var mesec=t.getMonth() + 1;
     var x = "(" + time + "."+ mesec + ")"+ " " + name + " : " + komentar ;
     nov_komentar.innerHTML =x;
    document.getElementById("myUL"+tmpId).appendChild(nov_komentar);
    }
    else{
        alert("Text field empty!");
        return false;
    }
    
};

function clickCounter(id, label) {
    var node = document.getElementById(id);
    if (!node) {
        return console.error('Element #' + id + ' not found');
    }

    if (window.localStorage === undefined) {
        node.innerHTML = 'Sorry, your browser does not support web storage...';
    } else {
        var key = 'clickcount_' + id;
        localStorage[key] = (++localStorage[key] || 1);
        node.innerHTML = 'Likes: ' + ' ' + localStorage[key] ;
    }
}

function clickCounter(id, label) {
    var node = document.getElementById(id);
    if (!node) {
        return console.error('Element #' + id + ' not found');
    }

    if (window.localStorage === undefined) {
        node.innerHTML = 'Sorry, your browser does not support web storage...';
    } else {
        var key = 'clickcount_' + id;
        localStorage[key] = (++localStorage[key] || 1);
        node.innerHTML = 'Likes: ' + ' ' + localStorage[key] ;
    }
}

