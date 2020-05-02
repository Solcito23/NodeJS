var expect = require("chai").expect;
var appNews = require('../app.js');

describe('Module for get news around the world', function() {
    it('should return status error when not pass params', function() {
        result = appNews.getNews();
        result.then(data => {
            console.log("estatus: " + data.status);
            expect(data.status).to.equal("error");
        })

    });

    it('should return status ok when pass params', function() {
        result = appNews.getNews("ar");
        result.then(data => {
            console.log("estatus: " + data.status);
            expect(data.status).to.equal("ok");
        })
    });

    it('should return languages', function() {
        result = appNews.getLanguages();
        expect(result).to.not.be.empty;
    });

    it('should return countries', function() {
        result = appNews.getCountries();
        expect(result).to.not.be.empty;
    });

    it('should return categories', function() {
        result = appNews.getCategories();
        expect(result).to.not.be.empty;
    });
});