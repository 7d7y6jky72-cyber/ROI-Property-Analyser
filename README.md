# Property ROI Tracker v0.2.0

A local-first installable web app for tracking Australian investment property valuations, debt, equity, rental cash flow and ROI.

## Included in v0.2.0
- Portfolio dashboard: value, debt, equity, LVR, net cash flow and return on current equity.
- Property register with purchase, valuation, loan, interest, rent and operating-expense inputs.
- Valuation history.
- Gross yield, net yield, annualised capital growth, cash-on-cash return and return on current equity.
- Usable-equity estimate at 70%, 75% or 80% target LVR.
- Simple investment score and Hold / Review / Potential Sell indication.
- Scenario modelling for valuation, rent, interest rate and expenses.
- JSON backup export/import.
- Local browser storage and offline service worker.

## Running it
The app is a static PWA. Serve this folder from any simple HTTPS/static web host. For local desktop testing, a local HTTP server works as well.

Example with Python:

    python3 -m http.server 8080

Then open http://localhost:8080.

On iPhone, open the hosted HTTPS version in Safari and choose **Share > Add to Home Screen**.

## Data
Property information is stored in the browser's localStorage. Use Export backup regularly. Clearing browser/site data can erase local records.

## Calculation notes
- Annual rent = weekly rent × 52.
- Interest = current loan balance × entered annual interest rate.
- Net cash flow = rent − annual operating expenses − interest.
- Net yield = (rent − operating expenses) ÷ current value.
- Capital growth p.a. is annualised from purchase price/date to current valuation/date.
- Return on current equity = (net cash flow + annualised capital-growth amount) ÷ current equity.
- Principal repayments and tax effects are intentionally excluded in v0.2.0.

This tool is for portfolio analysis and record keeping, not financial, tax or valuation advice.


## v0.2.0 expense tracking

Properties can now store a detailed expense schedule instead of a single annual estimate. Built-in categories include council rates, water charges, strata/body corporate, building insurance, landlord insurance, property management, letting/lease renewal fees, repairs and maintenance, land tax, compliance/safety, owner-paid utilities, accounting/legal costs, renovations/improvements and Other.

Each expense can be entered as weekly, monthly, quarterly, half-yearly, annual or one-off, and classified as either an operating expense or capital expenditure. The app annualises recurring costs automatically. Operating expenses feed net yield and net cash flow; capital expenditure is reported separately as cash after capex. Existing v0.1.0 annual-expense data is retained as a legacy operating expense when editing an older property.
