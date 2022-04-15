// creating an array and passing the number, questions, options, and answers
let logicalquestions = [

    {
        numb: 1,
        question: "Which word does NOT belong with the others?",
        answer: "tape",
        options: [
            "tape",
            "twine",
            "cord",
            "yarn"
        ]
    },

    {
        numb: 2,
        question: "Which word does NOT belong with the others?",
        answer: "rug",
        options: [
            "couch",
            "rug",
            "table",
            "chair"
        ]
    },

    {
        numb: 3,
        question: "Which word does NOT belong with the others?",
        answer: "vision",
        options: [
            "cornea",
            "retina",
            "pupil",
            "vision"
        ]
    },

    {
        numb: 4,
        question: "Which word does NOT belong with the others?",
        answer: "punctuation",
        options: [
            "noun",
            "preposition",
            "punctuation",
            "adverb"
        ]
    },

    {
        numb: 5,
        question: "JAK, KBL, LCM, MDN, _____",
        answer: "NEO",
        options: [
            "EOP",
            "NEO",
            "SAS",
            "PFD"
        ]
    },

    {
        numb: 6,
        question: "BCB, DED, FGF, HIH, ___",
        answer: "JKJ",
        options: [
            "ASD",
            "JKJ",
            "ASD",
            "JHJ"
        ]
    },

    {
        numb: 7,
        question: "Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?",
        answer: "14",
        options: [
            "12",
            "14",
            "25",
            "53"
        ]
    },

    {
        numb: 8,
        question: "Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?",
        answer: "25",
        options: [
            "11",
            "22",
            "25",
            "26"
        ]
    },

    {
        numb: 9,
        question: "Look at this series: 58, 52, 46, 40, 34, ... What number should come next?",
        answer: "28",
        options: [
            "26",
            "28",
            "30",
            "32"
        ]
    },

    {
        numb: 10,
        question: "Look at this series: 3, 4, 7, 8, 11, 12, ... What number should come next?",
        answer: "15",
        options: [
            "7",
            "10",
            "15",
            "14"
        ]
    },

    {
        numb: 11,
        question: "If A is the brother of B; B is the sister of C; and C is the father of D, how D is related to A?",
        answer: "None of these",
        options: [
          "Brother",
          "Sister",
          "Newphew",
          "None of these"
        ]
      },

    {
        numb: 12,
        question: "Vincent has a paper route. Each morning, he delivers 37 newspapers to customers in his neighborhood.It takes Vincent 50 minutes to deliver all the papers.If Vincent is sick or has other plans, his friend Thomas,who lives on the same street, will sometimes deliver the papers for him.",

    answer: "Vincent and Thomas live in the same neighborhood.",
        options: [
            "Vincent and Thomas live in the same neighborhood.",
            "It taked Thomas more than 50 minutes to deliver the papers.",
    "It is dark outside when Vincent begins his delivers.",
    "Thomas would like to have his own paper route."
        ]
    },

    {
        numb: 13,
        question: "Erin is twelve years old. For three years, she has been asking her parents for a dog.Her parents have told her that they believe a dog would not be happy in an apartment, but they have given her permission to have a bird.Erin has not yet decided what kind of bird she would like to have.",
    answer: "Erin and her parents live in an apartment.",
        options: [
            "Erin's parents like birds better than they like dogs.",
    "Erin does not like birds.",
    "Erin and her parents live in an apartment.",
    "Erin and her parents would like to move."
        ]
    },

    {
        numb: 14,
        question: "When they heard news of the hurricane, Maya and Julian decided to change their vacation plans.Instead of traveling to the island beach resort, they booked a room at a fancy new spa in the mountains.Their plans were a bit more expensive, but they'd heard wonderful things about the spa and they were relieved to find availability on such short notice.",
    answer: "Maya and Julian decided to change their vacation plans because of the hurricane.",
    options: [
            "Maya and Julian take beach vacations every year.",
    "The spa is overpriced.",
    "It is usually necessary to book at least six months in advance at the spa.",
    "Maya and Julian decided to change their vacation plans because of the hurricane."
    ]
},

{
    numb: 15,
        question: "Violating an Apartment Lease: occurs when a tenant does something prohibited by the legally binding document that he or she has signed with a landlord. Which situation below is the best example of Violating an Apartment Lease?",
    answer: "Valerie recently lost her job and, for the last three months, has neglected to pay her landlord the monthly rent they agreed upon in writing when she moved into her apartment eight months ago.",
    options: [
        "Tim has decided to move to another city, so he calls his landlord to tell him that he is not interested in renewing his lease when it expires next month.",
    "Valerie recently lost her job and, for the last three months, has neglected to pay her landlord the monthly rent they agreed upon in writing when she moved into her apartment eight months ago.",
    "Mark writes a letter to his landlord that lists numerous complaints about the apartment he has agreed to rent for two years.",
    "Leslie thinks that her landlord is neglecting the building in which she rents an apartment. She calls her attorney to ask for advice."
    ]
},

{
    numb: 16,
        question: "Posthumous Publication: occurs when a book is published after the author's death. Which situation below is the best example of Posthumous Publication ?",
    answer: "Richard's illness took his life before he was able to enjoy the amazing early reviews of his novel.",
    options: [
        "Richard's illness took his life before he was able to enjoy the amazing early reviews of his novel.",
    "Melissa's publisher cancels her book contract after she fails to deliver the manuscript on time.",
    "Clarence never thought he'd live to see the third book in his trilogy published.",
    "Elizabeth is honored with a prestigious literary award for her writing career and her daughter accepts the award on behalf of her deceased mother."
    ]
},

{
    numb: 17,
        question: "harvest",
            answer: "crop",
                options: [
                    "autumn",
                    "stockpile",
                    "tractor",
                    "crop"
                ]
},

{
    numb: 18,
        question: "desert",
            answer: "arid",
                options: [
                    "cactus",
                    "arid",
                    "oasis",
                    "flat"
                ]
},

{
    numb: 19,
        question: "language",
            answer: "words",
                options: [
                    "tongue",
                    "slang",
                    "writing",
                    "words"
                ]
},

{
    numb: 20,
        question: "school",
            answer: "student",
                options: [
                    "report card",
                    "test",
                    "student",
                    "learning"
                ]
},


    {
    numb: 1,
    question: "Look at this series: 80, 10, 70, 15, 60, ... What number should come next?",
    answer: "20",
    options: [
    "20",
    "30",
    "40",
    "50"
    ]
},

    {
    numb: 2,
    question: "28 25 5 21 18 5 14",
    answer: "11 5",
    options: [
    "11 5",
    "10 7",
    "11 8",
    "10 5"
    ]
},

    {
    numb: 3,
    question: "8 11 21 15 18 21 22",
    answer: "25 21",
    options: [
    "25 21",
    "25 18",
    "25 29",
    "22 26"
    ]
},

    {
    numb: 4,
    question: "Look at this series: 664, 332, 340, 170, ____, 89, ... What number should fill the blank?",
    answer: "178",
    options: [
    "85",
    "97",
    "109",
    "178"
    ]
},

    {
    numb: 5,
    question: "Look at this series: V, VIII, XI, XIV, __, XX, ... What number should fill the blank?",
    answer: "XVII",
    options: [
    "IX",
    "XIV",
    "XV",
    "XVII"
    ]
},

    {
    numb: 6,
    question: "Look at this series: 8, 43, 11, 41, __, 39, 17, ... What number should fill in the blank?",
    answer: "14",
    options: [
    "8",
    "14",
    "44",
    "43"
    ]
},

    {
    numb: 7,
    question: "Look at this series: VI, 10, V, 11, __, 12, III, ... What number should fill the blank?",
    answer: "IV",
    options: [
    "III",
    "IV",
    "IX",
    "14"
    ]
},

    {
    numb: 8,
    question: "Look at this series: VI, 10, V, 11, __, 12, III, ... What number should fill the blank?",
    answer: "3",
    options: [
    "1",
    "3",
    "6",
    "27"
    ]
},

    {
    numb: 9,
    question: "Look at this series: 15, __, 27, 27, 39, 39, ... What number should fill the blank?",
    answer: "15",
    options: [
    "51",
    "39",
    "23",
    "15"
    ]
},

    {
    numb: 10,
    question: "Look at this series: 0.15, 0.3, ____, 1.2, 2.4, ... What number should fill the blank?",
    answer: "0.6",
    options: [
    "4.8",
    "0.006",
    "0.6",
    "0.9"
    ]
},

    {
    numb: 11,
    question: "Which word does NOT belong with the others?",
    answer: "beak",
    options: [
    "wing",
    "fin",
    "beak",
    "rudder"
    ]
},

    {
    numb: 12,
    question: "Which word does NOT belong with the others?",
    answer: "slice",
    options: [
    "core",
    "seeds",
    "pulp",
    "slice"
    ]
},

    {
    numb: 13,
    question: "Which word does NOT belong with the others?",
    answer: "favorable",
    options: [
    "fair",
    "just",
    "equitable",
    "favorable"
    ]
},

    {
    numb: 14,
    question: "Which word does NOT belong with the others?",
    answer: "beautiful",
    options: [
    "unique",
    "beautiful",
    "rare",
    "exceptional"
    ]
},

    {
    numb: 15,
    question: "MONK : DEVOTION",
    answer: "rover : wanderlust",
    options: [
    "maniac : pacifism",
    "explorer : contentment",
    "visionary : complacency",
    "rover : wanderlust"
    ]
},

    {
    numb: 16,
    question: "SLAPSTICK : LAUGHTER",
    answer: "horror : fear",
    options: [
    "fallacy : dismay",
    "horror : fear",
    "mimicry : tears",
    "satire : anger"
    ]
},

    {
    numb: 17,
    question: "VERVE : ENTHUSIASM",
    answer: "devotion : reverence",
    options: [
    "loyalty : duplicity",
    "intensity : color",
    "devotion : reverence",
    "generosity : elation"
    ]
},

    {
    numb: 18,
    question: "BINDING : BOOK",
    answer: "frame : picture",
    options: [
    "frame : picture",
    "criminal : gang",
    "display : museum",
    "nail : hammer"
    ]
},

    {
    numb: 19,
    question: "ovation",
    answer: "applause",
    options: [
    "outburst",
    "bravo",
    "applause",
    "encore"
    ]
},

    {
    numb: 20,
    question: "bonus",
    answer: "reward",
    options: [
    "reward",
    "raise",
    "cash",
    "employer"
    ]
},

{

    question: "From a group of 7 men and 6 women, five persons are to be selected to form a committee so that at least 3 men are there on the committee. In how many ways can it be done?",
    answer: "756",
    options: [
      "624",
      "756",
      "844",
      "None of these"
    ]
  },
  {

    question: "In how many different ways can the letters of the word 'CORPORATION' be arranged so that the vowels always come together?",
    answer: "50400",
    options: [
      "810",
      "1440",
      "50400",
      "2800"
    ]
  },
  {

    question: "Out of 7 consonants and 4 vowels, how many words of 3 consonants and 2 vowels can be formed?",
    answer: "25200",
    options: [
      "210",
      "1050",
      "25200",
      "21400"
    ]
  },
  {

    question: "How many 3-digit numbers can be formed from the digits 2, 3, 5, 6, 7 and 9, which are divisible by 5 and none of the digits is repeated?",
    answer: "20",
    options: [
      "5",
      "10",
      "15",
      "20"
    ]
  },

  {

    question: "How many times are the hands of a clock at right angle in a day?",
    answer: "44",
    options: [
      "22",
      "24",
      "44",
      "48"
    ]
  },

  {

    question: "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
    answer: "10",
    options: [
      "7",
      "10",
      "12",
      "13"
    ]
  },
  {

    question: "Look at this series: 36, 34, 30, 28, 24, ... What number should come next?",
    answer: "22",
    options: [
      "20",
      "22",
      "23",
      "26"
    ]
  },
  {

    question: "Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?",
    answer: "27",
    options: [
      "12",
      "14",
      "27",
      "53"
    ]
  },
  {

    question: "SCD, TEF, UGH, ____, WKL",
    answer: "VIJ",
    options: [
      "CMN",
      "UJI",
      "VJI",
      "IJT"
    ]
  },
  {

    question: "CMM, EOO, GQQ, _____, KUU",
    answer: "ISS",
    options: [
      "GSS",
      "GRR",
      "ISS",
      "ITT"
    ]
  },
  {

    question: "Mara runs faster than Gail.Lily runs faster than Mara.Gail runs faster than Lily.If the first two statements are true, the third statement is",
    answer: "False",
    options: [
      "True",
      "False",
      "Uncertain",
      "nk"
    ]
  },
  {

    question: "All the offices on the 9th floor have wall-to-wall carpeting.No wall-to-wall carpeting is pink.None of the offices on the 9th floor has pink wall-to-wall carpeting.If the first two statements are true, the third statement is",
    answer: "True",
    options: [
      "True",
      "False",
      "Uncertain"

    ]
  },
  {

    question: "Look at this series: V, VIII, XI, XIV, __, XX, ... What number should fill the blank?",
    answer: "XVII",
    options: [
      "IX",
      "XXIII",
      "XV",
      "XVII"
    ]
  },
  {

    question: "Look at this series: 70, 71, 76, __, 81, 86, 70, 91, ... What number should fill the blank?",
    answer: "70",
    options: [
      "70",
      "71",
      "96",
      "80"
    ]
  },
  {

    question: "Look at this series: 5.2, 4.8, 4.4, 4, ... What number should come next?",
    answer: "3.6",
    options: [
      "3",
      "3.3",
      "3.6",
      "3.5"
    ]
  },
  {

    question: "Pointing to a photograph of a boy Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?",
    answer: "Father",
    options: [
      "Father",
      "Uncle",
      "Cousin",
      "None of these"
    ]
  },
  {

    question: "If A is the brother of B; B is the sister of C; and C is the father of D, how D is related to A?",
    answer: "None of these",
    options: [
      "Brother",
      "Sister",
      "Newphew",
      "None of these"
    ]
  },
  {

    question: "Pointing to a photograph. Bajpai said, 'He is the son of the only daughter of the father of my brother.' How Bajpai is related to the man in the photograph?",
    answer: "Maternal Uncle",
    options: [
      "Brother",
      "Father",
      "Newphew",
      "Maternal Uncle"
    ]
  },

  {
    question: "FAG, GAF, HAI, IAH, ____",
    answer: "JAK",
    options: [
      "JAK",
      "HAL",
      "HAK",
      "JAI"
    ]
  },

  {
    question: "Look at this series: 1.5, 2.3, 3.1, 3.9, ... What number should come next?",
    answer: "4.7",
    options: [
      "4.2",
      "4.4",
      "5.1",
      "4.7"
    ]
  },

  {
    question: "Look at this series: 544, 509, 474, 439, ... What number should come next?",
    answer: "404",
    options: [
      "404",
      "414",
      "420",
      "455"
    ]
  },

  {
    question: "Look at this series: 2, 6, 18, 54, ... What number should come next?",
    answer: "162",
    options: [
      "108",
      "148",
      "162",
      "216"
    ]
  },



]