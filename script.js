
let joke = Math.random() * 10;
console.log(joke);


$("button").click(function(){
 joke = Math.random() * 10;
  console.log(joke);
  if (joke <= 1){
    $(".body").text("Diego is a school shooter.");
  }else if (joke <= 2){
    $(".body").text("WALC kids.");
  }else if (joke <= 3){
    $(".body").text("FUCK");
  }else if (joke <= 4){
    $(".body").text("Chris.");
  }else if (joke <= 5){
    $(".body").text("top 15 anime betrayals.");
  }else if (joke <= 6){
    $(".body").text("Jack and his prestigous classes.");
  }else if (joke <= 7){
    $(".body").text("Rosenburg beats his wife.");
  }else if (joke <= 8){
    $(".body").text("Global warming is a hoax.");
  }else if (joke <= 9){
    $(".body").text("Chinese people have corona virus.");
  }else{
    $(".body").text("You coughed? you have corona virus.");
  }
});