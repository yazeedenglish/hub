// ============================================================
// Bunny or Video links
// ============================================================

const BUNNY_CDN = "https://vz-c82b2256-40f.b-cdn.net/";
const BUNNY_QUALITY = "1080p";

function getVideoUrl(video) {
    if (!video) return "";

    // If it's already a complete URL, use it normally
    if (video.startsWith("http")) {
        return video;
    }

    // If it's a local video, use it normally
    if (video.startsWith("videos/")) {
        return video;
    }

    // Otherwise, treat it as a Bunny Video ID
    return BUNNY_CDN + video + "/play_" + BUNNY_QUALITY + ".mp4";
}

// ============================================================
// NEW COURSE SECTION
// ============================================================

const VOCABULARY_LESSONS = [

    {
        title: "Present Simple",
        description:
            "زمن المضارع البسيط",
        video: "11232029-7c4f-4759-9286-ab8bba5dd80f"
    },

    {
        title: "Lesson 02",
        description:
            "وصف الدرس الثاني.",
        video: "videos/lesson-02.mp4"
    },

    {
        title: "Lesson 03",
        description:
            "وصف الدرس الثالث.",
        video: "videos/lesson-03.mp4"
    },

    {
        title: "Lesson 04",
        description:
            "وصف الدرس الرابع.",
        video: "videos/lesson-04.mp4"
    },

    {
        title: "Lesson 05",
        description:
            "وصف الدرس الخامس.",
        video: "videos/lesson-05.mp4"
    },

    {
        title: "Lesson 06",
        description:
            "وصف الدرس السادس.",
        video: "videos/lesson-06.mp4"
    },

    {
        title: "Lesson 07",
        description:
            "وصف الدرس السابع.",
        video: "videos/lesson-07.mp4"
    },

    {
        title: "Lesson 08",
        description:
            "وصف الدرس الثامن.",
        video: "videos/lesson-08.mp4"
    },

    {
        title: "Lesson 09",
        description:
            "وصف الدرس التاسع.",
        video: "videos/lesson-09.mp4"
    },

    {
        title: "Lesson 10",
        description:
            "وصف الدرس العاشر.",
        video: "videos/lesson-10.mp4"
    }

];


// ============================================================
// GRAMMAR COURSES
// ============================================================

const COURSES = [

    {
        title: "Present Simple",
        description:
            "زمن المضارع البسيط",
        video:
            "fd28ff08-ed29-41f6-ab23-de6fec1e4aff"
    },

    {
        title: "Present Continuous",
        description:
            "زمن المضارع المستمر",
        video: "685428c0-59ce-419b-ade4-5325f0ac3e6b"
    },

    {
        title: "Present Perfect",
        description:
            "زمن المضارع التام",
        video: "08441e54-ad72-4949-ad1f-c7d4220b2f18"
    },

    {
        title: "Present Perfect Continouos",
        description:
            "زمن المضارع التام المستمر",
        video: "2880257a-bae2-479a-af5c-ac0611cbf017"
    },

    {
        title: "Since & For",
        description:
            "منذ ولمدة",
        video: "0903ab05-cbd0-4b87-a426-b9f8d288345d"
    },

    {
        title: "Past Simple",
        description:
            "زمن الماضي البسيط",
        video: "0e5891bc-6b50-4e62-acb3-01a9d1cac54c"
    },

    {
        title: "Past Continuous",
        description:
            "زمن الماضي المستمر",
        video: "35340084-6dac-4162-aaa0-94fe902b3295"
    },

    {
        title: "Past Perfect",
        description:
            "زمن الماضي التام",
        video: "b7e22f76-d8c1-4cde-bc52-84bee1b8416a"
    },

    {
        title: "Future Simple",
        description:
            "زمن المستقبل البسيط",
        video: "11426d48-8d42-4064-af1f-e7aa8d8e63a5"
    },

    {
        title: "Passive Voice",
        description:
            "المبني للمجهول",
        video: "a29e4e1a-ebc9-46f4-8bd0-2c51e831b9f3"
    },

    {
        title: "Used to",
        description:
            "جمل الاعتياد",
        video: "7c916654-244e-4a50-8473-f3f506c8558d"
    },

    {
        title: "Time connectors",
        description:
            "مسارات الربط",
        video: "5841aaf5-b786-4a87-b1ac-06622d4b3431"
    },

    {
        title: "If conditionals",
        description:
            "الجمل الشرطية",
        video: "879eb402-7c5f-459e-97f7-ab6630c7d874"
    },

    {
        title: "Relative Clauses",
        description:
            "جمل الوصل",
        video: "309f7c71-760c-4b6d-8126-988fbc407495"
    },

    {
        title: "Pronouns",
        description:
            "الضمائر",
        video: "f508b01e-f422-46fa-b05a-fa08488a02c5"
    },

    {
        title: "Countable and Uncountable",
        description:
            "الأسماء المعدودة وغير المعدودة",
        video: "30dd733d-9c84-461b-8d58-b9c185496587"
    },

    {
        title: "Quantifiers",
        description:
            "الكميات",
        video: "27c53dd3-2420-4e07-bacb-e4fbc2b1125a"
    },

    {
        title: "Singular and Plural",
        description:
            "المفرد والجمع",
        video: "efbe22e4-5d4a-4edb-a3e8-d6d060552708"
    },

    {
        title: "Comparative and Superlative",
        description:
            "المقارنة والتفضيل",
        video: "8e73acf1-fc37-49c1-959a-c5131577ef20"
    },

    {
        title: "Modals",
        description:
            "الأفعال الناقصة",
        video: "d950963e-4d6d-49aa-b9b2-e15ea769627d"
    },

    {
        title: "Connectors",
        description:
            "أدوات الربط",
        video: "2131f81e-4d14-4b82-8cfe-adc86501e8ab"
    },

    {
        title: "Prepositions",
        description:
            "حروف الجر",
        video: "890ec693-a6c6-4de5-915a-187c29510965"
    },

    {
        title: "Articles",
        description:
            "التعريف والتنكير",
        video: "00708950-f43a-40be-9df4-d687b63bb2bf"
    },

    {
        title: "Wh Questions",
        description:
            "أدوات الاستفهام",
        video: "4609c661-a7e2-46dc-b936-ecb1f3274157"
    },

    {
        title: "Writing Analysis",
        description:
            "تحليل الكتابة",
        video: "d75086ee-5b18-4e6c-868f-b4f2714142bd"
    }

];


// ============================================================
// READING QUESTIONS
// ============================================================

const READING_QUESTIONS = [

    {
        number: 1,
        title: "Reading Question 01",
        description: "اقرأ القطعة ثم اختر الإجابة الصحيحة.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 2,
        title: "Reading Question 02",
        description: "حدد الفكرة الرئيسية للقطعة.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 3,
        title: "Reading Question 03",
        description: "ابحث عن المعلومة المطلوبة داخل النص.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 4,
        title: "Reading Question 04",
        description: "اختر الإجابة التي يدعمها النص.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 5,
        title: "Reading Question 05",
        description: "حدد معنى الكلمة من سياق النص.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 6,
        title: "Reading Question 06",
        description: "حدد المعلومة الصحيحة حسب القطعة.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 7,
        title: "Reading Question 07",
        description: "ابحث عن التفاصيل المهمة في النص.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 8,
        title: "Reading Question 08",
        description: "حدد الاستنتاج الصحيح من القطعة.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 9,
        title: "Reading Question 09",
        description: "اختر الإجابة الأقرب لما ورد في النص.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 10,
        title: "Reading Question 10",
        description: "اختر الإجابة الصحيحة بناءً على القطعة.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    }

];


// ============================================================
// LISTENING QUESTIONS
// ============================================================

const LISTENING_QUESTIONS = [

    {
        number: 1,
        title: "Listening Question 01",
        description: "استمع إلى المقطع ثم اختر الإجابة الصحيحة.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 2,
        title: "Listening Question 02",
        description: "استمع جيدًا وحدد المعلومة المطلوبة.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 3,
        title: "Listening Question 03",
        description: "حدد الفكرة الرئيسية للمقطع.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 4,
        title: "Listening Question 04",
        description: "استمع إلى التفاصيل واختر الإجابة الصحيحة.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 5,
        title: "Listening Question 05",
        description: "حدد ما يقوله المتحدث في المقطع.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 6,
        title: "Listening Question 06",
        description: "استمع وحدد المعلومة الصحيحة.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 7,
        title: "Listening Question 07",
        description: "ركز على الكلمات والمعلومات المهمة.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 8,
        title: "Listening Question 08",
        description: "حدد الاستنتاج الصحيح بعد الاستماع.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 9,
        title: "Listening Question 09",
        description: "اختر الإجابة التي تتوافق مع المقطع.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    {
        number: 10,
        title: "Listening Question 10",
        description: "استمع جيدًا ثم اختر الإجابة الصحيحة.",
        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    }

];


// ============================================================
// GET HTML ELEMENTS
// ============================================================

const mainWebsite =
    document.getElementById("mainWebsite");

const themeToggle =
    document.getElementById("themeToggle");

const courseGrid =
    document.getElementById("courseGrid");

const readingGrid =
    document.getElementById("readingGrid");

const listeningGrid =
    document.getElementById("listeningGrid");

const courseModal =
    document.getElementById("courseModal");

const closeModalBtn =
    document.getElementById("closeModalBtn");

const modalTitle =
    document.getElementById("modalTitle");

const lessonTitle =
    document.getElementById("lessonTitle");

const lessonDescription =
    document.getElementById("lessonDescription");

const courseVideo =
    document.getElementById("courseVideo");

const videoPlaceholder =
    document.getElementById("videoPlaceholder");

const playBtn =
    document.getElementById("playBtn");

const backwardBtn =
    document.getElementById("backwardBtn");

const forwardBtn =
    document.getElementById("forwardBtn");

const progressBar =
    document.getElementById("progressBar");

const currentTime =
    document.getElementById("currentTime");

const durationTime =
    document.getElementById("durationTime");

const volumeBar =
    document.getElementById("volumeBar");

const speedSelect =
    document.getElementById("speedSelect");

const fullscreenBtn =
    document.getElementById("fullscreenBtn");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const examSimulatorBtn =
    document.getElementById("examSimulatorBtn");


// ============================================================
// CURRENT LESSON / QUESTION
// ============================================================

let currentCourseIndex = 0;

let currentQuestionIndex = 0;

let currentQuestionList = [];

let currentSectionType = "";


// ============================================================
// CREATE GRAMMAR COURSES
// ============================================================

function renderCourses() {

    courseGrid.innerHTML = "";

    COURSES.forEach((course, index) => {

        const card =
            document.createElement("article");

        card.className = "course-card";

        card.innerHTML = `

            <div class="course-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <h4>
                ${course.title}
            </h4>

            <p>
                ${course.description}
            </p>

            <button
                class="course-btn"
                data-course-index="${index}"
            >
                مشاهدة الدرس
            </button>

        `;

        courseGrid.appendChild(card);

    });

    const buttons =
        courseGrid.querySelectorAll(
            "[data-course-index]"
        );

    buttons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        button.dataset.courseIndex
                    );

                openCourse(index);

            }
        );

    });

}


// ============================================================
// CREATE VOCABULARY LESSONS
// ============================================================

function renderCoursesForSection(lessons, containerId) {

    const container =
        document.getElementById(containerId);

    if (!container) {
        console.error(
            `Container not found: ${containerId}`
        );
        return;
    }

    container.innerHTML = "";

    lessons.forEach((lesson, index) => {

        const card =
            document.createElement("article");

        card.className = "course-card";

        card.innerHTML = `

            <div class="course-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <h4>
                ${lesson.title}
            </h4>

            <p>
                ${lesson.description}
            </p>

            <button
                class="course-btn vocabulary-btn"
                data-vocabulary-index="${index}"
            >
                مشاهدة الدرس
            </button>

        `;

        container.appendChild(card);

    });


    const buttons =
        container.querySelectorAll(
            ".vocabulary-btn"
        );


    buttons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        button.dataset.vocabularyIndex
                    );

                openVocabularyLesson(
                    lessons,
                    index
                );

            }
        );

    });

}


// ============================================================
// CREATE READING / LISTENING CARDS
// ============================================================

function renderQuestionSection(
    questions,
    containerId,
    sectionType
) {

    const container =
        document.getElementById(containerId);

    if (!container) {
        console.error(
            `Container not found: ${containerId}`
        );
        return;
    }

    container.innerHTML = "";

    questions.forEach((question, index) => {

        const card =
            document.createElement("article");

        card.className = "course-card";

        card.innerHTML = `

            <div class="course-number">
                ${String(question.number).padStart(2, "0")}
            </div>

            <h4>
                ${question.title}
            </h4>

            <p>
                ${question.description}
            </p>

            <button
                class="course-btn question-btn"
                data-question-index="${index}"
            >
                مشاهدة السؤال
            </button>

        `;

        container.appendChild(card);

    });

    const questionButtons =
        container.querySelectorAll(
            ".question-btn"
        );

    questionButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        button.dataset.questionIndex
                    );

                openQuestion(
                    questions,
                    index,
                    sectionType
                );

            }
        );

    });

}


// ============================================================
// OPEN GRAMMAR COURSE
// ============================================================

function openCourse(index) {

    currentSectionType = "";

    currentCourseIndex = index;

    const course =
        COURSES[currentCourseIndex];

    modalTitle.textContent =
        course.title;

    lessonTitle.textContent =
        course.title;

    lessonDescription.textContent =
        course.description;

    courseVideo.pause();

    courseVideo.src =
    getVideoUrl(course.video);

    courseVideo.load();

    videoPlaceholder.classList.remove(
        "hidden"
    );

    courseModal.classList.remove(
        "hidden"
    );

    document.body.style.overflow =
        "hidden";

    updateNavigationButtons();

}


// ============================================================
// OPEN VOCABULARY LESSON
// ============================================================

function openVocabularyLesson(
    lessons,
    index
) {

    currentQuestionList =
        lessons;

    currentQuestionIndex =
        index;

    currentSectionType =
        "vocabulary";

    const lesson =
        lessons[index];

    if (!lesson) {
        console.error(
            "Vocabulary lesson not found."
        );
        return;
    }

    modalTitle.textContent =
        lesson.title;

    lessonTitle.textContent =
        lesson.title;

    lessonDescription.textContent =
        lesson.description;

    courseVideo.pause();

    courseVideo.src =
    getVideoUrl(lesson.video);

    courseVideo.load();

    videoPlaceholder.classList.remove(
        "hidden"
    );

    courseModal.classList.remove(
        "hidden"
    );

    document.body.style.overflow =
        "hidden";

    updateQuestionNavigation();

}


// ============================================================
// OPEN READING / LISTENING QUESTION
// ============================================================

function openQuestion(
    questions,
    index,
    sectionType
) {

    currentQuestionList =
        questions;

    currentQuestionIndex =
        index;

    currentSectionType =
        sectionType;

    const question =
        questions[currentQuestionIndex];

    if (!question) {
        console.error(
            "Question not found."
        );
        return;
    }

    modalTitle.textContent =
        sectionType === "reading"
            ? "Reading"
            : "Listening";

    lessonTitle.textContent =
        question.title;

    lessonDescription.textContent =
        question.description;

    courseVideo.pause();

    courseVideo.src =
    getVideoUrl(question.video);

    courseVideo.load();

    videoPlaceholder.classList.remove(
        "hidden"
    );

    courseModal.classList.remove(
        "hidden"
    );

    document.body.style.overflow =
        "hidden";

    updateQuestionNavigation();

}


// ============================================================
// CLOSE VIDEO MODAL
// ============================================================

function closeCourse() {

    courseVideo.pause();

    courseVideo.removeAttribute(
        "src"
    );

    courseVideo.load();

    courseModal.classList.add(
        "hidden"
    );

    document.body.style.overflow =
        "";

    currentSectionType = "";

}


// ============================================================
// GRAMMAR PREVIOUS / NEXT
// ============================================================

function updateNavigationButtons() {

    previousBtn.disabled =
        currentCourseIndex === 0;

    nextBtn.disabled =
        currentCourseIndex ===
        COURSES.length - 1;

}


// ============================================================
// READING / LISTENING PREVIOUS / NEXT
// ============================================================

function updateQuestionNavigation() {

    previousBtn.disabled =
        currentQuestionIndex === 0;

    nextBtn.disabled =
        currentQuestionIndex ===
        currentQuestionList.length - 1;

}


// ============================================================
// FORMAT VIDEO TIME
// ============================================================

function formatTime(seconds) {

    if (!Number.isFinite(seconds)) {
        return "00:00";
    }

    const minutes =
        Math.floor(seconds / 60);

    const secondsPart =
        Math.floor(seconds % 60);

    return `${String(minutes).padStart(2, "0")}:${String(secondsPart).padStart(2, "0")}`;

}


// ============================================================
// THEME TOGGLE
// ============================================================

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark"
            );

            const isDark =
                document.body.classList.contains(
                    "dark"
                );

            themeToggle.textContent =
                isDark
                    ? "☀️"
                    : "🌙";

            localStorage.setItem(
                "theme",
                isDark
                    ? "dark"
                    : "light"
            );

        }
    );

}


// ============================================================
// RESTORE SAVED THEME
// ============================================================

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add(
        "dark"
    );

    if (themeToggle) {
        themeToggle.textContent =
            "☀️";
    }

} else {

    if (themeToggle) {
        themeToggle.textContent =
            "🌙";
    }

}


// ============================================================
// CLOSE BUTTON
// ============================================================

if (closeModalBtn) {

    closeModalBtn.addEventListener(
        "click",
        closeCourse
    );

}


// ============================================================
// CLICK OUTSIDE VIDEO
// ============================================================

if (courseModal) {

    courseModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                courseModal
            ) {

                closeCourse();

            }

        }
    );

}


// ============================================================
// ESCAPE KEY
// ============================================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            courseModal &&
            !courseModal.classList.contains(
                "hidden"
            )
        ) {

            closeCourse();

        }

    }
);


// ============================================================
// PLAY / PAUSE
// ============================================================

if (playBtn) {

    playBtn.addEventListener(
        "click",
        () => {

            if (courseVideo.paused) {

                courseVideo.play().catch(
                    (error) => {

                        console.error(
                            "Video play failed:",
                            error
                        );

                    }
                );

            } else {

                courseVideo.pause();

            }

        }
    );

}


// ============================================================
// VIDEO PLAY EVENT
// ============================================================

courseVideo.addEventListener(
    "play",
    () => {

       playBtn.innerHTML = '<i data-lucide="pause"></i>';
lucide.createIcons();

    }
);

// ============================================================
// 10 SECONDS BACKWARD
// ============================================================

if (backwardBtn) {

    backwardBtn.addEventListener(
        "click",
        () => {

            if (!Number.isFinite(courseVideo.duration)) {
                return;
            }

            courseVideo.currentTime =
                Math.max(
                    0,
                    courseVideo.currentTime - 10
                );

        }
    );

}


// ============================================================
// 10 SECONDS FORWARD
// ============================================================

if (forwardBtn) {

    forwardBtn.addEventListener(
        "click",
        () => {

            if (!Number.isFinite(courseVideo.duration)) {
                return;
            }

            courseVideo.currentTime =
                Math.min(
                    courseVideo.duration,
                    courseVideo.currentTime + 10
                );

        }
    );

}


// ============================================================
// VIDEO PAUSE EVENT
// ============================================================

courseVideo.addEventListener(
    "pause",
    () => {

       playBtn.innerHTML = '<i data-lucide="play"></i>';
lucide.createIcons();

    }
);


// ============================================================
// VIDEO PROGRESS
// ============================================================

courseVideo.addEventListener(
    "timeupdate",
    () => {

        if (courseVideo.duration) {

            progressBar.value =
                (
                    courseVideo.currentTime /
                    courseVideo.duration
                ) * 100;

            currentTime.textContent =
                formatTime(
                    courseVideo.currentTime
                );

        }

    }
);


// ============================================================
// VIDEO LOADED
// ============================================================

courseVideo.addEventListener(
    "loadedmetadata",
    () => {

        videoPlaceholder.classList.add(
            "hidden"
        );

        durationTime.textContent =
            formatTime(
                courseVideo.duration
            );

        currentTime.textContent =
            "00:00";

        progressBar.value =
            0;

    }
);


// ============================================================
// VIDEO ERROR
// ============================================================

courseVideo.addEventListener(
    "error",
    () => {

        videoPlaceholder.classList.remove(
            "hidden"
        );

        console.error(
            "Video failed to load:",
            courseVideo.src
        );

    }
);


// ============================================================
// PROGRESS BAR
// ============================================================

if (progressBar) {

    progressBar.addEventListener(
        "input",
        () => {

            if (courseVideo.duration) {

                courseVideo.currentTime =
                    (
                        Number(
                            progressBar.value
                        ) / 100
                    ) *
                    courseVideo.duration;

            }

        }
    );

}


// ============================================================
// VOLUME + MUTE / UNMUTE
// ============================================================

const volumeBtn =
    document.getElementById("volumeBtn");

let previousVolume = 1;


// ------------------------------------------------------------
// UPDATE VOLUME ICON
// ------------------------------------------------------------

function updateVolumeIcon() {

    if (!volumeBtn) {
        return;
    }

    let iconName;

    if (
        courseVideo.muted ||
        courseVideo.volume === 0
    ) {

        iconName = "volume-x";

    } else if (
        courseVideo.volume < 0.5
    ) {

        iconName = "volume-1";

    } else {

        iconName = "volume-2";

    }

    volumeBtn.innerHTML =
        `<i data-lucide="${iconName}"></i>`;

    lucide.createIcons();

}


// ------------------------------------------------------------
// VOLUME SLIDER
// ------------------------------------------------------------

if (volumeBar) {

    volumeBar.addEventListener(
        "input",
        () => {

            const newVolume =
                Number(volumeBar.value);

            courseVideo.volume =
                newVolume;

            // If volume is increased from zero,
            // automatically unmute.
            if (newVolume > 0) {
                courseVideo.muted = false;
            }

            // Save the latest non-zero volume.
            if (newVolume > 0) {
                previousVolume = newVolume;
            }

            updateVolumeIcon();

        }
    );

}


// ------------------------------------------------------------
// MUTE / UNMUTE BUTTON
// ------------------------------------------------------------

if (volumeBtn) {

    volumeBtn.addEventListener(
        "click",
        () => {

            if (courseVideo.muted) {

                // UNMUTE
                courseVideo.muted = false;

                courseVideo.volume =
                    previousVolume || 1;

                volumeBar.value =
                    courseVideo.volume;

            } else {

                // MUTE
                previousVolume =
                    courseVideo.volume || 1;

                courseVideo.muted = true;

            }

            updateVolumeIcon();

        }
    );

}


// ------------------------------------------------------------
// INITIAL VOLUME ICON
// ------------------------------------------------------------

updateVolumeIcon();


// ============================================================
// PLAYBACK SPEED
// ============================================================

if (speedSelect) {

    speedSelect.addEventListener(
        "change",
        () => {

            courseVideo.playbackRate =
                Number(
                    speedSelect.value
                );

        }
    );

}


// ============================================================
// FULLSCREEN
// ============================================================

if (fullscreenBtn) {

    fullscreenBtn.addEventListener(
        "click",
        async () => {

            if (
                courseVideo.requestFullscreen
            ) {

                try {

                    await courseVideo.requestFullscreen();

                    return;

                } catch (error) {

                    console.log(
                        "Standard fullscreen failed.",
                        error
                    );

                }

            }

            if (
                courseVideo.webkitEnterFullscreen
            ) {

                try {

                    courseVideo.webkitEnterFullscreen();

                    return;

                } catch (error) {

                    console.log(
                        "iOS fullscreen failed.",
                        error
                    );

                }

            }

            if (
                courseVideo.webkitRequestFullscreen
            ) {

                try {

                    await courseVideo.webkitRequestFullscreen();

                    return;

                } catch (error) {

                    console.log(
                        "WebKit fullscreen failed.",
                        error
                    );

                }

            }

            if (
                courseVideo.mozRequestFullScreen
            ) {

                try {

                    await courseVideo.mozRequestFullScreen();

                    return;

                } catch (error) {

                    console.log(
                        "Firefox fullscreen failed.",
                        error
                    );

                }

            }

            if (
                courseVideo.msRequestFullscreen
            ) {

                try {

                    await courseVideo.msRequestFullscreen();

                    return;

                } catch (error) {

                    console.log(
                        "Microsoft fullscreen failed.",
                        error
                    );

                }

            }

            alert(
                "ملء الشاشة غير متاح على هذا الجهاز أو المتصفح."
            );

        }
    );

}


// ============================================================
// PREVIOUS BUTTON
// ============================================================

if (previousBtn) {

    previousBtn.addEventListener(
        "click",
        () => {

            // Reading or Listening.
            if (currentSectionType) {

                if (
                    currentQuestionIndex > 0
                ) {

                    openQuestion(
                        currentQuestionList,
                        currentQuestionIndex - 1,
                        currentSectionType
                    );

                }

                return;
            }

            // Grammar.
            if (
                currentCourseIndex > 0
            ) {

                openCourse(
                    currentCourseIndex - 1
                );

            }

        }
    );

}


// ============================================================
// NEXT BUTTON
// ============================================================

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        () => {

            // Reading or Listening.
            if (currentSectionType) {

                if (
                    currentQuestionIndex <
                    currentQuestionList.length - 1
                ) {

                    openQuestion(
                        currentQuestionList,
                        currentQuestionIndex + 1,
                        currentSectionType
                    );

                }

                return;
            }

            // Grammar.
            if (
                currentCourseIndex <
                COURSES.length - 1
            ) {

                openCourse(
                    currentCourseIndex + 1
                );

            }

        }
    );

}


// ============================================================
// BLOCK RIGHT CLICK ON VIDEO
// ============================================================

courseVideo.addEventListener(
    "contextmenu",
    (event) => {

        event.preventDefault();

    }
);


// ============================================================
// EXAM SIMULATOR BUTTON
// ============================================================

if (examSimulatorBtn) {

    examSimulatorBtn.addEventListener(
        "click",
        () => {

            window.location.href =
                "https://step.yazeedenglish.com";

        }
    );

}

// ============================================================
// INITIALIZE COURSE
// ============================================================

renderCourses();

renderQuestionSection(
    READING_QUESTIONS,
    "readingGrid",
    "reading"
);

renderQuestionSection(
    LISTENING_QUESTIONS,
    "listeningGrid",
    "listening"
);

renderCoursesForSection(
    VOCABULARY_LESSONS,
    "vocabularyGrid"
);

lucide.createIcons();
