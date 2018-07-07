import Axios, { AxiosInstance } from "axios";

import * as type from "../type"

export class Device{

    constructor(private requester: AxiosInstance){

    }

    public static build(baseURL = "http://127.0.0.1"){
        return new Device(Axios.create({
            baseURL
        }))
    }

    updateRequester(requester: AxiosInstance, log_reason: string = "add login token"){
        // log
        this.requester = requester
    }

    async create() {
        const resp = await this.requester.post('/device', {
            status: "on"
        })
        return resp.data as type.ID
    }

    async retrieve(device_id: string) {
        const resp = await this.requester.get(`/device/${device_id}`)
        return resp.data as type.Device & type.ID
    }

}

export default Device
