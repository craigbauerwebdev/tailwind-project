const plugin = require("tailwindcss/plugin");

const openVariant = plugin(function({addVariant}) {
    addVariant("group-open", ":merge(.group).open &");
    addVariant("peer-open", ":merge(.peer).open ~ &"); // :merge (merge directive)
});

module.exports = openVariant;