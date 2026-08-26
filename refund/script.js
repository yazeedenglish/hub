/* =========================================================
   YAZEED ENGLISH — REFUND FORM
   Frontend-only
========================================================= */

/*
   Because this project is frontend-only, the form cannot
   securely write to a database by itself.

   The current implementation prepares the request using
   mailto:. Change the email below to your receiving address.
*/

const REFUND_EMAIL = "yazeedenglish1@gmail.com";

const form = document.getElementById("refundForm");
const message = document.getElementById("formMessage");
const details = document.getElementById("details");
const detailsCount = document.getElementById("detailsCount");
const orderNumber = document.getElementById("orderNumber");
const themeToggle = document.getElementById("themeToggle");


/* =========================================================
   THEME
========================================================= */

function applyTheme() {

    const saved =
        localStorage.getItem("theme");


    if (saved === "dark") {

        document.body.classList.add("dark");

        themeToggle.textContent = "☀️";

    } else {

        document.body.classList.remove("dark");

        themeToggle.textContent = "🌙";

    }

}


themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle("dark");


        const dark =
            document.body.classList.contains("dark");


        localStorage.setItem(
            "theme",
            dark ? "dark" : "light"
        );


        themeToggle.textContent =
            dark ? "☀️" : "🌙";

    }
);


applyTheme();


/* =========================================================
   INPUTS
========================================================= */

orderNumber.addEventListener(
    "input",
    () => {

        orderNumber.value =
            orderNumber.value
                .replace(/\D/g, "")
                .slice(0, 9);

    }
);


details.addEventListener(
    "input",
    () => {

        detailsCount.textContent =
            String(
                details.value.length
            );

    }
);


/* =========================================================
   MESSAGES
========================================================= */

function showMessage(
    text,
    type
) {

    message.className =
        `form-message ${type}`;

    message.textContent =
        text;


    message.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

}


function clearMessage() {

    message.className =
        "form-message";

    message.textContent =
        "";

}


/* =========================================================
   SELECTED COURSES
========================================================= */

function getSelectedCourses() {

    return Array.from(
        document.querySelectorAll(
            'input[name="courses"]:checked'
        )
    ).map(
        checkbox => checkbox.value
    );

}


/* =========================================================
   VALIDATION
========================================================= */

function validateForm() {

    clearMessage();


    const order =
        orderNumber.value.trim();


    /* ---------------------------------------------
       ORDER NUMBER
    --------------------------------------------- */

    if (!/^\d{9}$/.test(order)) {

        showMessage(
            "يرجى إدخال رقم طلب مكوّن من 9 أرقام بالضبط.",
            "error"
        );

        orderNumber.focus();

        return false;

    }


    /* ---------------------------------------------
       COURSES
    --------------------------------------------- */

    const selectedCourses =
        getSelectedCourses();


    if (
        selectedCourses.length === 0
    ) {

        showMessage(
            "يرجى اختيار دورة واحدة على الأقل.",
            "error"
        );

        return false;

    }


    /* ---------------------------------------------
       FORM VALIDATION
    --------------------------------------------- */

    if (!form.checkValidity()) {

        showMessage(
            "يرجى إكمال جميع الحقول المطلوبة والموافقات.",
            "error"
        );


        form
            .querySelector(":invalid")
            ?.focus();


        return false;

    }


    return true;

}


/* =========================================================
   EMAIL BODY
========================================================= */

function buildEmail() {

    const data =
        new FormData(form);


    const selectedCourses =
        getSelectedCourses();


    return [

        "طلب استرجاع — الضمان الذهبي",

        "",

        `الاسم الكامل: ${data.get("name")}`,

        `رقم الجوال: ${data.get("phone")}`,

        `البريد الإلكتروني: ${data.get("email")}`,

        `رقم الطلب: ${data.get("orderNumber")}`,

        `الدورات: ${selectedCourses.join("، ")}`,

        `سبب الاسترجاع: ${data.get("reason")}`,

        `طريقة الاسترجاع: ${
            data.get("refundMethod") ||
            "غير محددة"
        }`,

        "",

        "التفاصيل الإضافية:",

        data.get("details") ||
            "لا توجد",

        "",

        "الإقرارات:",

        "صحة البيانات: تمت الموافقة",

        "سياسة الاسترجاع: تمت الموافقة",

        "التواصل بخصوص الطلب: تمت الموافقة"

    ].join("\n");

}


/* =========================================================
   SUBMIT
========================================================= */

form.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        /* ---------------------------------------------
           VALIDATE
        --------------------------------------------- */

        if (!validateForm()) {

            return;

        }


        /* ---------------------------------------------
           EMAIL CHECK
        --------------------------------------------- */

        if (
            !REFUND_EMAIL ||
            REFUND_EMAIL ===
                "YOUR_EMAIL@example.com"
        ) {

            showMessage(
                "النموذج جاهز، لكن يجب وضع بريد استقبال الطلبات داخل script.js في المتغير REFUND_EMAIL.",
                "error"
            );

            return;

        }


        /* ---------------------------------------------
           COURSES
        --------------------------------------------- */

        const courses =
            getSelectedCourses();


        /* ---------------------------------------------
           ORDER
        --------------------------------------------- */

        const order =
            orderNumber.value.trim();


        /* ---------------------------------------------
           SUBJECT
        --------------------------------------------- */

        const subject =
            `طلب استرجاع - ${courses.join(" + ")} - ${order}`;


        /* ---------------------------------------------
           EMAIL BODY
        --------------------------------------------- */

        const body =
            buildEmail();


        /* ---------------------------------------------
           MAILTO
        --------------------------------------------- */

        const mailto =
            `mailto:${REFUND_EMAIL}` +
            `?subject=${
                encodeURIComponent(subject)
            }` +
            `&body=${
                encodeURIComponent(body)
            }`;


        /* ---------------------------------------------
           MESSAGE
        --------------------------------------------- */

        showMessage(
            "سيتم فتح تطبيق البريد لإرسال الطلب.",
            "success"
        );


        /* ---------------------------------------------
           OPEN EMAIL
        --------------------------------------------- */

        window.location.href =
            mailto;

    }
);
