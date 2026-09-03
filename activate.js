/* =========================================================
   YAZEED ENGLISH — CUSTOMER ACTIVATION
   SUPABASE VERSION
========================================================= */


/* ========================================================
   SUPABASE CONFIG
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


/* =========================================================
   ELEMENTS
========================================================= */

const form =
    document.getElementById("accessForm");

const message =
    document.getElementById("message");


/* =========================================================
   FORM SUBMIT
========================================================= */

form.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const orderNumber =
            document
                .getElementById("orderNumber")
                .value
                .trim();


        const consent =
            document
                .getElementById("consent")
                .checked;


        /* -----------------------------------------
           VALIDATION
        ----------------------------------------- */

        if (!orderNumber) {

            message.textContent =
                "يرجى إدخال رقم الطلب.";

            return;

        }


        if (!consent) {

            message.textContent =
                "يجب الموافقة على التعهد للمتابعة.";

            return;

        }


        /* -----------------------------------------
           LOADING
        ----------------------------------------- */

        message.textContent =
            "جارٍ التحقق من رقم الطلب...";


        try {

            /* -----------------------------------------
               SECURE DATABASE FUNCTION
            ----------------------------------------- */

            const {
                data,
                error
            } =
                await supabaseClient
                    .rpc(
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


            /* -----------------------------------------
               ORDER NOT FOUND
            ----------------------------------------- */

            if (
                !data ||
                data.length === 0
            ) {

                message.textContent =
                    "رقم الطلب غير صحيح.";

                return;

            }


            const order =
                data[0];


            /* -----------------------------------------
               ORDER DEACTIVATED
            ----------------------------------------- */

            if (
                order.active !== true
            ) {

                message.textContent =
                    "هذا الطلب غير نشط حاليًا. يرجى التواصل معنا.";

                return;

            }


            /* -----------------------------------------
               CHECK COURSES
            ----------------------------------------- */

            const hasCourse =
                order.step === true ||
                order.english === true ||
                order.trab6 === true ||
                order.writing === true;


            if (!hasCourse) {

                message.textContent =
                    "لا توجد دورات مفعلة لهذا الطلب.";

                return;

            }


            /* -----------------------------------------
               SAVE ACCESS
            ----------------------------------------- */

            const accessData = {

                orderNumber:
                    order.order_number,

                consentAccepted:
                    true,

                products: {

                    step:
                        order.step === true,

                    english:
                        order.english === true,

                    trab6:
                        order.trab6 === true,

                    writing:
                        order.writing === true

                }

            };


            localStorage.setItem(
                "yazeed_current_access",
                JSON.stringify(accessData)
            );


            /* -----------------------------------------
               SUCCESS MESSAGE
            ----------------------------------------- */

            message.innerHTML = "";


            const title =
                document.createElement("h3");

            title.textContent =
                "تم التحقق من طلبك ✓";


            message.appendChild(
                title
            );


            const text =
                document.createElement("p");

            text.textContent =
                "يمكنك الآن الدخول إلى الدورات التي اشتريتها.";


            message.appendChild(
                text
            );


            const continueButton =
                document.createElement("a");

            continueButton.href =
                "/";

            continueButton.textContent =
                "متابعة إلى مركز الدورات";

            continueButton.style.display =
                "inline-block";

            continueButton.style.marginTop =
                "20px";


            message.appendChild(
                continueButton
            );


        } catch (error) {

            console.error(error);

            message.textContent =
                "حدث خطأ أثناء التحقق من الطلب.";

        }

    }
);
