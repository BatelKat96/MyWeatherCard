# City Weather LWC Project

A Lightning Web Component (LWC) project that allows users to select a city using autocomplete and dropdown functionality. After choosing a city, the project makes an API call to retrieve weather data for the selected city and displays it in another Lightning Web Component.


![App flow](https://res.cloudinary.com/djyjaumko/image/upload/v1698129079/XXX_uhqqfg.gif)
## Table of Contents

- [City Weather LWC Project](#city-weather-lwc-project)
  - [Description](#description)
  - [Features](#features)

## Description

This project is built using Lightning Web Components (LWC) in Salesforce, and it consists of two main components:

1. **City selector Component**: This component provides an input field with autocomplete and a dropdown list for selecting a city. Once the user chooses a city, an API call is triggered to fetch weather data for the selected city.

2. **Weather de Component**: This component receives the weather data from the City Selection Component and renders the weather information for the selected city.

## Features

- Autocomplete and dropdown city selection.
- Real-time weather data retrieval from an API.
- Weather information display in a user-friendly format.