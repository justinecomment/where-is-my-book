myApp.service('booksService', function($http){
    const baseUrl = 'http://localhost/whereIsMyBook';

    this.postBook = function(dataToPost){
        return $http({ 
            method: 'POST', 
            url: baseUrl + '/books.php', 
            dataType: 'json', 
            data: dataToPost,
            headers: {
            'Content-Type': 'application/json'
            }
        });
    };

    this.getBooks = function(){
         return $http.get(baseUrl + '/books.php').success(function(result){
            return result.data;
        })
    };
});