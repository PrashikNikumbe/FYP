function start() {

  let formId = document.getElementById('apti')
  formId.style = "display:block"
  let timerId = document.getElementById('timer')
  timerId.style = "display:block"
  let leave = document.getElementById('Leave')
  leave.style = "display:none"
  let start = document.getElementById('Start')
  start.style = "display:none"
  aptiTime = setInterval(timer, 60000)


  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

}

function timer() {
  let Id = document.getElementById("time")
  current = Id.innerText
  if (current == 0) {
    clearInterval(aptiTime)
    let submit = document.getElementById('Submit')
    submit.click()
  }
  else {
    Id.innerText = current - 1
  }
}

function generateScore() {
  let leave = document.getElementById('Leave')
  leave.style = "display:block"

  ans = {}
  for (let i = 1; i <= questionset.length; i++) {
    id = document.getElementsByName(i)
    flag = false
    for (let index = 0; index < id.length; index++) {
      if (id[index].checked) {
        ans[i] = id[index].value
        flag = true
      }
    }
    if (flag == false) {
      ans[i] = null
    }
  }

  scoreArr = []
  score = 0
  for (const key in ans) {

    if (ans[key] != null) {
      if (ans[key] == questionset[key-1]["answer"]){
        score++
        scoreArr.push(1)
      }
      else{
        score-=0.4
        scoreArr.push(-1)

      }

    }
    else{

      scoreArr.push(0)

    }


  }

  if(scoreArr.length==40){
    qc=0
    qr=0
    lc=0
    lr=0
    ec=0
    er=0
    for(i=0;i<20;i++){
      if(scoreArr[i]==1) qc++
      else if(scoreArr[i]==-1) qr++
    }
    for(i=20;i<30;i++){
      if(scoreArr[i]==1) lc++
      else if(scoreArr[i]==-1) lr++
    }
    for(i=30;i<40;i++){
      if(scoreArr[i]==1) ec++
      else if(scoreArr[i]==-1) er++
    }

    data1 = {
      labels: [
        'Correct',
        'Wrong',
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [qc,qr],
        backgroundColor: [
          'rgb(54, 162, 235)',
          'rgb(255, 99, 132)',
        ],
        hoverOffset: 4
      }]
    };
  
    var ctx1 = document.getElementById("Chart1").getContext("2d");
  
    var myChart1 = new Chart(ctx1, {
        type: 'doughnut',
        data: data1,
        options: {
            responsive : false
  
        }
        });

        data2 = {
          labels: [
            'Correct',
            'Wrong',
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [lc,lr],
            backgroundColor: [
              'rgb(54, 162, 235)',
              'rgb(255, 99, 132)',
            ],
            hoverOffset: 4
          }]
        };
      
        var ctx2 = document.getElementById("Chart2").getContext("2d");
      
        var myChart2 = new Chart(ctx2, {
            type: 'doughnut',
            data: data2,
            options: {
                responsive : false
      
            }
            });


            data3 = {
              labels: [
                'Correct',
                'Wrong',
              ],
              datasets: [{
                label: 'My First Dataset',
                data: [ec,er],
                backgroundColor: [
                  'rgb(54, 162, 235)',
                  'rgb(255, 99, 132)',
                ],
                hoverOffset: 4
              }]
            };
          
            var ctx3 = document.getElementById("Chart3").getContext("2d");
          
            var myChart3 = new Chart(ctx3, {
                type: 'doughnut',
                data: data3,
                options: {
                    responsive : false
          
                }
                });

  


  
    
    
  }
  else{

  c=0
  r=0

  for(i=0;i<20;i++){
    if(scoreArr[i]==1) c++
    else if(scoreArr[i]==-1) r++
  }

   data = {
    labels: [
      'Correct',
      'Wrong',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [c,r],
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
      ],
      hoverOffset: 4
    }]
  };

  console.log(data)
  var ctx = document.getElementById("Chart").getContext("2d");

  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
          responsive : false

      }
      });


  }



  score = score.toFixed(2)

  id = document.getElementById('Scorecard')
  id.style = "display:block"
  let formId = document.getElementById('apti')
  formId.style = "display:none"
  let timerId = document.getElementById('timer')
  timerId.style = "display:none"
  let scoreId = document.getElementById('score')
  let messId = document.getElementById('message')


  let mx, per, mess

  mx = questions.length
  per = (score * 100) / mx
  mess = ""

  if (per >= 80 && per <= 100) {
    mess = "Excellent!! Keep it up."

  }
  else if (per >= 50) {
    mess = "Good!! Practise more to increase the score."

  }
  else {
    mess = "Not good!! You really need to practise hard to get the good score."
  }

  scoreId.innerText = score

  messId.innerText = mess





var elem = document.documentElement;

  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }


}

function leave(){
  score = document.getElementById("score")
  e = document.getElementById("formSubmit")
  e1 = document.getElementById("formScore")
  e2 = document.getElementById("formSubmit")
  console.log(score.innerText)
  e1.value = score.innerText
  e2.click()


}




