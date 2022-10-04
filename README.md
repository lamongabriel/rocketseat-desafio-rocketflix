# RocketFlix

<img src="https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F38367429-d1c1-44ed-86cc-465e71e618bc%2Fshuffle.svg?table=block&id=d181f85b-70cd-4f4f-aafc-c680fdc3b292&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&userId=&cache=v2" >

## Can't decide which movie to watch? Rocketflix finds a random movie to you!

Using the TMDB API, this application fetchs through 1000 different movies and displays a random one for you to try.

Made using React JS, it's simple and easy to configure.

## Setting up the API

Inside `/src/api/movielist.ts` you will need to configure a API key for the request to work properly.

Line 1, replace `YOUR_PRIVATE_KEY_HERE` to your private API key.

## Getting an API Key from TMDB

Create and account [here](https://www.themoviedb.org/signup) then once you've verified your e-mail [go to this link](https://www.themoviedb.org/settings/api/request) and select Developer.

[Now here](https://www.themoviedb.org/settings/api) you can see your api key.

## Initialing the project

Start a terminal at the root folder of the project, and run:

```
npm install
npm run dev
```

## Technologies used

<div style="display: flex">
  <img height="100" title="ReactJS" alt="ReactJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png">
  <img height="100" title="TypeScript" alt="TypeScript" src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg">
</div>
