// ======================
// SGI API CLIENT
// ======================

const SGI_API = {
    baseUrl: "http://localhost:8080/api",

    // Guarda token en localStorage
    saveToken(token) {
        localStorage.setItem("sgi_token", token);
    },

    // Obtiene token
    getToken() {
        return localStorage.getItem("sgi_token");
    },

    // Logout
    logout() {
        localStorage.removeItem("sgi_token");
        window.location.href = "login.html";
    },

    // LOGIN
    async login(username, password) {
        const resp = await fetch(`${this.baseUrl}/auth/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ username, password })
        });

        if (!resp.ok) throw new Error("Credenciales incorrectas");
        const data = await resp.json();
        this.saveToken(data.token);
        return data;
    },

    // GET protegido
    async secureGET(url) {
        const token = this.getToken();
        if (!token) throw new Error("No hay token");

        const resp = await fetch(`${this.baseUrl}${url}`, {
            headers: { "Authorization": `Bearer ${token}` }
        });

        if (resp.status === 403 || resp.status === 401) {
            alert("Sesión expirada");
            this.logout();
        }

        return resp.json();
    }
};
