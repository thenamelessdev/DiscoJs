import { confStat, configs } from "./config.js"

export async function api(endpoint:string, method:string, auth:boolean, body?:any) {
    if(!auth){
        try{
            const response = await fetch(`https://discord.com${endpoint}`, {
                method: method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            const json = await response.json();
            if(response.ok){
                return json;
            }
            else{
                throw new Error(`There was an error while sending the api request. Status code: ${response.status}`);
            }
        }
        catch{
            throw new Error("There was an error while sending the api request");
        }
    }
    else{
        if(!confStat){
            throw new Error("Missing config");
        }

        try{
            const response = await fetch(`https://discord.com${endpoint}`, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bot ${configs.token}`
                },
                body: JSON.stringify(body)
            });
            const json = await response.json();
            if(response.ok){
                return json;
            }
            else{
                throw new Error(`There was an error while sending the api request. Status code: ${response.status}`);
            }
        }
        catch{
            throw new Error("There was an error while sending the api request");
        }
    }
}