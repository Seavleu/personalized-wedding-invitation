import { Client, Databases, Storage } from "appwrite"

const client = new Client()
client
    .setEndpoint("https://cloud.appwrite.io/v1") 
    .setProject("67543b8200210a9eec5a")

const databases = new Databases(client)
const storage = new Storage(client)

export { databases, storage }
