# postman-quiz
Backend for the [Postman Games public workspace](https://www.postman.com/postman/workspace/postman-games)

The [Postman Games challenge](https://www.postman.com/postman/workspace/postman-games/documentation/13059338-c3e32cda-40a2-4ea3-a521-3109c720af80) is a new public workspace that contains a series of requests that you send to receive trivia questions—all as a fun way to test your Postman IQ. We published the workspace at the [Postman Galaxy Conference]() this February—and within a day, the GET Your Postman Game On! collection received more than 300 forks and two pull requests.

Our success with this game can easily be repeated and applied to any developer community, conference, or meetup. So I encourage you to play it yourself and then have a go at recreating the challenge in Postman by following the tips in [this]() blog post.

This repository includes the source code and all the help for you to recreate the quiz with a different topic. 

## Running
Follow the docker or local setup to get the project up and running.

### Docker  

Prerequisites: 
- [Install Docker](https://docs.docker.com/install/) on your local host machine

#### Build docker image 
```
docker build -t postman-quiz .
```

#### Running docker container
```
docker run -p 3000:3000 postman-quiz
```
### Local Setup  

Prerequisites: 
- [Install Node.js](https://nodejs.org/en/download/) on your local host machine

#### Install dependencies 
```
npm install
```
#### Running during development
```
npm run dev
```

#### Running on production
```
npm start
```

### Usage
In order to use the project for a different quiz topic, add all answers to [solutions.js](https://github.com/meenakshi-dhanani/postman-quiz/blob/main/server/solutions.js) and the logic to verify solutions in [challenges.js](https://github.com/meenakshi-dhanani/postman-quiz/blob/main/server/challenges.js).

### Contributing
Help us improve the challenge by contributing to the [Postman Games public workspace](https://www.postman.com/postman/workspace/postman-games) 


