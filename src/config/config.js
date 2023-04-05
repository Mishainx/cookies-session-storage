import dotenv from 'dotenv'

dotenv.config();

export default{
    PORT: process.env.SERVER_PORT || 8181,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME,
    CLIENT_ID_GITHUB: process.env.CLIENT_ID_GITHUB,
    CLIENT_SECRET_GITHUB: process.env.CLIENT_SECRET_GITHUB,
    CALLBACK_URL_GITHUB: process.env.CALLBACK_URL_GITHUB,
    MONGO_CLUSTER : process.env.MONGO_CLUSTER,
    PERSISTENCE: process.argv[2]? process.argv[2] : "MONGO"
}