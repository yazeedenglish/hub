/* =========================================================
   YAZEED ENGLISH — SIMPLE COURSE ACCESS CHECK
========================================================= */

async function checkCourseAccess(courseKey) {

    /* -----------------------------------------
       GET SAVED ORDER
    ----------------------------------------- */

    const savedAccess =
        localStorage.getItem(
            "yazeed_current_access"
        );

    if (!savedAccess) {
        window.location.href =
            "/activate.html";
        return false;
    }

    /* -----------------------------------------
       READ SAVED DATA
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
       GET THE LATEST ORDERS.JSON
    ----------------------------------------- */

    try {

        const response =
            await fetch(
                "/orders.json?time=" +
                Date.now()
            );

        if (!response.ok) {
            throw new Error(
                "Could not load orders.json"
            );
        }

        const data =
            await response.json();

        /* -----------------------------------------
           FIND CUSTOMER ORDER
        ----------------------------------------- */

        const order =
            data.orders[
                access.orderNumber
            ];

        if (!order) {

            localStorage.removeItem(
                "yazeed_current_access"
            );

            window.location.href =
                "/activate.html";

            return false;
        }

        /* -----------------------------------------
           CHECK CURRENT PRODUCT
        ----------------------------------------- */

        if (
            order[courseKey] !== true
        ) {

            alert(
                "ليس لديك وصول إلى هذه الصفحة"
            );

            /* Update saved permissions */
            access.products = {
                step:
                    order.step === true,

                english:
                    order.english === true,

                trab6:
                    order.trab6 === true,

                writing:
                    order.writing === true
            };

            localStorage.setItem(
                "yazeed_current_access",
                JSON.stringify(access)
            );

            window.location.href =
                "/";

            return false;
        }

        /* -----------------------------------------
           UPDATE LOCALSTORAGE
           WITH LATEST PERMISSIONS
        ----------------------------------------- */

        access.products = {
            step:
                order.step === true,

            english:
                order.english === true,

            trab6:
                order.trab6 === true,

            writing:
                order.writing === true
        };

        localStorage.setItem(
            "yazeed_current_access",
            JSON.stringify(access)
        );

        /* -----------------------------------------
           ACCESS APPROVED
        ----------------------------------------- */

        return true;

    } catch (error) {

        console.error(error);

        alert(
            "تعذر التحقق من صلاحية الوصول. يرجى المحاولة مرة أخرى."
        );

        return false;
    }
}
