
# Server webhook whatsapp boot twilio.

  

Servidor para receber e responder mensagens da twilio via webhook.

  

## Build

  

- Instale as dependencias ```npm install```

- Inicie o servidor ```npm start```

  

### Criando uma URL publica.

  

É preciso passar uma URL publica em configuração do sandbox do seu whatsapp boot na twilio, [Acesse esse link](https://www.twilio.com/blog/como-acessar-api-whatsapp-com-twilio) e saiba como fazer isso.

  

Forma mais simples para criar essa URL publica para testes é utilizando ngrok em sua maquina [veja aqui como instalar e configurar](https://dashboard.ngrok.com/get-started/setup), após instalar e configurar basta rodar o comando ``ngrok http 3000``  e pronto sua URL estará no terminal http e https.

Leia: [Como criar um bot no WhatsApp em 5 minutos em Node.js](https://www.twilio.com/blog/como-criar-um-bot-no-whatsapp-em-5-minutos-em-node-js)
