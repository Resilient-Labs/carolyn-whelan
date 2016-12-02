/**
 * Created by Unaka Muigai on 9/13/2016.
 */
var app = angular.module('portfolio', []);

app.controller('featuredCtrl', function($scope) {
$scope.articles = [
  {
    category: "Public Policy",
    logo:"fortune-logo.jpg",
    title:"Brewing a better beer for Africa",
    date: "June 24, 2011",
    description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
    link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
    hasPDF:false
  },
  {
    category:"Business",
    logo:"fortune-logo.jpg",
    title:"Brewing a better beer for Africa",
    date: "June 24, 2011",
    description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
    link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
    hasPDF:false
  },
  {
    category:"News",
    logo:"fortune-logo.jpg",
    title:"Brewing a better beer for Africa",
    date: "June 24, 2011",
    description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
    link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
    hasPDF:false
  },
  {
    category:"Science",
    logo:"fortune-logo.jpg",
    title:"Brewing a better beer for Africa",
    date: "June 24, 2011",
    description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
    link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
    hasPDF:false
  },
  {
    category:"Travel",
    logo:"fortune-logo.jpg",
    title:"Brewing a better beer for Africa",
    date: "June 24, 2011",
    description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
    link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
    hasPDF:false
  },
  {
    category:"Other",
    logo:"fortune-logo.jpg",
    title:"Brewing a better beer for Africa",
    date: "June 24, 2011",
    description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
    link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
    hasPDF:false
  }
];
});
