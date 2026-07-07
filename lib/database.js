const fs = require('fs')
const dbFile = './database.json'

let database = {
    messages: {},
    settings: {}
}

if (fs.existsSync(dbFile)) {
    database = JSON.parse(fs.readFileSync(dbFile))
}

async function saveMessage(id, msg) {
    database.messages[id] = msg
    fs.writeFileSync(dbFile, JSON.stringify(database, null, 2))
}

async function getMessage(id) {
    return database.messages[id] || null
}

async function deleteMessage(id) {
    delete database.messages[id]
    fs.writeFileSync(dbFile, JSON.stringify(database, null, 2))
}

async function input(key, value) {
    database.settings[key] = value
    fs.writeFileSync(dbFile, JSON.stringify(database, null, 2))
}

async function get(key) {
    return database.settings[key] || null
}

module.exports = {
    input,
    get,
    saveMessage,
    getMessage,
    deleteMessage
}
