export async function executeWebhook(url:string, message?:string, embeds?:any) {
    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: message,
                embeds: embeds
            })
        });
        if(!response.ok){
            throw new Error(`There was an error while sending the api request. Status code: ${response.status}`);
        }
    }
    catch{
        throw new Error("There was an error while sending the api request");
    }
}

export async function deleteWebhoook(url:string) {
    try{
        const response = await fetch(url, {
            method: "DELETE"
        });
        if(!response.ok){
            throw new Error(`There was an error while sending the api request. Status code: ${response.status}`);
        }
    }
    catch{
        throw new Error("There was an error while sending the api request");
    }
}