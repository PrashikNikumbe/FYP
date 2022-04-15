// creating an array and passing the number, questions, options, and answers
var arr1 = []
while (arr1.length < 20) {
  r = Math.floor(Math.random() * 77) + 1
  if (arr1.indexOf(r) == -1) arr1.push(r)
}

var arr2 = []
while (arr2.length < 10) {
  r = Math.floor(Math.random() * 62) + 1
  if (arr2.indexOf(r) == -1) arr2.push(r)
}

var arr3 = []
while (arr3.length < 10) {
  r = Math.floor(Math.random() * 61) + 1
  if (arr3.indexOf(r) == -1) arr3.push(r)
}



questionset = []

for (let i = 0; i < arr1.length; i++) {
  questionset.push(quantquestions[arr1[i]-1])
}

for (let i = 0; i < arr2.length; i++) {
  questionset.push(logicalquestions[arr2[i]-1])
}

for (let i = 0; i < arr3.length; i++) {
    questionset.push(englishquestions[arr3[i]-1])
}
      


qid = document.getElementById("questions")


for (let i = 0; i < 40; i++) {
  no = i + 1
  q = questionset[i]["question"]
  op1 = questionset[i]["options"][0]
  op2 = questionset[i]["options"][1]
  op3 = questionset[i]["options"][2]
  op4 = questionset[i]["options"][3]


  qid.innerHTML += `        
  <label for=""></label>`+ no + ") " + q + `<br><br>

  <input type="radio" name="`+ no + `" value="` + op1 + `">
  <label >`+ op1 + `</label><br>

  <input type="radio" name="`+ no + `" value="` + op2 + `">
  <label >`+ op2 + `</label><br>

  <input type="radio" name="`+ no + `" value="` + op3 + `">
  <label >`+ op3 + `</label><br>

  <input type="radio" name="`+ no + `" value="` + op4 + `">
  <label >`+ op4 + `</label><br>
  <br>`

}
