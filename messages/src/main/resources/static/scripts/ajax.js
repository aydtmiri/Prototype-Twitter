$(document).ready(function() {
	timer = setTimeout(loadMessages, 1000);
});
var timer;

function loadMessages() {
	$.ajax({
		url : "/ajax/messages.json?lastClientMessage=" + lastClientMessage,
		success : function(messages) {
			if (messages && messages.length) {
				lastClientMessage = new Date(messages[0].date).getTime();
				$("section").first().before(createMessageList(messages));
				$(".ajaxNew").slideDown(600, "swing", function() {
					$(this).removeClass("ajaxNew");
				});
			}
			timer = setTimeout(loadMessages, 1000);
		},
		error : function() {
			timer = setTimeout(loadMessages, 1000);
		},
		cache : false
	})
}

function createMessageList(messages) {
  var messageList = "";
  for (i in messages) {
    messageList += "<section class='ajaxNew' style='display:none'>";
    messageList += "<b>"+messages[i].user.username+"</b><i class='location'>"+messages[i].date+"</i>";
    messageList += "<p>" + messages[i].text + "<p/>";
    messageList += "</section>";
  }
  return messageList;
}
