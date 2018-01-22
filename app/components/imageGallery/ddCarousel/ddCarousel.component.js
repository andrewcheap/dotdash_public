(function() {
	'use strict';

	angular.module('public.ddCarousel')
		.component('ddCarousel', {
			templateUrl: 'imageGallery/ddCarousel/ddCarousel.template.html',
			controller: ddCarouselController,
            controllerAs: 'carousel',
            bindings: {
                images: '<',
                showDetails: '='
			},
		});

		function ddCarouselController($scope, $element, $window) {
            /* jshint validthis: true */
            var self = this;

            //Interface
            self.prev = prev;
            self.next = next;
            self.goToSlide = goToSlide;

            self.currentIndex = 0;
            self.translateX = 0;

            activate();

            function activate(){
                if($window.innerWidth >= 1680){
                    self.galleryWidth = 920;
                }
                else {
                    self.galleryWidth = 690; 
                }

                self.slideCss = {
                    'transition': 'transform 1s'
                };
            }

            function prev(){
                if(self.currentIndex === 0) { return; }
                if(self.currentIndex === self.lastImage) { 
                    self.showDetails = false;
                }
                self.currentIndex--;
                self.goToSlide(self.currentIndex);
            }

            function next(){
                if(self.currentIndex === self.lastImage) { 
                    self.showDetails = !self.showDetails;
                    return; 
                }
                self.currentIndex++;
                self.goToSlide(self.currentIndex);
            } 
            
            function goToSlide(slideIndex) {
                if(self.showDetails){
                    self.showDetails = false;
                }

                self.currentIndex = slideIndex;
                
                if(slideIndex === 0){
                    self.translateX = 0;
                }
                else{
                    self.translateX = self.widthArr.filter(function(value, index){
                        return index < slideIndex;
                    }).reduce(
                        function (
                            accumulator,
                            currentValue,
                            currentIndex,
                            array
                        ) {
                            return accumulator + currentValue;
                        }
                    );
                    if(slideIndex === self.lastImage) {
                        self.translateX = self.translateX - (self.galleryWidth - self.widthArr[self.lastImage]);
                    }
                }

                self.slideCss.transform = 'translateX(-' + self.translateX + 'px)';
                angular.element(document.querySelectorAll('img.slide')).css(self.slideCss);
            }

            // Must watch so that we wait for promises
            $scope.$watchCollection(function(){
				return self.images;
			}, function(newValue, oldValue){
				if(newValue){
                    carouselInit(newValue);
				}
            });


            /* PRIVATE */
            // Sets initial values once we have the images
            function carouselInit(imgArr){
                self.imageArray = imgArr;
                self.lastImage = self.imageArray.length - 1;
                self.secondToLastImage = self.imageArray.length - 2;

                loadAllImages(self.imageArray)
                    .then(saveImageWidths)
                    .then(getImagesFromDom); 
            }

            // Wait for image to load
            var loadImage = function(path){
                return new Promise(function(resolve, reject){
                    var img = new Image();
                    img.onload = function(){
                        resolve(img);
                    };
                    img.src = path;
                });
            }

            // Waits for all images to load
            var loadAllImages = function(paths){
                return Promise.all(paths.map(function(path){
                    return loadImage(path);
                }))
            };

            // save image widths to be used for slider
            var saveImageWidths = function(imgArr){
                self.widthArr = imgArr.map(function(img){
                    return img.width / 1.3333333333333333333;  // this calculation is fragile.  Assumes all images uploaded are 456 height
                });

                // Return so we can chain 'then'
                return imgArr;
            }

            // Angular giving dupes so doing this manually
            var getImagesFromDom = function(imgArr){
                self.elements = imgArr.map(function(img, index){
                    return document.querySelector("#img" + index);
                });

                // Return so we can chain 'then'
                return imgArr;
            }


		}

})();