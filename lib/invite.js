"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Invite = (function () {
    function Invite(data, client) {
        _classCallCheck(this, Invite);

        this.max_age = data.max_age;
        this.code = data.code;
        this.server = client.getServer("id", data.guild.id);
        this.revoked = data.revoked;
        this.created_at = Date.parse(data.created_at);
        this.temporary = data.temporary;
        this.uses = data.uses;
        this.max_uses = data.uses;
        this.inviter = client.addUser(data.inviter);
        this.xkcd = data.xkcdpass;
        this.channel = client.getChannel("id", data.channel.id);
    }

    _createClass(Invite, [{
        key: "URL",
        get: function get() {
            var code = this.xkcd ? this.xkcdpass : this.code;
            return "https://discord.gg/" + code;
        }
    }]);

    return Invite;
})();

module.exports = Invite;