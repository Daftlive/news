# React Native News App

**This project has been done using React Native and Typescript.** 

The app is a news reader that uses [newsapi.org](https://newsapi.org/) as a data source.

News can be obtained from different resources such as country or categories. It also has a system that automatically saves the news on the device for offline access. The refresh time of the news can be configured.

It has a simple search engine taking advantage of the power offered by [Akita](https://opensource.salesforce.com/akita/).

## Features 

 - Typescript
 - Akita | State Management 
 - React Navigation
 - AsyncStorage
 - React Native Web


## Design Patterns

 - **Compound Pattern:** This pattern is illustrated in the country and category selection options for example.
 - **High Order Component Pattern:** It is used in several components of the application, with maximum scalability and code maintenance in mind.
 - **Observer Pattern:** The base of the app's working. From fetching data from the api/store, to searching and options. Maximum versatility and reactivity, without technical debt.

## Screen Shots
<p float="left">
  <img src="https://github.com/Daftlive/news/blob/develop/screenshots/Simulator%20Screen%20Shot%20-%20iPhone%2013%20-%202022-09-18%20at%2017.36.21.png?raw=true" width="160" />
  <img src="https://github.com/Daftlive/news/blob/develop/screenshots/Simulator%20Screen%20Shot%20-%20iPhone%2013%20-%202022-09-18%20at%2017.36.35.png?raw=true" width="160" />
  <img src="https://github.com/Daftlive/news/blob/develop/screenshots/Simulator%20Screen%20Shot%20-%20iPhone%2013%20-%202022-09-18%20at%2017.38.00.png?raw=true" width="160" />
  <img src="https://github.com/Daftlive/news/blob/develop/screenshots/Simulator%20Screen%20Shot%20-%20iPhone%2013%20-%202022-09-18%20at%2017.36.44.png?raw=true" width="160" /> 
</p>

## Installation
```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```

````
› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web
````

> The application has also been configured for web use.
