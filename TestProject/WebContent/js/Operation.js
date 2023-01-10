/**
 * 
 */
var getMessage = function() {
	$.ajax({
        url: '/TestServ',
        type: "GET",
        success: function (data) {
            $('#button').text(data);
        }
    });
} 