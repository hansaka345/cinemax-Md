const axios = require('axios');
const os = require('os');
const { cmd, commands } = require('./cmd.js');
const config = require('./config');
const { input, get } = require('./lib/database');
const { formatRuntime } = require('./lib/functions');
const { tiktok, facebook, instagram, ytmp4, ytmp3 } = require('sadaslk-dlcore');
const yts = require("ytsearch-venom");

let BOTOW = config.LANG === 'SI'? "*ඔබ Bot හි හිමිකරු නොවේ!*" : "*You are not the bot's owner!*";

// ============= MENU =============
cmd({
    pattern: 'menu',
    alias: ['help'],
    react: '🎬',
    desc: 'Bot menu',
    category: 'general',
}, async (sock, m, args) => {
    try {
        const from = m.key.remoteJid
        const pushname = m.pushName || 'User'
        const uptime = process.uptime()
        const usedRam = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
        const totalRam = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2)

        let menuText = `👋 *HELLOW ${pushname}*\n`
        menuText += `💫 *Welcome To ${config.BOT_NAME}*\n\n`
        menuText += `┌───「 *STATUS DETAILS* 」\n`
        menuText += `│ 🤖 *Bot* = ${config.BOT_NAME}\n`
        menuText += `│ 👤 *User* = ${pushname}\n`
        menuText += `│ 👑 *Owner* = ${config.OWNER_NUMBER}\n`
        menuText += `│ ⏰ *Uptime* = ${formatRuntime(uptime)}\n`
        menuText += `│ 💾 *Ram* = ${usedRam}MB / ${totalRam}GB\n`
        menuText += `│ 📊 *Commands* = ${commands.length}\n`
        menuText += `│ 🔣 *Prefix* = ${config.PREFIX}\n`
        menuText += `└───────────────···\n\n`

        let categories = {}
        commands.forEach((c) => {
            if (c.dontAddCommandList) return
            if (!categories[c.category]) categories[c.category] = []
            categories[c.category].push(c)
        })

        let num = 1
        for (let cat in categories) {
            menuText += `*${num} 》》 ${cat.toUpperCase()} MENU*\n`
            num++
        }

        menuText += `\n${config.FOOTER}`

        await sock.sendMessage(from, {
            image: { url: config.LOGO },
            caption: menuText
        }, { quoted: m })

    } catch (e) {
        console.log(e)
    }
})

// ============= HI =============
cmd({
    pattern: 'hi',
    desc: 'Hello',
    category: 'general'
}, async (sock, m, args) => {
    await sock.sendMessage(m.key.remoteJid, { text: 'Hello! කොහොමද? 😊' }, { quoted: m })
})

// ============= TIKTOK =============
cmd({
    pattern: 'tiktok',
    alias: ['tt'],
    react: '🎵',
    desc: 'TikTok download',
    category: 'download',
}, async (sock, m, args) => {
    try {
        const from = m.key.remoteJid
        const q = args.join(' ')
        if (!q) return await sock.sendMessage(from, { text: '*TikTok link එක දෙන්න!*' }, { quoted: m })

        await sock.sendMessage(from, { react: { text: '⏳', key: m.key } })
        const result = await tiktok(q)

        const sections = [{
            title: "📥 Select Quality",
            rows: [
                { title: '720p - HD', rowId: `.ttdl ${result.video}||${result.title}||720p` },
                { title: '480p - SD', rowId: `.ttdl ${result.video_sd}||${result.title}||480p` },
                { title: 'MP3 Audio', rowId: `.ttdl ${result.audio}||${result.title}||mp3` }
            ]
        }]

        await sock.sendMessage(from, {
            image: { url: result.thumbnail },
            caption: `*🎵 CINEMAX MD TIKTOK DL*\n\n*👤 Author:* ${result.author}\n*📝 Title:* ${result.title}\n\n${config.FOOTER}`,
            footer: config.FOOTER,
            buttonText: '*🎬 Select Quality*',
            sections
        }, { quoted: m })
    } catch (e) {
        await sock.sendMessage(m.key.remoteJid, { text: '*❌ Error!*' }, { quoted: m })
    }
})

cmd({
    pattern: "ttdl",
    dontAddCommandList: true,
}, async (sock, m, args) => {
    const [url, title, quality] = args.join(' ').split('||')
    await sock.sendMessage(m.key.remoteJid, { text: `*📥 Downloading ${quality}...*` }, { quoted: m })
    if (quality === 'mp3') {
        await sock.sendMessage(m.key.remoteJid, { audio: { url: url }, mimetype: 'audio/mpeg', fileName: `${title}.mp3` }, { quoted: m })
    } else {
        await sock.sendMessage(m.key.remoteJid, { video: { url: url }, caption: `*🎵 ${title}*\n*Quality:* ${quality}\n\n${config.FOOTER}` }, { quoted: m })
    }
})

// ============= YT VIDEO =============
cmd({
    pattern: 'ytvideo',
    alias: ['ytv'],
    react: '📹',
    desc: 'YouTube video',
    category: 'download',
}, async (sock, m, args) => {
    try {
        const from = m.key.remoteJid
        const q = args.join(' ')
        if (!q) return await sock.sendMessage(from, { text: '*YouTube name/url දෙන්න*' }, { quoted: m })

        await sock.sendMessage(from, { text: '*🔍 Searching...*' }, { quoted: m })
        const result = await ytmp4(q)

        const sections = [{
            title: "📥 Select Quality",
            rows: [
                { title: '1080p - Full HD', rowId: `.ytdl ${result.url_1080p}||${result.title}||1080p` },
                { title: '720p - HD', rowId: `.ytdl ${result.url_720p}||${result.title}||720p` },
                { title: '480p - SD', rowId: `.ytdl ${result.url_480p}||${result.title}||480p` },
                { title: '360p - Low', rowId: `.ytdl ${result.url_360p}||${result.title}||360p` }
            ]
        }]

        await sock.sendMessage(from, {
            image: { url: result.thumbnail },
            caption: `*📹 CINEMAX MD YT VIDEO*\n\n*📌 Title:* ${result.title}\n*⏱️ Duration:* ${result.duration}\n\n${config.FOOTER}`,
            footer: config.FOOTER,
            buttonText: '*🎬 Select Quality*',
            sections
        }, { quoted: m })
    } catch (e) {
        await sock.sendMessage(m.key.remoteJid, { text: '*❌ Error*' }, { quoted: m })
    }
})

cmd({
    pattern: "ytdl",
    dontAddCommandList: true,
}, async (sock, m, args) => {
    const [url, title, quality] = args.join(' ').split('||')
    await sock.sendMessage(m.key.remoteJid, { text: `*📥 Downloading ${quality}...*` }, { quoted: m })
    await sock.sendMessage(m.key.remoteJid, { video: { url: url }, caption: `*📹 ${title}*\n*Quality:* ${quality}\n\n${config.FOOTER}` }, { quoted: m })
})

// ============= SONG =============
cmd({
    pattern: "song",
    alias: ["ytsong"],
    react: "🎧",
    desc: "YouTube songs",
    category: "download",
}, async (sock, m, args) => {
    try {
        const q = args.join(' ')
        if (!q) return await sock.sendMessage(m.key.remoteJid, { text: '*Song name දෙන්න*' }, { quoted: m })
        await sock.sendMessage(m.key.remoteJid, { text: '*🎵 Downloading...*' }, { quoted: m })
        const result = await ytmp3(q)
        await sock.sendMessage(m.key.remoteJid, { audio: { url: result.download }, mimetype: 'audio/mpeg', fileName: `${result.title}.mp3` }, { quoted: m })
    } catch (e) {
        await sock.sendMessage(m.key.remoteJid, { text: '*❌ Error*' }, { quoted: m })
    }
})

// ============= INSTAGRAM =============
cmd({
    pattern: 'instagram',
    alias: ['insta', 'ig'],
    react: '📸',
    desc: 'Instagram download',
    category: 'download',
}, async (sock, m, args) => {
    try {
        const from = m.key.remoteJid
        const q = args.join(' ')
        if (!q) return await sock.sendMessage(from, { text: '*Instagram link දෙන්න!*' }, { quoted: m })

        await sock.sendMessage(from, { react: { text: '⏳', key: m.key } })
        const result = await instagram(q)

        if (result.type === 'image') {
            return await sock.sendMessage(from, { image: { url: result.url }, caption: `*📸 CINEMAX MD*\n\n${config.FOOTER}` }, { quoted: m })
        }

        const sections = [{
            title: "📥 Select Quality",
            rows: [
                { title: '720p - HD', rowId: `.igdl ${result.url}||720p` },
                { title: '480p - SD', rowId: `.igdl ${result.url_sd}||480p` }
            ]
        }]

        await sock.sendMessage(from, {
            image: { url: result.thumbnail },
            caption: `*📸 CINEMAX MD INSTA DL*\n\n*👤 Username:* @${result.username}\n\n${config.FOOTER}`,
            footer: config.FOOTER,
            buttonText: '*🎬 Select Quality*',
            sections
        }, { quoted: m })
    } catch (e) {
        await sock.sendMessage(m.key.remoteJid, { text: '*❌ Error!*' }, { quoted: m })
    }
})

cmd({
    pattern: "igdl",
    dontAddCommandList: true,
}, async (sock, m, args) => {
    const [url, quality] = args.join(' ').split('||')
    await sock.sendMessage(m.key.remoteJid, { text: `*📥 Downloading ${quality}...*` }, { quoted: m })
    await sock.sendMessage(m.key.remoteJid, { video: { url: url }, caption: `*📸 Instagram*\n*Quality:* ${quality}\n\n${config.FOOTER}` }, { quoted: m })
})

// ============= FACEBOOK =============
cmd({
    pattern: 'facebook',
    alias: ['fb'],
    react: '📘',
    desc: 'Facebook video',
    category: 'download',
}, async (sock, m, args) => {
    try {
        const from = m.key.remoteJid
        const q = args.join(' ')
        if (!q) return await sock.sendMessage(from, { text: '*Facebook link දෙන්න!*' }, { quoted: m })

        await sock.sendMessage(from, { text: '*🔍 Fetching...*' }, { quoted: m })
        const result = await facebook(q)

        const sections = [{
            title: "📥 Select Quality",
            rows: [
                { title: '1080p - Full HD', rowId: `.fbdl ${result.hd}||${result.title}||1080p` },
                { title: '720p - HD', rowId: `.fbdl ${result.sd}||${result.title}||720p` },
                { title: '360p - Low', rowId: `.fbdl ${result.low}||${result.title}||360p` }
            ]
        }]

        await sock.sendMessage(from, {
            image: { url: result.thumbnail },
            caption: `*📘 CINEMAX MD FB DL*\n\n*📌 Title:* ${result.title}\n\n${config.FOOTER}`,
            footer: config.FOOTER,
            buttonText: '*🎬 Select Quality*',
            sections
        }, { quoted: m })
    } catch (e) {
        await sock.sendMessage(m.key.remoteJid, { text: '*❌ Error!*' }, { quoted: m })
    }
})

cmd({
    pattern: "fbdl",
    dontAddCommandList: true,
}, async (sock, m, args) => {
    const [url, title, quality] = args.join(' ').split('||')
    await sock.sendMessage(m.key.remoteJid, { text: `*📥 Downloading ${quality}...*` }, { quoted: m })
    await sock.sendMessage(m.key.remoteJid, { video: { url: url }, caption: `*📘 ${title}*\n*Quality:* ${quality}\n\n${config.FOOTER}` }, { quoted: m })
})

// ============= SETTINGS =============
cmd({
    pattern: "settings",
    react: "⚙️",
    alias: ["setting"],
    desc: 'bot settings',
    category: "owner",
}, async (sock, m, args) => {
    try {
        const from = m.key.remoteJid
        const isOwner = m.key.fromMe
        if (!isOwner) return await sock.sendMessage(from, { text: BOTOW }, { quoted: m })

        const sections = [{
            title: "`🔮 WORK_TYPE 🔮`",
            rows: [
                { title: '_PUBLIC ✔️_', rowId: '.work_type public' },
                { title: '_PRIVATE ✔️_', rowId: '.work_type private' }
            ]
        }, {
            title: "`🔮 AUTO_REACT 🔮`",
            rows: [
                { title: '_ON ✔️_', rowId: '.autoreact on' },
                { title: '_OFF ❌_', rowId: '.autoreact off' }
            ]
        }, {
            title: "`🔮 ANTI_DELETE 🔮`",
            rows: [
                { title: '_ON ✔️_', rowId: '.antidelete on' },
                { title: '_OFF ❌_', rowId: '.antidelete off' }
            ]
        }]

        await sock.sendMessage(from, {
            text: `*_⚙️ CINEMAX MD SETTINGS ⚙️_*\n\n*Current Mode:* ${config.WORK_TYPE}\n\n`,
            footer: config.FOOTER,
            buttonText: '*🔢 Select Option*',
            sections
        }, { quoted: m })
    } catch (e) {
        console.log(e)
    }
})

cmd({
    pattern: "work_type",
    dontAddCommandList: true,
}, async (sock, m, args) => {
    const from = m.key.remoteJid
    if (!m.key.fromMe) return await sock.sendMessage(from, { text: BOTOW }, { quoted: m })
    const q = args[0]
    await input("WORK_TYPE", q)
    config.WORK_TYPE = q
    await sock.sendMessage(from, { text: `*Work type: ${q}*` }, { quoted: m })
})

cmd({
    pattern: "autoreact",
    dontAddCommandList: true,
}, async (sock, m, args) => {
    const from = m.key.remoteJid
    if (!m.key.fromMe) return await sock.sendMessage(from, { text: BOTOW }, { quoted: m })
    const q = args[0]
    await input("AUTO_REACT", q)
    config.AUTO_REACT = q
    await sock.sendMessage(from, { text: `*✅ Auto React: ${q.toUpperCase()}*` }, { quoted: m })
})

cmd({
    pattern: "antidelete",
    dontAddCommandList: true,
}, async (sock, m, args) => {
    const from = m.key.remoteJid
    if (!m.key.fromMe) return await sock.sendMessage(from, { text: BOTOW }, { quoted: m })
    const q = args[0]
    await input("ANTI_DELETE", q)
    config.ANTI_DELETE = q
    await sock.sendMessage(from, { text: `*🗑️ Anti Delete: ${q.toUpperCase()}*` }, { quoted: m })
})

module.exports = { commands };
