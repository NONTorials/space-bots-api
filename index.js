const SpaceApiError = require('./error');


const fetch = require('node-fetch');

module.exports.getVotes =  function(config) {

config || (config = {});

fetch(`https://space-bots.tk/api/auth/liked/${config.botID}`, {
    method: 'GET',
        headers: {
           "authorization": `${config.apiToken}`,
             "Content-Type": "application/json"
        }
    })  .then(response => response.text())
  .then(console.log)
  .catch(console.error);


}

module.exports.setServers = function(config){
  config || (config = {});
if(!config.servers) throw new SpaceApiError('Debes declarar la cantidad de servidores de tu bot');
fetch(`https://space-bots.tk/api/auth/stats/${config.botID}`, {
    method: 'POST',
        headers: {
           "authorization": `${config.apiToken}`,
             "Content-Type": "application/json"
        },
         body: JSON.stringify({"server_count": config.servers})
    })  .then(response => response.text())
  .then(console.log)
  .catch(console.error);
}
   
