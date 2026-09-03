/* =========================================================
   YAZEED ENGLISH — COURSE ACCESS CHECK
   SUPABASE VERSION
========================================================= */

const SUPABASE_URL =
    "https://mldejpjuluiavdhdumqa.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_4CSu5Xqo99OK5o4EJom_Pg_tvelza_h";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


async function checkCourseAccess(courseKey) {

    const savedAccess =
        localStorage.getItem("yazeed_current_access");

    /*
       No saved access
    */
    if (!savedAccess) {
        window.location.href = "/activate.html";
        return false;
    }


    let access;

    try {

        access = JSON.parse(savedAccess);

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


    /*
       Get order number
    */
    const orderNumber =
        access.orderNumber;


    if (!orderNumber) {

        localStorage.removeItem(
            "yazeed_current_access"
        );

        window.location.href =
            "/activate.html";

        return false;
    }


    try {

        /*
           Securely check this specific order
           through Supabase RPC.
        */
        const {
            data,
            error
        } =
            await supabaseClient.rpc(
                "get_order_access",
                {
                    p_order_number:
                        orderNumber
                }
            );


        if (error) {

            console.error(
                "Supabase error:",
                error
            );

            throw error;
        }


        /*
           Order does not exist
        */
        if (
            !data ||
            data.length === 0
        ) {

            localStorage.removeItem(
                "yazeed_current_access"
            );

            window.location.href =
                "/activate.html";

            return false;
        }


        const order =
            data[0];


        /*
           Entire order deactivated
        */
        if (
            order.active !== true
        ) {

            localStorage.removeItem(
                "yazeed_current_access"
            );

            alert(
                "هذا الطلب غير نشط حاليًا. يرجى التواصل معنا."
            );

            window.location.href =
                "/activate.html";

            return false;
        }


        /*
           Check the specific course
        */
        if (
            order[courseKey] !== true
        ) {

            alert(
                "ليس لديك وصول إلى هذه الدورة."
            );

            /*
               Update saved permissions
            */
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


        /*
           Update local permissions
           in case admin changed anything.
        */
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


        /*
           Access confirmed
        */
        return true;


    } catch (error) {

        console.error(
            "Access verification failed:",
            error
        );

        alert(
            "تعذر التحقق من صلاحية الوصول. يرجى المحاولة مرة أخرى."
        );

        return false;
    }
}
