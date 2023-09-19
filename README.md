# Athleflex app
> App React Native and Node.js Express API with TypeScript 3. Supports MongoDB

## Description
This app helps athletes to improve their reflex and time to response.

### Project Introduction
- suppot ES6/ES7 features
- using tslint followed [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- You can use the physical or virtual device to emulate the application.

To emulate the device, I recommend installing Android Studio and configuring a device.
Tip: The quickest way to emulate the application will be via your own device.

## Features
##### Home page screen:
- Home page with two menu options
##### Training page screen:
- Training page that helps to improve reflex. 
  - You need to insert seconds that you want to get a trigger (its a sound). This sound will play in a random moment between 0 and the configured seconds.
##### List page screen:
- A list of participants. This is an experimental feature that can be easily replaced for any list. Example: A list of moves made or pending to be completed

## Requirements

- react native
- npm >= 6
- typescript >= 3.0

## Running the APP
### Development
To start the application in development mode, run:

Install dependencies
```bash
npm install
```

Start the application in dev env:
```
npm start
```
## General observations
Due to the athlete's main problem being the lack of a trigger to perform some action. There was no need for any integration with any API.
Other features will be developed in the future, such as listing content/movements and how to execute them.
In addition to many other features mentioned in the Whimiscal document.

### To get more informations about how to run it see:
 [See more in](https://react-native.rocketseat.dev/expo-managed/linux)
