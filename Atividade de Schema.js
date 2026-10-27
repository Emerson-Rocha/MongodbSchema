db.createCollection("compras", {
   validator: {
      $jsonSchema: {
         bsonType: "object",

         required: [
            "aluno",
            "curso",
            "livro",
            "categoria",
            "preco",
            "quantidade",
            "formaPagamento",
            "status"
         ],

         properties: {

            aluno: {
               bsonType: "object",
               required: [
                  "nome",
                  "matricula"
               ],
               properties: {
                  nome: {
                     bsonType: "string"
                  },

                  matricula: {
                     bsonType: "string"
                  }
               }
            },

            curso: {
               bsonType: "string",
               description: "Curso do aluno"
            },

            livro: {
               bsonType: "object",
               required: [
                  "titulo",
                  "autor",
                  "editora",
                  "ano"
               ],

               properties: {

                  titulo: {
                     bsonType: "string"
                  },

                  autor: {
                     bsonType: "string"
                  },

                  editora: {
                     bsonType: "string"
                  },

                  ano: {
                     bsonType: "int",
                     minimum: 1900
                  }
               }
            },

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
            },

            preco: {
               bsonType: "double",
               minimum: 0
            },

            quantidade: {
               bsonType: "int",
               minimum: 1
            },

            formaPagamento: {
               bsonType: "string",

               enum: [
                  "PIX",
                  "Cartao",
                  "Boleto"
               ]
            },

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
         }
      }
   },

   validationLevel: "strict",
   validationAction: "error"
})


