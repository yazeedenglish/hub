/* =========================================================
   YAZEED ENGLISH — SIMPLE COURSE ACCESS CHECK
========================================================= */

function checkCourseAccess(courseKey) {

    const savedAccess =
        localStorage.getItem(
            "yazeed_current_access"
        );

    /* -----------------------------------------
       NO ACCESS DATA
    ----------------------------------------- */

    if (!savedAccess) {
        window.location.href = "/activate.html";
        return false;
    }

    /* -----------------------------------------
       READ ACCESS DATA
    ----------------------------------------- */

    let access;

    try {

        access =
            JSON.parse(savedAccess);

    } catch (error) {

        console.error(
            "Invalid access data:",
            error
        );

        localStorage.removeItem(
            "yazeed_current_access"
        );

        window.location.href =
            "/activate.html";

        return false;
    }

    /* -----------------------------------------
       CHECK PRODUCT
    ----------------------------------------- */

    if (
        !access.products ||
        access.products[courseKey] !== true
    ) {

        alert(
            "ليس لديك وصول إلى هذه الدورة."
        );

        window.location.href = "/";

        return false;
    }

    /* -----------------------------------------
       ACCESS APPROVED
    ----------------------------------------- */

    return true;
}
