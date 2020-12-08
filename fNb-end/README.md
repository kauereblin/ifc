# Web development - Python with Flask

Back-end and Front-end system with JSON communication.

[Versão em português](README.pt.md)

## Introduction

This project uses [Flask](https://flask.palletsprojects.com/en/1.1.x/) and
[SQLAlchemy](https://www.sqlalchemy.org/) libs to make a simple web server.
Created for evaluations of the subject Programming II.

## Installation

Make sure you are in the `fNb-end` folder and run the following code on terminal:

```bash
python -m pip install -r requirements.txt
```

## Usage

After installing all libraries, run the back-end server launch command:

```bash
python src/backend/run.py
```

On terminal, you might see this:

![Back-end server running on terminal](./.github/terminal0.png)

Then, open `index_helis.html`, from the folder `fNb-end/frontend`, manually,
in your browser

Your server receives a GET request to access the data, and your terminal will update
similar to this:

![Terminal with a GET request](./.github/terminal01.png)

And your browser will render the following wellcome page:

![Browser rendering a wellcome apge](./.github/browser1.png)

You can change the pages through the menu bar

### List Function

In list page you can see the following table:

![A table with the data included in database file](./.github/browser2.png)

### Create Function

And you can include some data like that:

![Browser rendering a form with data required to include in database](./.github/browser3.png)

Then the table will render its included data

![A table with the data included in database file](./.github/browser4.png)

### Delete Function

If you include some wrong data, you can delete the line clicking in the badge written "Excluir".

![A table with the data included in database file marking a line](./.github/browser5.png)

Then it's fade out:

![A table with the data included in database file](./.github/browser6.png)

### Composition and Aggregation

After implementing two new classes, the tests show the relationship between them:

![Terminal rendering the save data in back-end](./.github/terminal02.png)

Following the UML diagram bellow:

![UML Diagram](./.github/diagrama_UML.png)

### Listing classes

After updating the front-end, check the following pages:

__Combat Helicopters__

![The Helicopters table with the data included in database file](./.github/browser7.png)

__Pilots__

![The Pilots table with the data included in database file](./.github/browser8.png)

__Hangars__

![The Hangars table with the data included in database file](./.github/browser9.png)

## Constribution

If you have some doubt or you developed a feature, create a pull request to the update.

Thanks!