// Initialize variables for the secret sequence
let sequenceIndex = 0;  // Keeps track of the question sequence
const secretSequence = [
    { question: "Do you like music?", answer: null },  // First question, no predefined answer
    { question: "What is the time?", answer: null }    // Second question, no predefined answer
];

// Function to open the chatbot
function openChat() {
    // Show the chatbot UI when the button is clicked
    document.getElementById('chatbot').style.display = 'block';
    document.getElementById('chatbot-button').style.display = 'none'; // Hide the chatbot button

    // Start the conversation with a greeting from the bot
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

        // Check if the input matches the current question in the sequence
        if (sequenceIndex < secretSequence.length) {
            checkSecretSequence(userInput);
        } else {
            // Generate chatbot response for normal conversation
            let botResponse = getBotResponse(userInput);
            chatDiv.innerHTML += "<p><b>Chatbot:</b> " + botResponse + "</p>";
        }

        // Scroll to the bottom of the chat history
        chatDiv.scrollTop = chatDiv.scrollHeight;

        // Clear the user input field after the message is sent
        document.getElementById('user-input').value = "";
    }
});

// Function to check if the user answers the secret sequence correctly
function checkSecretSequence(userInput) {
    const chatDiv = document.getElementById('chat');
    const currentQuestion = secretSequence[sequenceIndex];

    // Check if the answer matches the expected answer for the current question
    if (userInput.toLowerCase() === currentQuestion.question.toLowerCase()) {
        sequenceIndex++; // Move to the next question in the sequence

        // If the user has answered both questions correctly, activate the private chat
        if (sequenceIndex === secretSequence.length) {
            chatDiv.innerHTML += "<p><b>Chatbot:</b> You've completed the secret sequence. Let's begin the private chat.</p>";
            activatePrivateChat();
        } else {
            chatDiv.innerHTML += "<p><b>Chatbot:</b> Correct! " + secretSequence[sequenceIndex].question + "</p>";
        }
    } else {
        chatDiv.innerHTML += "<p><b>Chatbot:</b> Incorrect answer. Please try again.</p>";
    }
}

// Function to generate chatbot responses based on user input
function getBotResponse(userInput) {
    let response = "";

    // Simple response logic based on keywords in user input
    const input = userInput.toLowerCase(); // Convert to lowercase for easier matching

    // Match for greetings
    if (input.includes("hello") || input.includes("hi")) {
        response = "Hi there! How can I assist you today?";
    }
    // Match for asking for help
    else if (input.includes("help")) {
        response = "I can assist with a variety of things! What do you need help with?";
    }
    // Match for goodbye
    else if (input.includes("bye") || input.includes("goodbye")) {
        response = "Goodbye! Let me know if you need anything else.";
        setTimeout(() => closeChat(), 2000);  // Close chat after saying goodbye
    }
    // Match for asking a question about the chatbot itself
    else if (input.includes("who are you") || input.includes("what are you")) {
        response = "I'm a simple chatbot designed to assist you!";
    }
    // Match for generic inquiries
    else if (input.includes("how are you")) {
        response = "I'm doing well, thank you for asking!";
    }
    // Default response if no match
    else {
        response = "Sorry, I didn't quite understand that. Can you ask something else?";
    }

    return response;
}

// Function to activate private chat (whistleblower mode)
function activatePrivateChat() {
    // Here you could implement the code to open a hidden, secure chat room or external communication
    const chatDiv = document.getElementById('chat');
    chatDiv.innerHTML += "<p><b>Chatbot:</b> Private chat mode is now activated. All communications will be secure and anonymous.</p>";
    // Example of further steps:
    // - Direct the user to a secure chat room
    // - Initiate encrypted communication or move to another channel

    // You can also call an external function or URL if needed (e.g., create a new anonymous channel)
    // Example: window.location.href = 'https://secure-chat-room.com';
}

// Function to close the chatbot
function closeChat() {
    // Hide the chatbot UI and show the button again
    document.getElementById('chatbot').style.display = 'none';
    document.getElementById('chatbot-button').style.display = 'block';
}
