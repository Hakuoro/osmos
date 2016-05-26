var Backbone = require('backbone');

var Connection = Backbone.Model.extend({


    setResponseListeners: function () {

        var self = this;

        this.get('socket').on('disconnect', function () {
            self.set('disconnected', true);
        });
    }

});

module.exports = Connection;