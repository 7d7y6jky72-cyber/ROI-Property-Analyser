# Property ROI Tracker v0.6.0

A local-first, mobile-friendly static web app. Open `index.html`, or publish all files to GitHub Pages. Data stays in the browser unless exported.

## ROE definition

Return on current realizable equity = current annual return / net sale equity.

- Net sale equity = current value − loan balance − estimated selling costs.
- Current annual return = annual net cash flow before capital expenditure + annualised recent capital growth.
- Selling costs include the entered agent percentage and fixed selling costs.

The app also displays the cash-only ROE separately, so the user can see the result without assumed capital growth.

## Strategy and future value

Each property includes conservative, base and optimistic growth scenarios; projected value, rent, expenses, debt, net sale equity, cash flow and ROE; and a configurable 1–30 year forecast. A proposed sale year can model estimated tax, net cash released and the future value of redeploying that cash. All assumptions are editable and separated from current results.

An optional high-level development feasibility module calculates projected profit, margin on development cost and annualised cash return from total end value, total development costs, equity and duration.

## Expense schedule and reminders

Expenses include payee, amount, frequency, next due date, reminder lead time, last paid date and notes. The portfolio shows upcoming or overdue reminders when the app opens. Marking a recurring expense paid records today and advances its next due date; one-off expenses become paid. Reminders are in-app and appear when the tracker is opened.

## Suburb capital growth and purchase-basis ROE

Enter a suburb benchmark value at the start and end of a historical period plus the period in years. The app calculates CAGR as `(end / start)^(1 / years) - 1`. Forecasts can use that historical CAGR or a manually entered suburb forecast rate, compounded for a manually selected 1–30 year period.

Purchase-basis ROE is shown as one year of gross rental income divided by purchase price plus acquisition costs. Weekly rent is annualised as `(weekly rent / 7) × 365`. It is displayed separately from current-equity ROE because the two measures answer different questions.

## Market prospects

The app does not claim to provide live data. Users enter dated indicators from open sources, and the app creates a transparent directional summary. Source links are included for ABS, RBA, state planning portals and SQM Research. Verify figures before making decisions.

## Upgrade compatibility

The app reads the earlier `property-roi-tracker-v1` local-storage key and migrates common field names and legacy expense records into the v0.3 format. Export a backup before replacing an older deployment.
