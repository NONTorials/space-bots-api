const SpaceApiError = require('./error');
const botErrors = {
"Header de autorizacion no encontrado": "API Token no especificado",
"Bot no encontrado": "ID del bot proporcionada incorrecta",
"Primero crea un token de autorizacion": "Debes ir a la pagina de tu bot y crear un API Token",
"Token de autorizacion incorrecto": "El API Token no coincide con el establecido para el bot",
"Has entrado en cooldown": "API Ratelimit excedido"
};

const fetch = require('node-fetch');

module.exports.getVotes = async(config) =>{

config || (config = {});

fetch(`https://space-bots.tk/api/auth/liked/${config.botID}`, {
        headers: {
            Authorization: `${config.apiToken}`
        }
    }).then(res =>  res.json().then(json => {
if(error){
  if(botErrors[error]){

  }else{

  }
}


      return json.users
    }));
};

