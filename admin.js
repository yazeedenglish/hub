/* =========================================================
   YAZEED ENGLISH — ADMIN DASHBOARD
   SUPABASE VERSION
========================================================= */


/* =========================================================
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
   AUTHENTICATION
========================================================= */

async function checkAdminLogin() {

    const {
        data: {
            session
        }
    } = await supabaseClient.auth.getSession();


    if (!session) {

        showLoginScreen();

        return false;

    }


    return true;

}


/* =========================================================
   LOGIN SCREEN
========================================================= */

function showLoginScreen() {

    document.body.innerHTML = `

        <main style="
            min-height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
            padding:20px;
        ">

            <div style="
                width:100%;
                max-width:420px;
                background:white;
                padding:32px;
                border-radius:20px;
                box-shadow:0 10px 40px rgba(0,0,0,0.08);
            ">

                <h1 style="
                    margin-top:0;
                    text-align:center;
                ">
                    Yazeed English
                </h1>

                <h2 style="
                    text-align:center;
                    margin-bottom:10px;
                ">
                    تسجيل دخول الإدارة
                </h2>

                <p style="
                    text-align:center;
                    color:#666;
                    margin-bottom:25px;
                ">
                    هذه الصفحة مخصصة للإدارة فقط.
                </p>

                <form id="adminLoginForm">

                    <label
                        for="adminEmail"
                        style="display:block;margin-bottom:8px;"
                    >
                        البريد الإلكتروني
                    </label>

                    <input
                        id="adminEmail"
                        type="email"
                        required
                        autocomplete="email"
                        style="
                            width:100%;
                            box-sizing:border-box;
                            padding:12px;
                            margin-bottom:16px;
                            border:1px solid #ddd;
                            border-radius:10px;
                            font-size:16px;
                        "
                    >

                    <label
                        for="adminPassword"
                        style="display:block;margin-bottom:8px;"
                    >
                        كلمة المرور
                    </label>

                    <input
                        id="adminPassword"
                        type="password"
                        required
                        autocomplete="current-password"
                        style="
                            width:100%;
                            box-sizing:border-box;
                            padding:12px;
                            margin-bottom:16px;
                            border:1px solid #ddd;
                            border-radius:10px;
                            font-size:16px;
                        "
                    >

                    <button
                        type="submit"
                        style="
                            width:100%;
                            padding:13px;
                            border:0;
                            border-radius:10px;
                            background:#2563eb;
                            color:white;
                            font-size:16px;
                            cursor:pointer;
                        "
                    >
                        تسجيل الدخول
                    </button>

                    <p
                        id="loginMessage"
                        style="
                            text-align:center;
                            color:#dc2626;
                            margin-top:15px;
                        "
                    ></p>

                </form>

            </div>

        </main>

    `;


    document
        .getElementById("adminLoginForm")
        .addEventListener(
            "submit",
            handleLogin
        );

}


/* =========================================================
   HANDLE LOGIN
========================================================= */

async function handleLogin(event) {

    event.preventDefault();


    const email =
        document
            .getElementById("adminEmail")
            .value
            .trim();


    const password =
        document
            .getElementById("adminPassword")
            .value;


    const message =
        document
            .getElementById("loginMessage");


    message.textContent =
        "جارٍ تسجيل الدخول...";


    const {
        error
    } =
        await supabaseClient.auth.signInWithPassword({
            email,
            password
        });


    if (error) {

        console.error(error);

        message.textContent =
            "البريد الإلكتروني أو كلمة المرور غير صحيحة.";

        return;

    }


    window.location.reload();

}


/* =========================================================
   LOGOUT
========================================================= */

async function logout() {

    await supabaseClient.auth.signOut();

    window.location.reload();

}


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

        document
            .getElementById("modalOrderNumber")
            .disabled = false;

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
    async function () {

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


        saveOrderBtn.disabled = true;


        /* =====================================
           CREATE
        ====================================== */

        if (!editingOrderNumber) {

            const {
                error
            } =
                await supabaseClient
                    .from("orders")
                    .insert({

                        order_number:
                            orderNumber,

                        step:
                            step,

                        english:
                            english,

                        trab6:
                            trab6,

                        writing:
                            writing,

                        active:
                            true

                    });


            if (error) {

                console.error(error);

                alert(
                    "حدث خطأ أثناء إنشاء الطلب."
                );

                saveOrderBtn.disabled = false;

                return;

            }

        }


        /* =====================================
           EDIT
        ====================================== */

        else {

            const {
                error
            } =
                await supabaseClient
                    .from("orders")
                    .update({

                        step:
                            step,

                        english:
                            english,

                        trab6:
                            trab6,

                        writing:
                            writing

                    })
                    .eq(
                        "order_number",
                        editingOrderNumber
                    );


            if (error) {

                console.error(error);

                alert(
                    "حدث خطأ أثناء تعديل الطلب."
                );

                saveOrderBtn.disabled = false;

                return;

            }

        }


        saveOrderBtn.disabled = false;

        closeModal();

        await loadOrders();

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
   MODAL BACKDROP
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

async function toggleOrder(orderNumber) {

    const order =
        orders[orderNumber];

    if (!order) {
        return;
    }


    const newStatus =
        !order.active;


    const {
        error
    } =
        await supabaseClient
            .from("orders")
            .update({
                active:
                    newStatus
            })
            .eq(
                "order_number",
                orderNumber
            );


    if (error) {

        console.error(error);

        alert(
            "حدث خطأ أثناء تغيير حالة الطلب."
        );

        return;

    }


    await loadOrders();

}


/* =========================================================
   DELETE ORDER
========================================================= */

async function deleteOrder(orderNumber) {

    const confirmed =
        confirm(
            `هل أنت متأكد من حذف الطلب ${orderNumber}؟`
        );


    if (!confirmed) {
        return;
    }


    const {
        error
    } =
        await supabaseClient
            .from("orders")
            .delete()
            .eq(
                "order_number",
                orderNumber
            );


    if (error) {

        console.error(error);

        alert(
            "حدث خطأ أثناء حذف الطلب."
        );

        return;

    }


    await loadOrders();

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
   LOAD ORDERS FROM SUPABASE
========================================================= */

async function loadOrders() {

    const {
        data,
        error
    } =
        await supabaseClient
            .from("orders")
            .select("*")
            .order(
                "created_at",
                {
                    ascending: false
                }
            );


    if (error) {

        console.error(error);

        alert(
            "تعذر تحميل الطلبات من قاعدة البيانات."
        );

        return;

    }


    orders = {};


    data.forEach(
        function (order) {

            orders[
                order.order_number
            ] = order;

        }
    );


    renderDashboard();

}


/* =========================================================
   INITIALIZATION
========================================================= */

async function initializeAdmin() {

    const loggedIn =
        await checkAdminLogin();


    if (!loggedIn) {
        return;
    }


    await loadOrders();

}


initializeAdmin();
