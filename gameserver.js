const _ = require('underscore');
const Backbone = require('backbone');
const uuid = require('node-uuid');
const Connection = require('./game/models/connection');
console.log('sdfsdf');
var GameServer = Backbone.Model.extend({

    connections:[],

    initialize: function(io) {

        var self= this;

        io.on('connection', function (socket) {


            self.handleConnection(socket);

            /*socket.emit('news', { hello: 'world111117771' });
            socket.on('my other event', function (data) {
                console.log(data);
            });*/



        });

    },

    handleConnection: function (socket) {


        var self = this;

        socket.on("init", function (data) {

            var token = '', connection;

            if (data.token){ // connection exist or

                if (self.connections[data.token]){
                    connection = self.connections[token];

                }else{
                    connection = new Connection({socket:socket, token:data.token});
                }

            }else{
                token = uuid.v4();
                connection = new Connection({socket:socket, token:token});
            }

            self.connections[token] = connection;

           connection.setResponseListeners(connection);

            self.listenTo(connection, 'change:disconnected', function(){
                delete self.connections[connection.get('token')];

                connection.destroy();
            });

            socket.emit("initDone", {token:token});

        });
    }

});


module.exports = GameServer;