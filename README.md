# banco-api-performance
# 🧪 Testes de Performance com k6 (JavaScript)

Este repositório contém scripts de **testes de performance e carga** desenvolvidos em **JavaScript** utilizando o [k6](https://k6.io/).  
O objetivo é validar a estabilidade, desempenho e escalabilidade de APIs, simulando diferentes cenários de uso.

---

## 🚀 Introdução

Os testes foram criados para automatizar medições de **tempo de resposta**, **taxa de erro** e **throughput** das APIs.  
O k6 é uma ferramenta leve e poderosa, escrita em Go, mas com suporte a scripts em JavaScript, o que facilita integração com pipelines e versionamento.

A execução depende de uma variável de ambiente principal:  
```bash
BASE_URL=http://localhost:3000/
```
Essa variável define a URL base dos endpoints a serem testados.

---

## 🧰 Tecnologias Utilizadas

- **[k6](https://k6.io/)** → Ferramenta principal de testes de performance.  
- **JavaScript (ES6)** → Linguagem dos scripts.  
- **Node.js** (opcional) → Utilizado para utilitários e formatação de dados.  
- **GitHub Actions / CI/CD** (opcional) → Pode ser usado para execução automática.  

---

## 🗂️ Estrutura do Repositório

```
.
├── tests/
│   ├── login.test.js          # Teste de autenticação
│   ├── transfers.test.js      # Teste de transferências bancárias
│   ├── payments.test.js       # Teste de pagamentos
│   └── ...                    # Outros cenários
│
├── utils/
│   ├── helpers.js             # Funções utilitárias (ex: gerar token, dados dinâmicos)
│
├── reports/
│   └── html-report.html       # Relatório exportado (gerado após execução)
│
├── package.json               # Dependências e scripts auxiliares
└── README.md                  # Documentação do projeto
```

---

## 🎯 Objetivo dos Arquivos de Teste

Cada arquivo dentro da pasta `tests/` representa um **cenário de teste específico**:

| Arquivo | Objetivo |
|----------|-----------|
| `login.test.js` | Valida autenticação e geração de token |
| `transfers.test.js` | Mede desempenho das transferências entre contas |

---

## ⚙️ Modo de Instalação e Execução

### 1. Clonar o repositório
```bash
git clone https://github.com/vlimar2
cd banco-api-performance
```

### 2. Instalar o k6
- **macOS:**  
  ```bash
  brew install k6
  ```
- **Linux (Debian/Ubuntu):**  
  ```bash
  sudo apt install k6
  ```
- **Windows:**  
  [Baixar instalador oficial](https://k6.io/docs/get-started/installation/)

### 3. Configurar a variável `BASE_URL`
```bash
export BASE_URL= http://localhost:3000/
```

---

## 🖥️ Execução e Relatórios em Tempo Real

### 🔹 Execução básica
```bash
k6 run tests/transfers.test.js
```

### 🔹 Execução com relatório em tempo real no navegador
```bash
K6_WEB_DASHBOARD=true k6 run tests/transfers.test.js
```
Após iniciar, o k6 exibirá um link para o dashboard web local (geralmente `http://127.0.0.1:5665`).

### 🔹 Exportar relatório HTML automaticamente
```bash
K6_WEB_DASHBOARD=true \
K6_WEB_DASHBOARD_EXPORT=reports/html-report.html \
k6 run tests/transfers.test.js
```
Isso executará o teste, exibirá o dashboard em tempo real e salvará o relatório final em `reports/html-report.html`.

---

## 📈 Exemplo de Execução Completa

```bash
export BASE_URL=https://api.banco-teste.com
K6_WEB_DASHBOARD=true \
K6_WEB_DASHBOARD_EXPORT=reports/html-report.html \
k6 run tests/login.test.js \
-e BASE_URL=http://localhost:3000
```

---

## 📎 Repositório

🔗 [https://github.com/vlimar2](https://github.com/vlimar2)

---

**Autor:** Rafael Lima  
**Ferramenta:** [k6.io](https://k6.io)  
**Licença:** MIT

