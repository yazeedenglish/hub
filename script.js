const STORE_URL = "https://yazeedenglish.com";
const ACCESS_PREFIX = "yazeed_course_access_";

const COURSES = {
    step: {
        key: "step",
        title: "STEP Course",
        description: "دورة STEP لتطوير مهاراتك والاستعداد للاختبار.",
        url: "/step",
        purchaseUrl: STORE_URL,
        image: "images/step.png",
        fallback: "STEP"
    },
    english: {
        key: "english",
        title: "English Course",
        description: "القارئ التفاعلي والمحتوى التعليمي الخاص بدورة English.",
        url: "/course",
        purchaseUrl: STORE_URL,
        image: "images/english.png",
        fallback: "EN"
    },
    trab6: {
        key: "trab6",
        title: "Trab6",
        description: "الوصول إلى محتوى Trab6 التفاعلي.",
        url: "/trab6",
        purchaseUrl: STORE_URL,
        image: "images/trab6.png",
        fallback: "T6"
    },
    writing: {
        key: "writing",
        title: "Writing",
        description: "الوصول إلى محتوى Writing التفاعلي.",
        url: "/writing",
        purchaseUrl: STORE_URL,
        image: "images/writing.png",
        fallback: "WR"
    }
};

const courseGrid = document.getElementById("courseGrid");
const themeToggle = document.getElementById("themeToggle");

function readAccess(courseKey) {
    const storageKey = `${ACCESS_PREFIX}${courseKey}`;
    const raw = localStorage.getItem(storageKey);
    if (!raw) return null;

    try {
        const access = JSON.parse(raw);
        if (!access || typeof access.expiresAt !== "number" || typeof access.consentAcceptedAt !== "number") {
            localStorage.removeItem(storageKey);
            return null;
        }
        if (Date.now() >= access.expiresAt) {
            localStorage.removeItem(storageKey);
            return null;
        }
        return access;
    } catch {
        localStorage.removeItem(storageKey);
        return null;
    }
}

function createImage(course, locked) {
    const wrap = document.createElement("div");
    wrap.className = "course-image-wrap";

    const image = document.createElement("img");
    image.className = "course-image";
    image.src = course.image;
    image.alt = course.title;
    image.loading = "lazy";
    image.onerror = () => {
        wrap.innerHTML = "";
        const fallback = document.createElement("div");
        fallback.className = "course-image-placeholder";
        fallback.textContent = course.fallback;
        wrap.appendChild(fallback);
    };
    wrap.appendChild(image);

    if (locked) {
        const overlay = document.createElement("div");
        overlay.className = "course-lock-overlay";
        const lock = document.createElement("div");
        lock.className = "course-lock";
        lock.textContent = "🔒";
        overlay.appendChild(lock);
        wrap.appendChild(overlay);
    }
    return wrap;
}

function renderCourses() {
    courseGrid.innerHTML = "";

    Object.values(COURSES).forEach((course, index) => {
        const access = readAccess(course.key);
        const active = Boolean(access);

        const card = document.createElement("article");
        card.className = "course-card";
        card.style.animationDelay = `${index * 70}ms`;
        card.appendChild(createImage(course, !active));

        const body = document.createElement("div");
        body.className = "course-body";

        const status = document.createElement("div");
        status.className = `course-status${active ? " active" : ""}`;
        status.innerHTML = active ? "✓ <span>الوصول مفعّل</span>" : "🔒 <span>غير مفعّلة</span>";

        const title = document.createElement("h3");
        title.textContent = course.title;

        const description = document.createElement("p");
        description.textContent = course.description;

        const actions = document.createElement("div");
        actions.className = "course-actions";

        if (active) {
            const enter = document.createElement("a");
            enter.className = "course-btn primary";
            enter.href = course.url;
            enter.textContent = "دخول الدورة";
            actions.appendChild(enter);
        } else {
            const activate = document.createElement("a");
            activate.className = "course-btn secondary";
            activate.href = course.url;
            activate.textContent = "تفعيل الوصول";

            const purchase = document.createElement("a");
            purchase.className = "course-btn primary";
            purchase.href = course.purchaseUrl;
            purchase.target = "_blank";
            purchase.rel = "noopener noreferrer";
            purchase.innerHTML = "اشتر الآن <span>↗</span>";

            actions.append(activate, purchase);
        }

        body.append(status, title, description, actions);
        card.appendChild(body);
        courseGrid.appendChild(card);
    });
}

function applySavedTheme() {
    const saved = localStorage.getItem("theme");
    const dark = saved === "dark";
    document.body.classList.toggle("dark", dark);
    themeToggle.textContent = dark ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
    const dark = !document.body.classList.contains("dark");
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
    themeToggle.textContent = dark ? "☀️" : "🌙";
});

applySavedTheme();
renderCourses();
window.addEventListener("pageshow", renderCourses);
window.addEventListener("storage", renderCourses);
