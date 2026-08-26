/* =========================================================
   YAZEED ENGLISH — FRONTEND ACCESS GUARD
========================================================= */
(function () {
    "use strict";

    const COURSES = {
        step:    { title: "STEP Course",   code: "111111" },
        english: { title: "English Course", code: "222222" },
        trab6:   { title: "Trab6",          code: "333333" },
        writing: { title: "Writing",        code: "444444" }
    };

    const COURSE_KEY = detectCourse();
    const STORAGE_PREFIX = "yazeed_course_access_";
    const ACCESS_DURATION_MS = 30 * 24 * 60 * 60 * 1000;

    if (!COURSE_KEY || !COURSES[COURSE_KEY]) {
        console.error("Yazeed Access Guard: unknown course path.");
        return;
    }

    const course = COURSES[COURSE_KEY];
    let overlay = null;

    function storageKey() {
        return `${STORAGE_PREFIX}${COURSE_KEY}`;
    }

    function readAccess() {
        const raw = localStorage.getItem(storageKey());
        if (!raw) return null;

        try {
            const access = JSON.parse(raw);
            if (!access || typeof access.expiresAt !== "number" || typeof access.consentAcceptedAt !== "number") {
                localStorage.removeItem(storageKey());
                return null;
            }
            if (Date.now() >= access.expiresAt) {
                localStorage.removeItem(storageKey());
                return null;
            }
            return access;
        } catch {
            localStorage.removeItem(storageKey());
            return null;
        }
    }

    function isValidOrderNumber(value) {
        return /^2\d{8}$/.test(value);
    }

    function isValidCode(value) {
        return /^\d{6}$/.test(value);
    }

    function saveAccess() {
        const now = Date.now();
        localStorage.setItem(storageKey(), JSON.stringify({
            course: COURSE_KEY,
            verifiedAt: now,
            consentAcceptedAt: now,
            expiresAt: now + ACCESS_DURATION_MS
        }));
    }

    function concealCourse() {
        document.documentElement.classList.add("yazeed-access-pending");
    }

    function revealCourse() {
        document.documentElement.classList.remove("yazeed-access-pending");
    }

    function emitAccessGranted(restored = false) {
        const detail = { course: COURSE_KEY, restored };
        window.YazeedAccessState = { course: COURSE_KEY, valid: true, restored };
        window.dispatchEvent(new CustomEvent("yazeedAccessGranted", { detail }));
    }

    function createOverlay() {
        overlay = document.createElement("div");
        overlay.id = "yazeedAccessOverlay";
        overlay.className = "yazeed-access-overlay";
        overlay.innerHTML = `
            <div class="yazeed-access-box" role="dialog" aria-modal="true" aria-labelledby="yazeedAccessTitle">
                <div class="yazeed-access-logo">YE</div>

                <section data-step="verify">
                    <h1 id="yazeedAccessTitle">الدخول إلى الدورة</h1>
                    <h2>${escapeHtml(course.title)}</h2>
                    <p class="yazeed-access-description">أدخل رقم طلبك ورمز الوصول للمتابعة.</p>

                    <label class="yazeed-field">
                        <span>رقم الطلب</span>
                        <input id="yazeedOrderInput" inputmode="numeric" autocomplete="off" maxlength="9" placeholder="9 أرقام تبدأ بالرقم 2">
                    </label>

                    <label class="yazeed-field">
                        <span>رمز الوصول</span>
                        <input id="yazeedCodeInput" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="6 أرقام">
                    </label>

                    <p id="yazeedAccessMessage" class="yazeed-access-message" aria-live="polite"></p>
                    <button id="yazeedVerifyButton" class="yazeed-primary-button" type="button">تحقق ومتابعة</button>
                </section>

                <section data-step="consent" hidden>
                    <h1>إقرار وشروط الاستخدام</h1>
                    <h2>${escapeHtml(course.title)}</h2>

                    <div class="yazeed-consent-text">
                        <p>أقر بأن محتوى هذه الدورة مخصص للاستخدام الشخصي فقط، وأتعهد بعدم نسخ أو تصوير أو مشاركة أو إعادة نشر أو توزيع محتوى الدورة أو إتاحته للغير بأي وسيلة.</p>
                        <p>أوافق على احترام حقوق الملكية الفكرية والمحتوى التعليمي الخاص بـ Yazeed English وعدم استخدامه خارج إطار الاستخدام المسموح به.</p>
                    </div>

                    <label class="yazeed-consent-label">
                        <input id="yazeedConsentCheckbox" type="checkbox">
                        <span>أوافق على الشروط وأتعهد بعدم مشاركة محتوى الدورة.</span>
                    </label>

                    <p id="yazeedConsentMessage" class="yazeed-access-message" aria-live="polite"></p>
                    <button id="yazeedAgreeButton" class="yazeed-primary-button" type="button" disabled>أوافق وأدخل الدورة</button>
                </section>

                <div class="yazeed-access-loading" hidden>
                    <div class="yazeed-spinner"></div>
                    <p>جارٍ تجهيز الدورة...</p>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        const orderInput = overlay.querySelector("#yazeedOrderInput");
        const codeInput = overlay.querySelector("#yazeedCodeInput");
        const verifyMessage = overlay.querySelector("#yazeedAccessMessage");
        const consentCheckbox = overlay.querySelector("#yazeedConsentCheckbox");
        const consentMessage = overlay.querySelector("#yazeedConsentMessage");
        const verifyButton = overlay.querySelector("#yazeedVerifyButton");
        const agreeButton = overlay.querySelector("#yazeedAgreeButton");

        const sanitizeNumeric = (input) => {
            input.value = input.value.replace(/\D/g, "");
        };

        orderInput.addEventListener("input", () => {
            sanitizeNumeric(orderInput);
            verifyMessage.textContent = "";
        });

        codeInput.addEventListener("input", () => {
            sanitizeNumeric(codeInput);
            verifyMessage.textContent = "";
        });

        verifyButton.addEventListener("click", () => {
            const order = orderInput.value.trim();
            const code = codeInput.value.trim();

            if (!isValidOrderNumber(order)) {
                verifyMessage.textContent = "رقم الطلب يجب أن يكون 9 أرقام بالضبط ويبدأ بالرقم 2.";
                orderInput.focus();
                return;
            }

            if (!isValidCode(code)) {
                verifyMessage.textContent = "رمز الوصول يجب أن يتكون من 6 أرقام.";
                codeInput.focus();
                return;
            }

            if (code !== course.code) {
                verifyMessage.textContent = "رقم الطلب أو رمز الوصول غير صحيح.";
                codeInput.focus();
                return;
            }

            overlay.querySelector('[data-step="verify"]').hidden = true;
            overlay.querySelector('[data-step="consent"]').hidden = false;
            consentCheckbox.checked = false;
            agreeButton.disabled = true;
            consentMessage.textContent = "";
            setTimeout(() => consentCheckbox.focus(), 50);
        });

        consentCheckbox.addEventListener("change", () => {
            agreeButton.disabled = !consentCheckbox.checked;
            consentMessage.textContent = "";
        });

        agreeButton.addEventListener("click", () => {
            if (!consentCheckbox.checked) {
                consentMessage.textContent = "يجب الموافقة على الإقرار للمتابعة.";
                return;
            }

            overlay.querySelector('[data-step="consent"]').hidden = true;
            overlay.querySelector(".yazeed-access-loading").hidden = false;

            saveAccess();

            setTimeout(() => {
                overlay.remove();
                overlay = null;
                revealCourse();
                emitAccessGranted(false);
            }, 220);
        });

        const onEnter = (event) => {
            if (event.key !== "Enter") return;
            if (!overlay || overlay.querySelector('[data-step="verify"]').hidden) return;
            verifyButton.click();
        };
        orderInput.addEventListener("keydown", onEnter);
        codeInput.addEventListener("keydown", onEnter);

        setTimeout(() => orderInput.focus(), 50);
    }

    function initialize() {
        concealCourse();

        const existingAccess = readAccess();
        if (existingAccess) {
            revealCourse();
            window.YazeedAccessState = { course: COURSE_KEY, valid: true, restored: true };
            emitAccessGranted(true);
            return;
        }

        createOverlay();
    }

    function detectCourse() {
        const path = window.location.pathname.replace(/\/+$/, "");
        if (path === "/step") return "step";
        if (path === "/course") return "english";
        if (path === "/trab6") return "trab6";
        if (path === "/writing") return "writing";
        return null;
    }

    function escapeHtml(value) {
        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    const style = document.createElement("style");
    style.textContent = `
        html.yazeed-access-pending body > *:not(#yazeedAccessOverlay) { visibility: hidden !important; }
        .yazeed-access-overlay {
            position: fixed; inset: 0; z-index: 2147483647; display: flex; align-items: center; justify-content: center;
            padding: 24px; background: var(--paper, #F5F6F2); color: var(--ink, #00273a); font-family: "Tajawal", sans-serif; overflow-y: auto;
        }
        .yazeed-access-box {
            width: 100%; max-width: 470px; padding: 38px; background: var(--card, #FFFFFF); border: 1px solid var(--line, #DCDFD6);
            border-radius: 24px; box-shadow: 0 20px 60px rgba(0, 39, 58, .10); text-align: center;
        }
        .yazeed-access-logo { width: 65px; height: 65px; margin: 0 auto 18px; display: grid; place-items: center; border-radius: 18px; background: var(--indigo, #00689b); color: #fff; font-size: 20px; font-weight: 900; }
        .yazeed-access-box h1 { margin: 0; font-size: 27px; font-weight: 900; }
        .yazeed-access-box h2 { margin: 5px 0 15px; color: var(--indigo, #00689b); font-size: 15px; font-weight: 800; }
        .yazeed-access-description { margin: 0 0 24px; color: var(--ink-soft, #5B645F); font-size: 14px; line-height: 1.8; }
        .yazeed-field { display: block; margin-bottom: 14px; text-align: right; }
        .yazeed-field span { display: block; margin-bottom: 7px; font-size: 13px; font-weight: 800; }
        .yazeed-field input { width: 100%; min-height: 50px; padding: 12px 14px; border: 1px solid var(--line, #DCDFD6); border-radius: 12px; background: var(--paper, #F5F6F2); color: var(--ink, #00273a); outline: none; font-family: inherit; font-size: 18px; text-align: center; letter-spacing: 3px; }
        #yazeedCodeInput { letter-spacing: 7px; }
        .yazeed-field input:focus { border-color: var(--indigo, #00689b); }
        .yazeed-access-message { min-height: 21px; margin: 8px 0 12px; color: var(--danger, #C94C4C); font-size: 13px; line-height: 1.6; }
        .yazeed-primary-button { width: 100%; min-height: 50px; border: none; border-radius: 12px; background: var(--indigo, #00689b); color: white; font-family: inherit; font-size: 15px; font-weight: 900; cursor: pointer; transition: .2s; }
        .yazeed-primary-button:hover:not(:disabled) { transform: translateY(-2px); opacity: .93; }
        .yazeed-primary-button:disabled { cursor: not-allowed; opacity: .45; }
        .yazeed-consent-text { margin: 20px 0; padding: 17px; border: 1px solid var(--line, #DCDFD6); border-radius: 14px; background: var(--paper, #F5F6F2); text-align: right; color: var(--ink-soft, #5B645F); font-size: 13px; line-height: 1.9; }
        .yazeed-consent-text p { margin: 0 0 12px; }
        .yazeed-consent-text p:last-child { margin-bottom: 0; }
        .yazeed-consent-label { display: flex; align-items: flex-start; gap: 10px; margin: 20px 0; text-align: right; color: var(--ink-soft, #5B645F); font-size: 13px; line-height: 1.8; cursor: pointer; }
        .yazeed-consent-label input { margin-top: 5px; width: 18px; height: 18px; accent-color: var(--indigo, #00689b); flex-shrink: 0; }
        .yazeed-access-loading { padding: 25px 0 5px; }
        .yazeed-spinner { width: 38px; height: 38px; margin: 0 auto 14px; border: 3px solid var(--line, #DCDFD6); border-top-color: var(--indigo, #00689b); border-radius: 50%; animation: yazeed-spin .75s linear infinite; }
        .yazeed-access-loading p { margin: 0; color: var(--ink-soft, #5B645F); font-size: 13px; }
        @keyframes yazeed-spin { to { transform: rotate(360deg); } }
        @media (max-width: 550px) { .yazeed-access-overlay { padding: 15px; } .yazeed-access-box { padding: 30px 20px; border-radius: 20px; } .yazeed-access-box h1 { font-size: 23px; } }
    `;
    document.head.appendChild(style);

    window.YazeedAccess = {
        course: COURSE_KEY,
        getAccess: readAccess,
        hasValidAccess: () => Boolean(readAccess())
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize, { once: true });
    } else {
        initialize();
    }
})();
