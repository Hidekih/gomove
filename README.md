# Sobre o projeto

O GoMove é uma aplicação onde foi aplicado alguns conceitos do ciclo de pomodoro. No GoMove você terá um timer de 25 minutos, que quando chegar a 0 irá emitir uma notifição pelo navegador e lhe enviará um "desafio/exercício" rápido que o ajudará a ter uma melhor qualidade de vida enquanto estiver trabalhando/estudando.

# Tecnologias usadas: 

- Next.Js
- Typescript
- Styled-components
- Serverless Function
- Mongodb
- Next-auth
- Github Oauth com Next-auth

Primeiramente lhe convido para dar uma conferida no resultado final do projeto que está hospedado na Vercel [`GoMove`](https://gomove-gamma.vercel.app/home)

## Getting Started

Para testar a aplicação, clone o repositório e depois instale as dependências usando o comando:
```bash
npm install
# or
yarn add
```

Com todas as dependências intaladas, crie um arquivo `.env` na raiz do projeto e preencha as váriaveis ambiente seguindo o modelo do arquivo `.env.example`

Para que o login com o github funcione você irá precisar configurar o [`Oauth do GitHub`](https://docs.github.com/en/developers/apps/authorizing-oauth-apps)

Depois de tudo configurado, rode o servidor com o comando:
```bash
npm run dev
# or
yarn dev
```

Abra o [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado!

Caso tenha algun problema na execução dos passos anteriores me mande uma menssage. 

Fique livre para testar e aprender o máximo com esse pequeno projeto. 
