export const registerUser = async (userData) => {
    // API request
    const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });
    console.log(response.status);
    const data = await response.json();
    return data;
};

export const loginUser = async (credentials) => {
    // API request
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    });
    console.log(response.status);
    const data = await response.json();
    return data;
};