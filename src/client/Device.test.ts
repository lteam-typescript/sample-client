import { Device } from "./Device";

async function work(){
    const d = Device.build("http://127.0.0.1:9999")
    const id = await d.create()
    console.log(id)
    console.log(await d.retrieve(id.id))
}


async function main(){
    for (let i=0; i < 20; i++){
        await work()
    }
}

main()

