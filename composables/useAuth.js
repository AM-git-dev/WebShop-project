export function useAuth() {
    console.log("🔍 useAuth.js chargé !");

    const token = useState("token", () => {
        if (process.client) {
            console.log("Lecture du token dans localStorage :", localStorage.getItem("token"));
            return localStorage.getItem("token") || null;
        }
        return null;
    });

    function logout() {
        token.value = null;
        if (process.client) {
            localStorage.removeItem("token");
        }
        navigateTo("/login");
    }

    function isAuthenticated() {
        console.log("Vérification auth - Token :", token.value);

        // Ajout d'une vérification pour récupérer le token si besoin
        if (!token.value && process.client) {
            token.value = localStorage.getItem("token");
            console.log("Récupération forcée du token :", token.value);
        }

        return token.value !== null && token.value !== undefined && token.value !== "";
    }

    return { token, logout, isAuthenticated };
}
