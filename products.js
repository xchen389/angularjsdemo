(function(){
    var app = angular.module('store-directives', []);
    
    app.directive('productDetails', function(){
        return{
            restrict: 'E',
            templateUrl: "product-details.html"
        };
    });
    
    app.directive('productSpecs', function(){
        return{
            restrict: 'E',
            templateUrl: "product-specs.html"
        };
    });
    
    app.directive('productScreenshots', function(){
        return{
            restrict: 'E',
            templateUrl: "product-screenshots.html",
            controller: function(){
                this.current = 0;
                this.isCurrent = function(checkValue){
                    return this.current === checkValue;
                };
                this.setCurrent = function(currentValue){
                    this.current = currentValue || 0;
                };
            },
            controllerAs: "ssCtrl"
        };
    });
    
    app.directive('productReviews', function(){
        return{
            restrict: 'E',
            templateUrl: "product-reviews.html",
            controller: function(){
                this.review = {};

                this.addReview = function(product){
                    product.reviews.push(this.review);
                    this.review = {};
                };
            },
            controllerAs: "reviewCtrl"
        };
    });
    
    app.directive('productTabs', function(){
        return{
            restrict: 'E',
            templateUrl: "product-tabs.html",
            controller: function(){
                this.tab = 1;
                this.setTab = function(tabValue){
                    this.tab = tabValue;
                };
                this.isSet = function(checkTab){
                    return this.tab === checkTab;
                };
            },
            controllerAs: "tab"
        };
    });
})();
