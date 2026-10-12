
export async function fetchData() {
    try {
        const response = await fetch("https://api-internal.azurewebsites.net/strycket2025");
        return await response.json();
    } catch (error) {
        return null;
    }
}