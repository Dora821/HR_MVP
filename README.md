
# MVP FIRE EXPENSE TRACKER
This is a full stack react application for users to sign in and track their monthly expenses. The application is supported by REST API and Mongo DB.



### User Signs In

![Sign in](https://user-images.githubusercontent.com/81209759/168711775-3539e4f0-dcfa-44fa-8e4e-7adbeea4658b.gif)



### User Adds Expense

![addExpense](https://user-images.githubusercontent.com/81209759/168711787-c65ee959-4485-4209-8507-9e411be84066.gif)



### User Filters and Sorts Expense

![SortExpense](https://user-images.githubusercontent.com/81209759/168711859-4f63c7f2-43ed-43c4-a454-e7ad4952e0da.gif)



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


## Application Overview

The website is divided into three serctions:
  1. The summary windows gives you information on: 
 
    1.1 The first expense occurred
    1.2 The last expense occurred
    1.3 How many expense transactions in total
    1.4 The total expenses accumulated

  2. The chart analysis displays the ratio on each expense category and indicates the expense trends over a year spreadig over different months

  3. Transaction details window allows users to sort transctions by clicking the column title and filter transactions by selecting from the drop down menu


## Future Enhancements

  * Plan to do regression analysis to predict next month's expenses
  * Plan to add feature to enable recording entry using voice
  * Plan to add clickable featuer in the chart to show details

## Technologies
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

