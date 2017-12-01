$(document).ready(function() {
  $("form#trackqs").submit(function() {
    var answer1 = $("select#pref1").val();
    var answer2 = $("select#pref2").val();
    var answer3 = $("select#pref3").val();
    var answer4 = $("select#pref4").val();
    var answer5 = $("select#pref5").val();

    if (answer1 === "backend") {
      $ ('#php').show();
      $ ('#css').hide();
      $ ('#ruby').hide();
      $ ('#java').hide();
    }

    else if (answer1 === "visual") {
      $ ('#php').hide();
      $ ('#css').show();
      $ ('#ruby').hide();
      $ ('#java').hide();
    }

    else if (answer1 === "web") {
      $ ('#php').hide();
      $ ('#css').hide();
      $ ('#ruby').show();
      $ ('#java').hide();
    }

    else if (answer1 === "app") {
      $ ('#php').hide();
      $ ('#css').hide();
      $ ('#ruby').hide();
      $ ('#java').show();
    }
    event.preventDefault();
  });
});
