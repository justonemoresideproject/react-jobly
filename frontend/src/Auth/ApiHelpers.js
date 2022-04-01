import axios from "axios"
import JoblyApi from '../../../api.js'

let apiKey = useRef()

async function register(formData){
    let res = await JoblyApi.register(formData)

    try {
        apiKey.current = res.token
        return true
    } catch (e) {
        return Error(e)
    }

}