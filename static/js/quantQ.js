// creating an array and passing the number, questions, options, and answers
let quantquestions = [

    {
    numb: 1,
    question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
    answer: "16",
    options: [
    "15",
    "16",
    "18",
    "25"
    ]
},

    {
    numb: 2,
    question: "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
    answer: "70%",
    options: [
    "30%",
    "70%",
    "100%",
    "250%"
    ]
},

    {
    numb: 3,
    question: "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
    answer: "5",
    options: [
    "3",
    "4",
    "5",
    "6"
    ]
},

    {
    numb: 4,
    question: "In a 100 m race, A can give B 10 m and C 28 m. In the same race B can give C:",
    answer: "20 m",
    options: [
    "18 m",
    "20 m",
    "17 m",
    "9 m"
    ]
},

    {
    numb: 5,
    question: "A and B take part in 100 m race. A runs at 5 kmph. A gives B a start of 8 m and still beats him by 8 seconds. The speed of B is:",
    answer: ".14 kmph",
    options: [
    "5.15 kmph",
    "4.14 kmph",
    "4.25 kmph",
    "4.40 kmph"
    ]
},

    {
    numb: 6,
    question: "In a 500 m race, the ratio of the speeds of two contestants A and B is 3 : 4. A has a start of 140 m. Then, A wins by:",
    answer: "20 m",
    options: [
    "60 m",
    "40 m",
    "20 m",
    "10 m"
    ]
},

    {
    numb: 7,
    question: "In a 100 m race, A beats B by 10 m and C by 13 m. In a race of 180 m, B will beat C by:",
    answer: "6 m",
    options: [
    "5.4 m",
    "4.5 m",
    "5 m",
    "6 m"
    ]
},

    {
    numb: 8,
    question: "At a game of billiards, A can give B 15 points in 60 and A can give C to 20 points in 60. How many points can B give C in a game of 90?",
    answer: "10 points",
    options: [
    "30 points",
    "20 points",
    "10 points",
    "12 points"
    ]
},

    {
    numb: 9,
    question: "In a race of 200 m, A can beat B by 31 m and C by 18 m. In a race of 350 m, C will beat B by:",
    answer: "25 m",
    options: [
    "22.75 m",
    "25 m",
    "19.5 m",
    "7.57 m"
    ]
},

    {
    numb: 10,
    question: "In 100 m race, A covers the distance in 36 seconds and B in 45 seconds. In this race A beats B by:",
    answer: "20 m",
    options: [
    "20 m",
    "25 m",
    "22.5 m",
    "9 m"
    ]
},

    {
    numb: 11,
    question: "In a game of 100 points, A can give B 20 points and C 28 points. Then, B can give C:",
    answer: "10 points",
    options: [
    "8  points",
    "10 points",
    "14 points",
    "40 points"
    ]
},

    {
    numb: 12,
    question: "In a 200 metres race A beats B by 35 m or 7 seconds. A's time over the course is:",
    answer: " 33 seconds",
    options: [
    "40 seconds",
    "47 seconds",
    "33  seconds",
    "None of these"
    ]
},

    {
    numb: 13,
    question: "In a 300 m race A beats B by 22.5 m or 6 seconds. B's time over the course is:",
    answer: "80 seconds",
    options: [
    "86 seconds",
    "70 seconds",
    "80 seconds",
    "None of these"
    ]
},

    {
    numb: 14,
    question: "In a 100 m race, A can beat B by 25 m and B can beat C by 4 m. In the same race, A can beat C by:",
    answer: "28 m",
    options: [
    "21 m",
    "26 m",
    "38 m",
    "28 m"
    ]
},

    {
    numb: 15,
    question: "A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is:",
    answer: "15 hours",
    options: [
    "6  hours",
    "10 hours",
    "15 hours",
    "30 hours"
    ]
},

    {
    numb: 16,
    question: "Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
    answer: "120 gallons",
    options: [
    "60 gallons",
    "100 gallons",
    "120 gallons",
    "180 gallons"
    ]
},

    {
    numb: 17,
    question: "A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
    answer: "35 hours",
    options: [
    "20 hours",
    "25 hours",
    "35 hours",
    "Cannot be determined"
    ]
},

    {
    numb: 18,
    question: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",
    answer: "12 minutes",
    options: [
    "12 minutes",
    "15 minutes",
    "25 minutes",
    "50  minutes"
    ]
},

    {
    numb: 19,
    question: "A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?",
    answer: "3 hours 45 minutes",
    options: [
    "3 hours 15 minutes",
    "3 hours 45 minutes",
    "4 hours",
    "4 hours 15 minutes"
    ]
},

    {
    numb: 20,
    question: "Three pipes A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is:",
    answer: "14",
    options: [
    "10",
    "12",
    "14",
    "16"
    ]
},


    {
    numb: 1,
    question: "In the first 10 overs of a cricket game, the run rate was only 3.2. What should be the run rate in the remaining 40 overs to reach the target of 282 runs?",
    answer: "6.25",
    options: [
    "6.25",
    "6.5",
    "6.75",
    "7"
    ]
},

    {
    numb: 2,
    question: "A grocer has a sale of Rs. 6435, Rs. 6927, Rs. 6855, Rs. 7230 and Rs. 6562 for 5 consecutive months. How much sale must he have in the sixth month so that he gets an average sale of Rs. 6500?",
    answer: "Rs. 4991",
    options: [
    "Rs. 4991",
    "Rs. 5991",
    "Rs. 6001",
    "Rs. 6991"
    ]
},

    {
    numb: 3,
    question: "The average of 20 numbers is zero. Of them, at the most, how many may be greater than zero?",
    answer: "19",
    options: [
    "0",
    "1",
    "10",
    "19"
    ]
},

    {
    numb: 4,
    question: "The average weight of 8 person's increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What might be the weight of the new person?",
    answer: "85 kg",
    options: [
    "76 kg",
    "76.5 kg",
    "85 kg",
    "None of these"
    ]
},

    {
    numb: 5,
    question: "The captain of a cricket team of 11 members is 26 years old and the wicket keeper is 3 years older. If the ages of these two are excluded, the average age of the remaining players is one year less than the average age of the whole team. What is the average age of the team?",
    answer: "23 years",
    options: [
    "23 years",
    "24 years",
    "25 years",
    "None of these"
    ]
},

    {
    numb: 6,
    question: "The average monthly income of P and Q is Rs. 5050. The average monthly income of Q and R is Rs. 6250 and the average monthly income of P and R is Rs. 5200. The monthly income of P is:",
    answer: "4000",
    options: [
    "3500",
    "4000",
    "4050",
    "5000"
    ]
},

    {
    numb: 7,
    question: "The average age of husband, wife and their child 3 years ago was 27 years and that of wife and the child 5 years ago was 20 years. The present age of the husband is:",
    answer: "40 years",
    options: [
    "35 years",
    "40 years",
    "50 years",
    "None of these"
    ]
},

    {
    numb: 8,
    question: "A car owner buys petrol at Rs.7.50, Rs. 8 and Rs. 8.50 per litre for three successive years. What approximately is the average cost per litre of petrol if he spends Rs. 4000 each year?",
    answer: "Rs. 7.98",
    options: [
    "Rs. 7.98",
    "Rs. 8",
    "Rs. 8.50",
    "Rs. 9"
    ]
},

    {
    numb: 9,
    question: "The average weight of 16 boys in a class is 50.25 kg and that of the remaining 8 boys is 45.15 kg. Find the average weights of all the boys in the class.",
    answer: "48.55 kg",
    options: [
    "47.55 kg",
    "48 kg",
    "48.55 kg",
    "49.25 kg"
    ]
},

    {
    numb: 10,
    question: "A library has an average of 510 visitors on Sundays and 240 on other days. The average number of visitors per day in a month of 30 days beginning with a Sunday is:",
    answer: "285",
    options: [
    "250",
    "255",
    "285",
    "276"
    ]
},

    {
    numb: 11,
    question: "If the average marks of three batches of 55, 60 and 45 students respectively is 50, 55, 60, then the average marks of all the students is:",
    answer: "54.68",
    options: [
    "53.33",
    "54.68",
    "55",
    "None of these"
    ]
},

    {
    numb: 12,
    question: "A pupil's marks were wrongly entered as 83 instead of 63. Due to that the average marks for the class got increased by half (1/2). The number of pupils in the class is:",
    answer: "40",
    options: [
    "10",
    "30",
    "40",
    "73"
    ]
},

    {
    numb: 13,
    question: "A and B invest in a business in the ratio 3 : 2. If 5% of the total profit goes to charity and A's share is Rs. 855, the total profit is:",
    answer: "Rs. 1500",
    options: [
    "Rs. 1425",
    "Rs. 1500",
    "Rs. 1538.50",
    "Rs. 1564"
    ]
},

    {
    numb: 14,
    question: "A starts business with Rs. 3500 and after 5 months, B joins with A as his partner. After a year, the profit is divided in the ratio 2 : 3. What is B's contribution in the capital?",
    answer: "Rs. 9000",
    options: [
    "Rs. 7500",
    "Rs. 8000",
    "Rs. 9000",
    "Rs. 8500"
    ]
},

    {
    numb: 15,
    question: "A, B, C rent a pasture. A puts 10 oxen for 7 months, B puts 12 oxen for 5 months and C puts 15 oxen for 3 months for grazing. If the rent of the pasture is Rs. 175, how much must C pay as his share of rent?",
    answer: "Rs. 45",
    options: [
    "Rs. 45",
    "Rs. 50",
    "Rs. 55",
    "Rs. 60"
    ]
},

    {
    numb: 16,
    question: "A began a business with Rs. 85,000. He was joined afterwards by B with Rs. 42,500. For how much period does B join, if the profits at the end of the year are divided in the ratio of 3 : 1?",
    answer: "8 months",
    options: [
    "4 months",
    "5 months",
    "6 months",
    "8 months"
    ]
},

    {
    numb: 17,
    question: "How many 4-letter words with or without meaning, can be formed out of the letters of the word, 'LOGARITHMS', if repetition of letters is not allowed?",
    answer: "5040",
    options: [
    "40",
    "400",
    "5040",
    "2520"
    ]
},

    {
    numb: 18,
    question: "Sakshi can do a piece of work in 20 days. Tanya is 25% more efficient than Sakshi. The number of days taken by Tanya to do the same piece of work is:",
    answer: "16",
    options: [
    "10",
    "15",
    "16",
    "18"
    ]
},

    {
    numb: 19,
    question: "10 women can complete a work in 7 days and 10 children take 14 days to complete the work. How many days will 5 women and 10 children take to complete the work?",
    answer: "7",
    options: [
    "3",
    "5",
    "7",
    "None of these"
    ]
},

    {
    numb: 20,
    question: "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:",
    answer: "700 apples",
    options: [
    "588 apples",
    "600 apples",
    "772 apples",
    "700 apples"
    ]
},

{
    question: "A man invested Rs. 1552 in a stock at 97 to obtain an income of Rs. 128. The dividend   from the stock is",
    answer: "8%",
    options: [
      "7.5%",
      "8%",
      "9.7%",
      "None of these"
    ]
  },
  {
    question: "If Rs. 10 be allowed as true discount on a bill of Rs. 110 due at the end of a certain time, then the discount allowed on the same sum due at the end of double the time is:",
    answer: "Rs. 18.33",
    options: [
      "Rs. 20",
      "Rs. 21.81",
      "Rs. 22",
      "Rs. 18.33"

    ]
  },
  {
    question: "A jar full of whisky contains 40% alcohol. A part of this whisky is replaced by another containing 19% alcohol and now the percentage of alcohol was found to be 26%. The quantity of whisky replaced is:",
    answer: "2/3",
    options: [
      "1/3",
      "2/3",
      "2/5",
      "3/5"
    ]
  },
  {
    question: "The present worth of a sum due sometime hence is Rs. 576 and the banker's gain is Rs. 16. The true discount is:",
    answer: "96",
    options: [
      "Rs. 36",
      "Rs. 72",
      "Rs. 48",
      "Rs. 96"

    ]
  },
  {

    question: "A man has some hens and cows. If the number of heads be 48 and the number of feet equals 140, then the number of hens will be:",
    answer: "26",
    options: [
      "22",
      "23",
      "24",
      "26"
    ]
  },
  {

    question: "A train can travel 50% faster than a car. Both start from point A at the same time and reach point B 75 kms away from A at the same time. On the way, however, the train lost about 12.5 minutes while stopping at the stations. The speed of the car is:",
    answer: "100 kmph",
    options: [
      "100 kmph",
      "110 kmph",
      "120 kmph",
      "130 kmph"
    ]
  },
  {

    question: "A, B and C can do a piece of work in 20, 30 and 60 days respectively. In how many days can A do the work if he is assisted by B and C on every third day?",
    answer: "15 days",
    options: [
      "12 days",
      "15 days",
      "16 days",
      "18 days"
    ]
  },
  {

    question: "A alone can do a piece of work in 6 days and B alone in 8 days. A and B undertook to do it for Rs. 3200. With the help of C, they completed the work in 3 days. How much is to be paid to C?",
    answer: "Rs. 400",
    options: [
      "Rs. 375",
      "Rs. 400",
      "Rs. 600",
      "Rs. 800"

    ]
  },
  {

    question: "A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?",
    answer: "Rs. 8925",
    options: [
      "Rs. 8032.50",
      "Rs. 8800",
      "Rs. 8900",
      "Rs. 8925"

    ]
  },
  {

    question: "How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?",
    answer: "4 years",
    options: [
      "3.5 years",
      "4 years",
      "4.5 years",
      "5 years"
    ]
  },
  {

    question: "Reena took a loan of Rs. 1200 with simple interest for as many years as the rate of interest. If she paid Rs. 432 as interest at the end of the loan period, what was the rate of interest?",
    answer: "6",
    options: [
      "3.6",
      "6",
      "18",
      "None of these"
    ]
  },

  {

    question: "A rectangular park 60 m long and 40 m wide has two concrete crossroads running in the middle of the park and rest of the park has been used as a lawn. If the area of the lawn is 2109 sq. m, then what is the width of the road?",
    answer: "2.91 m",
    options: [
      "2.19 m",
      "3 m",
      "5.92 m",
      "None of these"
    ]
  },
  {

    question: "The ratio between the perimeter and the breadth of a rectangle is 5 : 1. If the area of the rectangle is 216 sq. cm, what is the length of the rectangle",
    answer: "18 m",
    options: [
      "16 m",
      "18 m",
      "24 m",
      " Data inedequate"
    ]
  },

  {

    question: "Two numbers are respectively 20% and 50% more than a third number. The ratio of the two numbers is:",
    answer: "4 : 5",
    options: [
      "2 : 5",
      "3 : 5",
      "4 : 5",
      "6 : 7"
    ]
  },
  {

    question: "A sum of money is to be distributed among A, B, C, D in the proportion of 5 : 2 : 4 : 3. If C gets Rs. 1000 more than D, what is B's share?",
    answer: "Rs. 2000",
    options: [
      "Rs. 500",
      "Rs. 1000",
      "Rs. 2000",
      "None of these"
    ]
  },
  {

    question: "In a mixture 60 litres, the ratio of milk and water 2 : 1. If this ratio is to be 1 : 2, then the quantity of water to be further added is:",
    answer: "40 litres",
    options: [
      "20 litres",
      "30 litres",
      "40 litres",
      "60 litres"
    ]
  },

  {

    question: "The total of the ages of Amar, Akbar and Anthony is 80 years. What was the total of their ages three years ago ?",
    answer: "71 years",
    options: [
      "71 years",
      "72 years",
      "74 years",
      "77 years"
    ]
  },


  {

    question: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
    answer: "150 m",
    options: [
      "120 m",
      "100 m",
      "210 m",
      "150 m"
    ]
  },

  {

    question: "A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?",
    answer: "89 sec",
    options: [
      "110 sec",
      "100 sec",
      "89 sec",
      "120 sec"
    ]
  },

  {

    question: "Two trains of equal length are running on parallel lines in the same direction at 46 km/hr and 36 km/hr. The faster train passes the slower train in 36 seconds. The length of each train is:",
    answer: "50 m",
    options: [
      "80 m",
      "70 m",
      "50 m",
      "100 m"
    ]
  },

  {

    question: "A train 360 m long is running at a speed of 45 km/hr. In what time will it pass a bridge 140 m long?",
    answer: "40 m",
    options: [
      "40 m",
      "42 m",
      "45 m",
      "48 m"
    ]
  },

  {
    question: "A goods train runs at the speed of 72 kmph and crosses a 250 m long platform in 26 seconds. What is the length of the goods train?",
    answer: "270 m",
    options: [
      "210 m",
      "200 m",
      "250 m",
      "270 m"
    ]
  },
  {

    question: "It was Sunday on Jan 1, 2006. What was the day of the week Jan 1, 2010?",
    answer: "Friday",
    options: [
      "Monday",
      "Tuesday",
      "Friday",
      "Saturday"
    ]
  },

  {

    question: "Today is Monday. After 61 days, it will be:",
    answer: "Saturday",
    options: [
      "Sunday",
      "Saturday",
      "Tuesday",
      "Wednesday"
    ]
  },

  {

    question: "A hall is 15 m long and 12 m broad. If the sum of the areas of the floor and the ceiling is equal to the sum of the areas of four walls, the volume of the hall is:",
    answer: "1200",
    options: [
      "720",
      "900",
      "1200",
      "1500"
    ]
  },

  {

    question: "66 cubic centimetres of silver is drawn into a wire 1 mm in diameter. The length of the wire in metres will be:",
    answer: "84",
    options: [
      "84",
      "90",
      "168",
      "336-"
    ]
  },

  {

    question: "A boat having a length 3 m and breadth 2 m is floating on a lake. The boat sinks by 1 cm when a man gets on it. The mass of the man is:",
    answer: "60 kg",
    options: [
      "12 kg",
      "60 kg",
      "72 kg",
      "96 kg"
    ]
  },

  {

    question: "How many bricks, each measuring 25 cm x 11.25 cm x 6 cm, will be needed to build a wall of 8 m x 6 m x 22.5 cm?",
    answer: "6400",
    options: [
      "5600",
      "6400",
      "6800",
      "7200"
    ]
  },

  {

    question: "The H.C.F. of two numbers is 23 and the other two factors of their L.C.M. are 13 and 14. The larger of the two numbers is:",
    answer: "322",
    options: [
      "300",
      "322",
      "299",
      "301"
    ]
  },

  {

    question: "Let N be the greatest number that will divide 1305, 4665 and 6905, leaving the same remainder in each case. Then sum of the digits in N is:",
    answer: "4",
    options: [
      "4",
      "5",
      "6",
      "8"
    ]
  },

  {

    question: "The greatest number of four digits which is divisible by 15, 25, 40 and 75 is:",
    answer: "9600",
    options: [
      "9000",
      "9200",
      "9400",
      "9600"
    ]
  },

  {

    question: "Three number are in the ratio of 3 : 4 : 5 and their L.C.M. is 2400. Their H.C.F. is:",
    answer: "40",
    options: [
      "40",
      "80",
      "120",
      "200"
    ]
  },

  {

    question: "The product of two numbers is 2028 and their H.C.F. is 13. The number of such pairs is:",
    answer: "2",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },

  {

    question: "Find the lowest common multiple of 24, 36 and 40.",
    answer: "360",
    options: [
      "120",
      "240",
      "360",
      "480"
    ]
  },

  {
    question: "The least number which should be added to 2497 so that the sum is exactly divisible by 5, 6, 4 and 3 is:",
    answer: "23",
    options: [
      "3",
      "13",
      "23",
      "33"
    ]
  },

  {

    question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
    answer: "10",
    options: [
      "7",
      "8",
      "9",
      "10"
    ]
  },

  {

    question: "The banker's discount on a bill due 4 months hence at 15% is Rs. 420. The true discount is:",
    answer: "Rs. 400",
    options: [
      "Rs. 400",
      "Rs. 360",
      "Rs. 300",
      "Rs. 320"
    ]
  },



]