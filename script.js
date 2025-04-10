function startChat() {
    // Hide the search box and show the chatbot UI
    document.querySelector('.search-container').style.display = 'none';
    document.querySelector('#chatbot').style.display = 'block';

    // Initiate the chatbot with a greeting
    const chatDiv = document.getElementById('chat');
    chatDiv.innerHTML += "<p><b>Chatbot:</b> Hello! How can I help you today?</p>";
}

// Handle user input and generate simple chatbot responses
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const userInput = document.getElementById('user-input').value;
        const chatDiv = document.getElementById('chat');
        
        // Display user message
        chatDiv.innerHTML += "<p><b>You:</b> " + userInput + "</p>";

        // Basic response logic for the chatbot
        let botResponse = "";
        if (userInput.toLowerCase().includes("help")) {
            botResponse = "How can I assist you with your inquiry?";
        } else {
            botResponse = "Sorry, I didn't understand that. Can you rephrase?";
        }
        
        // Display chatbot response
        chatDiv.innerHTML += "<p><b>Chatbot:</b> " + botResponse + "</p>";
        
        // Clear input field
        document.getElementById('user-input').value = "";
    }
});
