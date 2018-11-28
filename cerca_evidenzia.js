$('#search').keyup(function(){
		 var par = $("p").text();
         $("p").text(par);
         $1 = $('#search').val();   
         $("p").html((g, html) => {
			 return html.split($1).join("<span>" + $1 + "</span>");
         });
});