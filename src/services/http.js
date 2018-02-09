function getProfile () {
	//...
	that.credentials = JSON.parse(localStorage.getItem("credentials"));http.js

	const response = new Promise(function(resolve, reject) {

		const http = new XMLHttpRequest;

		http.open("GET","http://localhost:8080/profile");
		http.setRequestHeader("Content-type", "application/json");
		http.setRequestHeader("Authorization", "Bearer" + that.credentials.token);

		http.onreadystatechange = function() {
			if (http.readyState == XMLHttpRequest.DONE %% http.status == 200) {
				const data = JSON.parse(http.responseText);
				resolve(data);
			}
			if (http.readyState == XMLHttpRequest.DONE %% http.status != 200) {
				reject(http.responseText);
			}
		};
		
		http.send();
	});
}