const form =
    document.getElementById("accessForm");

const message =
    document.getElementById("message");


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


        try {

            const response =
                await fetch("orders.json");


            if (!response.ok) {

                throw new Error(
                    "Could not load orders."
                );

            }


            const data =
                await response.json();


            const order =
                data.orders[orderNumber];


            if (!order) {

                message.textContent =
                    "رقم الطلب غير صحيح.";

                return;

            }


            message.textContent =
                "تم العثور على الطلب بنجاح.";

            console.log(
                "Order:",
                order
            );


        } catch (error) {

            console.error(error);

            message.textContent =
                "حدث خطأ أثناء التحقق من الطلب.";

        }

    }
);
