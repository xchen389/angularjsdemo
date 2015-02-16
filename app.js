(function(){
    var app = angular.module('gameStore', ['store-directives']);
    
    app.controller('StoreController', ['$http', function($http){
        var store = this;
        store.products = [];
        $http.get('/game-products.json').
        success(function(data){
            store.products = data;
        }).
        error(function(data){
            store.products = data || "Request fail";
        });
    }]);

    app.controller('TabController', function(){
        this.tab = 1;
        this.setTab = function(tabValue){
            this.tab = tabValue;
        };
        this.isSet = function(checkTab){
            return this.tab === checkTab;
        };
    });
    
    app.controller('ReviewController', function(){
        this.review = {};
        
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
    });
    
    app.controller('ScreenshotController', function(){
        this.current = 0;
        this.isCurrent = function(checkValue){
            return this.current === checkValue;
        };
        this.setCurrent = function(currentValue){
            this.current = currentValue || 0;
        };
    });
})();
