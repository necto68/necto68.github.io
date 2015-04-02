/**
 * Created by Roman on 26.03.2015.
 */
var nowQuestion = 0;
var answerString = "";
function Question(number) {
    if (number==null){
        alert(ANSWERS[answerString] + " Приятного аппетита!");
    }
    else {
        var answer = String(prompt(QUESTION[number],""));
        if (!(answer in CONNECTION[number])){
            alert("Такого варианта ответа нету :(\nПопробуйте еще раз.");
            answerString = "";
            Question(0);
        }
        else {
            answerString += answer;
            Question(CONNECTION[number][answer]);
        }
    }
}
Question(nowQuestion);
