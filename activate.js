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

            const accessData = {
                orderNumber: orderNumber,

                consentAccepted: true,

                products: {
                    step: order.step === true,
                    english: order.english === true,
                    trab6: order.trab6 === true,
                    writing: order.writing === true
                }
            };

            localStorage.setItem(
                "yazeed_current_access",
                JSON.stringify(accessData)
            );

            message.innerHTML = "";

            const title =
                document.createElement("h3");

            title.textContent =
                "تم التحقق من طلبك ✓";

            message.appendChild(title);

            const text =
                document.createElement("p");

            text.textContent =
                "يمكنك الآن الدخول إلى الدورات التي اشتريتها.";

            message.appendChild(text);

            const continueButton =
                document.createElement("a");

            continueButton.href = "/";

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
