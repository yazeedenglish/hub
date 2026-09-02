/* =========================================================
   YAZEED ENGLISH — ADMIN DASHBOARD
   UI ONLY — NO DATABASE CONNECTION YET
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const modalOverlay =
    document.getElementById("modalOverlay");

const openCreateBtn =
    document.getElementById("openCreateBtn");

const closeModalBtn =
    document.getElementById("closeModalBtn");

const cancelModalBtn =
    document.getElementById("cancelModalBtn");

const saveOrderBtn =
    document.getElementById("saveOrderBtn");

const modalTitle =
    document.getElementById("modalTitle");

const searchInput =
    document.getElementById("searchInput");

const productFilter =
    document.getElementById("productFilter");

const statusFilter =
    document.getElementById("statusFilter");

const ordersTableBody =
    document.getElementById("ordersTableBody");

const emptyState =
    document.getElementById("emptyState");


/* =========================================================
   ORDERS
========================================================= */

let orders = {};    


/* =========================================================
   EDITING STATE
========================================================= */

let editingOrderNumber = null;


/* =========================================================
   OPEN CREATE MODAL
========================================================= */

openCreateBtn.addEventListener(
    "click",
    function () {

        editingOrderNumber = null;

        modalTitle.textContent =
            "إنشاء طلب جديد";

        saveOrderBtn.textContent =
            "إنشاء الطلب";

        clearModal();

        modalOverlay.style.display =
            "flex";

    }
);


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

    modalOverlay.style.display =
        "none";

}


closeModalBtn.addEventListener(
    "click",
    closeModal
);


cancelModalBtn.addEventListener(
    "click",
    closeModal
);


/* =========================================================
   CLEAR MODAL
========================================================= */

function clearModal() {

    document
        .getElementById("modalOrderNumber")
        .value = "";

    document
        .getElementById("modalStep")
        .checked = false;

    document
        .getElementById("modalEnglish")
        .checked = false;

    document
        .getElementById("modalTrab6")
        .checked = false;

    document
        .getElementById("modalWriting")
        .checked = false;

}


/* =========================================================
   SAVE ORDER
========================================================= */

saveOrderBtn.addEventListener(
    "click",
    function () {

        const orderNumber =
            document
                .getElementById("modalOrderNumber")
                .value
                .trim();


        const step =
            document
                .getElementById("modalStep")
                .checked;


        const english =
            document
                .getElementById("modalEnglish")
                .checked;


        const trab6 =
            document
                .getElementById("modalTrab6")
                .checked;


        const writing =
            document
                .getElementById("modalWriting")
                .checked;


        if (!orderNumber) {

            alert(
                "يرجى إدخال رقم الطلب."
            );

            return;

        }


        if (
            !step &&
            !english &&
            !trab6 &&
            !writing
        ) {

            alert(
                "يجب اختيار دورة واحدة على الأقل."
            );

            return;

        }


        /* =====================================
           CREATE
        ====================================== */

        if (!editingOrderNumber) {

            if (orders[orderNumber]) {

                alert(
                    "رقم الطلب موجود بالفعل."
                );

                return;

            }


            orders[orderNumber] = {

                step: step,

                english: english,

                trab6: trab6,

                writing: writing,

                active: true

            };


        }


        /* =====================================
           EDIT
        ====================================== */

        else {

            orders[editingOrderNumber].step =
                step;

            orders[editingOrderNumber].english =
                english;

            orders[editingOrderNumber].trab6 =
                trab6;

            orders[editingOrderNumber].writing =
                writing;

        }


        closeModal();

        renderDashboard();

    }
);


/* =========================================================
   EDIT ORDER
========================================================= */

function editOrder(orderNumber) {

    const order =
        orders[orderNumber];

    if (!order) {
        return;
    }


    editingOrderNumber =
        orderNumber;


    modalTitle.textContent =
        "تعديل الطلب";


    saveOrderBtn.textContent =
        "حفظ التعديلات";


    document
        .getElementById("modalOrderNumber")
        .value =
        orderNumber;


    document
        .getElementById("modalOrderNumber")
        .disabled = true;


    document
        .getElementById("modalStep")
        .checked =
        order.step === true;


    document
        .getElementById("modalEnglish")
        .checked =
        order.english === true;


    document
        .getElementById("modalTrab6")
        .checked =
        order.trab6 === true;


    document
        .getElementById("modalWriting")
        .checked =
        order.writing === true;


    modalOverlay.style.display =
        "flex";

}


/* =========================================================
   RESET ORDER NUMBER FIELD
========================================================= */

modalOverlay.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            modalOverlay
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   TOGGLE ORDER STATUS
========================================================= */

function toggleOrder(orderNumber) {

    const order =
        orders[orderNumber];

    if (!order) {
        return;
    }


    order.active =
        !order.active;


    renderDashboard();

}


/* =========================================================
   DELETE ORDER
========================================================= */

function deleteOrder(orderNumber) {

    const confirmed =
        confirm(
            `هل أنت متأكد من حذف الطلب ${orderNumber}؟`
        );


    if (!confirmed) {
        return;
    }


    delete orders[orderNumber];


    renderDashboard();

}


/* =========================================================
   GET PRODUCTS
========================================================= */

function getProducts(order) {

    const products = [];


    if (order.step === true) {
        products.push("STEP");
    }

    if (order.english === true) {
        products.push("English");
    }

    if (order.trab6 === true) {
        products.push("Trab6");
    }

    if (order.writing === true) {
        products.push("Writing");
    }


    return products;

}


/* =========================================================
   RENDER ORDERS
========================================================= */

function renderOrders() {

    ordersTableBody.innerHTML = "";


    const search =
        searchInput
            .value
            .trim()
            .toLowerCase();


    const product =
        productFilter.value;


    const status =
        statusFilter.value;


    let visibleOrders = 0;


    Object.entries(orders)
        .forEach(
            function ([orderNumber, order]) {


                /* SEARCH */

                if (
                    search &&
                    !orderNumber
                        .toLowerCase()
                        .includes(search)
                ) {

                    return;

                }


                /* PRODUCT FILTER */

                if (
                    product !== "all" &&
                    order[product] !== true
                ) {

                    return;

                }


                /* STATUS FILTER */

                if (
                    status === "active" &&
                    order.active !== true
                ) {

                    return;

                }


                if (
                    status === "inactive" &&
                    order.active === true
                ) {

                    return;

                }


                visibleOrders++;


                const row =
                    document.createElement("tr");


                const products =
                    getProducts(order);


                const productHTML =
                    products
                        .map(
                            function (item) {

                                return `
                                    <span class="badge course-badge">
                                        ${item}
                                    </span>
                                `;

                            }
                        )
                        .join(" ");


                const statusHTML =
                    order.active === true

                        ? `
                            <span class="badge active">
                                ● نشط
                            </span>
                          `

                        : `
                            <span class="badge inactive">
                                ● غير نشط
                            </span>
                          `;


                row.innerHTML = `

                    <td>
                        <strong>
                            ${orderNumber}
                        </strong>
                    </td>

                    <td>
                        ${productHTML}
                    </td>

                    <td>
                        ${statusHTML}
                    </td>

                    <td>

                        <div class="actions">

                            <button
                                class="secondary"
                                onclick="editOrder('${orderNumber}')"
                            >
                                تعديل
                            </button>

                            <button
                                class="secondary"
                                onclick="toggleOrder('${orderNumber}')"
                            >
                                ${
                                    order.active
                                        ? "تعطيل"
                                        : "تفعيل"
                                }
                            </button>

                            <button
                                class="danger"
                                onclick="deleteOrder('${orderNumber}')"
                            >
                                حذف
                            </button>

                        </div>

                    </td>

                `;


                ordersTableBody.appendChild(
                    row
                );

            }
        );


    emptyState.style.display =
        visibleOrders === 0
            ? "block"
            : "none";

}


/* =========================================================
   DASHBOARD STATISTICS
========================================================= */

function updateStatistics() {

    const allOrders =
        Object.values(orders);


    document
        .getElementById("totalOrders")
        .textContent =
        allOrders.length;


    document
        .getElementById("stepCount")
        .textContent =
        allOrders.filter(
            order => order.step === true
        ).length;


    document
        .getElementById("englishCount")
        .textContent =
        allOrders.filter(
            order => order.english === true
        ).length;


    document
        .getElementById("trab6Count")
        .textContent =
        allOrders.filter(
            order => order.trab6 === true
        ).length;


    document
        .getElementById("writingCount")
        .textContent =
        allOrders.filter(
            order => order.writing === true
        ).length;

}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {

    updateStatistics();

    renderOrders();

}


/* =========================================================
   FILTER EVENTS
========================================================= */

searchInput.addEventListener(
    "input",
    renderOrders
);


productFilter.addEventListener(
    "change",
    renderOrders
);


statusFilter.addEventListener(
    "change",
    renderOrders
);


/* =========================================================
   LOAD ORDERS FROM ORDERS.JSON
========================================================= */

async function loadOrders() {

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


        orders =
            data.orders || {};


        /* -----------------------------------------
           Make sure every order has an active status
        ----------------------------------------- */

        Object.values(orders)
            .forEach(
                function (order) {

                    if (
                        typeof order.active !==
                        "boolean"
                    ) {

                        order.active = true;

                    }

                }
            );


        renderDashboard();


    } catch (error) {

        console.error(error);

        alert(
            "تعذر تحميل الطلبات."
        );

    }

}


/* =========================================================
   INITIAL LOAD
========================================================= */

loadOrders();
