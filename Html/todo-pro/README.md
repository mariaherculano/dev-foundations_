# O que é o ToDo! Pro?

É um teste de aplicação web para gerenciamento de tarefas, desenvolvida com JavaScript puro, focada em organização, produtividade e algumas práticas de código.

O projeto foi construído com separação clara de responsabilidades, persistência de dados e uma interface moderna, simulando um cenário real de aplicação front-end.


##  Os objetivos

Demonstrar domínio dos fundamentos do desenvolvimento front-end, incluindo:
- Manipulação do DOM
- Organização de código em módulos
- Persistência de dados no navegador
- Boas práticas de UI e UX
- Lógica de negócio bem definida

##  Funcionalidades

Criar tarefas
Editar tarefas
Marcar tarefas como concluídas
Definir prioridade (Alta, Média, Baixa)
Registro de data de criação
-  Filtro de tarefas:
  - Todas
  - Pendentes
  - Concluídas
Contador dinâmico de tarefas
Persistência de dados com LocalStorage


## Tecnologias Utilizadas

**HTML5** – Estrutura semântica
**CSS3** – Estilização moderna e responsiva **JavaScript (ES6+)** – Lógica da aplicação **LocalStorage** – Armazenamento local de dados



##  Arquitetura do Projeto

```bash
todo-pro/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js        # Arquivo principal da aplicação
│   ├── tasks.js      # Regras de negócio (tarefas)
│   ├── storage.js    # Persistência no LocalStorage
│   └── ui.js         # Manipulação da interface