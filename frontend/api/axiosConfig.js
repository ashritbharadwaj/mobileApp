import axios from "axios";

export default axios.create( {
    baseURL: 'http://192.168.238.46:6969/api',
    headers: {
        'Content-type': 'application/json'
    }
});