// STEP: replace the final direct initialization calls with this guarded initializer.
// Also load access-guard.js BEFORE this STEP script in the HTML:
// <script src="../access-guard.js"></script>
// <script src="./script.js"></script>

function initializeStepCourse() {
    renderCourses();
    renderQuestionSection(READING_QUESTIONS, "readingGrid", "reading");
    renderQuestionSection(LISTENING_QUESTIONS, "listeningGrid", "listening");
    renderCoursesForSection(VOCABULARY_LESSONS, "vocabularyGrid");
}

if (window.YazeedAccess?.hasValidAccess()) {
    initializeStepCourse();
} else {
    window.addEventListener("yazeedAccessGranted", initializeStepCourse, { once: true });
}
