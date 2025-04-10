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
            chatDiv.innerHTML +=
