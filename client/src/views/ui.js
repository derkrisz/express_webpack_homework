var Films = require('../models/films');

var UI = function(){
  var films = new Films();
  this.render(films);
}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement("p");
    p.innerText = label+text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  createReview: function(li, review){
    this.appendText(li, review.comment, "Comment: ");
    this.appendText(li, review.rating, "Rating: ");
    this.appendText(li, review.author, "Author: ");
  },

  render: function(films) {
    var container = document.getElementById("films");

    for(var film of films) {
      var liTitle = document.createElement("li");
      var liGenre = document.createElement("li")
      this.appendText(liTitle, film.title, "Film: ");
      this.appendText(liGenre, film.genre, "Genre: ");

      for(var review of film.reviews){
        this.createReview(liTitle, review);
      }
      container.appendChild(liTitle);
      container.appendChild(liGenre);
    }
  }
}

module.exports = UI;
