<<<<<<< HEAD
// ============================================================
// Bunny Video links
// ============================================================

const BUNNY_CDN = "https://vz-c82b2256-40f.b-cdn.net/";

// Remember which Bunny video is currently playing
let currentBunnyVideoId = "";
let tried720p = false;


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
    currentBunnyVideoId = video;
    tried720p = false;

    // Always try 1080p first
    return BUNNY_CDN + video + "/play_1080p.mp4";
}

// ============================================================
// LOAD VIDEO
// ============================================================

function loadVideo(video) {

    if (!video) {
        courseVideo.removeAttribute("src");
        return;
    }

    tried720p = false;

    const url = getVideoUrl(video);

    courseVideo.src = url;
    courseVideo.load();

}
=======
>>>>>>> aa79a7308a92b878e84bb0b4eb83c1d3cb6566ce

// ============================================================
// NEW COURSE SECTION
// ============================================================

const VOCABULARY_LESSONS = [

    {
        title: "Course introduction",
        description: "مقدمة الدورة",
        video:
            "95b4b260-436d-4800-9a4e-383cbe94c414"
    },

    {
        title: "Vocabulary Part 1",
        description: "المفردات الجزء الأول",
        video:
            "c7cdba87-5c98-42d0-9610-aff5d4f26e84"
    },

    {
        title: "Vocabulary Part 2",
        description: "المفردات الجزء الثاني",
        video:
            "8f13ba4f-a7fc-464b-929f-521057eb497e"
    },

    {
        title: "Vocabulary Part 3",
        description: "المفردات الجزء الثالث",
        video:
            "172fcac5-8c89-431e-9114-0750a5107154"
    },

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
    },
                // 1-9
    {
        title: "Questions Part 1",
        description:
            "اسئلة القواعد الجزء الأول",
        video: "c89e7773-81c4-4b7d-9025-92eb13d32daa"
    },
                // 10-21
    {
        title: "Questions Part 2",
        description:
            "اسئلة القواعد الجزء الثاني",
        video: "e46471a9-c1a9-4a1e-b1f1-9cfd28727a18"
    },
                // 22-30
    {
        title: "Questions Part 3",
        description:
            "اسئلة القواعد الجزء الثالث",
        video: "d112c322-7d76-4cab-88aa-971be452d9b1"
    },
                // 31-39
    {
        title: "Questions Part 4",
        description:
            "اسئلة القواعد الجزء الرابع",
        video: "5194a15f-ab19-4aaa-a683-de8d609f5da7"
    },
                // 40-51
    {
        title: "Questions Part 5",
        description:
            "اسئلة القواعد الجزء الخامس",
        video: "615ff973-85d0-436b-810f-fb21144f87e4"
    },
                // 52-60
    {
        title: "Questions Part 6",
        description:
            "اسئلة القواعد الجزء السادس",
        video: "afeb19ac-75d5-4fd4-bcb7-1d910a7cfaad"
    },
                // 61-69
    {
        title: "Questions Part 7",
        description:
            "اسئلة القواعد الجزء السابع",
        video: "c0a66166-eb87-4aca-b525-4c58f39b8c2b"
    },
                // 70-81
    {
        title: "Questions Part 8",
        description:
            "اسئلة القواعد الجزء الثامن",
        video: "e3c4539f-84f8-4858-8ae6-4c4d2365f534"
    },
                // 82-90

    {
        title: "Questions Part 9",
        description:
            "اسئلة القواعد الجزء التاسع",
        video: "3ec0cb1b-b66e-4a51-8b42-39363e748eff"
    },
                // 91-102

    {
        title: "Questions Part 10",
        description:
            "اسئلة القواعد الجزء العاشر",
        video: "eae6bb2a-3731-419a-be64-d2f81c358214"
    }

];


// ============================================================
// READING QUESTIONS
// ============================================================

const READING_QUESTIONS = [

    {
        
        title: "Giant Panda",
        description: "الباندا العملاقة",
        video:
            "5a713e76-7d03-4c1b-9897-101f276a5b27"
    },

    {
        title: "Firefighter Mike",
        description: "مايك الاطفائي",
        video:
            "aff448f4-0f10-4400-8cb0-595bf9bcc50f"
    },

    {
        title: "Bees",
        description: "النحل",
        video:
            "da38fbbf-d9fc-4b66-9450-a4adc6b4be1b"
    },

    {
        title: "Stars",
        description: "النجوم",
        video:
            "fb321f18-fe23-440c-9693-e5b64f5a1414"
    },

    {
        title: "Adam & Eric",
        description: "آدم و ايرك",
        video:
            "23711eff-9ce2-47f1-9110-5b499ad31760"
    },

    {
        title: "Strange substance",
        description: "المادةالغريبة",
        video:
            "93dd0b6e-0c8e-49f8-b463-3b6a20d057f7"
    },

    {
        title: "Ahmad",
        description: "أحمد",
        video:
            "22fc43ea-15fa-4a08-a6e6-a3a1926ac28d"
    },

    {
        title: "Ibn sina",
        description: "ابن سينا",
        video:
            "0e9fcf26-24ff-4b8d-8063-ba0a0565edb6"
    },

    {
        title: "Dopamine",
        description: "الدوبامين",
        video:
            "e08fb752-8803-42da-b6cc-116d9cd22bba"
    },

    {
        title: "Mohammed Ali",
        description: "محمد علي",
        video:
            "c28e7e88-2514-49a1-b35d-a38ee626b1a6"
    },

    {
        title: "Kingdom's Climate",
        description: "مناخ المملكة",
        video:
            "7e784b86-45de-432e-8ed1-617d1a3aeb23"
    },

    {
        title: "The Korean Mother",
        description: "الأم الكورية",
        video:
            "c6c2c206-c3f1-43bd-a600-a2411ce7bd01"
    },

    {
        title: "Cupping",
        description: "الحجامة",
        video:
            "f7150b9d-526e-41cb-9e73-c67153b102e4"
    },

    {
        title: "Cancer",
        description: "السرطان",
        video:
            "0052ce9f-4f48-4153-adcd-45a0c30804fe"
    },

    {
        title: "Madagascar",
        description: "مدغشقر",
        video:
            "b35f8dc6-fa9f-46eb-9516-a1a3f3e30628"
    },

    {
        title: "Singapore",
        description: "سنغافورة",
        video:
            "3c7a06e0-5aa6-42d6-8440-20a79543f691"
    },

    {
        title: "Tourism in Jamaica",
        description: "السياحة في جامايكا",
        video:
            "738a4734-61a0-4db5-95eb-d64def814840"
    },

    {
        title: "Papyrus",
        description: "الورق البردي",
        video:
            "ac17bdf8-055b-47c7-9938-2f02716fbf75"
    },

    {
        title: "Air pollution",
        description: "تلوث الهواء",
        video:
            "e028935e-cfcb-427d-8c0e-1144eb34452b"
    },

    {
        title: "Detroit",
        description: "ديترويت",
        video:
            "1f8dd6e9-cb63-4a7e-851c-581c2dc0dd1d"
    },

    {
        title: "Aggression in Children",
        description: "عدوانية الأطفال",
        video:
            "7c25eb74-9f58-4842-aef6-6831d8679693"
    },

    {
        title: "Coffee Consumption",
        description: "رسم بياني عن القهوة",
        video:
            "9c2a7c53-3d4a-45dd-aa28-c7f601ca8a16"
    },

    {
        title: "Transportation",
        description: "رسم بياني عن المواصلات",
        video:
            "772c4343-d48a-42ee-a0f7-2fc7f94e0fcc"
    },

    {
        title: "Strawberry",
        description: "الفراولة",
        video:
            "82ccad83-303b-4fc0-8946-41933d165fb2"
    },

    {
        title: "Stress",
        description: "التوتر",
        video:
            "dfca77a4-70ed-4aaa-a2db-d81e56d248f2"
    },

    {
        title: "Pizza",
        description: "البيتزا",
        video:
            "e6200c3c-99af-4776-b69c-858eac420bd6"
    },

    {
        title: "Tuna and salmon",
        description: "التونة والسلمون",
        video:
            "f5892ea0-0b3a-4172-accb-c2bd6ea75968"
    },

    {
        title: "Russian Doll",
        description: "الدمية الروسية",
        video:
            "714bc37b-2dc7-4809-a0f2-8c9cd0464a95"
    },

    {
        title: "Emotions",
        description: "المشاعر",
        video:
            "d083e02d-325a-49a5-846a-4d373d9037bd"
    },

    {
        title: "The Spanish Flu",
        description: "الانفلونزا الاسبانية",
        video:
            "d66f2999-4a69-4a5f-b5b8-7cdfbca36314"
    },

    {
        title: "Inflation",
        description: "التضخم",
        video:
            "5ae93f9f-0d08-45af-8a01-033bc71cdd7d"
    },

    {
        title: "Vitamins & Minerals",
        description: "الفيتامينات والمعادن",
        video:
            "b9f045ce-6ca8-45f7-b15e-a930444c6332"
    },

    {
        title: "Mada'inSaleh",
        description: "مدائن صالح",
        video:
            "4b6b27bc-55ab-493a-a9f3-ce827ba68aaf"
    },

    {
        title: "Intellectual property",
        description: "الملكية الفكرية",
        video:
            "f34068a2-6d8b-4eac-8173-52623931e40e"
    },

    {
        title: "Yellowstone Park",
        description: "منتزه يلو ستون",
        video:
            "caa61faf-7fb5-41a8-8a8d-d585447ae182"
    },

    {
        title: "Plastic",
        description: "البلاستيك",
        video:
            "e3e1e927-c2e1-4f37-9cd2-f15cc37e3656"
    },

    {
        title: "Engineering Innovation",
        description: "الابتكار الهندسي",
        video:
            "1b3bb9b3-9081-4a57-8be9-fa00042208a5"
    },

    {
        title: "Food & Cells",
        description: "الغذاء والخلايا",
        video:
            "7f7fdbbe-8ddc-48b9-b4e6-fcf34ca2f37a"
    },

    {
        title: "Social Media",
        description: "التواصل الاجتماعي",
        video:
            "f2ff591f-4347-45cc-837f-2f5b187ac0d0"
    },

    {
        title: "Advertising",
        description: "الاعلان",
        video:
            "90b9b119-2007-47e7-9e7e-ed8c19b5780c"
    },

    {
        title: "Volcano",
        description: "البركان",
        video:
            ""
    },

    {
        title: "Ants",
        description: "النمل",
        video:
            "14fd8258-1cff-4d3a-a4a7-3a6a001db704"
    },

    {
        title: "Statistics",
        description: "الإحصاء",
        video:
            "8e192bc0-72a8-413c-a9fa-a882b5bd7daf"
    },

    {
        title: "Motor Development",
        description: "التطور الحركي",
        video:
            "35d5038d-61d2-45bd-b366-47d6c77b19bd"
    },

    {
        title: "Copyright",
        description: "حقوق النشر",
        video:
            "8c796620-6ea2-48bc-89be-859dfa69b88f"
    },

    {
        title: "Taste & Smell",
        description: "التذوق والشم",
        video:
            "4ae73c92-bc06-49dd-8252-1ce6358c6ae8"
    },

    {
        title: "Software Ownership",
        description: "ملكية البرمجيات",
        video:
            "eba5eb21-41f6-40b5-bdf2-197503e708c7"
    },

    {
        title: "Petroleum",
        description: "النفط",
        video:
            "14e1b9f3-05de-4d04-b9f9-4d5ad1526675"
    },

    {
        title: "Blood types",
        description: "فصائل الدم",
        video:
            "643dd1c1-8dbe-49f5-803c-d2bcfc46c85c"
    },

    {
        title: "The Cold War",
        description: "الحرب الباردة",
        video:
            "70655302-3d9b-4d12-8168-b5f41105f483"
    },

    {
        title: "Synonyms",
        description: "المرادفات",
        video:
            "502aa9dd-42dc-4d17-820a-0c996a7a9e83"
    }

];


// ============================================================
// LISTENING QUESTIONS
// ============================================================

const LISTENING_QUESTIONS = [

    {
        title: "Guidelines & Tips",
        description: "تعليمات ونصائح القسم",
        video:
            "15cbcf4f-622e-4a96-bbfc-6d14f30cd977"
    },

    {
        title: "Listening 1",
        description: "المقطع الصوتي الأول",
        video:
            "9fe55146-7999-4a89-9c12-6b263722c215"
    },

    {
        title: "Listening 2",
        description: "المقطع الصوتي الثاني",
        video:
            "bfb56646-fdae-4f36-8e66-0b8cbee110f9"
    },

    {
        title: "Listening 3",
        description: "المقطع الصوتي الثالث",
        video:
            "1dc58d31-2b82-40bd-b7d9-f6113b407c68"
    },

    {
        title: "Listening 4",
        description: "المقطع الصوتي الرابع",
        video:
            "c18b1101-c2da-4f0b-914c-06678ccc4e5f"
    },

    {
        title: "Listening 5",
        description: "المقطع الصوتي الخامس",
        video:
            "99b7cd0f-4d78-4f9b-b511-0c26be4d8a2e"
    },

    {
        title: "Listening 6",
        description: "المقطع الصوتي السادس",
        video:
            "1336e253-3dd5-47f6-9476-8819bc74baf2"
    },

    {
        title: "Listening 7",
        description: "المقطع الصوتي السابع",
        video:
            "8b88dcc6-0443-4603-99e1-d255f4891110"
    },

    {
        title: "Listening 8",
        description: "المقطع الصوتي الثامن",
        video:
            "7fc2b6f7-a7ed-4f70-9ba6-a11c292dd915"
    },

    {
        title: "Listening 9",
        description: "المقطع الصوتي التاسع",
        video:
            "7bd018e1-05b6-4869-b830-b19a8d664ab0"
    },

    {
        title: "Listening 10",
        description: "المقطع الصوتي العاشر",
        video:
            "f9f4cfca-1e87-446d-94ad-2ac20d0bf06c"
    }

];

// ============================================================
// FINAL SECTION QUIZZES
// ============================================================

const FINAL_QUIZZES = {

    vocabulary: {
        enabled: true,
        title: "Vocabulary Final Quiz",
        description: "اختبار نهاية قسم المفردات",
        url: "https://example.com/vocabulary-quiz",
        buttonText: "اختبار المفردات"
    },

    grammar: {
        enabled: true,
        title: "Grammar Final Quiz",
        description: "اختبار نهاية قسم القواعد",
        url: "https://example.com/grammar-quiz",
        buttonText: "اختبار القواعد"
    },

    reading: {
        enabled: true,
        title: "Reading Final Quiz",
        description: "اختبار نهاية قسم القراءة",
        url: "https://example.com/reading-quiz",
        buttonText: "اختبار القراءة"
    },

    listening: {
        enabled: true,
        title: "Listening Practice",
        description: "صفحة تدريبات الاستماع",
        url: "https://example.com/listening-quiz",
        buttonText: "اختبار الاستماع"
    }

};


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

    // ========================================================
// FINAL VOCABULARY QUIZ
// ============================================================

const finalQuiz =
    FINAL_QUIZZES.vocabulary;

if (
    finalQuiz &&
    finalQuiz.enabled
) {

    const finalCard =
        document.createElement("article");

    finalCard.className =
        "course-card final-quiz-card";

    finalCard.innerHTML = `

        <div class="course-number">
    ✓
</div>

        <h4>
            ${finalQuiz.title}
        </h4>

        <p>
            ${finalQuiz.description}
        </p>

        <button
            class="course-btn final-quiz-btn"
            type="button"
        >
            ${finalQuiz.buttonText}
        </button>

    `;

    container.appendChild(finalCard);


    finalCard
        .querySelector(".final-quiz-btn")
        .addEventListener(
            "click",
            () => {

                window.open(
                    finalQuiz.url,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

}

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
                ${String(index + 1).padStart(2, "0")}
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
                مشاهدة الدرس
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


    // ========================================================
    // FINAL QUIZ CARD
    // ========================================================

    const finalQuiz =
        FINAL_QUIZZES[sectionType];

    if (
        finalQuiz &&
        finalQuiz.enabled
    ) {

        const finalCard =
            document.createElement("article");

        finalCard.className =
            "course-card final-quiz-card";

        finalCard.innerHTML = `

            <div class="course-number">
                ✓
            </div>

            <h4>
                ${finalQuiz.title}
            </h4>

            <p>
                ${finalQuiz.description}
            </p>

            <button
                class="course-btn final-quiz-btn"
                type="button"
            >
                ${finalQuiz.buttonText}
            </button>

        `;

        container.appendChild(finalCard);


        const finalQuizButton =
            finalCard.querySelector(
                ".final-quiz-btn"
            );


        finalQuizButton.addEventListener(
            "click",
            () => {

                window.open(
                    finalQuiz.url,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    }

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

loadVideo(course.video);

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

loadVideo(question.video);

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

loadVideo(question.video);

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
// VIDEO ERROR - 1080p → 720p FALLBACK
// ============================================================

courseVideo.addEventListener(
    "error",
    () => {

        // If this is a Bunny video
        if (
            currentBunnyVideoId &&
            !tried720p
        ) {

            console.log(
                "1080p is not available. Trying 720p..."
            );

            // Remember that we already tried 720p
            tried720p = true;

            // Build the 720p URL
            const url720 =
                BUNNY_CDN +
                currentBunnyVideoId +
                "/play_720p.mp4";

            // Try 720p
            courseVideo.src = url720;
            courseVideo.load();

            return;
        }

        // Both qualities failed
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
<<<<<<< HEAD

// ========================================================
// FINAL GRAMMAR QUIZ
// ========================================================

const finalQuiz =
    FINAL_QUIZZES.grammar;

if (
    finalQuiz &&
    finalQuiz.enabled
) {

    const finalCard =
        document.createElement("article");

    finalCard.className =
        "course-card final-quiz-card";

    finalCard.innerHTML = `

        <div class="course-number">
            ✓
        </div>

        <h4>
            ${finalQuiz.title}
        </h4>

        <p>
            ${finalQuiz.description}
        </p>

        <button
            class="course-btn final-quiz-btn"
            type="button"
        >
            ${finalQuiz.buttonText}
        </button>

    `;

    courseGrid.appendChild(finalCard);


    finalCard
        .querySelector(".final-quiz-btn")
        .addEventListener(
            "click",
            () => {

                window.open(
                    finalQuiz.url,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

}

lucide.createIcons();
=======
>>>>>>> aa79a7308a92b878e84bb0b4eb83c1d3cb6566ce
