(function(){angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('home/home.template.html','<div class="container">\n\t<div class="desktop-only">\n\t\t<div class="dash-container-outer">\n\t\t\t<div class="dash-container-inner">\n\t\t\t\t<div class="dash" ng-repeat="i in home.getDashNumber(435) track by $index"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="button-container-outer">\n\t\t\t<div class="button-container-inner">\n\t\t\t\t<dash-button callback="home.getProject(id)" ng-repeat="i in home.getDashNumber(435) track by $index" project="home.getProjectButton($index)"></dash-button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="dot-container-outer">\n\t\t\t<div ng-if="!home.project" class="dot-container-inner">\n\t\t\t\t<div class="dot" ng-repeat="i in home.getDotNumber(1682) track by $index"></div>\n\t\t\t</div>\n\t\t\t<div ui-view></div>\n\t\t</div>\n\t</div>\n\t<div class="mobile-only">\n\t\t<button ng-click="home.getProjectToggle(home.info.id)" class="info-button">Info</button>\n\t\t<div ng-show="home.showGallery(project.id)" ui-view></div>\n\t\t<div ng-repeat="project in home.projects">\n\t\t\t<button ng-click="home.getProjectToggle(project.id)" ng-style={\'background\':project.color} class="project-button">{{project.name}}</button>\n\t\t\t<div ng-show="home.showGallery(project.id)" ui-view></div>\n\t\t</div>\n\t</div>\n</div>');
$templateCache.put('imageGallery/imageGallery.template.html','<div id="projectLoad" ng-show="gallery.projectLoading"></div>\n<div ng-show="!gallery.projectLoading">\n\t<dd-carousel images="gallery.project.images" show-details="gallery.showDetails"></dd-carousel>\n\t<div class="comingSoonContainer" ng-if="gallery.project.comingSoon">\n\t\t<div class="imgContainer">\n\t\t\t<img class="comingSoon" ng-src="{{gallery.project.images[0]}}">\n\t\t</div>\n\t</div>\n\t<div ng-class="{open: gallery.showDetails, closed: !gallery.showDetails, comingSoon: gallery.project.comingSoon}" ng-click="gallery.showDetails=false;" class="details">\n\t\t<h3>{{gallery.project.name}}</h3>\n\t\t<p>{{gallery.project.city}}</p>\n\t\t<ul ng-repeat="detail in gallery.project.details" ng-if="detail.fieldName !== \'Disclaimer\'">\n\t\t\t<li>{{detail.fieldName}}</li>\n\t\t\t<li>{{detail.fieldContent}}</li>\n\t\t</ul>\n\t\t<p class="disclaimer" ng-repeat="detail in gallery.project.details" ng-if="detail.fieldName === \'Disclaimer\'"> \n\t\t\t{{detail.fieldContent}}\n\t\t</p>\n\t</div>\n</div>');
$templateCache.put('imageGallery/slide.template.html','<div class="carousel-inner" ng-transclude></div>\n<div ng-swipe-left="next()" ng-swipe-right="prev()">\n  <a role="button" href class="left carousel-control" ng-click="prev()" ng-class="{ disabled: isPrevDisabled() }" ng-show="slides.length > 1">\n    <span class="sr-only">previous</span>\n  </a>\n  <a role="button" href class="right carousel-control" ng-click="next()" ng-class="{ disabled: isNextDisabled() }" ng-show="slides.length > 1">\n    <span class="sr-only">next</span>\n  </a>\n</div>\n<ol class="carousel-indicators" ng-show="slides.length > 1">\n  <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n    <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n  </li>\n</ol>');
$templateCache.put('info/info.template.html','<div uib-carousel no-wrap="true" template-url="info/slideInfo.template.html" active="info.active">\n    <div uib-slide index="0">\n        <div class="slide">\n\t\t\t<div class="content">\n\t\t\t\t<div class="details">\n\t\t\t\t\t<h2>Dot Dash</h2>\n\t\t\t\t\t<div class="contact">\n\t\t\t\t\t\t<address>\n\t\t\t\t\t\t\t<a target="_blank" ng-href="{{info.info.company.map}}">{{info.info.company.address1}}</a><br>\n\t\t\t\t\t\t\t<a target="_blank" ng-href="{{info.info.company.map}}">{{info.info.company.address2}}</a><br>\n\t\t\t\t\t\t\t<a target="_blank" ng-href="{{info.info.company.map}}">{{info.info.company.city}}</a><br>\n\t\t\t\t\t\t\t<a ng-href="tel:{{info.info.company.phone}}">{{info.info.company.phone}}</a><br>\n\t\t\t\t\t\t\t<a ng-href="mailto:{{info.info.company.email}}">{{info.info.company.email}}</a>\n\t\t\t\t\t\t</address>\n\t\t\t\t\t\t<ul ng-repeat="employee in info.info.employees">\n\t\t\t\t\t\t\t<li>{{employee.name}}</li>\n\t\t\t\t\t\t\t<li><a class="email" ng-href="mailto:{{employee.email}}">{{employee.email}}</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="imgContainer">\n\t\t\t\t\t<img id="teamPhoto" ng-src="{{info.info.team_photo}}">\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>\n    </div>\n     <div uib-slide index="1">\n        <div class="slide">\n\t\t\t<div class="content">\n\t\t\t\t<h2>Profile</h2>\n\t\t\t\t<div class="content" ng-bind-html="info.info.profile"></div>\n\t\t\t</div>\n        </div>\n    </div>\n     <div uib-slide index="2">\n        <div class="slide">\n\t\t\t<div class="content">\n        \t\t<h2>Principal</h2>\n\t\t\t\t<div ng-bind-html="info.info.profile"></div>\n\t\t\t</div>\n        </div>\n    </div>\n</div>');
$templateCache.put('info/slideInfo.template.html','<div class="carousel-inner" ng-transclude></div>\n<ol class="carousel-indicators" ng-show="slides.length > 1">\n  <li ng-class="{ active: isActive(slides[0]) }" ng-click="select(slides[0])">\n  \t<h4>Contact</h4>\n    <span class="sr-only">Contacts<span ng-if="isActive(slides[0])">, currently active</span></span>\n  </li>\n  <li ng-class="{ active: isActive(slides[1]) }" ng-click="select(slides[1])">\n  \t<h4>Profile</h4>\n    <span class="sr-only">Profile<span ng-if="isActive(slides[1])">, currently active</span></span>\n  </li>\n  <li ng-class="{ active: isActive(slides[2]) }" ng-click="select(slides[2])">\n  \t<h4>Principal</h4>\n    <span class="sr-only">Principal<span ng-if="isActive(slides[2])">, currently active</span></span>\n  </li>\n</ol>');
$templateCache.put('imageGallery/ddCarousel/ddCarousel.template.html','<div class="dd-carousel-inner">\n    <img ng-repeat="image in carousel.imageArray track by $index" class="slide" ng-src="{{image}}" />\n</div>\n<a href="javascript:void(0)" ng-click="carousel.prev()" class="prev"></a>\n<a href="javascript:void(0)" ng-click="carousel.next()" class="next"></a>\n<ul class="dd-carousel-nav-dots">\n    <li class="dd-carousel-nav-dot" ng-class="{active: $index===carousel.currentIndex}" id="dot{{$index}}" ng-repeat="dot in carousel.imageArray track by $index" ng-click="carousel.goToSlide($index)"></li>\n</ul>');
$templateCache.put('dashButton/dashButton.template.html','<div class="button project" ng-if="dash.project.name !== \'Info\'" ng-style="dash.setDashColor()" ng-click="dash.callback({id: dash.project.id})"></div>\n<div class="button info" ng-if="dash.project.name === \'Info\'" ng-class="{hover: dash.hover}" ng-style="dash.setDashColor()" ng-click="dash.callback({id: dash.project.id})"  ng-mouseover="dash.setInfoHover()" ng-mouseleave="dash.removeInfoHover()"></div>\n<p class="name">{{dash.project.name}}</p>');}]);})();