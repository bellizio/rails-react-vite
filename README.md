# Rails + React + Vite

A sandbox application for exploring how [Vite](https://vitejs.dev/) can be used to develop & build Rails with React applications.

The app uses the [Vite Ruby](https://vite-ruby.netlify.app/), which acts as the 'glue' between the React view layer and the Rails view layer.

## Getting Started

1. Install Node >= 16
2. Install Ruby 3.1.1
3. `gem install bundler`
4. `brew install postgresql`
5. `npm install`
6. `bundle install`

## Scripts

Run the following commands to start the app:

1. `rails s` - starts the Rails server
2. `npm start` - starts the Vite dev server

## Front-end

All front-end related code lives under **app/frontend**.

### Apps

The apps directory contains client-side React apps, which correspond to the entrypoints.

### Components

The components directory contains any React components that may be used in the apps or pages.

### Entrypoints

The entrypoints directory contains entries to the apps. These are what the Rails views essentially point to, and what Rails renders when a respective route is hit. More info on entrypoints [can be found here](https://vite-ruby.netlify.app/guide/development.html#entrypoints-%E2%A4%B5%EF%B8%8F).

### Pages

The pages directory contains client-side React pages, which are used in the client-side routing config of the React apps.

## Routes

For demonstration purposes, there is a mix of Rails routes and React routes. Each Rails route corresponds to a separate React app, which can define its own routing on the client-side.

### Rails Routes

- `/`
- `/help`
- `/browse`

### React Routes

- `/help/account-settings`
