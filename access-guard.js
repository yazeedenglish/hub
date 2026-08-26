/* =========================================================
   YAZEED ENGLISH — COURSE ACCESS GUARD
   Frontend-only
========================================================= */

(function () {

    "use strict";


    const ACCESS_PREFIX =
        "yazeed_course_access_";


    const COURSES = {

        step: {
            url: "/step"
        },

        english: {
            url: "/course"
        },

        trab6: {
            url: "/trab6"
        },

        writing: {
            url: "/writing"
        }

    };


    const path =
        window.location.pathname
            .replace(
                /\/+$/,
                ""
            );


    let courseKey =
        null;


    if (
        path ===
        "/step"
    ) {

        courseKey =
            "step";

    }

    else if (
        path ===
        "/course"
    ) {

        courseKey =
            "english";

    }

    else if (
        path ===
        "/trab6"
    ) {

        courseKey =
            "trab6";

    }

    else if (
        path ===
        "/writing"
    ) {

        courseKey =
            "writing";

    }


    if (!courseKey) {
        return;
    }


    function getAccess() {

        const raw =
            localStorage.getItem(
                ACCESS_PREFIX +
                courseKey
            );


        if (!raw) {
            return null;
        }


        try {

            const access =
                JSON.parse(
                    raw
                );


            if (
                !access ||
                access.consentAccepted !==
                    true ||
                typeof access.expiresAt !==
                    "number"
            ) {

                localStorage.removeItem(
                    ACCESS_PREFIX +
                    courseKey
                );

                return null;

            }


            if (
                Date.now() >=
                access.expiresAt
            ) {

                localStorage.removeItem(
                    ACCESS_PREFIX +
                    courseKey
                );

                return null;

            }


            return access;

        } catch {

            localStorage.removeItem(
                ACCESS_PREFIX +
                courseKey
            );

            return null;

        }

    }


    function createBlocker() {

        document.documentElement
            .style
            .visibility =
                "hidden";

    }


    function allowCourse() {

        document.documentElement
            .style
            .visibility =
                "";

    }


    const access =
        getAccess();


    if (!access) {

        createBlocker();


        const target =
            "/activate?course=" +
            encodeURIComponent(
                courseKey
            );


        window.location.replace(
            target
        );


        return;

    }


    allowCourse();


})();
