// English / Trab6 / Writing: load access-guard.js BEFORE the Reader module.
// Example:
// <script src="../access-guard.js"></script>
// <script type="module" src="./script.js"></script>
//
// At the bottom of the existing Reader JS, replace:
// initializeReader();
// with:

if (window.YazeedAccess?.hasValidAccess()) {
    initializeReader();
} else {
    window.addEventListener("yazeedAccessGranted", initializeReader, { once: true });
}
