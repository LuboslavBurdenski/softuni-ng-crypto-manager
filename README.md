# CryptoManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

Crypto manager is app built for Angular course in Software University (SoftUni). Crypto manager is a simple app in which you can access 
top one hundred crypto currency coins from CoinGecko REST API, at the home page, no matter if you are logged in or not.
You can open position, only if you are logged in, if you fill the required parameters in the dialog form which pops up. Then you are redirected to the portfolio page automatically and you will be shown your current portfolio. 
If you've opened position with target profit and stop loss, respectively with current price of that coin higher or equal, or lower or equal, your position wil be added to history section.
In history section you can see your closed positions with full description of them. Also at history you can sort, filter and download the data in MS Excel format. In portfolio, where your open trades are stored, you can access TradingView integrated charts. Also, last, but not least at portfolio, you can open details page where you fill find full description of you trade. At details page you can also edit target and stop loss, or close the position fully
or partially. 
Then you can see on profile page, providing the most important analytics, such as income by month in bar chart, currently own crypto in pie chart, also current balance, average win rate, highest win and highest loss in the history of yor account.


## Application provides:
- Only Angular Material use;
- Authentication with JWT stored in cookies;
- Validation through the all forms in the app;
- User Login and Register;
- Charts made with ng2-charts and Datatables wtih Angular Material;
- Create/Update Data;
- Filter and Sort Data;
- MS Excel file upload  with xlsx and file-saver;
- Server sent events (Server stream) for real-time data in the portfolio page;
- HTTP Interceptors;



## Quick start
To use Crypto manager you have to clone/download "https://github.com/LuboslavBurdenski/Rest-api" for the backend service
git clone https://github.com/LuboslavBurdenski/softuni-ng-crypto-manager.git

1. npm install
2. ng serve / ng serve -open (you have to be in the main folder a.k.a /softuni-ng-crypto-manager> ng serve/)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
