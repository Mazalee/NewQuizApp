import { FaCode, FaCss3, FaJs } from "react-icons/fa";

export const questions = [
  {
    subject: "HTML",
    icon: <FaCode className="icons" fill="#e38d5a" />,
    iconFill: "#e38d5a",
    backgroundColor: "#fef0eb",
    questions: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language",
          "None of the above",
        ],
        correctOption: 0,
      },
      {
        id: 2,
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correctOption: 0,
      },
      {
        id: 3,
        question: "Which HTML tag is used to define a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<hyperlink>"],
        correctOption: 1,
      },
      {
        id: 4,
        question: "What is the correct HTML for adding a background color?",
        options: [
          "<body bg='yellow'>",
          "<background>yellow</background>",
          "<body style='background-color:yellow;'>",
          "<color>yellow</color>",
        ],
        correctOption: 2,
      },
      {
        id: 5,
        question: "Which character is used to indicate an end tag?",
        options: ["/", "<", ">", "^"],
        correctOption: 0,
      },
      {
        id: 6,
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
          "<a href='http://www.example.com'>Example</a>",
          "<a>http://www.example.com</a>",
          "<hyperlink>http://www.example.com</hyperlink>",
          "<link>http://www.example.com</link>",
        ],
        correctOption: 0,
      },
      {
        id: 7,
        question: "What is the correct HTML for inserting an image?",
        options: [
          "<img src='image.jpg' alt='MyImage'>",
          "<image href='image.jpg' alt='MyImage'>",
          "<img alt='MyImage'>image.jpg</img>",
          "<img href='image.jpg' alt='MyImage'>",
        ],
        correctOption: 0,
      },
      {
        id: 8,
        question: "Which HTML tag is used to define a table?",
        options: ["<table>", "<t>", "<tab>", "<tbl>"],
        correctOption: 0,
      },
      {
        id: 9,
        question:
          "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: ["alt", "title", "src", "href"],
        correctOption: 0,
      },
      {
        id: 10,
        question: "What is the correct HTML for making a checkbox?",
        options: [
          "<input type='check'>",
          "<checkbox>",
          "<input type='checkbox'>",
          "<check>",
        ],
        correctOption: 2,
      },
    ],
  },
  {
    subject: "CSS",
    icon: <FaCss3 className="icons" fill="#81e8b5" />,
    iconFill: "#81e8b5",
    backgroundColor: "#e1fdee",
    questions: [
      {
        id: 1,
        question:
          "Which property is used to change the background color of an element?",
        options: ["background-color", "color", "bgcolor", "background"],
        correctOption: 0,
      },
      {
        id: 2,
        question: "Which CSS property controls the text size?",
        options: ["font-size", "text-size", "font-style", "text-style"],
        correctOption: 0,
      },
      {
        id: 3,
        question: "Which CSS property is used to make text bold?",
        options: ["font-weight", "text-style", "font-style", "bold"],
        correctOption: 0,
      },
      {
        id: 4,
        question: "Which CSS property is used to create rounded corners?",
        options: [
          "border-radius",
          "border-style",
          "corner-radius",
          "curve-border",
        ],
        correctOption: 0,
      },
      {
        id: 5,
        question:
          "Which CSS property is used to control the space between lines of text?",
        options: ["line-height", "text-spacing", "spacing", "line-spacing"],
        correctOption: 0,
      },
      {
        id: 6,
        question:
          "Which CSS property is used to control the position of an element?",
        options: ["position", "place", "element-position", "locate"],
        correctOption: 0,
      },
      {
        id: 7,
        question: "Which CSS property is used to underline text?",
        options: ["text-decoration", "underline", "decoration", "text-style"],
        correctOption: 0,
      },
      {
        id: 8,
        question:
          "Which CSS property is used to specify the space between the border and the content of an element?",
        options: ["padding", "spacing", "margin", "border-spacing"],
        correctOption: 0,
      },
      {
        id: 9,
        question:
          "Which CSS property is used to make elements float to the left or right?",
        options: ["float", "align", "position", "side"],
        correctOption: 0,
      },
      {
        id: 10,
        question:
          "Which CSS property is used to specify the style of the border of an element?",
        options: ["border-style", "style", "border", "line-style"],
        correctOption: 0,
      },
    ],
  },
  {
    subject: "JavaScript",
    icon: <FaJs className="icons" fill="#3e6cde" />,
    iconFill: "#3e6cde",
    backgroundColor: "#e9f1fe",
    questions: [
      {
        id: 1,
        question:
          "What is the output of the following code?\n\n```javascript\nconsole.log(0.1 + 0.2 === 0.3);\n```",
        options: ["true", "false", "NaN", "Syntax Error"],
        correctOption: 1,
      },
      {
        id: 2,
        question: "What is a closure in JavaScript?",
        options: [
          "A function that has access to the outer function's variables even after the outer function has finished executing",
          "A function that is defined within another function",
          "A function that is passed as an argument to another function",
          "A function that is used to close the browser window",
        ],
        correctOption: 0,
      },
      {
        id: 3,
        question: "What does the 'use strict' directive do in JavaScript?",
        options: [
          "Enforces stricter parsing and error handling in the code",
          "Declares that a function should be executed in strict mode",
          "Prevents certain actions from being taken and throws more exceptions",
          "All of the above",
        ],
        correctOption: 3,
      },
      {
        id: 4,
        question:
          "What is the result of the following code?\n\n```javascript\nconsole.log(typeof undefined == typeof NULL);\n```",
        options: ["true", "false", "null", "Syntax Error"],
        correctOption: 0,
      },
      {
        id: 5,
        question:
          "What is the purpose of the `Promise.all()` method in JavaScript?",
        options: [
          "It returns a promise that is resolved with an array of all the fulfilled promises when all the given promises have been fulfilled",
          "It returns a promise that is rejected if any of the given promises is rejected",
          "It returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise",
          "It returns a promise that is resolved immediately",
        ],
        correctOption: 0,
      },
      {
        id: 6,
        question: "What does the `bind()` method do in JavaScript?",
        options: [
          "Creates a new function that, when called, has its `this` keyword set to the provided value",
          "Binds a function to an object",
          "Allows a function to be called as a method of an object",
          "Creates a copy of the original function",
        ],
        correctOption: 0,
      },
      {
        id: 7,
        question:
          "What is the purpose of the `Array.map()` method in JavaScript?",
        options: [
          "Creates a new array with the results of calling a provided function on every element in the calling array",
          "Filters the elements of an array based on a given function",
          "Checks if all elements in an array pass a test provided by a function",
          "Returns the first element in an array that satisfies a given condition",
        ],
        correctOption: 0,
      },
      {
        id: 8,
        question:
          "What does the `typeof` operator in JavaScript return for the `null` value?",
        options: ["object", "null", "undefined", "function"],
        correctOption: 0,
      },
      {
        id: 9,
        question:
          "What is the result of the following code?\n\n```javascript\nconsole.log('5' + 3);\n```",
        options: ["53", "8", "NaN", "Syntax Error"],
        correctOption: 0,
      },
      {
        id: 10,
        question: "What does the `forEach()` method do in JavaScript?",
        options: [
          "Executes a provided function once for each array element",
          "Creates a new array with all elements that pass the test implemented by the provided function",
          "Returns the first element in an array that satisfies a given condition",
          "Checks if all elements in an array pass a test provided by a function",
        ],
        correctOption: 0,
      },
    ],
  },
];

// Iterate over each subject
questions.forEach((subject) => {
  // Iterate over each question in the subject
  subject.questions.forEach((question) => {
    // Add userOption property to each question object
    question.userAnswer = -1;
    question.userOption = "";
  });
});

export default questions;
