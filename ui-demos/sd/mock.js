/* Mock NUI layer so the Search & Destroy HUD runs interactively with no game.
   Drives the in-match HUD (scores, round timer, team status, bomb) + killfeed. */
(function () {
  window.GetParentResourceName = function () { return "main_area51"; };

  function notifyClose() { try { window.parent.postMessage({ fdgDemoClose: true }, "*"); } catch (e) {} }
  function reply(obj) { return new Response(JSON.stringify(obj), { status: 200, headers: { "Content-Type": "application/json" } }); }

  var orig = window.fetch;
  window.fetch = function (url, opts) {
    try {
      var u = String(url);
      if (/\/\/main_area51\//.test(u)) {
        if (u.indexOf("close") !== -1) { notifyClose(); }
        return Promise.resolve(reply([]));
      }
    } catch (e) {}
    return orig.apply(this, arguments);
  };

  function nui(event, payload) { window.postMessage({ nuiEvent: event, data: [payload] }, "*"); }

  function hud(extra) {
    var base = {
      visible: true, team: "attackers", started: true,
      preRoundCountdownSeconds: 0,
      roundTimeRemainingSeconds: 102,
      bombPlanted: false, bombTimeRemainingSeconds: 0,
      attackersAlive: 4, attackersTotal: 5,
      defendersAlive: 3, defendersTotal: 5,
      attackersWins: 3, defendersWins: 2,
      roundsToWin: 5, isSpectating: false,
      loadoutSelectionActive: false, loadoutOptions: [],
    };
    if (extra) { for (var k in extra) base[k] = extra[k]; }
    return base;
  }

  var kills = [
    { killer: "J. Romano", victim: "B. Halloran", killerTeam: "attackers", victimTeam: "defenders", weaponType: "ar", isHeadshot: true },
    { killer: "K. Mercer", victim: "D. Ferreira", killerTeam: "defenders", victimTeam: "attackers", weaponType: "ar", isHeadshot: false },
    { killer: "M. Cole", victim: "T. Nguyen", killerTeam: "attackers", victimTeam: "defenders", weaponType: "knife", isHeadshot: false },
    { killer: "R. Santos", victim: "A. Whitmore", killerTeam: "defenders", victimTeam: "attackers", weaponType: "ar", isHeadshot: true },
  ];

  // open the HUD
  [120, 400, 900].forEach(function (t) { setTimeout(function () { nui("area51:search_destroy:hud:update", hud()); }, t); });

  // a few moments in, the bomb gets planted (shows the bomb banner + red timer)
  setTimeout(function () {
    nui("area51:search_destroy:hud:update", hud({ bombPlanted: true, bombTimeRemainingSeconds: 34, attackersAlive: 3, defendersAlive: 2 }));
  }, 2600);

  // killfeed
  var ki = 0;
  function pushKill() { nui("area51:killfeed:add", kills[ki % kills.length]); ki++; }
  setTimeout(function () { pushKill(); pushKill(); }, 1100);
  setInterval(pushKill, 2800);

  // click on the dimmed area (anywhere off the HUD) closes the demo
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".sd-bottom-center, .shared-killfeed, .sd-event-banner")) notifyClose();
  });
})();
