function openInventory() {
  
  if (document.getElementById("inventoryPanel")) {
    return;
  }
  
  document.getElementById("story").innerHTML += `

        <div id="inventoryPanel" class="story-panel">

            <h2>🎒 Inventory</h2>

            <p>
                <strong>Money:</strong> 50 silver
            </p>

            <p>
                <em>Your inventory is empty.</em>
            </p>

            <button onclick="closeInventory()">
                ✕ Close
            </button>

        </div>

    `;
  
}

function closeInventory() {
  
  const panel = document.getElementById("inventoryPanel");
  
  if (panel) {
    panel.remove();
  }
  
}