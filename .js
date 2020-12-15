function onClick(postId) {

    document.getElementById("clicks" + postId).innerHTML = parseInt(document.getElementById("clicks" + postId).innerHTML) + 1
};

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
