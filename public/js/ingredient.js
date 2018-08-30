// Get references to page elements
var $ingredientText = $("#ingredient-text");
var $submitBtn = $("#submit");
var $ingredientList = $("#ingredient-list");
var $quanity = $("#quanity");
var $size = $("#ingredientFormControlSelect1");
var $price = $("#price");

// The API object contains methods for each kind of request we'll make
var API = {
  saveIngredient: function(ingredient) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/ingredients",
      data: JSON.stringify(ingredient)
    });
  },
  getIngredients: function() {
    return $.ajax({
      url: "api/ingredients",
      type: "GET"
    });
  },
  deleteIngredient: function(id) {
    return $.ajax({
      url: "api/ingredients/" + id,
      type: "DELETE"
    });
  }
};

// refreshIngredients gets new Ingredients from the db and repopulates the list
var refreshIngredients = function() {
  API.getIngredients().then(function(data) {
    var $ingredients = data.map(function(ingredient) {
      var $a = $("<a>")
        .text(ingredient.text)
        .attr("href", "/ingredient/" + ingredient.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": ingredient.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $ingredientList.empty();
    $ingredientList.append($ingredients);
  });
};

// handleFormSubmit is called whenever we submit a new ingredient
// Save the new ingredient to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var ingredient = {
    text: $ingredientText.val(),
    quanity: $quanity.val(),
    size: $size.val(),
    price: $price.val()
  };

  // if (!(ingredient.text && ingredient.quanity && ingredient.size && ingredient.price)) {
  //   alert("You must enter an full details of Ingredient!");
  //   return;
  // }

  API.saveIngredient(ingredient).then(function() {
    refreshIngredients();
  });

  $ingredientText.val("");
  $quanity.val("");
  $size.val("");
  $price.val("");
};

// handleDeleteBtnClick is called when an ingredient's delete button is clicked
// Remove the ingredient from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteIngredient(idToDelete).then(function() {
    refreshIngredients();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$ingredientList.on("click", ".delete", handleDeleteBtnClick);
