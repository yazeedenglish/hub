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


            const products = [];


            if (order.step === true) {

                products.push("STEP Course");

            }


            if (order.english === true) {

                products.push("English Course");

            }


            if (order.trab6 === true) {

                products.push("Trab6");

            }


            if (order.writing === true) {

                products.push("Writing");

            }


            if (products.length === 0) {

                message.textContent =
                    "هذا الطلب لا يحتوي على أي دورات مفعّلة.";

                return;

            }


            message.innerHTML = "";


            const title =
                document.createElement("h3");

            title.textContent =
                "الدورات المتاحة لك:";


            message.appendChild(title);


            const list =
                document.createElement("ul");


            products.forEach(
                function (product) {

                    const item =
                        document.createElement("li");

                    item.textContent =
                        "✓ " + product;

                    list.appendChild(item);

                }
            );


            message.appendChild(list);


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
