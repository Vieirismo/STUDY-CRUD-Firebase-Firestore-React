# 🚀 Estudos React com Firebase Firestore (CRUD em Tempo Real)

Este projeto é um ambiente de estudo e prática focado na construção de um aplicativo React que interage com o Firebase Firestore em tempo real. Ele demonstra as operações básicas de CRUD (Criar, Ler, Atualizar, Deletar) para gerenciar "planos", utilizando as melhores práticas de organização de código e o SDK modular v9 do Firebase.

**Até o presente momento, a parte do back-end (integração com Firebase Firestore) está totalmente funcional e pronta. Os resultados de cada operação (criação, leitura, atualização, deleção) podem ser vistos no console do navegador e diretamente no console do Firebase Firestore.**

---

## ✨ Funcionalidades

* **Gerenciamento de Planos:** Adicione, defina (crie/sobrescreva), atualize e delete planos no Firestore.
* **Dados em Tempo Real:** Utilize listeners do Firestore para observar e exibir atualizações de planos instantaneamente no frontend.
* **Filtragem de Dados:** Exemplo de uso de consultas `where` para filtrar planos com base em critérios específicos.
* **Organização de Código:** Separação clara entre a camada de "acesso a dados" (interação direta com o Firebase) e a camada de "ações" (lógica de negócio).

---

## 🛠️ Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção de interfaces de usuário.
* **Firebase:**
    * **Firestore:** Banco de dados NoSQL flexível e escalável para armazenamento e sincronização de dados em tempo real.
    * **Firebase CLI:** Ferramenta de linha de comando para gerenciar projetos Firebase (incluindo Hosting).
* **JavaScript:** Linguagem de programação principal.
* **HTML/CSS:** Estrutura e estilização básica do aplicativo.
* **(Opcional para você: PropTypes)**: Biblioteca para validação de tipos de `props` em componentes React (em projetos JavaScript puro).

---

## ⚙️ Como Rodar o Projeto

Siga estes passos para configurar e executar o projeto em sua máquina local:

### Pré-requisitos

* Node.js (versão 14 ou superior recomendada)
* npm (gerenciador de pacotes do Node.js)
* Conta Firebase e um projeto configurado no console.

### Instalação e Configuração

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/Vieirismo/-ESTUDO-CRUD-Firebase-Firestore-React
    cd nome-da-pasta
    ```

2.  **Instale as Dependências:**
    ```bash
    npm install
    ```

3.  **Configurar Firebase Localmente:**
    * Instale as ferramentas Firebase CLI globalmente (se ainda não tiver):
        ```bash
        npm install -g firebase-tools
        ```
    * Faça login na sua conta Firebase:
        ```bash
        firebase login
        ```
    * Inicialize o Firebase no seu projeto (na raiz do `estudos_react`):
        ```bash
        firebase init
        ```
        * Selecione `Hosting`.
        * Escolha `Use an existing project` e selecione `estudos-next-f68b0` (ou o nome do seu projeto Firebase).
        * Para o diretório público, digite `build` (se usou Create React App).
        * Configure como um aplicativo de página única: `Yes`.
        * Não configure GitHub Actions (a menos que você queira).
        * **Atenção:** Se tiver erros como "Firebase Data Connect API has not been used", acesse o link fornecido no terminal para habilitar a API manualmente no console do Google Cloud e tente `firebase init` novamente.

4.  **Configurar Credenciais do Firebase:**
    * Crie um arquivo `src/lib/firebase_config.js` (ou onde quer que você esteja inicializando o Firebase).
    * Cole suas credenciais do Firebase (encontradas nas configurações do seu projeto Firebase > "Configurações do projeto" > "Seus aplicativos" > "Web" > "Configuração").

    ```javascript
    // src/lib/firebase_config.js
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore"; // Importe getFirestore do módulo correto

    const firebaseConfig = {
      apiKey: "SUA_API_KEY",
      authDomain: "SEU_AUTH_DOMAIN",
      projectId: "SEU_PROJECT_ID",
      storageBucket: "SEU_STORAGE_BUCKET",
      messagingSenderId: "SEU_MESSAGING_SENDER_ID",
      appId: "SEU_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);
    ```

### Rodando o Servidor de Desenvolvimento

Após a configuração, você pode iniciar o aplicativo:

```bash
npm start