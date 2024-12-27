//Autor Roman Kurm
function renderHeader() {
    const topRight = document.getElementById('top-right');
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        // kuva kasutaja ikoon ning kiri "logi välja" kui kasutaja on sisse logitud
        topRight.innerHTML = `
            <div style="display: flex; align-items: center;">
                <a href="profile.html" title="Go to profile">
                    <img src="pildid/user.png" alt="User Logo" style="width: 50px; height: 50px; border-radius: 50%; cursor: pointer; transition: transform 0.3s ease;">
                </a>
                <span class="logout-text" style="color: #0066cc; text-decoration: underline; font-size: 14px; cursor: pointer; margin-left: 10px;" onclick="logout()">või logi välja</span>
            </div>
        `;
    } else {
        //kuva sisse logimise ning registreerimise ruppe kui kasutaja pole sisse logitud
        topRight.innerHTML = `
            <div>
                <button class="btn" style="background-color: #ff69b4; color: white; border: none; border-radius: 10px; padding: 8px 15px; font-size: 14px; cursor: pointer; margin: 5px;" onclick="location.href='login.html'">Login</button>
                <button class="btn" style="background-color: #ff69b4; color: white; border: none; border-radius: 10px; padding: 8px 15px; font-size: 14px; cursor: pointer; margin: 5px;" onclick="location.href='register.html'">Register</button>
            </div>
        `;
    }
}

// Logout function
function logout() {
    localStorage.removeItem('loggedInUser'); // Eemalda kasutaja andmed
    window.location.href = 'index.html'; // Suuna pealehele tagasi
}

// Kui skripti jooksutatakse siis kutsuda seda funktsiooni
document.addEventListener('DOMContentLoaded', renderHeader);
