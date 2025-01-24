function newThread() {
    document.getElementById('messages').innerHTML = ''; // Reset chat area
    alert("Starting a new thread!");
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const messagesDiv = document.getElementById('messages');

    if (userInput) {
        messagesDiv.innerHTML += `<p>User: ${userInput}</p>`;
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

function showTokens() {
    alert("Displaying tokens information...");
}

function showPrice() {
    alert("Displaying price information...");
}
