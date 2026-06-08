/* Mock NUI layer so the garage app runs interactively in the browser with no game.
   Overrides the eventbridge fetch calls with sample data and auto-opens the garage. */
(function () {
  var cars = [
    { id: 1, modelName: "Sultan RS", plate: "4FDG201", state: 1, location: "legion", locationLabel: "Legion Square", damage: JSON.stringify({ engine: 940 }) },
    { id: 2, modelName: "Elegy RH8", plate: "1SLT777", state: 1, location: "legion", locationLabel: "Legion Square", damage: JSON.stringify({ engine: 1000 }), shared: "legion" },
    { id: 3, modelName: "Kuruma", plate: "8BNG114", state: 2, location: "legion", locationLabel: "Mirror Park", damage: JSON.stringify({ engine: 660 }) },
    { id: 4, modelName: "Comet S2", plate: "3RPX058", state: 1, location: "legion", locationLabel: "Legion Square", damage: JSON.stringify({ engine: 820 }) },
    { id: 5, modelName: "Banshee", plate: "9DCK420", state: 3, location: "legion", locationLabel: "Impound", damage: JSON.stringify({ engine: 280 }) },
    { id: 6, modelName: "Faggio", plate: "2WSP019", state: 1, location: "legion", locationLabel: "Legion Square", damage: JSON.stringify({ engine: 510 }) },
  ];

  function reply(obj) {
    return new Response(JSON.stringify(obj), { status: 200, headers: { "Content-Type": "application/json" } });
  }

  var orig = window.fetch;
  window.fetch = function (url, opts) {
    try {
      var u = String(url);
      if (u.indexOf("http://core_vehicles/") === 0) {
        var body = {};
        try { body = JSON.parse((opts && opts.body) || "{}"); } catch (e) {}
        var path = u.replace("http://core_vehicles/", "");
        if (path === "triggerServerCallback") {
          var ev = body.eventName || "";
          if (ev.indexOf("getOwned") !== -1) return Promise.resolve(reply([cars]));
          if (ev.indexOf("getPlayerInfo") !== -1) return Promise.resolve(reply([123]));
          if (ev.indexOf("getInventory") !== -1) return Promise.resolve(reply([[]]));
          return Promise.resolve(reply([[]]));
        }
        // direct NUI callback: path is the event name, response.data used as-is
        if (path.indexOf("vehicleType") !== -1) return Promise.resolve(reply(cars));
        return Promise.resolve(reply([]));
      }
    } catch (e) {}
    return orig.apply(this, arguments);
  };

  // auto-open the garage (the app listens for this once mounted)
  var garage = { location: "legion", locationLabel: "Legion Square", raidGarage: false, orgGarage: false, isPropertyGarage: false };
  [120, 400, 900, 1600].forEach(function (t) {
    setTimeout(function () { window.postMessage({ openGarage: true, garage: garage }, "*"); }, t);
  });
})();
