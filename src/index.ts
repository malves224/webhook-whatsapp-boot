import express, { Response, Request } from "express";
import bodyParser from "body-parser";
import twilio from "twilio";

const app = express();
app.use([bodyParser.urlencoded({ extended: true }), bodyParser.json()]);

const opcoes = ['pedra', 'papel', 'tesoura'];
const perde = {
  'pedra': 'papel',
  'papel': 'tesoura',
  'tesoura': 'pedra'
};

app.get("/", (_req: Request, res: Response ) => {
  return res.status(200).json({message: "ok"})
});

app.post("/message", (req: Request, res: Response) => {
  const usuario = req.body.Body.toLowerCase();
  if (!opcoes.some((opcao) => opcao === usuario)) {
    res.send('<Response><Message>Escolha Pedra, Papel ou Tesoura!</Message></Response>')  
  }
  const randomOption = opcoes[Math.floor(Math.random() * opcoes.length)];
  if (usuario === randomOption) {
    return res.send('<Response><Message>Ops, deu empate</Message></Response>')  
  } else if (perde[randomOption as keyof typeof perde] === usuario) {
    return res
      .send(`<Response><Message>Eu escolhi *${randomOption}*</Message><Message>Você ganhou, 
        mas quero jogar novamente!</Message></Response>`);
  } else {
    const twiml = new twilio.twiml.MessagingResponse();
    twiml.message(`Eu escolhi *${randomOption}*`);
    twiml.message('Ganhei! Ganhei!!!')
        .media('https://farm8.staticflickr.com/7090/6941316406_80b4d6d50e_z_d.jpg');
    return res.send(twiml.toString());
  }
});

app.listen(3000, () => console.log('rodando porta 3000'));