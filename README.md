# Yazeed English — Frontend Hub

## Routes
- Hub: `hub.yazeedenglish.com/`
- STEP: `hub.yazeedenglish.com/step`
- English: `hub.yazeedenglish.com/course`
- Trab6: `hub.yazeedenglish.com/trab6`
- Writing: `hub.yazeedenglish.com/writing`

## Access codes
- STEP: `111111`
- English: `222222`
- Trab6: `333333`
- Writing: `444444`

## Order number rule
Exactly 9 digits and starts with `2`.

The order number is intentionally NOT tied to a specific product and is not checked against Salla. There is no backend/API/database in this system.

## Access flow
Select product -> Order Number + Access Code -> Consent -> store access for 30 days -> course content.

Each course has independent localStorage access.

## Purchase button
Current placeholder for all products:
`https://yazeedenglish.com`

You can later change each product's `purchaseUrl` independently in the Hub `script.js`.

## Hub assets
Optional files:
- `images/logo.png`
- `images/step.png`
- `images/english.png`
- `images/trab6.png`
- `images/writing.png`

## Course integration
Put `access-guard.js` somewhere all four course pages can load it.

Because the course URLs are all under the same host, the guard's localStorage keys are shared across the four routes.

### STEP
Load guard before STEP JS:
```html
<script src="../access-guard.js"></script>
<script src="./script.js"></script>
```

At the end of STEP JS, replace the current direct rendering calls with `INTEGRATION_STEP.js`.

### English / Trab6 / Writing
Keep the existing Reader JS unchanged except for the final `initializeReader();` call. Replace it with `INTEGRATION_READER.js`.

The three Reader versions remain the same technically. Only `PDF_FILE` changes.

## Important limitation
This is intentionally frontend-only. Access codes are present in client-side JavaScript and can be discovered by technically experienced users. The system is designed for simple access control, not high-security authentication.
