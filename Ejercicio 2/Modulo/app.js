const HTTPS = require('http');
const config = require('./config.js');

const getDataAPI = async(query) => {

    return new Promise((resolve, reject) => {
        var urlNews = config.BaseURL() + query;
        let parsedData = "";
        var api = HTTPS.get(urlNews, (res) => {
            let rawData = '';
            res.on('data', (chunk) => {
                rawData += chunk;
            });
            res.on('end', () => {
                try {
                    parsedData = JSON.parse(rawData);
                    return resolve(parsedData);
                } catch (e) {
                    return reject(`There was an error during process : ${e.message}`);
                }
            });
        });
        api.on('error', (e) => {
            return reject(`There was an error consulting the api : ${e.message}`);
        });

        api.end();
    });
}

//get countries from settings
const getCountries = async => {
    return config.getCountries();
}

//get languages from settings
const getLanguages = async => {
    return config.getLanguages();
}

//get categories from settings
const getCategories = async => {
    return config.getCategories();
}

const getNews = (country = "", language = "", category = "") => {

    return new Promise(function(resolve, reject) {
        var query = (country !== "" ? "&country=" + country : "") + (language !== "" ? "&language=" + language : "") + (category !== "" ? "&category=" + category : "");
        var response = getDataAPI(query)
            .then(data => {
                return resolve(data);
            }).catch(error => {
                return reject(error);
            })
    })
}

module.exports = { getCategories, getCountries, getLanguages, getNews }