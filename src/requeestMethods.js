import axios from "axios";

const BASE_URL = "http://localhost:5500/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjA3MzA5OTQxNTk3ZDk2MDE2NDM0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDE0MjI5NCwiZXhwIjoxNjM0MzE1MDk0fQ.rUjBKVqS3WwXpJMGmsfKg_wPq5whfkfvg1qawb_kehg";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`
    }
});