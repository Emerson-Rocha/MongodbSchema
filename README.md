# 📚 JSON Schema — Coleção `compras`

Este projeto demonstra a utilização do **JSON Schema Validation no MongoDB** para definir e controlar a estrutura dos documentos armazenados na coleção `compras`.

A validação garante que os documentos inseridos possuam os campos obrigatórios e respeitem os tipos de dados e regras definidos.

---

## 🗂️ Estrutura geral

A coleção `compras` possui os seguintes campos principais:

```text
compras
│
├── aluno
│   ├── nome
│   └── matricula
│
├── curso
│
├── livro
│   ├── titulo
│   ├── autor
│   ├── editora
│   └── ano
│
├── categoria
├── preco
├── quantidade
├── formaPagamento
└── status
```

---

## 🔐 Validação

A validação é definida através de:

```javascript
validator: {
   $jsonSchema: {
      ...
   }
}
```

O:

```javascript
bsonType: "object"
```

determina que cada documento da coleção deve ser um objeto BSON.

---

## 📋 Campos obrigatórios

Os campos abaixo são obrigatórios:

```javascript
required: [
   "aluno",
   "curso",
   "livro",
   "categoria",
   "preco",
   "quantidade",
   "formaPagamento",
   "status"
]
```

Portanto, um documento não poderá ser inserido corretamente se algum desses campos estiver ausente.

---

# 👨‍🎓 Campo `aluno`

O campo `aluno` é um **objeto embutido** dentro do documento.

```javascript
aluno: {
   bsonType: "object",
   required: [
      "nome",
      "matricula"
   ]
}
```

Ele possui dois campos obrigatórios:

### `nome`

```javascript
nome: {
   bsonType: "string"
}
```

Deve armazenar o nome do aluno como texto.

### `matricula`

```javascript
matricula: {
   bsonType: "string"
}
```

Deve armazenar a matrícula do aluno como texto.

---

# 🎓 Campo `curso`

```javascript
curso: {
   bsonType: "string",
   description: "Curso do aluno"
}
```

Armazena o curso ao qual o aluno pertence.

O valor deve ser do tipo:

```text
string
```

---

# 📖 Campo `livro`

O campo `livro` também é um **objeto embutido**.

```javascript
livro: {
   bsonType: "object"
}
```

Possui quatro campos obrigatórios:

```javascript
required: [
   "titulo",
   "autor",
   "editora",
   "ano"
]
```

### `titulo`

```javascript
titulo: {
   bsonType: "string"
}
```

Título do livro.

### `autor`

```javascript
autor: {
   bsonType: "string"
}
```

Nome do autor do livro.

### `editora`

```javascript
editora: {
   bsonType: "string"
}
```

Nome da editora.

### `ano`

```javascript
ano: {
   bsonType: "int",
   minimum: 1900
}
```

O ano deve:

- ser um número inteiro (`int`);
- ser maior ou igual a `1900`.

---

# 🏷️ Campo `categoria`

```javascript
categoria: {
   bsonType: "string",
   enum: [
      "Programacao",
      "Banco de Dados",
      "Redes",
      "Engenharia de Software",
      "Inteligencia Artificial",
      "Matematica",
      "Administracao"
   ]
}
```

O campo deve ser uma `string`.

Além disso, o valor precisa pertencer à lista definida em `enum`.

### Categorias permitidas

- Programacao
- Banco de Dados
- Redes
- Engenharia de Software
- Inteligencia Artificial
- Matematica
- Administracao

O uso de `enum` impede valores diferentes dos especificados.

---

# 💰 Campo `preco`

```javascript
preco: {
   bsonType: "double",
   minimum: 0
}
```

Representa o preço do livro.

Regras:

- deve ser do tipo `double`;
- não pode ser menor que `0`.

Portanto, valores negativos são rejeitados.

---

# 🔢 Campo `quantidade`

```javascript
quantidade: {
   bsonType: "int",
   minimum: 1
}
```

Representa a quantidade de livros comprados.

Regras:

- deve ser um número inteiro;
- o valor mínimo é `1`.

Assim, não é permitido utilizar:

```text
0
-1
-2
```

---

# 💳 Campo `formaPagamento`

```javascript
formaPagamento: {
   bsonType: "string",
   enum: [
      "PIX",
      "Cartao",
      "Boleto"
   ]
}
```

Define a forma de pagamento utilizada na compra.

São permitidas somente:

- PIX
- Cartao
- Boleto

O uso de `enum` restringe os valores possíveis.

---

# 📦 Campo `status`

```javascript
status: {
   bsonType: "string",
   enum: [
      "Pendente",
      "Pago",
      "Enviado",
      "Entregue",
      "Cancelado"
   ]
}
```

Representa a situação atual da compra.

Os valores permitidos são:

- Pendente
- Pago
- Enviado
- Entregue
- Cancelado

---

# ⚙️ Nível de validação

O Schema utiliza:

```javascript
validationLevel: "strict"
```

O nível `strict` determina que a validação seja aplicada aos documentos inseridos e às operações de atualização que alterem os documentos.

---

# 🚫 Ação de validação

O Schema utiliza:

```javascript
validationAction: "error"
```

Quando um documento não atende às regras definidas pelo Schema, o MongoDB gera um erro e rejeita a operação.

---

# 🧩 Principais recursos utilizados

| Recurso | Função |
|---|---|
| `bsonType` | Define o tipo de dado |
| `required` | Define campos obrigatórios |
| `properties` | Define as propriedades do documento |
| `enum` | Restringe os valores permitidos |
| `minimum` | Define o valor mínimo |
| `description` | Adiciona uma descrição ao campo |
| `$jsonSchema` | Define as regras de validação |
| `validationLevel` | Define o nível de validação |
| `validationAction` | Define o que ocorre quando a validação falha |

---

# 📌 Resumo da estrutura

```text
compras
│
├── aluno → objeto
│   ├── nome → string
│   └── matricula → string
│
├── curso → string
│
├── livro → objeto
│   ├── titulo → string
│   ├── autor → string
│   ├── editora → string
│   └── ano → int >= 1900
│
├── categoria → string + enum
│
├── preco → double >= 0
│
├── quantidade → int >= 1
│
├── formaPagamento → string + enum
│
└── status → string + enum
```

---

## 🎯 Objetivo do Schema

O objetivo é garantir **padronização, integridade e consistência dos dados** armazenados na coleção `compras`, utilizando os recursos de validação de documentos disponíveis no MongoDB.