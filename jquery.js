// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    var backgrounds, getRandomInt;
    backgrounds = [
      {
        image: "http://smmomaha.org/wp-content/uploads/2012/09/skiing-avoid-knee-replacement.jpg"
      }, {
        image: "http://thewelltravelledpostcard.files.wordpress.com/2012/09/4565957934.jpg"
      }, {
        image: "http://www.skirebel.com/magazine/wp-content/uploads/2010/11/1.-ski-lift-tickets.jpg"
      }, {
        image: "http://www.courchevel.com/images/upload/portfolio_img/les_forfaits_de_ski.jpg"
      }, {
        image: "http://media.kickstatic.com/kickapps/images/75233/photos/BLOG_5696504_75233_8097810_ap.jpg"
      }
    ];
    getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return $(document).ready(function() {
      var bgNumber;
      bgNumber = getRandomInt(0, backgrounds.length - 1);
      return $("body").css("background-image", "url(" + backgrounds[bgNumber].image + ")");
    });
  });

}).call(this);

//# sourceMappingURL=jquery.map
