# React Native auth demo

## About
This is a demo app to study and demonstrate the proper implementation of an authentication flow in React Native with React Navigation.
This app was done by following [RocketSeat](https://rocketseat.com.br/)'s [Masterclass #12](https://www.youtube.com/watch?v=KISMYYXSIX8).

<img src="./.github/screens.gif" width="200" />

Although there's no real external API calls, just for the sake of simplicity I'm mocking an API call at the start of the sign in flow. The `services/auth.tsx` file mocks this request by returning the user object after a 2000 ms timeout (async).

## Requirements
You need a [React Native CLI development environment](https://reactnative.dev/docs/environment-setup) setup in order to try this app.

<h2>Installing & Running</h2>

Clone and install this repo:

```bash
$ git clone https://github.com/alande-amorim/react-native-auth.git
$ cd react-native-auth
$ yarn install
$ yarn start
```

Then launch this app on your emulator. 

For me, I have to first open up the emulator and then:
```bash
$ yarn android
```

<h2>Covered topics</h2>

- Invoking the API
- Retrieving token and user data
- Persisting these data on AsyncStorage
- Making these data available app wide using Context API
- Passing the token on the authentication header during API calls
- Creating Hooks
- Handle loading states
- Sign in and sign out flows
- Setting up and using guest and auth routes

