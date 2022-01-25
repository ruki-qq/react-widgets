import axios from "axios";

export default axios.create(
    {
        baseURL: "https://ru.wikipedia.org/w/api.php",
        params: {
            action: "query",
            origin: "*",
            list: "search",
            format: "json"
        }
        
    }
)