var slider=document.getElementById("slider");
var emoji=document.getElementById("emoji");
var emoticons=["mood_bad đ", "sentiment_very_dissatisfied âšī¸", 
    "sentiment_satisfied đ","sentiment_satisfied_alt đĻđđđ",
    "sentiment_very_satisfied đđ đââđĻđĻđĻđĻđĻ"
	];
slider.oninput=function(){
    emoji.innerHTML=emoticons[slider.value];
}