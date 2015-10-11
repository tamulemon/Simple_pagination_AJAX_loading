document.ready = function() {
	function refreshData() {
		$.ajax({
			url: '/instances',
			dataType: 'json',
			type: 'GET',
			headers: { // this allows caching data
				'Cache-Control': 'public, max-age=300',
				'If-Unmodified-Since': (new Date()) - 720000
			},
			contentType: 'application/json; charset=utf-8',
			success: function(data) {
				var arr = data.instances;
				var len = arr.length;
				var newRow, curr, row100 = '';
				for(var i = 0, j = 0; i < len; i++, j++) {
					curr = arr[i];
					newRow = '<tr><td>' + curr.id + '</td><td>' + curr.name + '</td><td>' + curr.status + '</td></tr>';
					row100 += newRow;
					if(j === 99) { // j is essentially here for progressive drawing(paging). because drawing elements in DOM is slow. so this to draw 100 row at a time. Improve performance from ~10 sec to ~2sec.
						$('#allData table').append(row100);
						row100 = '';
						j = 0;
					}
				}
			},
			error: function(xhr, status, err) {
				$('#allData').html = 'sorry, there is someting wrong';
				console.log(err);
			}
		})
	}
	
	refreshData();
	
	$('button').click(refreshData);
	

	
//	$.ajax({
//		url: '/instances/1',
//		...
//	})

	
};


