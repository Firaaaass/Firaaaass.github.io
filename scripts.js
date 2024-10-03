// Function to simulate club data fetching
function loadClubData() {
    // Simulating fetching data
    setTimeout(() => {
        document.getElementById('club-details').innerHTML = `
            <h3>VRun Club</h3>
            <p>Members: 120</p>
            <p>Location: Jakarta, Indonesia</p>
            <p>Description: A group of dedicated runners aiming to break records!</p>
        `;
    }, 1000);
}
