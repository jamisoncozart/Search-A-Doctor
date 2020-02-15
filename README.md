# _Search A Doctor_

#### _An app that shows you a list of doctors that can treat symptoms you search for based on your current location._, 14 February 2020

#### By _**Jamison Cozart**_

## Description

_This doctor searching application allows users to input symptoms, or search for a doctor specifically by name. The application will return a list of doctors in the users area that fit the search request made by the user. This application uses the BetterDoctor API, making API requests based on the user search requests._

## Prerequisites

* Node.js and npm (comes with node) need to be installed on your computer: https://nodejs.org/en/
* Create an account on BetterDoctor API to get an API key: https://developer.betterdoctor.com/
* Create a Google API account, activate it on all maps APIs to get API key: https://developers.google.com/maps/documentation/javascript/get-api-key

## Setup/Installation Requirements

1. Clone the repository into preferred directory:
    ```
    git clone https://github.com/jamisoncozart/Search-A-Doctor/
    ```
2. Change into project directory: 
    ```
    cd Search-A-Doctor/
    ```
3. Install all package dependencies:
    ```
    npm install
    ```
4. Add API keys to a .env folder:
    ```
    mkdir .env
    ```
    ```
    API_KEY = <your BetterDoctor API key>
    MAPS_API_KEY = <your google maps API key>
    ```
4. Build webpack bundle and live-server will open automatically:
    ```
    npm run start
    ```

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
* Google Maps API
* Webpack
* Git

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Jamison Cozart_**


