/**
* Created by Unaka Muigai on 9/13/2016.
*/
var app = angular.module('portfolio', []);

app.controller('featuredCtrl', function($scope) {
  $scope.articles = [
    {
      category: "Public Policy",
      publication:" ",
      featured:true,
      logo:"fortune-logo.jpg",
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
      className:"public-policy",
      page:"public-policy.html"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:true,
      logo:"fortune-logo.jpg",
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
      className:"business",
      page:"business.html"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
      className:"business",
      page:"business.html"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
      className:"business",
      page:"business.html"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
      className:"business",
      page:"business.html"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
      className:"business",
      page:"business.html"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
      className:"business",
      page:"business.html"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
      className:"business",
      page:"business.html"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
      className:"business",
      page:"business.html"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
      className:"business",
      page:"business.html"
    },
    {
      category:"News",
      publication:" ",
      featured:true,
      logo:"fortune-logo.jpg",
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
      className:"news",
      page:"news.html"
    },
    {
      category:"Science",
      publication:" ",
      featured:true,
      logo:"fortune-logo.jpg",
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
      className:"science",
      page:"science.html"
    },
    {
      category:"Travel",
      publication:" ",
      featured:true,
      logo:"fortune-logo.jpg",
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
      className:"travel",
      page:"travel.html"
    },
    {
      category:"Other",
      publication:" ",
      featured:true,
      logo:"fortune-logo.jpg",
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
      className:"other",
      page:"other.html"
    }
  ];
});
