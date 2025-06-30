document.getElementById('gameForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('gameName').value;
  const type = document.getElementById('gameType').value;
  const description = document.getElementById('gameDescription').value;

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h3>✅ Game Generated Successfully!</h3>
    <p><strong>Game Name:</strong> ${name}</p>
    <p><strong>Game Type:</strong> ${type}</p>
    <p><strong>Description:</strong> ${description}</p>
    <p><strong>Status:</strong> Your open world game is being generated via GameVerse Cloud + Unreal Engine + AI + Metahumans...</p>
  `;
});