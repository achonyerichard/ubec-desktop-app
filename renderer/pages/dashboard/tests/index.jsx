"use client";
import TestList from "../../../components/tests/TestList";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
const subjects = [
  {
    subject: "Mathematics",
    courses: [
      {
        course: "Algebra",
        questions: [
          {
            question: "What is the value of 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4",
          },
          {
            question: "Solve for x: 2x + 5 = 11",
            options: ["2", "3", "4", "5"],
            answer: "3",
          },
          {
            question: "What is the square root of 25?",
            options: ["3", "4", "5", "6"],
            answer: "5",
          },
          {
            question: "Which of the following is a prime number?",
            options: ["10", "15", "17", "20"],
            answer: "17",
          },
          {
            question: "What is the result of 3 * 8?",
            options: ["15", "20", "24", "25"],
            answer: "24",
          },
        ],
      },
      {
        course: "Geometry",
        questions: [
          {
            question: "How many degrees are in a right angle?",
            options: ["45", "90", "135", "180"],
            answer: "90",
          },
          {
            question: "What is the formula for the area of a rectangle?",
            options: [
              "length * width",
              "pi * radius^2",
              "base * height / 2",
              "side^2",
            ],
            answer: "length * width",
          },
          {
            question: "Which shape has all sides of equal length?",
            options: ["Rectangle", "Triangle", "Square", "Circle"],
            answer: "Square",
          },
          {
            question: "What is the sum of the interior angles of a triangle?",
            options: [
              "90 degrees",
              "120 degrees",
              "180 degrees",
              "360 degrees",
            ],
            answer: "180 degrees",
          },
          {
            question: "What is the circumference of a circle with radius 5?",
            options: ["5", "10", "15", "31.42"],
            answer: "31.42",
          },
        ],
      },
      {
        course: "Calculus",
        questions: [
          {
            question: "What is a derivative?",
            options: [
              "A rate of change",
              "A sum of numbers",
              "A geometric shape",
              "A type of integration",
            ],
            answer: "A rate of change",
          },
          {
            question: "What is the integral of a constant?",
            options: ["The constant itself", "Zero", "Infinity", "Undefined"],
            answer: "The constant itself",
          },
          {
            question: "What does the notation ∫ represent?",
            options: [
              "Summation",
              "Division",
              "Differentiation",
              "Integration",
            ],
            answer: "Integration",
          },
          {
            question: "What is the product rule in calculus?",
            options: [
              "(fg)' = f'g'",
              "(fg)' = f'g + fg'",
              "(fg)' = fg' + f'g",
              "(fg)' = f''g''",
            ],
            answer: "(fg)' = f'g + fg'",
          },
          {
            question: "What does the Fundamental Theorem of Calculus state?",
            options: [
              "Every function is continuous",
              "Derivatives are always positive",
              "Area under a curve is a constant",
              "Differentiation and integration are inverse operations",
            ],
            answer: "Differentiation and integration are inverse operations",
          },
        ],
      },
      {
        course: "Statistics",
        questions: [
          {
            question: "What is the mean of a set of numbers?",
            options: [
              "The middle number",
              "The sum of the numbers divided by the count",
              "The largest number",
              "The smallest number",
            ],
            answer: "The sum of the numbers divided by the count",
          },
          {
            question: "What is the median?",
            options: [
              "The number that occurs most frequently",
              "The average of the middle two numbers",
              "The smallest number",
              "The largest number",
            ],
            answer: "The average of the middle two numbers",
          },
          {
            question: "What is the range in statistics?",
            options: [
              "The number of data points",
              "The smallest number",
              "The difference between the largest and smallest number",
              "The sum of the numbers",
            ],
            answer: "The difference between the largest and smallest number",
          },
          {
            question: "What is standard deviation?",
            options: [
              "A measure of spread or dispersion",
              "The same as mean",
              "A type of median",
              "A type of mode",
            ],
            answer: "A measure of spread or dispersion",
          },
          {
            question: "What does the z-score represent?",
            options: [
              "The rank of a data point",
              "The number of standard deviations from the mean",
              "The number of data points",
              "The sum of the data points",
            ],
            answer: "The number of standard deviations from the mean",
          },
        ],
      },
    ],
    id: 0,
  },
  {
    subject: "Science",
    courses: [
      {
        course: "Biology",
        questions: [
          {
            question: "What is the main function of the heart?",
            options: ["Digestion", "Breathing", "Pumping blood", "Excretion"],
            answer: "Pumping blood",
          },
          {
            question: "Which gas do plants absorb from the atmosphere?",
            options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
            answer: "Carbon dioxide",
          },
          {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Cell membrane", "Mitochondria", "Cytoplasm"],
            answer: "Mitochondria",
          },
          {
            question: "Which gas do humans exhale when they breathe out?",
            options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
            answer: "Carbon dioxide",
          },
          {
            question: "What is the primary function of red blood cells?",
            options: [
              "Transporting oxygen",
              "Digestion",
              "Photosynthesis",
              "Immune defense",
            ],
            answer: "Transporting oxygen",
          },
        ],
      },
      {
        course: "Physics",
        questions: [
          {
            question: "What is the SI unit of force?",
            options: ["Meter", "Kilogram", "Newton", "Joule"],
            answer: "Newton",
          },
          {
            question: "What is the law of conservation of energy?",
            options: [
              "Energy can be created and destroyed",
              "Energy is always conserved",
              "Energy can be converted into matter",
              "Energy cannot be converted",
            ],
            answer: "Energy is always conserved",
          },
          {
            question: "What is the acceleration due to gravity on Earth?",
            options: [
              "9.81 m/s²",
              "6.67 × 10^-11 m³/(kg·s²)",
              "299,792,458 m/s",
              "32 ft/s²",
            ],
            answer: "9.81 m/s²",
          },
          {
            question: "Which of the following is a vector quantity?",
            options: ["Distance", "Speed", "Mass", "Velocity"],
            answer: "Velocity",
          },
          {
            question: "What is Newton's second law of motion?",
            options: [
              "An object at rest tends to stay at rest",
              "Force is mass times acceleration",
              "For every action, there is an equal and opposite reaction",
              "An object in motion tends to stay in motion unless acted upon by an external force",
            ],
            answer: "Force is mass times acceleration",
          },
        ],
      },
      {
        course: "Chemistry",
        questions: [
          {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Cu", "Fe"],
            answer: "Au",
          },
          {
            question: "What is the pH scale used to measure?",
            options: [
              "Temperature",
              "Pressure",
              "Acidity or alkalinity",
              "Density",
            ],
            answer: "Acidity or alkalinity",
          },
          {
            question: "What is the chemical formula for water?",
            options: ["H2O2", "H2SO4", "CO2", "H2O"],
            answer: "H2O",
          },
          {
            question: "What gas do plants release during photosynthesis?",
            options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Methane"],
            answer: "Oxygen",
          },
          {
            question: "What is the atomic number of carbon?",
            options: ["6", "12", "14", "20"],
            answer: "6",
          },
        ],
      },
      {
        course: "Astronomy",
        questions: [
          {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Mars", "Saturn", "Jupiter"],
            answer: "Jupiter",
          },
          {
            question: "What causes a solar eclipse?",
            options: [
              "Earth's shadow on the moon",
              "Moon's shadow on the Earth",
              "Jupiter's gravity",
              "Sun's rotation",
            ],
            answer: "Moon's shadow on the Earth",
          },
          {
            question: "How many moons does Mars have?",
            options: ["0", "1", "2", "3"],
            answer: "2",
          },
          {
            question: "What is a light-year?",
            options: [
              "A unit of time",
              "A unit of energy",
              "A unit of distance",
              "A unit of brightness",
            ],
            answer: "A unit of distance",
          },
          {
            question: "What is a meteorite?",
            options: [
              "A type of asteroid",
              "A falling star",
              "A fragment of a meteoroid that reaches the Earth's surface",
              "A comet",
            ],
            answer:
              "A fragment of a meteoroid that reaches the Earth's surface",
          },
        ],
      },
    ],
    id: 1,
  },
  {
    subject: "Agricultural Education",
    courses: [
      {
        course: "Crop Science",
        questions: [
          {
            question: "What is the primary purpose of crop rotation?",
            options: [
              "Increase soil erosion",
              "Enhance soil fertility",
              "Reduce crop yield",
              "Promote disease resistance",
            ],
            answer: "Enhance soil fertility",
          },
          {
            question: "Which gas is released during photosynthesis?",
            options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
            answer: "Oxygen",
          },
          {
            question: "What is the optimal pH range for most crops?",
            options: ["pH 2-3", "pH 7-8", "pH 5-6", "pH 8-9"],
            answer: "pH 5-6",
          },
          {
            question:
              "What is the primary function of a plough in agriculture?",
            options: [
              "Seed planting",
              "Weed removal",
              "Soil tillage",
              "Irrigation",
            ],
            answer: "Soil tillage",
          },
          {
            question: "Which of the following is a legume crop?",
            options: ["Wheat", "Rice", "Soybean", "Maize"],
            answer: "Soybean",
          },
        ],
      },
      {
        course: "Livestock Management",
        questions: [
          {
            question: "Which animal is known as the 'ship of the desert'?",
            options: ["Elephant", "Horse", "Camel", "Cow"],
            answer: "Camel",
          },
          {
            question:
              "What is the term for breeding animals with similar characteristics?",
            options: [
              "Crossbreeding",
              "Inbreeding",
              "Outbreeding",
              "Selective breeding",
            ],
            answer: "Selective breeding",
          },
          {
            question: "What is the primary nutrient in animal feed?",
            options: ["Protein", "Water", "Fiber", "Vitamins"],
            answer: "Protein",
          },
          {
            question:
              "What is the process of feeding newborn animals with milk from another animal?",
            options: ["Weaning", "Feeding", "Milking", "Fostering"],
            answer: "Fostering",
          },
          {
            question:
              "Which disease affects cattle and is transmitted by tsetse flies?",
            options: [
              "Brucellosis",
              "Foot-and-mouth disease",
              "Trypanosomiasis",
              "Rinderpest",
            ],
            answer: "Trypanosomiasis",
          },
        ],
      },
    ],
    id: 2,
  },
  {
    subject: "Health Education",
    courses: [
      {
        course: "Nutrition",
        questions: [
          {
            question: "Which nutrient is the body's primary source of energy?",
            options: ["Protein", "Carbohydrates", "Fats", "Vitamins"],
            answer: "Carbohydrates",
          },
          {
            question: "What is the role of vitamin D in the body?",
            options: [
              "Strong bones",
              "Healthy skin",
              "Blood clotting",
              "Digestion",
            ],
            answer: "Strong bones",
          },
          {
            question: "How many calories are in a gram of protein?",
            options: ["4 calories", "7 calories", "9 calories", "12 calories"],
            answer: "4 calories",
          },
          {
            question: "What is the function of fiber in the diet?",
            options: [
              "Energy source",
              "Muscle building",
              "Digestive health",
              "Antioxidant",
            ],
            answer: "Digestive health",
          },
          {
            question:
              "Which mineral is important for nerve and muscle function?",
            options: ["Iron", "Calcium", "Sodium", "Potassium"],
            answer: "Potassium",
          },
        ],
      },
      {
        course: "Physical Fitness",
        questions: [
          {
            question: "What is cardiovascular exercise?",
            options: [
              "Strength training",
              "Flexibility exercises",
              "Activities that raise heart rate",
              "Yoga",
            ],
            answer: "Activities that raise heart rate",
          },
          {
            question: "What is the recommended daily exercise for adults?",
            options: ["10 minutes", "30 minutes", "1 hour", "2 hours"],
            answer: "30 minutes",
          },
          {
            question: "What is the importance of warming up before exercise?",
            options: [
              "It cools down the body",
              "It increases heart rate",
              "It prevents injury",
              "It builds muscle",
            ],
            answer: "It prevents injury",
          },
          {
            question: "What does BMI stand for?",
            options: [
              "Body Mass Index",
              "Balanced Muscle Intensity",
              "Body Measurement Index",
              "Bone Mass Indicator",
            ],
            answer: "Body Mass Index",
          },
          {
            question: "How can flexibility be improved?",
            options: [
              "Strength training",
              "Aerobic exercise",
              "Stretching exercises",
              "Weightlifting",
            ],
            answer: "Stretching exercises",
          },
        ],
      },
      {
        course: "Mental Health",
        questions: [
          {
            question: "What is stress and its impact on health?",
            options: [
              "Positive and helpful",
              "No impact on health",
              "Negative impact on health",
              "Not related to health",
            ],
            answer: "Negative impact on health",
          },
          {
            question: "What is the importance of sleep for mental health?",
            options: [
              "No impact on mental health",
              "Impacts physical health only",
              "Improves mental health",
              "Reduces mental health",
            ],
            answer: "Improves mental health",
          },
          {
            question: "What is mindfulness meditation?",
            options: [
              "Being aware of the present moment",
              "Daydreaming",
              "Analyzing the past",
              "Ignoring the present",
            ],
            answer: "Being aware of the present moment",
          },
          {
            question:
              "What is the role of a counselor or therapist in mental health?",
            options: [
              "No role in mental health",
              "Diagnosing diseases",
              "Providing emotional support",
              "Prescribing medication",
            ],
            answer: "Providing emotional support",
          },
          {
            question: "What is resilience in the context of mental health?",
            options: [
              "Lack of coping skills",
              "Inflexibility",
              "Bouncing back from adversity",
              "No impact on mental health",
            ],
            answer: "Bouncing back from adversity",
          },
        ],
      },
      {
        course: "Substance Abuse Awareness",
        questions: [
          {
            question:
              "What is the most commonly abused legal drug in the world?",
            options: ["Alcohol", "Nicotine", "Caffeine", "Aspirin"],
            answer: "Alcohol",
          },
          {
            question: "What is the main psychoactive ingredient in marijuana?",
            options: [
              "Cannabidiol",
              "Tetrahydrocannabinol (THC)",
              "Caffeine",
              "Aspirin",
            ],
            answer: "Tetrahydrocannabinol (THC)",
          },
          {
            question:
              "What is the long-term impact of drug addiction on mental health?",
            options: [
              "No impact on mental health",
              "Improved mental health",
              "Worsened mental health",
              "Dependence on drugs",
            ],
            answer: "Worsened mental health",
          },
          {
            question: "What is a common risk associated with tobacco use?",
            options: [
              "Improved lung health",
              "Decreased risk of cancer",
              "Respiratory problems",
              "Healthy teeth",
            ],
            answer: "Respiratory problems",
          },
          {
            question: "What is a potential consequence of alcohol abuse?",
            options: [
              "Improved memory",
              "Liver damage",
              "Weight loss",
              "Improved mental health",
            ],
            answer: "Liver damage",
          },
        ],
      },
    ],
    id: 3,
  },
  {
    subject: "English Language",
    courses: [
      {
        course: "Grammar",
        questions: [
          {
            question: "What is a noun?",
            options: [
              "Person, place, thing",
              "Action word",
              "Adjective",
              "Pronoun",
            ],
            answer: "Person, place, thing",
          },
          {
            question: "Which part of speech describes a verb?",
            options: ["Adverb", "Noun", "Adjective", "Conjunction"],
            answer: "Adverb",
          },
          {
            question:
              "What is the subject of the sentence: 'The cat is sleeping'?",
            options: ["Cat", "Is", "The", "Sleeping"],
            answer: "Cat",
          },
          {
            question: "Which sentence is in the past tense?",
            options: [
              "She will go to the store.",
              "They are playing soccer.",
              "He ate lunch.",
              "I am reading a book.",
            ],
            answer: "He ate lunch.",
          },
          {
            question: "What is the comparative form of 'good'?",
            options: ["Gooder", "Better", "Best", "Goods"],
            answer: "Better",
          },
        ],
      },
      {
        course: "Vocabulary",
        questions: [
          {
            question: "What does 'eloquent' mean?",
            options: ["Angry", "Well-spoken", "Sad", "Funny"],
            answer: "Well-spoken",
          },
          {
            question: "Choose the antonym of 'begin':",
            options: ["Start", "End", "Commence", "Initiate"],
            answer: "End",
          },
          {
            question: "What is the meaning of 'perceive'?",
            options: ["See", "Forget", "Smell", "Hear"],
            answer: "See",
          },
          {
            question: "Select the synonym for 'happy':",
            options: ["Sad", "Joyful", "Angry", "Calm"],
            answer: "Joyful",
          },
          {
            question: "What does 'ambiguous' mean?",
            options: ["Clear", "Unsure", "Confusing", "Direct"],
            answer: "Confusing",
          },
        ],
      },
      {
        course: "Reading Comprehension",
        questions: [
          {
            question: "What was the main idea of the passage?",
            options: [
              "The benefits of exercise",
              "The history of baseball",
              "How to bake a cake",
              "Famous painters",
            ],
            answer: "The benefits of exercise",
          },
          {
            question: "Which character was the protagonist in the story?",
            options: [
              "The villain",
              "The sidekick",
              "The hero",
              "The narrator",
            ],
            answer: "The hero",
          },
          {
            question: "What can you infer from the passage?",
            options: [
              "The character is sad",
              "The cake is delicious",
              "The sun is shining",
              "The mystery is solved",
            ],
            answer: "The character is sad",
          },
          {
            question: "What is the purpose of the passage?",
            options: [
              "To entertain",
              "To inform",
              "To persuade",
              "To describe",
            ],
            answer: "To inform",
          },
          {
            question: "What is the tone of the passage?",
            options: ["Happy", "Sad", "Excited", "Informative"],
            answer: "Informative",
          },
        ],
      },
      {
        course: "Writing Skills",
        questions: [
          {
            question: "What is the correct way to format a letter?",
            options: [
              "Left-justified",
              "Centered",
              "Right-justified",
              "Block style",
            ],
            answer: "Block style",
          },
          {
            question: "Which sentence is grammatically incorrect?",
            options: [
              "She walks to the store.",
              "I plays soccer.",
              "They are reading a book.",
              "He is running fast.",
            ],
            answer: "I plays soccer.",
          },
          {
            question: "What is the purpose of a persuasive essay?",
            options: [
              "To inform",
              "To describe",
              "To entertain",
              "To persuade",
            ],
            answer: "To persuade",
          },
          {
            question:
              "Choose the correct punctuation for the sentence: 'I like ice cream'",
            options: [
              "I like ice cream.",
              "I like ice cream?",
              "I like ice cream!",
              "I like ice cream;",
            ],
            answer: "I like ice cream.",
          },
          {
            question: "What is the best way to improve your writing?",
            options: [
              "Use complex words",
              "Write slowly",
              "Revise and edit",
              "Never use adjectives",
            ],
            answer: "Revise and edit",
          },
        ],
      },
    ],
    id: 4,
  },
];

const Tests = () => {
  const router = useRouter();

  const [activeTest, setActiveTest] = useState(subjects[0]);
  // useEffect(() => {
  //   test ? setActiveTest(subjects[test]) : subjects[0];

  // }, [test]);
  const handleTabClick = (tab) => {
    setActiveTest(tab);
  };
  return (
    <section className="w-full overflow-hidden">
      <div className='w-full max-w-[1320px] flex items-end px-4 lg:px-20   mx-auto mt-10 rounded-[30px] h-60 lg:h-72 bg-no-repeat bg-blend-multiply bg-center bg-[url("/test/test-bg.png")]  lg:bg-cover'>
        <div>
          <h2 className="text-3xl text-lmsWhite pb-5 font-bold">
            Select a Test Question
          </h2>
          <ul className=" flex border-b  items-center flex-row lg:space-x-6 space-x-4  sticky top-0 w-full overflow-y-hidden z-10  overflow-x-auto ">
            {subjects.map((item) => (
              <li
                key={item.id}
                className={`mr-2 cursor-pointer py-4 text-lg  text-lmsWhite ${
                  activeTest?.id === item.id
                    ? "font-bold hover:border-b-2 hover:border-lmsWhite  border-b-2 border-lmsWhite "
                    : "font-thin"
                }`}
                onClick={() => handleTabClick(item)}
              >
                {item.subject}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10   bg-blue-200 bg-opacity-25 px-5 py-10">
        <TestList data={activeTest.courses} />
      </div>
      {/* <main className="h-auto mb-20 bg-blue-100 py-20 mt-10 lg:px-20 px-10 ">
        <div className="max-w-[1200px] mx-auto">
          <OngoingClasses />
          <Courses />
          <RecommendedCourses />
        </div>
      </main> */}
    </section>
  );
};

export default Tests;
