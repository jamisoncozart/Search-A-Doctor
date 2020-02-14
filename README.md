# _Search A Doctor_

#### _An app that shows you a list of doctors that can treat symptoms you search for._, 14 February 2020

#### By _**Jamison Cozart**_

## Description

_This doctor searching application allows users to input symptoms, or search for a doctor specifically by name. The application will return a list of doctors that fit the search request made by the user. This application uses the BetterDoctor API, making API requests based on the user search requests._

## Setup/Installation Requirements

1. Clone the repository into preferred directory:
    ```
    git clone https://github.com/jamisoncozart/Search-A-Doctor/
    ```
2. Open working directory in Visual Studio Code or preferred text editor:
    ```
    code .
    ```
3. Open `index.html` in Chrome or preferred browser (some styles might change if not openned in chrome)

## Behavior Driven Development Specifications

|Behavior|Input|Output|
|:-:|:-:|:-:|
|If user doesn't input anything, prevent form submission|""|*HTML required statement*|
|If user inputs a number, return "error"|"345232"|"Sorry, numbers cannot be used to search doctors"|
|User enters medical issue, recieves list of doctor in Portland that treat issue.|"soar throat"|*list of doctors that specialize in 'soar throat'*|
|User enters a name, return all doctors with name in Portland|"smith"|*list of doctors with first or last name 'smith'*|
|Each doctor shown should include first name, last name, address, phone number, website and if doctor is accepting new patients.|"smith"|* Ann Smith, -Address: 2453 sw 265ct, -phone#: 555-555-0555, -website: example.com, -accepting patients: yes|
|If the API request returns anything besides a status of 200 and ok === true, alert an error to the user|*failed API call*|*alert* "Error: API call unsuccessful. Please try again."|
|If no a doctors are found for search query, return "sorry, no doctors found for your search request"|"zork"|"Sorry, no doctors fit that search request."|

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery
* BetterDoctor API
* Webpack
* Git

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Jamison Cozart_**


