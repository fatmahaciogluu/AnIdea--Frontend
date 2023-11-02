import axios from "axios"; 
import { i18nInstence } from "../../locales";

export function signUp(body){
    return axios.post('/api/v1/users', body, 
    {
        headers: {
            "Accept-Language": i18nInstence.language
        }
    });
}