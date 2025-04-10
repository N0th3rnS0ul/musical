// Function to open the chatbot
function openChat() {
    // Show the chatbot UI when the button is clicked
    document.getElementById('chatbot').style.display = 'block';
    document.getElementById('chatbot-button').style.display = 'none'; // Hide the chatbot button

    // Start conversation with a greeting from the bot
    const chatDiv = document.getElementById('chat');
    chatDiv.innerHTML += "<p><b>Chatbot:</b> Hello! How can I help you today?</p>";
}

// Handle user input and generate chatbot responses
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const userInput = document.getElementById('user-input').value;
        const chatDiv = document.getElementById('chat');

        // Display user message in the chat history
        chatDiv.innerHTML += "<p><b>You:</b> " + userInput + "</p>";

        // Basic chatbot response logic
        let botResponse = "";
        
        // Check for specific keywords in user input to generate a response
        if (userInput.toLowerCase().includes("hello")) {
            botResponse = "Hi there! How can I assist you today?";
        } else if (userInput.toLowerCase().includes("help")) {
            botResponse = "I can help you with a variety of things! Just ask.";
        } else if (userInput.toLowerCase().includes("bye")) {
            botResponse = "Goodbye! Let me know if you need anything else.";
            setTimeout(() => closeChat(), 2000);  // Close chat after saying goodbye
        } else {
            botResponse = "Sorry, I didn't understand that. Can you rephrase?";
        }

        // Display the bot's response in the chat history
        chatDiv.innerHTML += "<p><b>Chatbot:</b> " + botResponse + "</p>";
        
        // Scroll to the bottom of the chat history to show the latest message
        chatDiv.scrollTop = chatDiv.scrollHeight;

        // Clear the user input field after the message is sent
        document.getElementById('user-input').value = "";
    }
});

// Function to close the chatbot
function closeChat() {
    // Hide the chatbot UI and show the button again
    document.getElementById('chatbot').style.display = 'none';
    document.getElementById('chatbot-button').style.display = 'block';
}
