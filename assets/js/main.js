import { fetchData } from "./api.js";
import { createMatches } from "./ui.js";

async function init() {
    const data = await fetchData();
    if (data) {
        createMatches(data);
    }
}

init();