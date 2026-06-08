/* Mock NUI layer so the Battles HUD runs interactively in the browser with no game.
   Drives the spectator scoreboard + killfeed with sample data. */
(function () {
  window.GetParentResourceName = function () { return "main_battles"; };

  function notifyClose() { try { window.parent.postMessage({ fdgDemoClose: true }, "*"); } catch (e) {} }
  function reply(obj) { return new Response(JSON.stringify(obj), { status: 200, headers: { "Content-Type": "application/json" } }); }

  var orig = window.fetch;
  window.fetch = function (url, opts) {
    try {
      var u = String(url);
      if (/\/\/main_battles\//.test(u)) {
        if (u.indexOf("close") !== -1) { notifyClose(); }
        return Promise.resolve(reply([]));
      }
    } catch (e) {}
    return orig.apply(this, arguments);
  };

  function nui(event, payload) { window.postMessage({ nuiEvent: event, data: [payload] }, "*"); }

  var hud = {
    visible: true, spectator: true, scoreMode: "list",
    scores: [], teamScores: [], reinforcements: [],
    spectatorScoreboardVisible: true,
    spectatorScoreboard: {
      teams: [
        { teamKey: "attackers", teamLabel: "Attackers", colourPrimary: "#70b8ff", players: [
          { source: 1, icname: "J. Romano", kills: 14, deaths: 6, captures: 2, kd: "2.33" },
          { source: 2, icname: "M. Cole", kills: 9, deaths: 8, captures: 1, kd: "1.13" },
          { source: 3, icname: "D. Ferreira", kills: 7, deaths: 9, captures: 0, kd: "0.78" },
          { source: 4, icname: "A. Whitmore", kills: 5, deaths: 7, captures: 1, kd: "0.71" },
        ]},
        { teamKey: "defenders", teamLabel: "Defenders", colourPrimary: "#f06c6c", players: [
          { source: 5, icname: "K. Mercer", kills: 12, deaths: 7, captures: 3, kd: "1.71" },
          { source: 6, icname: "R. Santos", kills: 10, deaths: 9, captures: 1, kd: "1.11" },
          { source: 7, icname: "T. Nguyen", kills: 8, deaths: 8, captures: 0, kd: "1.00" },
          { source: 8, icname: "B. Halloran", kills: 4, deaths: 10, captures: 0, kd: "0.40" },
        ]},
      ],
    },
  };

  var kills = [
    { killer: "K. Mercer", victim: "A. Whitmore", killerTeam: "defenders", victimTeam: "attackers", weaponType: "ar", isHeadshot: true },
    { killer: "J. Romano", victim: "B. Halloran", killerTeam: "attackers", victimTeam: "defenders", weaponType: "ar", isHeadshot: false },
    { killer: "T. Nguyen", victim: "D. Ferreira", killerTeam: "defenders", victimTeam: "attackers", weaponType: "knife", isHeadshot: false },
    { killer: "M. Cole", victim: "R. Santos", killerTeam: "attackers", victimTeam: "defenders", weaponType: "ar", isHeadshot: true },
    { killer: "K. Mercer", victim: "J. Romano", killerTeam: "defenders", victimTeam: "attackers", weaponType: "ar", isHeadshot: false },
  ];

  function openAll() { nui("main_battles:hud:update", hud); }
  [120, 400, 900].forEach(function (t) { setTimeout(openAll, t); });

  // seed a few killfeed entries, then keep them rolling (they auto-expire ~6s)
  var ki = 0;
  function pushKill() { nui("main_battles:killfeed:add", kills[ki % kills.length]); ki++; }
  setTimeout(function () { pushKill(); pushKill(); pushKill(); }, 1000);
  setInterval(pushKill, 2600);

  // click on the dimmed area (outside the scoreboard) closes the demo
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".battle-spectator-scoreboard")) notifyClose();
  });
})();
