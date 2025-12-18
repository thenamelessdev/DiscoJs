interface configInteface{
    token?: string,
    errorChannelId?: string
};
export let configs:configInteface = {}
export let confStat = false;

export function config(token:string, errorChannelId:string){
    configs.token = token
    configs.errorChannelId = errorChannelId;
    confStat = true;
}

export async function sendError(error:string){
    if(!confStat){
        throw new Error("Missing config");
    }
    try{
        const response = await fetch(`https://discord.com/api/v10/channels/${configs.errorChannelId}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bot ${configs.token}`
            },
            body: JSON.stringify({
                embeds: [
                    {
                        title: "Error",
                        description: error
                    }
                ]
            })
        });
        if(!response.ok){
            throw new Error(`There was an error in the api request. Status code: ${response.status}`);
        }
    }
    catch{
        throw new Error("There was an error while sending the api request");
    }
}