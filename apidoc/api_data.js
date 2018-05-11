define({ "api": [
  {
    "type": "post",
    "url": "/item/",
    "title": "AddItem",
    "name": "AddItem",
    "group": "Shopping",
    "description": "<p>Add item to the list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>List name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "tachado",
            "description": "<p>If item is bought yet.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Item name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "precio",
            "description": "<p>Item price.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Item requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"add item\",\n  data: newItem{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"add item\",\n  error: err{data}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/shopping.doc.js",
    "groupTitle": "Shopping"
  },
  {
    "type": "delete",
    "url": "/item/",
    "title": "DelItem",
    "name": "DelItem",
    "group": "Shopping",
    "description": "<p>Delete requested item from list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>List name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>Item ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Item requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"delete item\",\n  data: delItem{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"delete item\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/shopping.doc.js",
    "groupTitle": "Shopping"
  },
  {
    "type": "delete",
    "url": "/list/",
    "title": "DelList",
    "name": "DelList",
    "group": "Shopping",
    "description": "<p>Delete requested list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>List name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>List requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"delete lsit\",\n  data: listDeleted{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"delete list\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/shopping.doc.js",
    "groupTitle": "Shopping"
  },
  {
    "type": "post",
    "url": "/renamelist/",
    "title": "EditList",
    "name": "EditList",
    "group": "Shopping",
    "description": "<p>Rename requested list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listaOld",
            "description": "<p>Actual list name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listaNew",
            "description": "<p>New list name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>List renamed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"new list\",\n  data: renamedList{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List-NOT-Exists:",
          "content": "HTTP/1.1 404 Server Error\n{\n  accion: \"rename list\",\n  error: \"Shopping 404\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"rename list\",\n  error: \"Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/shopping.doc.js",
    "groupTitle": "Shopping"
  },
  {
    "type": "post",
    "url": "/getlist/",
    "title": "GetList",
    "name": "GetList",
    "group": "Shopping",
    "description": "<p>Return requested shopping list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>List name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>List requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"get list\",\n  data: list{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  accion: \"get list\",\n  error: \"Shopping 404\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"get list\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/shopping.doc.js",
    "groupTitle": "Shopping"
  },
  {
    "type": "post",
    "url": "/list/",
    "title": "NewList",
    "name": "NewList",
    "group": "Shopping",
    "description": "<p>Create a new list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>List name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>List requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"new list\",\n  data: listCreated{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List-Exists:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"new list\",\n  error: \"Shopping con esa contraseña ya existe\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/shopping.doc.js",
    "groupTitle": "Shopping"
  },
  {
    "type": "post",
    "url": "/item/",
    "title": "AddItem",
    "name": "AddItem",
    "group": "Todo",
    "description": "<p>Add item to the list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>List name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "tachado",
            "description": "<p>If item is bought yet.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Item name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "prioridad",
            "description": "<p>Item priority.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Item requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"add item\",\n  data: newItem{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"add item\",\n  error: err{data}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/todo.doc.js",
    "groupTitle": "Todo"
  },
  {
    "type": "delete",
    "url": "/item/",
    "title": "DelItem",
    "name": "DelItem",
    "group": "Todo",
    "description": "<p>Delete requested item from list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>List name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>Item ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Item requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"delete item\",\n  data: delItem{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"delete item\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/todo.doc.js",
    "groupTitle": "Todo"
  },
  {
    "type": "delete",
    "url": "/list/",
    "title": "DelList",
    "name": "DelList",
    "group": "Todo",
    "description": "<p>Delete requested list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>List name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>List requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"delete lsit\",\n  data: listDeleted{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"delete list\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/todo.doc.js",
    "groupTitle": "Todo"
  },
  {
    "type": "post",
    "url": "/renamelist/",
    "title": "EditList",
    "name": "EditList",
    "group": "Todo",
    "description": "<p>Rename requested list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listaOld",
            "description": "<p>Actual list name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listaNew",
            "description": "<p>New list name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>List renamed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"new list\",\n  data: renamedList{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List-NOT-Exists:",
          "content": "HTTP/1.1 404 Server Error\n{\n  accion: \"rename list\",\n  error: \"Todo 404\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"rename list\",\n  error: \"Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/todo.doc.js",
    "groupTitle": "Todo"
  },
  {
    "type": "post",
    "url": "/getlist/",
    "title": "GetList",
    "name": "GetList",
    "group": "Todo",
    "description": "<p>Return requested todo list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>List name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>List requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"get list\",\n  data: list{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  accion: \"get list\",\n  error: \"Todo 404\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"get list\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/todo.doc.js",
    "groupTitle": "Todo"
  },
  {
    "type": "post",
    "url": "/list/",
    "title": "NewList",
    "name": "NewList",
    "group": "Todo",
    "description": "<p>Create a new list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>List name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>List requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"new list\",\n  data: listCreated{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List-Exists:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"new list\",\n  error: \"Todo con esa contraseña ya existe\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/todo.doc.js",
    "groupTitle": "Todo"
  },
  {
    "type": "post",
    "url": "/item/",
    "title": "AddItem",
    "name": "AddItem",
    "group": "Wish",
    "description": "<p>Add item to the list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>List name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Item category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Item name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "precio",
            "description": "<p>Item price.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Item url.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Item image url.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Item requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"add item\",\n  data: newItem{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"add item\",\n  error: err{data}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/wish.doc.js",
    "groupTitle": "Wish"
  },
  {
    "type": "delete",
    "url": "/item/",
    "title": "DelItem",
    "name": "DelItem",
    "group": "Wish",
    "description": "<p>Delete requested item from list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>List name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>Item ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Item requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"delete item\",\n  data: delItem{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"delete item\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/wish.doc.js",
    "groupTitle": "Wish"
  },
  {
    "type": "delete",
    "url": "/list/",
    "title": "DelList",
    "name": "DelList",
    "group": "Wish",
    "description": "<p>Delete requested list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>List name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>List requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"delete lsit\",\n  data: listDeleted{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"delete list\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/wish.doc.js",
    "groupTitle": "Wish"
  },
  {
    "type": "post",
    "url": "/renamelist/",
    "title": "EditList",
    "name": "EditList",
    "group": "Wish",
    "description": "<p>Rename requested list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listaOld",
            "description": "<p>Actual list name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listaNew",
            "description": "<p>New list name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>List renamed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"new list\",\n  data: renamedList{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List-NOT-Exists:",
          "content": "HTTP/1.1 404 Server Error\n{\n  accion: \"rename list\",\n  error: \"Wish 404\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"rename list\",\n  error: \"Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/wish.doc.js",
    "groupTitle": "Wish"
  },
  {
    "type": "post",
    "url": "/getlist/",
    "title": "GetList",
    "name": "GetList",
    "group": "Wish",
    "description": "<p>Return requested wish list without admin privileges</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>List name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>List requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"get list\",\n  data: list{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  accion: \"get list\",\n  error: \"Wish 404\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"get list\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/wish.doc.js",
    "groupTitle": "Wish"
  },
  {
    "type": "post",
    "url": "/getpass/",
    "title": "GetPass",
    "name": "GetPass",
    "group": "Wish",
    "description": "<p>Return requested wish list with admin privileges</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>List name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>List requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"get list\",\n  data: list{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  accion: \"get list\",\n  error: \"Wish 404\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"get list\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/wish.doc.js",
    "groupTitle": "Wish"
  },
  {
    "type": "post",
    "url": "/list/",
    "title": "NewList",
    "name": "NewList",
    "group": "Wish",
    "description": "<p>Create a new list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lista",
            "description": "<p>List name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>List password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>List requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"new list\",\n  data: listCreated{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List-Exists:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"new list\",\n  error: \"Wish con esa contraseña ya existe\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/wish.doc.js",
    "groupTitle": "Wish"
  }
] });
