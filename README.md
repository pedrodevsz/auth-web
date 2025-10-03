# 🌐 Web Login App

Aplicação de login web com **backend em Java (Spring Boot + Spring Security)** e **frontend em Next.js 15**.  
O projeto implementa autenticação segura com cookies, sem gerenciamento de estado no frontend.

## 🏗 Estrutura do Projeto
````markdown

login-web/
│
├─ backend/                # Backend Java com Spring Boot
│  ├─ src/main/java/...    # Código-fonte
│  └─ src/main/resources/  # Configurações e arquivos estáticos
│
├─ frontend/               # Frontend Next.js 15
│  ├─ src/app/page.tsx     # Página principal
│  ├─ src/components/      # Componentes reutilizáveis
│  └─ src/services/        # Serviços para requisições HTTP
│
└─ README.md               # Este arquivo
````

---

## ⚠ Observação sobre o Frontend

O foco aqui foi somente no login e registro, então o frontend pode estar meio bagunçado.
Faça um clone e ajuste como quiser!

---

## ⚙️ Tecnologias

### Backend

* Java 17+
* Spring Boot
* Spring Security
* Cookies para autenticação
* Maven

### Frontend

* Next.js 15
* React
* TypeScript
* Fetch API para integração com backend (pura)
* Sem gerenciamento de estado global (feature futura)

---

## 🚀 Funcionalidades

* Cadastro e login de usuários
* Autenticação segura com cookies
* Proteção de rotas no backend
* Frontend leve, sem uso de Redux ou Context API
* Componentes reutilizáveis

---

## 💻 Instalação e Uso

### Backend

1. Navegue até a pasta do backend:

```bash
cd backend
```

2. Rode a aplicação:

```bash
./mvnw spring-boot:run
```

A API estará disponível em: `http://localhost:8080`

---

### Frontend

1. Navegue até a pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Rode a aplicação:

```bash
npm run dev
```

O frontend estará disponível em: `http://localhost:3000`

---

### Endpoints

Todos os endpoints podem ser testados através do frontend ou via ferramentas como Postman.

---

## ⚡ Observações

* Autenticação baseada em cookies, sem JWT exposto no frontend.
* Frontend Next.js 15 seguindo a nova estrutura de `app/` e `src/`.
* Sem gerenciamento global de estado; cada componente lida com seu próprio estado local.

```
```
