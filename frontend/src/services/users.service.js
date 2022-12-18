import { httpClient } from './config/http.config'

export default {

   usersList: async () => {
    try { return await httpClient.get('users') }
    catch (err) { return await Promise.reject(err) }
    }

}
