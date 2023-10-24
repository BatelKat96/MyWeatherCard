# City Weather LWC Project

A Lightning Web Component (LWC) project that allows users to select a city using autocomplete and dropdown functionality. After choosing a city, the project makes an API call to retrieve weather data for the selected city and displays it in another Lightning Web Component.


![App flow](https://res.cloudinary.com/djyjaumko/video/upload/v1698126985/%D7%94%D7%A7%D7%9C%D7%98%D7%94_2023-10-24_024221_pfd11a.mp4)
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