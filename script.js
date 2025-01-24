function login() {
    const username = document.getElementById('username').value;
    if (username) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('chat-area').style.display = 'block';
        document.getElementById('messages').innerHTML += `<p><strong>${username}</strong> joined the chat.</p>`;
    } else {
        alert("Please enter a username.");
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const messagesDiv = document.getElementById('messages');

    if (userInput) {
        messagesDiv.innerHTML += `<p>${userInput}</p>`;
        document.getElementById('user-input').value = ''; // Clear input
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to bottom
    }
}

async function connectWallet() {
    if (window.solana && window.solana.isPhantom) {
        try {
            const response = await window.solana.connect();
            alert(`Connected to wallet: ${response.publicKey.toString()}`);
        } catch (err) {
            console.error(err);
            alert("Connection to wallet failed.");
        }
    } else {
        alert("Please install Phantom Wallet.");
    }
}
