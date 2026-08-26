Yazeed English — نظام Access Code مختلف لكل عميل
Frontend-Only Reference

هذا الملف يشرح كيفية تحويل نظام التفعيل الحالي من Access Code ثابت لكل دورة إلى Access Code فريد لكل عميل، مع إبقاء المشروع Frontend-only بالكامل.

1. النظام الحالي
حاليًا لدينا Access Code ثابت لكل منتج:
STEP -> 111111
English -> 222222
Trab6 -> 333333
Writing -> 444444

النظام الجديد يمكن أن يكون مثل:
العميل A
Order: 212345678
Code: 583921
Courses: STEP + English

العميل B
Order: 212345679
Code: 741205
Courses: Trab6

العميل C
Order: 212345680
Code: 936114
Courses: Writing

2. فصل ملفات العملاء
يفضل أن يكون لكل عميل ملف مستقل حتى لا يصبح لدينا ملف واحد ضخم.

البنية المقترحة:
hub.yazeedenglish.com/
|
|-- index.html
|-- style.css
|-- script.js
|-- access-guard.js
|
|-- activate/
|   |-- index.html
|   |-- style.css
|   `-- script.js
|
`-- customers/
    |-- map.js
    |-- 212345678.js
    |-- 212345679.js
    `-- ...

3. محتوى ملف عميل واحد
مثال: customers/212345678.js

window.YAZEED_CUSTOMER = {
    orderNumber: "212345678",
    accessCode: "583921",
    courses: [
        "step",
        "english"
    ]
};

كل ملف عميل يحتوي على بيانات ذلك العميل فقط. لا نضع فيه CSS أو HTML أو منطق النظام.

4. عميل يملك دورة واحدة
مثال:
window.YAZEED_CUSTOMER = {
    orderNumber: "212345679",
    accessCode: "741205",
    courses: [
        "trab6"
    ]
};

5. عميل يملك عدة دورات
مثال:
window.YAZEED_CUSTOMER = {
    orderNumber: "212345680",
    accessCode: "936114",
    courses: [
        "step",
        "english",
        "trab6",
        "writing"
    ]
};

6. كيف يعرف النظام ملف العميل؟
يوجد ملف فهرس صغير:
customers/map.js

مثال:
window.YAZEED_CUSTOMER_FILES = {
    "212345678": "212345678.js",
    "212345679": "212345679.js",
    "212345680": "212345680.js"
};

المسار يصبح:
Order Number -> map.js -> ملف العميل -> مطابقة Access Code -> Consent -> التفعيل

7. Access Code الفريد
في هذا التصميم يكون للعميل Code خاص به.
مثال:
583921

وعميل آخر يمكن أن يكون لديه:
741205

8. هل Access Code مرتبط بالدورة؟
في هذا التصميم لا.
الـ Access Code الواحد يفتح الدورات الموجودة في مصفوفة courses داخل ملف العميل.

مثال:
courses: ["step", "english"]

يعني أن العميل نفسه يستطيع استخدام نفس الكود لتفعيل STEP وEnglish وفق النظام الذي نبنيه.

9. إضافة عميل جديد
الخطوة 1: أنشئ ملفًا جديدًا مثل:
customers/212345681.js

الخطوة 2: ضع:
window.YAZEED_CUSTOMER = {
    orderNumber: "212345681",
    accessCode: "482915",
    courses: [
        "writing"
    ]
};

الخطوة 3: أضفه إلى map.js:
window.YAZEED_CUSTOMER_FILES = {
    "212345678": "212345678.js",
    "212345679": "212345679.js",
    "212345680": "212345680.js",
    "212345681": "212345681.js"
};

10. عميل يشتري دورة إضافية
يمكن إبقاء نفس Access Code وإضافة الدورة فقط.

من:
courses: ["step"]

إلى:
courses: ["step", "english"]

ولا يحتاج العميل بالضرورة إلى كود جديد.

11. تغيير Access Code لعميل
يمكن تغيير:
accessCode: "583921"

إلى:
accessCode: "812440"

وبذلك يصبح الكود الجديد هو الكود المعتمد في النظام.

12. العلاقة مع /activate
التدفق:
hub.yazeedenglish.com/activate
-> Order Number
-> Access Code
-> map.js
-> ملف العميل
-> مطابقة Access Code
-> Consent
-> حفظ التفعيل محليًا
-> Hub / الدورة

13. لا حاجة لإدخال البيانات يوميًا
بعد نجاح التفعيل، يحتفظ localStorage بحالة الوصول لمدة المدة المحددة في activate/script.js.
طالما لم تنتهِ المدة، لا يحتاج العميل إلى كتابة Order Number أو Access Code كل يوم.

14. مدة التفعيل
القيمة الحالية:
const ACCESS_DURATION = 30 * 24 * 60 * 60 * 1000;

100 يوم:
const ACCESS_DURATION = 100 * 24 * 60 * 60 * 1000;

365 يومًا:
const ACCESS_DURATION = 365 * 24 * 60 * 60 * 1000;

15. شروط رقم الطلب
الحالي:
return /^2\\d{8}$/.test(value);

المعنى: 9 أرقام بالضبط وتبدأ بـ 2.

إلغاء شرط البداية:
return /^\\d{9}$/.test(value);

البداية بـ 3:
return /^3\\d{8}$/.test(value);

16. إزالة النص داخل حقول الإدخال
إذا كان لديك:
placeholder="مثال: 212345678"

احذفه بالكامل، مثل:
<input type="text" id="orderInput" maxlength="9">

إذا كان لديك:
placeholder="6 أرقام"

احذفه أيضًا:
<input type="password" id="accessCodeInput" maxlength="6">

الـ placeholder مجرد نص إرشادي داخل الحقل وليس جزءًا من البيانات.

17. الحفاظ على باقي المشروع
لا نحتاج إلى إعادة بناء الـ Hub أو الدورات الأربعة لمجرد تغيير الكود إلى Unique Access Codes.
التعديل الأساسي يكون داخل /activate وملفات customers ونظام قراءة العميل.

يبقى:
- Consent
- localStorage
- مدة الوصول
- Lock
- Purchase button
- إظهار جميع المنتجات للتسويق
- Course Guard
- STEP كما هو
- English / Trab6 / Writing كقارئ واحد مع تغيير PDF فقط

18. Frontend-only limitation
كل بيانات العملاء موجودة في ملفات Frontend، لذلك مستخدم تقني يمكنه الوصول إليها أو تحليل JavaScript وملفات العملاء.
Unique Access Codes تحسن التنظيم والفصل بين العملاء لكنها لا تجعل النظام High Security.

19. ملاحظة حول عدد العملاء
هذا الأسلوب مناسب عندما يكون عدد العملاء صغيرًا أو متوسطًا.
إذا أصبح العدد ضخمًا جدًا، يصبح وجود ملف مستقل لكل عميل وإدارة map.js مرهقًا، لكن ذلك خارج التصميم الحالي Frontend-only.

20. الهدف من هذا التنظيم
Hub files = الواجهة والمنطق العام
Activate files = التحقق وConsent
Customers files = بيانات العملاء فقط
Course files = محتوى الدورات

هذه البنية تجعل إضافة عميل أو تعديل دوراته أو تغيير كوده منفصلة عن بقية المشروع، وتحافظ على ترتيب ملفات المشروع.
