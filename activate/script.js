/* =========================================================
   YAZEED ENGLISH — ACTIVATION SYSTEM
========================================================= */

const COURSES = {

    step: {
        title: "STEP Course",

        code: "111111",

        url: "/step"
    },


    english: {
        title: "English Course",

        code: "222222",

        url: "/course"
    },


    trab6: {
        title: "Trab6",

        code: "333333",

        url: "/trab6"
    },


    writing: {
        title: "Writing",

        code: "444444",

        url: "/writing"
    }

};


const ACCESS_PREFIX =
    "yazeed_course_access_";


const ACCESS_DURATION =
    30 *
    24 *
    60 *
    60 *
    1000;


/* =========================================================
   DOM
========================================================= */

const verifyScreen =
    document.getElementById(
        "verifyScreen"
    );

const consentScreen =
    document.getElementById(
        "consentScreen"
    );

const loadingScreen =
    document.getElementById(
        "loadingScreen"
    );

const orderInput =
    document.getElementById(
        "orderInput"
    );

const accessCodeInput =
    document.getElementById(
        "accessCodeInput"
    );

const verifyButton =
    document.getElementById(
        "verifyButton"
    );

const verifyError =
    document.getElementById(
        "verifyError"
    );

const consentCourseTitle =
    document.getElementById(
        "consentCourseTitle"
    );

const consentCheckbox =
    document.getElementById(
        "consentCheckbox"
    );

const consentButton =
    document.getElementById(
        "consentButton"
    );

const consentError =
    document.getElementById(
        "consentError"
    );

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


let selectedCourseKey =
    null;


/* =========================================================
   COURSE PARAMETER
========================================================= */

const query =
    new URLSearchParams(
        window.location.search
    );

const requestedCourse =
    query.get(
        "course"
    );


if (
    requestedCourse &&
    !COURSES[requestedCourse]
) {

    console.warn(
        "Unknown course parameter."
    );

}


/* =========================================================
   ACCESS STORAGE
========================================================= */

function accessKey(
    courseKey
) {

    return (
        ACCESS_PREFIX +
        courseKey
    );

}


function saveAccess(
    courseKey
) {

    const now =
        Date.now();


    const access = {

        course:
            courseKey,

        consentAccepted:
            true,

        activatedAt:
            now,

        expiresAt:
            now +
            ACCESS_DURATION

    };


    localStorage.setItem(
        accessKey(
            courseKey
        ),
        JSON.stringify(
            access
        )
    );

}


/* =========================================================
   VALIDATION
========================================================= */

function validOrderNumber(
    value
) {

    return /^2\d{8}$/.test(
        value
    );

}


function getCourseFromCode(
    code
) {

    for (
        const [
            key,
            course
        ]
        of Object.entries(
            COURSES
        )
    ) {

        if (
            course.code ===
            code
        ) {

            return {
                key,
                course
            };

        }

    }


    return null;

}


/* =========================================================
   VERIFY
========================================================= */

function verifyCustomer() {

    verifyError.textContent =
        "";


    const orderNumber =
        orderInput.value
            .trim();


    const accessCode =
        accessCodeInput.value
            .trim();


    if (
        !validOrderNumber(
            orderNumber
        )
    ) {

        verifyError.textContent =
            "رقم الطلب يجب أن يكون 9 أرقام بالضبط ويبدأ بالرقم 2.";

        orderInput.focus();

        return;

    }


    if (
        !/^\d{6}$/.test(
            accessCode
        )
    ) {

        verifyError.textContent =
            "رمز الوصول يجب أن يتكون من 6 أرقام.";

        accessCodeInput.focus();

        return;

    }


    const result =
        getCourseFromCode(
            accessCode
        );


    if (!result) {

        verifyError.textContent =
            "رقم الطلب أو رمز الوصول غير صحيح.";

        accessCodeInput.focus();

        return;

    }


    if (
        requestedCourse &&
        requestedCourse !== result.key
    ) {

        verifyError.textContent =
            "رمز الوصول لا يطابق الدورة المختارة.";

        accessCodeInput.focus();

        return;

    }


    selectedCourseKey =
        result.key;


    consentCourseTitle.textContent =
        result.course.title;


    verifyScreen.hidden =
        true;

    consentScreen.hidden =
        false;


    consentCheckbox.checked =
        false;

    consentButton.disabled =
        true;

    consentError.textContent =
        "";


    setTimeout(
        () => {
            consentCheckbox.focus();
        },
        50
    );

}


/* =========================================================
   CONSENT
========================================================= */

consentCheckbox.addEventListener(
    "change",
    () => {

        consentButton.disabled =
            !consentCheckbox.checked;

        consentError.textContent =
            "";

    }
);


function acceptConsent() {

    consentError.textContent =
        "";


    if (
        !consentCheckbox.checked
    ) {

        consentError.textContent =
            "يجب الموافقة على الإقرار للمتابعة.";

        return;

    }


    if (
        !selectedCourseKey
    ) {

        consentError.textContent =
            "تعذر تحديد الدورة.";

        return;

    }


    const course =
        COURSES[
            selectedCourseKey
        ];


    saveAccess(
        selectedCourseKey
    );


    consentScreen.hidden =
        true;

    loadingScreen.hidden =
        false;


    setTimeout(
        () => {

            window.location.href =
                course.url;

        },
        400
    );

}


/* =========================================================
   INPUT CLEANUP
========================================================= */

orderInput.addEventListener(
    "input",
    () => {

        orderInput.value =
            orderInput.value.replace(
                /\D/g,
                ""
            );

        verifyError.textContent =
            "";

    }
);


accessCodeInput.addEventListener(
    "input",
    () => {

        accessCodeInput.value =
            accessCodeInput.value.replace(
                /\D/g,
                ""
            );

        verifyError.textContent =
            "";

    }
);


orderInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Enter"
        ) {

            verifyCustomer();

        }

    }
);


accessCodeInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Enter"
        ) {

            verifyCustomer();

        }

    }
);


/* =========================================================
   BUTTONS
========================================================= */

verifyButton.addEventListener(
    "click",
    verifyCustomer
);


consentButton.addEventListener(
    "click",
    acceptConsent
);


/* =========================================================
   THEME
========================================================= */

function applyTheme() {

    const saved =
        localStorage.getItem(
            "theme"
        );


    if (
        saved ===
        "dark"
    ) {

        document.body.classList.add(
            "dark"
        );

        themeToggle.textContent =
            "☀️";

    } else {

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


        const dark =
            document.body.classList.contains(
                "dark"
            );


        localStorage.setItem(
            "theme",
            dark
                ? "dark"
                : "light"
        );


        themeToggle.textContent =
            dark
                ? "☀️"
                : "🌙";

    }
);


applyTheme();
