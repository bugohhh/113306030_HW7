// Selectors
const addMusicButton = document.getElementById('add-music-button');
const musicList = document.getElementById('music-list');

// Event Listener for Add Music Button
addMusicButton.addEventListener('click', () => {
    // Create a form to input new music
    const musicForm = document.createElement('div');
    musicForm.id = 'music-form';
    musicForm.innerHTML = `
        <input type="text" id="music-link" placeholder="Music Link" required>
        <input type="text" id="music-name" placeholder="Music Name" required>
        <button id="submit-music-button">Submit</button>
    `;

    // Append form to the music section
    document.querySelector('.music-section').appendChild(musicForm);

    // Handle Submit Button
    const submitMusicButton = document.getElementById('submit-music-button');
    submitMusicButton.addEventListener('click', () => {
        const musicLink = document.getElementById('music-link').value.trim();
        const musicName = document.getElementById('music-name').value.trim();

        if (musicLink && musicName) {
            // Create a new music item
            const newMusicItem = document.createElement('div');
            newMusicItem.className = 'music-item';
            newMusicItem.innerHTML = `
                <a href="${musicLink}" target="_blank">
                    <img src="youtube.png" alt="${musicName}">
                    <p>${musicName}</p>
                </a>
            `;

            // Add the new music item to the list
            musicList.appendChild(newMusicItem);

            // Remove the form after submission
            musicForm.remove();
        } else {
            alert('Please fill in both fields!');
        }
    });
});
