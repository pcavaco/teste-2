var serviceURL = "http://cesnova.fcsh.unl.pt/services/";

var noticias;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getallnews.php', function(data) {
		$('#newsList li').remove();
		noticias = data.items;
		$.each(noticias, function(index, noticia) {
			$('#newsList').append('<li><a href="newsdetails.html?id=' + noticia.id + '">' +
					'<img src="pics/' + noticia.imagem + '"/>' +
					'<h4>' + noticia.titulo +'</h4>' +
					'<p>' + noticia.resumo + '</p>' +
					'<span class="ui-li-count"></span></a></li>');
		});
		$('#newsList').listview('refresh');
	});
}