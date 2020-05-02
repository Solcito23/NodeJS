const BaseURL = () => {
    return 'http://newsapi.org/v2/top-headlines?apiKey=94c62a1273524c719ba2648ff3005961';
}

const getCountries = () => {
    return [{
            id: "",
            description: "Todos"
        },
        {
            id: "ar",
            description: "Argentin"
        },
        {
            id: "br",
            description: "Brasil"
        },
        {
            id: "ca",
            description: "Canada"
        },
        {
            id: "co",
            description: "Colombia"
        },
        {
            id: "us",
            description: "Estados Unidos"
        }, {
            id: "it",
            description: "Italia"
        }
    ]
}

const getLanguages = () => {
    return [{
            id: "",
            description: "Todos"
        },
        {
            id: "ar",
            description: "Arabe"
        },
        {
            id: "en",
            description: "Inglés"
        },
        {
            id: "es",
            description: "Español"
        },
        {
            id: "it",
            description: "Italiano"
        },
        {
            id: "ru",
            description: "Ruso"
        }, {
            id: "pt",
            description: "Portugues"
        }
    ]
}

const getCategories = () => {
    return [{
            id: "",
            description: "Todos"
        },
        {
            id: "science",
            description: "Ciencia"
        },
        {
            id: "sports",
            description: "Deportes"
        },
        {
            id: "business",
            description: "Economia"
        },
        {
            id: "entertainment",
            description: "Entretenimiento"
        },
        {
            id: "health",
            description: "Salud"
        },
        {
            id: "technology",
            description: "Tecnología"
        }
    ]
}

module.exports = {
    BaseURL,
    getCategories,
    getCountries,
    getLanguages
};