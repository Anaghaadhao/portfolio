function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();

  if (message) {
    const chatBody = document.getElementById("chat-body");

    const userMsg = document.createElement("div");
    userMsg.textContent = "You: " + message;
    chatBody.appendChild(userMsg);

    const botMsg = document.createElement("div");
    botMsg.textContent = "Bot: Thanks for your message!";
    chatBody.appendChild(botMsg);

    chatBody.scrollTop = chatBody.scrollHeight;
    input.value = "";
  }
}
