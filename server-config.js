// ============================================================================
// SERVER-CONFIG.JS
// ============================================================================
// This is the ONLY file you normally need to touch.
//
// All 50 server slots (Server 1 .. Server 50) are ENABLED below, so all 50
// show up in the list on the site right now. server1 and server2 already
// point at real backends:
//
//   server1 -> your Railway URL   (or Heroku / Render — any HTTP(S) URL)
//   server2 -> your VPS panel URL (http://51.75.118.5:20221)
//
// Server 3–50 are enabled too, but their "url" is still a placeholder
// (e.g. "https://PASTE-YOUR-SERVER-5-URL-HERE"). Tapping one of those in
// the list will just show a connection error until you fill in a real URL
// — that's expected and safe, nothing crashes.
//
// ----------------------------------------------------------------------
// HOW TO ADD YOUR OWN SERVER LATER (do this yourself, anytime):
// ----------------------------------------------------------------------
//   1. Open this file and find the block for that server number, e.g.
//      search for "server5" if you want to fill in Server 5.
//   2. Replace its "url" value with your real backend URL (no trailing
//      slash at the end).
//   3. Save the file.
//   4. Push/upload the change to wherever this site is deployed (GitHub
//      → Vercel auto-redeploys in under a minute; or re-upload if you
//      deploy manually).
//   5. Refresh the site — that server now works for everyone.
//
//   To temporarily HIDE a server instead of deleting it, add a line
//   `disabled: true,` inside its block (see the commented example below).
//
// URL FORMAT EXAMPLES (all work the same way — just a plain HTTP(S) URL):
//   Railway : https://your-app.up.railway.app
//   Heroku  : https://your-app.herokuapp.com
//   Render  : https://your-app.onrender.com
//   VPS/panel: http://51.75.118.5:20221
//
// Example of a hidden/disabled slot:
//   {
//       id: "server9",
//       name: "Server 9",
//       url: "https://your-real-url-here",
//       limit: 50,
//       disabled: true   <- add this line to hide it from the list
//   },
// ============================================================================

const SERVERS = [
    {
        id: "server1",
        name: "Server 1",
        // 👉 PASTE YOUR RAILWAY / HEROKU / RENDER URL HERE:
        url: "https://ahmedmini-bot-production.up.railway.app/",
        limit: 50
        // (enabled — this is your primary server)
    },
    {
        id: "server2",
        name: "Server 2",
        // 👉 Your VPS panel, wired in as an example:
        url: "http://51.75.118.5:20221",
        limit: 50
        // (enabled — this is your backup/VPS server)
    },
    {
        id: "server3",
        name: "Server 3",
        url: "https://ahmedmini-bot-production.up.railway.app/",
        limit: 50
    },
    {
        id: "server4",
        name: "Server 4",
        url: "https://ahmedmini-bot-production.up.railway.app/",
        limit: 50
    },
    {
        id: "server5",
        name: "Server 5",
        url: "https://ahmedmini-bot-production.up.railway.app/",
        limit: 50
    },
    {
        id: "server6",
        name: "Server 6",
        url: "https://ahmedmini-bot-production.up.railway.app/",
        limit: 50
    },
    {
        id: "server7",
        name: "Server 7",
        url: "https://dr-honey-mini-fb6428f4790f.herokuapp.com/",
        limit: 50
    },
    {
        id: "server8",
        name: "Server 8",
        url: "https://dr-honey-mini-fb6428f4790f.herokuapp.com/",
        limit: 50
    },
    {
        id: "server9",
        name: "Server 9",
        url: "https://dr-honey-mini-fb6428f4790f.herokuapp.com/",
        limit: 50
    },
    {
        id: "server10",
        name: "Server 10",
        url: "https://dr-honey-mini-fb6428f4790f.herokuapp.com/",
        limit: 50
    },
    {
        id: "server11",
        name: "Server 11",
        url: "https://dr-honey-mini-fb6428f4790f.herokuapp.com/",
        limit: 50
    },
    {
        id: "server12",
        name: "Server 12",
        url: "https://ahmedmini-bot-production.up.railway.app/",
        limit: 50
    },
    {
        id: "server13",
        name: "Server 13",
        url: "https://ahmedmini-bot-production.up.railway.app/",
        limit: 50
    },
    {
        id: "server14",
        name: "Server 14",
        url: "https://ahmedmini-bot-production.up.railway.app/",
        limit: 50
    },
    {
        id: "server15",
        name: "Server 15",
        url: "https://PASTE-YOUR-SERVER-15-URL-HERE",
        limit: 50
    },
    {
        id: "server16",
        name: "Server 16",
        url: "https://PASTE-YOUR-SERVER-16-URL-HERE",
        limit: 50
    },
    {
        id: "server17",
        name: "Server 17",
        url: "https://PASTE-YOUR-SERVER-17-URL-HERE",
        limit: 50
    },
    {
        id: "server18",
        name: "Server 18",
        url: "https://PASTE-YOUR-SERVER-18-URL-HERE",
        limit: 50
    },
    {
        id: "server19",
        name: "Server 19",
        url: "https://PASTE-YOUR-SERVER-19-URL-HERE",
        limit: 50
    },
    {
        id: "server20",
        name: "Server 20",
        url: "https://PASTE-YOUR-SERVER-20-URL-HERE",
        limit: 50
    },
    {
        id: "server21",
        name: "Server 21",
        url: "https://PASTE-YOUR-SERVER-21-URL-HERE",
        limit: 50
    },
    {
        id: "server22",
        name: "Server 22",
        url: "https://PASTE-YOUR-SERVER-22-URL-HERE",
        limit: 50
    },
    {
        id: "server23",
        name: "Server 23",
        url: "https://PASTE-YOUR-SERVER-23-URL-HERE",
        limit: 50
    },
    {
        id: "server24",
        name: "Server 24",
        url: "https://PASTE-YOUR-SERVER-24-URL-HERE",
        limit: 50
    },
    {
        id: "server25",
        name: "Server 25",
        url: "https://PASTE-YOUR-SERVER-25-URL-HERE",
        limit: 50
    },
    {
        id: "server26",
        name: "Server 26",
        url: "https://PASTE-YOUR-SERVER-26-URL-HERE",
        limit: 50
    },
    {
        id: "server27",
        name: "Server 27",
        url: "https://PASTE-YOUR-SERVER-27-URL-HERE",
        limit: 50
    },
    {
        id: "server28",
        name: "Server 28",
        url: "https://PASTE-YOUR-SERVER-28-URL-HERE",
        limit: 50
    },
    {
        id: "server29",
        name: "Server 29",
        url: "https://PASTE-YOUR-SERVER-29-URL-HERE",
        limit: 50
    },
    {
        id: "server30",
        name: "Server 30",
        url: "https://PASTE-YOUR-SERVER-30-URL-HERE",
        limit: 50
    },
    {
        id: "server31",
        name: "Server 31",
        url: "https://PASTE-YOUR-SERVER-31-URL-HERE",
        limit: 50
    },
    {
        id: "server32",
        name: "Server 32",
        url: "https://PASTE-YOUR-SERVER-32-URL-HERE",
        limit: 50
    },
    {
        id: "server33",
        name: "Server 33",
        url: "https://PASTE-YOUR-SERVER-33-URL-HERE",
        limit: 50
    },
    {
        id: "server34",
        name: "Server 34",
        url: "https://PASTE-YOUR-SERVER-34-URL-HERE",
        limit: 50
    },
    {
        id: "server35",
        name: "Server 35",
        url: "https://PASTE-YOUR-SERVER-35-URL-HERE",
        limit: 50
    },
    {
        id: "server36",
        name: "Server 36",
        url: "https://PASTE-YOUR-SERVER-36-URL-HERE",
        limit: 50
    },
    {
        id: "server37",
        name: "Server 37",
        url: "https://PASTE-YOUR-SERVER-37-URL-HERE",
        limit: 50
    },
    {
        id: "server38",
        name: "Server 38",
        url: "https://PASTE-YOUR-SERVER-38-URL-HERE",
        limit: 50
    },
    {
        id: "server39",
        name: "Server 39",
        url: "https://PASTE-YOUR-SERVER-39-URL-HERE",
        limit: 50
    },
    {
        id: "server40",
        name: "Server 40",
        url: "https://PASTE-YOUR-SERVER-40-URL-HERE",
        limit: 50
    },
    {
        id: "server41",
        name: "Server 41",
        url: "https://PASTE-YOUR-SERVER-41-URL-HERE",
        limit: 50
    },
    {
        id: "server42",
        name: "Server 42",
        url: "https://PASTE-YOUR-SERVER-42-URL-HERE",
        limit: 50
    },
    {
        id: "server43",
        name: "Server 43",
        url: "https://PASTE-YOUR-SERVER-43-URL-HERE",
        limit: 50
    },
    {
        id: "server44",
        name: "Server 44",
        url: "https://PASTE-YOUR-SERVER-44-URL-HERE",
        limit: 50
    },
    {
        id: "server45",
        name: "Server 45",
        url: "https://PASTE-YOUR-SERVER-45-URL-HERE",
        limit: 50
    },
    {
        id: "server46",
        name: "Server 46",
        url: "https://PASTE-YOUR-SERVER-46-URL-HERE",
        limit: 50
    },
    {
        id: "server47",
        name: "Server 47",
        url: "https://PASTE-YOUR-SERVER-47-URL-HERE",
        limit: 50
    },
    {
        id: "server48",
        name: "Server 48",
        url: "https://PASTE-YOUR-SERVER-48-URL-HERE",
        limit: 50
    },
    {
        id: "server49",
        name: "Server 49",
        url: "https://PASTE-YOUR-SERVER-49-URL-HERE",
        limit: 50
    },
    {
        id: "server50",
        name: "Server 50",
        url: "https://PASTE-YOUR-SERVER-50-URL-HERE",
        limit: 50
    },
];

module.exports = { SERVERS };
