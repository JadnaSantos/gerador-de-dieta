# 🥗 Gerador de Dietas

Aplicação completa para geração de **planos alimentares personalizados** com base em dados fornecidos pelo usuário.  
O sistema é composto por um **backend em Node.js (Fastify)** que realiza o processamento em **streaming (Server-Sent Events)** e um **frontend em Angular** responsável pela interação com o usuário em tempo real.

---

## 🚀 Tecnologias Utilizadas

### 🧠 Backend

- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.dev/)
- [Zod](https://zod.dev/) para validação de schema
- [Server-Sent Events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
- [TypeScript](https://www.typescriptlang.org/)

### 💻 Frontend

- [Angular](https://angular.dev/)
- [RxJS](https://rxjs.dev/)
- [Reactive Forms](https://angular.io/guide/reactive-forms)
- [ngx-toastr](https://www.npmjs.com/package/ngx-toastr) (notificações)
- [Ngx-Markdown](https://www.npmjs.com/package/ngx-markdown) para renderizar markdown
- [Bootstrap](https://getbootstrap.com/) (base de estilo)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🧩 Fluxo de Funcionamento

1. O usuário preenche o formulário com:

   - Nome
   - Idade
   - Peso (kg)
   - Altura (cm)
   - Sexo
   - Nível de atividade física
   - Objetivo (emagrecer, manter, ganhar massa, etc.)

2. O Angular envia os dados via **POST /plan** para o backend.

3. O backend utiliza **SSE (Server-Sent Events)** para enviar o conteúdo da dieta em blocos (stream).

4. O frontend lê o stream com o **Reader API** (`response.body.getReader()`), atualizando o texto em tempo real.

5. O usuário pode:
   - Parar a geração (`AbortController`)
   - Copiar o plano (`navigator.clipboard`)
   - Baixar o plano como `.txt`
   - Receber notificações visuais com o **ToastrService**

---

## 🧾 Exemplo de Uso

💬 Fluxo principal:

1. O usuário preenche o formulário.

2. Clica em ✨ Gerar dieta personalizada.

3. O plano começa a ser exibido em tempo real.

4. Pode pausar, copiar ou baixar o plano

---

🧪 Execução local

### 🔧 Backend

```bash
cd backend
npm install
npm run dev
# Servidor: http://localhost:3333
```

### 💻 Frontend

```bash
cd frontend
npm install
ng start
# Aplicação: http://localhost:4200
```

## 🧭 Próximos Passos / Melhorias Futuras

1. Adicionar autenticação com JWT;
2. Adicionar banco de dados (ex: MongoDB ou Postgres);
3. Armazenar histórico de planos por usuário.

## 👩🏿‍💻 Desenvolvido por

Jadna Silva
Front-end Developer | Go | Node.js | Angular | AWS | TypeScript
https://www.linkedin.com/in/jadna-silva/
