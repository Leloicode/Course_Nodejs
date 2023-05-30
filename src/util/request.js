import axios from "axios";
// const baseURL = window.location.origin;
export const request = axios.create({
    baseURL: 'http://localhost:3000/'
});