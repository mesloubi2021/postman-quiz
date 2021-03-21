const {solutions} = require("./solutions");
const crosswordGenerator = require('crossword-layout-generator');

const challenges = {
    "crossword": {
        isInvalid: (submission) => (submission.filter(answer => answer.answer === "").length > 0),
        check: (submission) => {
            let isCorrect = true;
            submission.forEach((answer, index) => {
                if (!isCorrect) return;
                isCorrect = answer.clue.toUpperCase() === solutions.crossword[index].clue.toUpperCase() && answer.answer.toUpperCase() === solutions.crossword[index].answer.toUpperCase()
            })
            const secretPassphrase = "moon seem denial script basic glass"
            return isCorrect ? { isCorrect, secretPassphrase } : { isCorrect }
        },
        questions: () => {
            const layout = crosswordGenerator.generateLayout(solutions.crossword);
            const clues = layout.result.map(result => {
                const { answer, ...rest } = result;
                return rest;
            });
            const table = layout.table.map(rows => rows.map(row => (row !== "-") ? " " : "x"));
            return {layout: table, clues}
        }
    },
    "wordsearch": {
        isInvalid: (submittedAnswers) => submittedAnswers.includes(""),
        check: (submittedAnswers) => {
            submittedAnswers = submittedAnswers.map(answer => answer.toUpperCase())
            console.log(submittedAnswers)
            let isCorrect = true;
            solutions.wordsearch.forEach(ans => {
                if (!isCorrect)
                    return;
                isCorrect = submittedAnswers.includes(ans.answer.toUpperCase());
            });
            const secretPassphrase = "mount bee soar square flying assign";
            return isCorrect ? {isCorrect, secretPassphrase} : {isCorrect}
        },
        questions: () => {
            create_word_search = (alphabet, table) => {
                var tableArray = table.split("");
                for(let i = 0; i < tableArray.length; i++){
                    if(tableArray[i] == '-'){
                        var randomIndex = Math.floor(alphabet.length * Math.random());
                        tableArray[i] = alphabet[randomIndex];
                    }
                }
                return tableArray.join("");
            }
        
            const layout = crosswordGenerator.generateLayout(solutions.wordsearch);
            const output_html = layout.table_string;
            // Word search data
            const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            const word_search = create_word_search(alphabet, output_html);
            return {word_search};
        }

    },
    "rapidfire": {
        isInvalid: (submittedAnswers) => submittedAnswers.includes(""),
        check: (submittedAnswers) => {
            let isCorrect = true;
            solutions.rapidfire.forEach((ans, index) => {
                if (!isCorrect)
                    return;
                submittedAnswers[index] = submittedAnswers[index].replace(/\/$/, "");
                isCorrect = typeof ans.answer === "object" ?
                    ans.answer.filter(answer => answer.toUpperCase() === submittedAnswers[index].toUpperCase()).length > 0 :
                    submittedAnswers[index].toUpperCase() === ans.answer.toUpperCase();
            });
            const secretPassphrase = "battle march our quit born sixth";
            return !isCorrect ? {isCorrect} : {isCorrect, secretPassphrase}
        },
        questions: () => {
            const questions = solutions.rapidfire.map(question => {
                const { answer, ...rest } = question;
                return rest;
            });
            return {questions};
        }
    },
    "quiz": {
        isInvalid: (answers) => answers.includes(""),
        check: (answers) => {
            let isCorrect = true;
            solutions.quiz.every((ans, index) => {
                console.log(ans, answers[index])
                isCorrect = answers[index].toUpperCase() === ans.toUpperCase();
                if (!isCorrect) {
                    console.log("wrong");
                    return false;
                }
                return true;
            });
            console.log("submitted solution successfully");
            return { isCorrect };
        }
    }
}

module.exports = {
    challenges
}