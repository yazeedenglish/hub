/* =========================================================
   YAZEED ENGLISH HUB
========================================================= */

const STORE_URL = "https://yazeedenglish.com";

const ACCESS_PREFIX =
    "yazeed_course_access_";

const ACCESS_DURATION =
    30 * 24 * 60 * 60 * 1000;


/* =========================================================
   COURSES
========================================================= */

const COURSES = {

    step: {
        key: "step",

        title: "STEP Course",

        description:
            "دورة STEP لتطوير مهاراتك والاستعداد للاختبار.",

        url: "/step",

        activateUrl:
            "/activate?course=step",

        purchaseUrl:
            STORE_URL,

        image:
            "images/step.png",

        fallback:
            "STEP"
    },


    english: {
        key: "english",

        title: "English Course",

        description:
            "القارئ التفاعلي الخاص بدورة English.",

        url: "/course",

        activateUrl:
            "/activate?course=english",

        purchaseUrl:
            STORE_URL,

        image:
            "images/english.png",

        fallback:
            "EN"
    },


    trab6: {
        key: "trab6",

        title: "Trab6",

        description:
            "الوصول إلى محتوى Trab6 التفاعلي.",

        url: "/trab6",

        activateUrl:
            "/activate?course=trab6",

        purchaseUrl:
            STORE_URL,

        image:
            "images/trab6.png",

        fallback:
            "T6"
    },


    writing: {
        key: "writing",

        title: "Writing",

        description:
            "الوصول إلى محتوى Writing التفاعلي.",

        url: "/writing",

        activateUrl:
            "/activate?course=writing",

        purchaseUrl:
            STORE_URL,

        image:
            "images/writing.png",

        fallback:
            "WR"
    }

};


/* =========================================================
   ACCESS HELPERS
========================================================= */

function getAccessKey(courseKey) {

    return (
        ACCESS_PREFIX +
        courseKey
    );

}


function getCourseAccess(courseKey) {

    const raw =
        localStorage.getItem(
            getAccessKey(courseKey)
        );

    if (!raw) {
        return null;
    }


    try {

        const access =
            JSON.parse(raw);


        if (
            !access ||
            typeof access.expiresAt !==
                "number" ||
            access.consentAccepted !==
                true
        ) {

            localStorage.removeItem(
                getAccessKey(courseKey)
            );

            return null;

        }


        if (
            Date.now() >=
            access.expiresAt
        ) {

            localStorage.removeItem(
                getAccessKey(courseKey)
            );

            return null;

        }


        return access;

    } catch (error) {

        localStorage.removeItem(
            getAccessKey(courseKey)
        );

        return null;

    }

}


/* =========================================================
   COURSE STATE
========================================================= */

function getCourseState(courseKey) {

    const access =
        getCourseAccess(courseKey);


    if (access) {
        return "active";
    }


    const raw =
        localStorage.getItem(
            getAccessKey(courseKey)
        );


    if (raw) {

        try {

            const saved =
                JSON.parse(raw);

            if (
                saved &&
                typeof saved.expiresAt ===
                    "number" &&
                Date.now() >=
                    saved.expiresAt
            ) {

                return "expired";

            }

        } catch {

            return "locked";

        }

    }


    return "locked";

}


/* =========================================================
   IMAGE
========================================================= */

function createCourseImage(course) {

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "course-image-wrap";


    const image =
        document.createElement("img");

    image.className =
        "course-image";

    image.src =
        course.image;

    image.alt =
        course.title;

    image.loading =
        "lazy";


    image.onerror =
        () => {

            wrapper.innerHTML = "";

            const fallback =
                document.createElement(
                    "div"
                );

            fallback.className =
                "course-image-placeholder";

            fallback.textContent =
                course.fallback;

            wrapper.appendChild(
                fallback
            );

        };


    wrapper.appendChild(
        image
    );


    return wrapper;

}


/* =========================================================
   RENDER
========================================================= */

function renderCourses() {

    const courseGrid =
        document.getElementById(
            "courseGrid"
        );


    courseGrid.innerHTML = "";


    Object.values(
        COURSES
    ).forEach(
        (course, index) => {

            const state =
                getCourseState(
                    course.key
                );


            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "course-card";


            card.style.animationDelay =
                `${index * 70}ms`;


            const imageWrap =
                createCourseImage(
                    course
                );


            /* -----------------------------------------
               LOCK
            ----------------------------------------- */

            if (
                state !==
                "active"
            ) {

                const overlay =
                    document.createElement(
                        "div"
                    );

                overlay.className =
                    "course-lock-overlay";


                const lock =
                    document.createElement(
                        "div"
                    );

                lock.className =
                    "course-lock";

                lock.textContent =
                    "🔒";


                overlay.appendChild(
                    lock
                );

                imageWrap.appendChild(
                    overlay
                );

            }


            /* -----------------------------------------
               BODY
            ----------------------------------------- */

            const body =
                document.createElement(
                    "div"
                );

            body.className =
                "course-body";


            const status =
                document.createElement(
                    "div"
                );

            status.className =
                "course-status";


            const title =
                document.createElement(
                    "h3"
                );

            title.textContent =
                course.title;


            const description =
                document.createElement(
                    "p"
                );

            description.textContent =
                course.description;


            const actions =
                document.createElement(
                    "div"
                );

            actions.className =
                "course-actions";


            /* -----------------------------------------
               ACTIVE
            ----------------------------------------- */

            if (
                state ===
                "active"
            ) {

                status.classList.add(
                    "active"
                );

                status.innerHTML =
                    "✓ <span>الوصول مفعّل</span>";


                const enter =
                    document.createElement(
                        "a"
                    );

                enter.className =
                    "course-btn primary";

                enter.href =
                    course.url;

                enter.textContent =
                    "دخول الدورة";


                actions.appendChild(
                    enter
                );

            }


            /* -----------------------------------------
               EXPIRED
            ----------------------------------------- */

            else if (
                state ===
                "expired"
            ) {

                status.classList.add(
                    "expired"
                );

                status.innerHTML =
                    "⏱ <span>انتهت الصلاحية</span>";


                const reactivate =
                    document.createElement(
                        "a"
                    );

                reactivate.className =
                    "course-btn primary";

                reactivate.href =
                    course.activateUrl;

                reactivate.textContent =
                    "إعادة التفعيل";


                actions.appendChild(
                    reactivate
                );

            }


            /* -----------------------------------------
               LOCKED
            ----------------------------------------- */

            else {

                status.innerHTML =
                    "🔒 <span>غير مفعّلة</span>";


                const activate =
                    document.createElement(
                        "a"
                    );

                activate.className =
                    "course-btn secondary";

                activate.href =
                    course.activateUrl;

                activate.textContent =
                    "تفعيل الوصول";


                const purchase =
                    document.createElement(
                        "a"
                    );

                purchase.className =
                    "course-btn primary";

                purchase.href =
                    course.purchaseUrl;

                purchase.target =
                    "_blank";

                purchase.rel =
                    "noopener noreferrer";

                purchase.innerHTML =
                    "اشتر الآن <span>↗</span>";


                actions.appendChild(
                    activate
                );

                actions.appendChild(
                    purchase
                );

            }


            body.appendChild(
                status
            );

            body.appendChild(
                title
            );

            body.appendChild(
                description
            );

            body.appendChild(
                actions
            );


            card.appendChild(
                imageWrap
            );

            card.appendChild(
                body
            );


            courseGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   THEME
========================================================= */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


function applyTheme() {

    const theme =
        localStorage.getItem(
            "theme"
        );


    if (
        theme ===
        "dark"
    ) {

        document.body.classList.add(
            "dark"
        );

        themeToggle.textContent =
            "☀️";

    } else {

        document.body.classList.remove(
            "dark"
        );

        themeToggle.textContent =
            "🌙";

    }

}


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


        localStorage.setItem(
            "theme",
            isDark
                ? "dark"
                : "light"
        );


        themeToggle.textContent =
            isDark
                ? "☀️"
                : "🌙";

    }
);


/* =========================================================
   START
========================================================= */

applyTheme();

renderCourses();


window.addEventListener(
    "pageshow",
    renderCourses
);