$(document).ready(function() {
  $("form#trackqs").submit(function() {
    var studentName = $("input#nameEntry").val();
    var answer1 = $("select#pref1").val();
    var answer2 = $("select#pref2").val();
    var answer3 = $("select#pref3").val();
    var answer4 = $("select#pref4").val();
    var answer5 = $("select#pref5").val();
    $("#nameReturn").text(studentName);

    if ((answer1 === "backend" && answer3 === "back" && answer4 === "forumno") || (answer1 === "web" && answer3 === "back" && answer4 === "forumno"))  {
      $ ("#answers").show();
      $ ("#php").show();
      $ ("#css").hide();
      $ ("#ruby").hide();
      $ ("#java").hide();
      $("#other").hide();
    }

    else if (answer1 === "visual") {
      $ ("#answers").show();
      $ ("#php").hide();
      $ ("#css").show();
      $ ("#ruby").hide();
      $ ('#java').hide();
      $("#other").hide();
    }

    else if ((answer1 === "web" && answer3 === "back" && answer4 === "forumyes") || (answer1 === "backend" && answer3 === "front" && answer4 === "forumyes") || (answer1 === "backend" && answer3 === "back" && answer4 === "forumyes")){
      $ ("#answers").show();
      $ ("#php").hide();
      $ ("#css").hide();
      $ ("#ruby").show();
      $ ("#java").hide();
      $("#other").hide();
    }

    else if ((answer1 === "app") || (answer1 === "web" && answer2 === "yes") || (answer1 === "backend" && answer2 === "yes")) {
      $ ("#answers").show();
      $ ("#php").hide();
      $ ("#css").hide();
      $ ("#ruby").hide();
      $ ("#java").show();
      $("#other").hide();
    }

    else {
      $ ("#answers").show();
      $ ("#php").hide();
      $ ("#css").hide();
      $ ("#ruby").hide();
      $ ("#java").hide();
      $("#other").show();
    }
    event.preventDefault();
  });
});
