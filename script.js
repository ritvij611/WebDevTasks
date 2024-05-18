fetch("https://coding-week-2024-api.onrender.com/api/data").then(response =>{
    data = response.json();
    return data;
}).then(data => {
    //console.log(data);
    //set headline, date, content to all 10 blocks
    for(var i=1; i<=10; i++){
        $("#"+i+" .headline").text(data[i-1].headline);
        $("#"+i+" .date>p").text(data[i-1].date);
        $("#"+i+" .content").text(data[i-1].content);
        $(".content").hide();   
    }

    //set image to 6 small blocks of section 2
    for(var i=5; i<=10; i++){
        $("#"+i+" img").attr("src",data[i-1].image);
    }

    //set background-image,type,author to 4 larger blocks of section 1
    for(var i=1; i<=4; i++){
        $("#"+i+" .theme>p").text(data[i-1].author);
        $("#"+i+" .btn1").text(data[i-1].type[0].toUpperCase()+data[i-1].type.slice(1));
        $("#"+i).css("background-image","url(" +data[i-1].image+ ")");
    }

    //make content appear at mouse position when hovered
    $(".news").hover(function(event) {
        $("#"+$(this).attr("id")+" .content").css({top: event.clientY, left: event.clientX}).show();
    }, function() {
        $("#"+$(this).attr("id")+" .content").hide();
    });   
});