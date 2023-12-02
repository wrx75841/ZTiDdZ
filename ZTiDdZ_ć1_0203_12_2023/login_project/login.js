// Pobranie referencji do formularza logowania, przycisku logowania i komunikatu o błędzie
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// Dodanie nasłuchiwacza zdarzeń na przycisku logowania
loginButton.addEventListener("click", (e) => {
    // Zatrzymanie domyślnej akcji formularza (przeładowania strony)
    e.preventDefault();

    // Pobranie wartości wprowadzonych przez użytkownika - nazwy użytkownika i hasła
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Sprawdzenie, czy oba pola formularza są puste
    if (username === "" && password === "") {
        // Jeśli oba pola są puste, wyświetlenie komunikatu o poprawnym zalogowaniu
        alert("You have successfully logged in.");

        // Przeładowanie strony
        location.reload();
    } else {
        // Jeśli co najmniej jedno pole nie jest puste, ustawienie nieprzezroczystości komunikatu o błędzie na 1
        loginErrorMsg.style.opacity = 1;
    }
});
