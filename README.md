
# MVP FIRE EXPENSE TRACKER

This is a full stack react application for user to track their monthly expenses. The applcation is upported by REST API and Mongo DB.
<img alt='website overview' src='Images/MainPage.png'>
---
## Installation

1) Fork project and clone to local repository

2) Install all packages by running the following commands in your terminal.

```
npm install
```

3) create .env file and create variable

```
PORT=3000
```


4) Start the server(runs Nodemon on server>index.js). In the terminal type
```
npm run dev-server
```
5) Start webpack (webpack serve --open). Install nodemon, In the terminal type

```
npm run watch
```

6) Open the website in your web browser.

```
http://localhost:3000

```
---

## Application Overview

The website is divided into three serctions
  1. The summary windows gives you information on
    1.1 The first expense occurred
    1.2 The last expense occured
    1.3 How many expense transactions in total
    1.4 The total expenses accumuted

  2. The chart analysis displays the ration on each expense category and shows you the expense trends over a year among different months

  3. Transaction details window allows you to sort transctions by clicking the column title and filter transactions by selecting from the drop down menu

  ## Future Enhancements

  * Plan to do regression analysis to predict next month's expenses
  * Plan to add feature to enable recording entry using voice
  * Plan to add clickable featuer in the chart to show details

