$("#send-message").click(function(){
	var lambda = new AWS.Lambda({apiVersion: '2015-03-31'});
    var newJSONData = {};
    alert("Function called");
    name=$("#name").val();
    email=$("#email").val();
    message=$("#message").val();
    newJSONData = [{
        "name" :name,
        "email" :email,
        "message" :message
    }];
	alert(newJSONData)
	$("#user-message").text("Thank you for contacting us; we will get back to you soon.");
});
$("#send-message-free").click(function(){
	alert("Sending Mail");
	$.ajax({
	url: "https://formspree.io/scpauljewellers@gmail.com", 
    method: "POST",
    data: {message: "hello!"},
    dataType: "json"
})});