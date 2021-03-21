const express = require('express');
const router = express.Router();
const {challenges} = require("./challenges");

const buildResponse = (response) => {
    const welcome = "You're using the GET your Postman Game On collection! Click **Visualize** to guide you through next steps - do this for every request in the collection!";
    return {welcome, ...response}
}


router.post('/submit', (req, res) => {
    const challengeName = req.originalUrl.replace(/\/api\//, "").replace(/\/submit/,"")
    const submittedAnswers = req.body.answers;
    (!challenges[challengeName].isInvalid || !challenges[challengeName].check) && res.status(404)
    challenges[challengeName].isInvalid(submittedAnswers) && res.status(400).send(buildResponse({}))

    res.send(buildResponse(challenges[challengeName].check(submittedAnswers)))
})

router.get('/', (req, res) => { 
    const challengeName = req.originalUrl.replace(/\/api\//, "").replace(/\//, "");
    const questions = challenges[challengeName].questions
    questions ? res.send(buildResponse(questions())) : res.sendStatus(404);
});

module.exports = router;