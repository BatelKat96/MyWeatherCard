# City Weather LWC Project

A Lightning Web Component (LWC) project that allows users to select a city using autocomplete and dropdown functionality. After choosing a city, the project makes an API call to retrieve weather data for the selected city and displays it in another Lightning Web Component.

## Table of Contents

- [City Weather LWC Project](#city-weather-lwc-project)
  - [Description](#description)
  - [Components](#components)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [Contributing](#contributing)
  - [License](#license)

## Description

This project is built using Lightning Web Components (LWC) in Salesforce, and it consists of two main components:

1. **City Selection Component**: This component provides an input field with autocomplete and a dropdown list for selecting a city. Once the user chooses a city, an API call is triggered to fetch weather data for the selected city.

2. **Weather Display Component**: This component receives the weather data from the City Selection Component and renders the weather information for the selected city.

## Components

The project includes two LWC components:

- `citySelection`: Handles city selection and initiates weather data retrieval.
- `weatherDisplay`: Displays the weather information for the selected city.

## Features

- Autocomplete and dropdown city selection.
- Real-time weather data retrieval from an API.
- Weather information display in a user-friendly format.