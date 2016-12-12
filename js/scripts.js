/**
* Created by Unaka Muigai on 9/13/2016.
*/
var app = angular.module('portfolio', []);

app.controller('featuredCtrl', function($scope) {
  $scope.articles = [
    {
      category: "Public Policy",
      publication:"EIU",
      featured:true,
      title:"Higher education – What’s it worth?",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://going-global.economist.com/en/2014/07/03/%E9%AB%98%E7%AD%89%E6%95%99%E8%82%B2-%E4%BB%B7%E5%80%BC%E5%9C%A8%E5%93%AA%EF%BC%9F/",
      className:"public-policy",
      page:"public-policy.html",
      imageClass:"eiu"
    },
    {
      category: "Public Policy",
      publication:"EIU",
      featured:false,
      title:"UN FOUNDATION",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"https://www.eiuperspectives.economist.com/sustainability/global-development-goals-opportunities-and-obstacles/blog/turning-clock-climate-change",
      className:"public-policy",
      page:"public-policy.html",
      imageClass:"un-foundation"
    },
    {
      category: "Public Policy",
      publication:"EIU",
      featured:false,
      title:"Small business efforts to hire young people in the US",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"https://www.eiuperspectives.economist.com/talent-education/innovations-youth-hiring/articles",
      className:"public-policy",
      page:"public-policy.html",
      imageClass:"rock-logo"
    },
    {
      category: "Public Policy",
      publication:"EIU",
      featured:false,
      title:"Technology and its impact on transportation",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"https://www.eiuperspectives.economist.com/technology-innovation/how-mobile-transforming-passenger-transportation/white-paper/how-mobile-transforming-passenger-transportation",
      className:"public-policy",
      page:"public-policy.html",
      imageClass:"sap"
    },
    {
      category: "Public Policy",
      publication:"EIU",
      featured:false,
      title:"A poll of young people across the world on their challenges, plans and aspirations for the future",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://www.citigroup.com/citi/foundation/philanthropic-focus/youth-economic-opportunities.htm",
      className:"public-policy",
      page:"public-policy.html",
      imageClass:"c-found"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:true,
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2011/06/24/brewing-a-better-beer-for-africa/",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"Google's chief of environmental policy explains strategy",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://www.nytimes.com/2008/10/18/business/worldbusiness/18iht-wbspot18.1.16975079.html",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"Former mayor of Bogotá leaves his mark on many cities",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://www.nytimes.com/2007/12/28/business/worldbusiness/28iht-wbspot29.html",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"The next big thing: Battery-powered bikes",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://www.nytimes.com/2007/03/14/business/worldbusiness/14iht-transcol15.4904522.html",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Internation Herald Tribune",
      featured:false,
      title:"Brazil is driving a revival in sugar cane fuel",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"#",
      className:"business",
      page:"business.html",
      imageClass:"inh"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      title:"Is the party about to end in Brazil?",
      date: "August 8, 2010",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://archive.fortune.com/2010/08/05/news/international/Brazil_growth_slows.fortune/index.htm",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"Business",
      publication:"WSJ",
      featured:false,
      title:"CAC-40 Index May See Shuffle",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"#",
      className:"business",
      page:"business.html",
      imageClass:"WSJ"
    },
    {
      category:"Business",
      publication:"WSJ",
      featured:false,
      title:"Aventis May Make Investors Queasy",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"#",
      className:"business",
      page:"business.html",
      imageClass:"WSJ"
    },
    {
      category:"Business",
      publication:"WSJ",
      featured:false,
      title:"Prominent Scientists Break Away To Form Swiss Drug Company",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"#",
      className:"business",
      page:"business.html",
      imageClass:"WSJ"
    },
    {
      category:"Business",
      publication:"WSJ",
      featured:false,
      title:"Alstom Names Former CEO Of Elf as Adviser to Chairman, (with John Carreyrou)",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://www.wsj.com/articles/SB1014323466760189880",
      className:"business",
      page:"business.html",
      imageClass:"WSJ"
    },
    {
      category:"Business",
      publication:"Barrons",
      featured:false,
      title:"Bulls Say Qualcomm Is Poised for More Gains",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://www.barrons.com/articles/SB918516752214175000",
      className:"business",
      page:"business.html",
      imageClass:"barron"
    },
    {
      category:"Business",
      publication:"Barrons",
      featured:false,
      title:"Chips Intact Despite Taiwan Quake",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://www.barrons.com/articles/SB937938035860896754",
      className:"business",
      page:"business.html",
      imageClass:"barron"
    },
    {
      category:"Business",
      publication:"Barrons",
      featured:false,
      title:"Some Sour on Semiconductor Equipment Stocks",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://www.barrons.com/articles/SB943388369879143578",
      className:"business",
      page:"business.html",
      imageClass:"barron"
    },
    {
      category:"Business",
      publication:"Barrons",
      featured:false,
      title:"For 1999, Stick with the European Sunbelt",
      date: "January 6, 1999",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://www.barrons.com/articles/SB9439983163931621",
      className:"business",
      page:"business.html",
      imageClass:"barron"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Upwardly mobile: MIT professor speaks out on transit, technology in emerging economies",
      date: "January 19, 2010",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://fortune.com/2010/01/19/upwardly-mobile/",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Wal-Mart Banks On Mexico",
      date: "February 4, 2008",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://archive.fortune.com/2008/01/28/news/international/walmart_bank.fortune/index.htm?postversion=2008012904",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"Business",
      publication:"Fortune",
      featured:false,
      logo:"fortune-logo.jpg",
      title:"Castro's Revenge: A Cuban oil rush is underway",
      date: "March 19, 2007",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://archive.fortune.com/magazines/fortune/fortune_archive/2007/03/19/8402339/index.htm",
      className:"business",
      page:"business.html",
      imageClass:"fortune"
    },
    {
      category:"News",
      publication:"Newsweek",
      featured:true,
      logo:"newsweek-logo.png",
      title:"Easing The Misery",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"#",
      className:"news",
      page:"news.html",
      imageClass:"newslogo"
    },
    {
      category:"News",
      publication:"Newsweek",
      featured:false,
      logo:"newsweek-logo.png",
      title:"A Cheap-Peso Boom",
      date: "May 19, 2003",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://www.newsweek.com/cheap-peso-boom-137269",
      className:"news",
      page:"news.html",
      imageClass:"newslogo"
    },
    {
      category:"News",
      publication:"Newsweek",
      featured:false,
      logo:"newsweek-logo.png",
      title:"A Province That Works",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://www.newsweek.com/province-works-133227",
      className:"news",
      page:"news.html",
      imageClass:"newslogo"
    },
    {
      category:"Science",
      publication:"sciAm",
      featured:true,
      logo:"Scientific_American_logo.svg_.png",
      title:"Taut-Tech: Smaller, Softer Artificial Muscles to Help Bring Power to Toys and Cell Phones",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"https://www.scientificamerican.com/article/softer-artificial-muscles-new-zealand/",
      className:"science",
      page:"science.html",
      imageClass:"sciencelogo"
    },
    {
      category:"Science",
      publication:"sciAm",
      featured:false,
      logo:"Scientific_American_logo.svg_.png",
      title:"The Doctor Is Out, but New Patient Monitoring and Robotics Technology Is In",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://www.scientificamerican.com/article/patient-monitoring-tech/",
      className:"science",
      page:"science.html",
      imageClass:"sciencelogo"
    },
    {
      category:"Science",
      publication:"sciAm",
      featured:false,
      logo:"Scientific_American_logo.svg_.png",
      title:"How to Reduce Car-Made Pollution? Tune Up the Existing Technology",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://www.scientificamerican.com/article/how-to-reduce-car-made-pollution/",
      className:"science",
      page:"science.html",
      imageClass:"sciencelogo"
    },
    {
      category:"Science",
      publication:"sciAm",
      featured:false,
      logo:"Scientific_American_logo.svg_.png",
      title:"Blooms Away: The Real Price of Flowers",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"https://www.scientificamerican.com/article/environmental-price-of-flowers/",
      className:"science",
      page:"science.html",
      imageClass:"sciencelogo"
    },
    {
      category:"Science",
      publication:"sciAm",
      featured:false,
      logo:"Scientific_American_logo.svg_.png",
      title:"Is the Sun Setting on Solar Power in Spain?",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"http://www.scientificamerican.com/article/is-the-sun-setting-on-solar-power-in-spain/",
      className:"science",
      page:"science.html",
      imageClass:"sciencelogo"
    },
    {
      category:"Travel",
      featured:true,
      logo:"nga.png",
      title:"NO REALLY, IT’S A HUT",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"#",
      className:"travel",
      page:"travel.html",
      imageClass:"travellogo"
    },
    {
      category:"Travel",
      publication:"Town",
      featured:false,
      logo:"nga.png",
      title:"Buenos Aires Steps Lively",
      date: "December 15, 2006",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"#",
      className:"travel",
      page:"travel.html",
      imageClass:"sciencelogo"
    },
    {
      category:"Travel",
      publication:"NGA",
      featured:false,
      logo:"nga.png",
      title:"Argentina uncorked",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"#",
      className:"travel",
      page:"travel.html",
      imageClass:"travellogo"
    },
    {
      category:"Travel",
      publication:"Marie",
      featured:false,
      logo:"nga.png",
      title:"More than a pretty face",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"#",
      className:"travel",
      page:"travel.html",
      imageClass:"marie-img"
    },
    {
      category:"Travel",
      publication:"Conde",
      featured:false,
      logo:"nga.png",
      title:"Word of Mouth: A New Vintage",
      date: "February 20, 2004",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"#",
      className:"travel",
      page:"travel.html",

    },
    {
      category:"Other",
      publication:" ",
      featured:true,
      logo:"columbia-bs.png",
      title:"Brewing a better beer for Africa",
      date: "June 24, 2011",
      description:"Fortune -- A guy walks into a bar and orders a pint of beer. But this isn't a pub in London or a sports bar in Milwaukee -- it's a watering hole in Uganda.",
      link:"#",
      className:"other",
      page:"other.html",
      imageClass:"otherlogo"
    }
  ];
});
