// Add an event listener to the button that makes the API call to fetch a joke.
document.getElementById('joke-button').addEventListener('click', function() {
    fetch('https://geek-jokes.sameerkumar.website/api?format=json') // 'fetch' sends the request in json format for a random joke.
    .then(response => response.json()) // process the response from the API. This is usually called after a "fetch" request.
    .then(data => { // 'data' is the result of the request made on the previous line.
        document.getElementById('rando-joke').innerText = data.joke; // update the field that holds the joke with the joke data fromt the request.
    })
    .catch(error => { // This handles the case where something goes arwy in the 'fetch' request.
        document.getElementById('rando-joke').innerText = "The real joke is this program. Could not fetch a joke!" // Update the field that holds the joke with an error message.
        console.error('Error:', error); // Logs the error in the errors tab of the DevTools.
    });
})