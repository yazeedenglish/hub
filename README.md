# Yazeed English — Frontend Hub Reference

هذا الملف هو المرجع الأساسي لإعدادات وتشغيل مشروع Yazeed English Hub.

---

## 1. طبيعة المشروع

المشروع Frontend-only بالكامل.

المستخدم/المشروع يعتمد على:
- HTML
- CSS
- JavaScript
- localStorage

لا يوجد في النظام:
- Backend
- Database
- API
- Salla API
- Authentication Server
- خدمة أمن خارجية

الحماية Frontend-only، ولذلك يمكن لمستخدم تقني تجاوزها باستخدام أدوات المتصفح. هذا مقبول حسب تصميم المشروع.

---

## 2. الدومين والروابط

الـ Hub الرئيسي:
`https://hub.yazeedenglish.com`

صفحة التفعيل المركزية:
`https://hub.yazeedenglish.com/activate`

الدورات:
- STEP: `https://hub.yazeedenglish.com/step`
- English: `https://hub.yazeedenglish.com/course`
- Trab6: `https://hub.yazeedenglish.com/trab6`
- Writing: `https://hub.yazeedenglish.com/writing`

رابط المتجر الحالي المستخدم في زر "اشتر الآن":
`https://yazeedenglish.com`

ملاحظة: يمكن لاحقًا تغيير رابط الشراء لكل دورة بشكل مستقل داخل `script.js` الخاص بالـ Hub.

---

## 3. Access Codes

الأكواد الحالية ثابتة حسب المنتج:

- STEP → `111111`
- English → `222222`
- Trab6 → `333333`
- Writing → `444444`

لا يوجد Access Code مختلف لكل عميل حاليًا.

---

## 4. تدفق العميل

التدفق الأساسي:

`Hub → اختيار/تفعيل دورة → /activate → رقم الطلب + Access Code → التحقق → Consent → التفعيل المحلي → الدورة`

بعد نجاح التفعيل والموافقة:
- يتم حفظ الوصول محليًا.
- لا يحتاج العميل إلى إعادة إدخال رقم الطلب وAccess Code كل يوم.
- يمكنه العودة إلى الـ Hub والدخول إلى الدورة المفعلة مباشرة ما دامت الصلاحية سارية.

---

## 5. المنتجات المفعلة وغير المفعلة

جميع المنتجات الأربعة تظهر دائمًا في الـ Hub لأغراض الوصول والتسويق.

### منتج مفعّل
يظهر عليه:
- حالة الوصول مفعّلة.
- زر "دخول الدورة".

### منتج غير مفعّل
يبقى ظاهرًا مع:
- قفل 🔒
- زر "تفعيل الوصول"
- زر "اشتر الآن"

لا يتم إخفاء المنتجات غير المفعلة.

### منتج انتهت صلاحيته
يظهر كمنتهي وتتوفر إمكانية إعادة التفعيل من صفحة `/activate`.

لا يوجد زر Logout في التصميم الحالي.

---

## 6. Consent / إقرار المحتوى

بعد نجاح رقم الطلب + Access Code، لا يدخل العميل إلى الدورة مباشرة.

يظهر أولًا إقرار الاستخدام وحقوق المحتوى، ويجب على العميل الموافقة عليه.

الإقرار يتضمن مفهوم:
- الاستخدام الشخصي.
- عدم النسخ.
- عدم التصوير.
- عدم المشاركة.
- عدم إعادة النشر.
- عدم توزيع المحتوى.
- احترام حقوق الملكية الفكرية لـ Yazeed English.

لا يتم حفظ التفعيل لمدة الـ30/100 يوم إلا بعد الموافقة على Consent.

بعد الموافقة، لا يظهر Consent مرة أخرى أثناء بقاء التفعيل صالحًا.

---

## 7. مدة التفعيل المحلي

الإعداد الحالي في:
`activate/script.js`

ابحث عن:

```javascript
const ACCESS_DURATION =
    30 *
    24 *
    60 *
    60 *
    1000;
```

### لجعل التفعيل 100 يوم

استبدله بـ:

```javascript
const ACCESS_DURATION =
    100 *
    24 *
    60 *
    60 *
    1000;
```

### المعادلة

```text
عدد الأيام × 24 × 60 × 60 × 1000
```

أمثلة:

```javascript
// 30 يوم
const ACCESS_DURATION = 30 * 24 * 60 * 60 * 1000;

// 100 يوم
const ACCESS_DURATION = 100 * 24 * 60 * 60 * 1000;

// سنة تقريبًا
const ACCESS_DURATION = 365 * 24 * 60 * 60 * 1000;
```

بعد تعديل المدة، التفعيل الجديد سيأخذ المدة الجديدة عند إتمام التفعيل.

---

## 8. شروط رقم الطلب — الإعداد الحالي

شرط رقم الطلب الحالي:
- 9 أرقام بالضبط.
- يبدأ بالرقم `2`.
- أرقام فقط.

الدالة الحالية في:
`activate/script.js`

```javascript
function validOrderNumber(value) {
    return /^2\d{8}$/.test(value);
}
```

### إلغاء شرط أن يبدأ بالرقم 2

إذا أردت السماح بأي رقم من 9 أرقام، استبدل الدالة بـ:

```javascript
function validOrderNumber(value) {
    return /^\d{9}$/.test(value);
}
```

أمثلة:
- `123456789` ✅
- `212345678` ✅
- `312345678` ✅
- `999999999` ✅

---

## 9. جعل رقم الطلب يبدأ بالرقم 3 بدل 2

استبدل:

```javascript
return /^2\d{8}$/.test(value);
```

بـ:

```javascript
return /^3\d{8}$/.test(value);
```

وبذلك:
- `312345678` ✅
- `212345678` ❌
- `123456789` ❌

---

## 10. مهم: تعديل النص الظاهر للعميل بعد تغيير شرط رقم الطلب

تغيير الـ Regex وحده لا يكفي؛ يجب تحديث النصوص الظاهرة أيضًا حتى لا يرى العميل تعليمات قديمة.

### أ) Placeholder رقم الطلب

في:
`activate/index.html`

الحالي مثلًا:

```html
placeholder="مثال: 212345678"
```

#### إذا أردت إلغاء شرط البداية

يمكن تغييره إلى:

```html
placeholder="أدخل رقم الطلب"
```

#### إذا أردت أن يبدأ بالرقم 3

مثلاً:

```html
placeholder="مثال: 312345678"
```

---

## 11. إزالة النص الموجود داخل مربع الكتابة

إذا كنت تقصد النص الذي يظهر داخل الحقل قبل أن يكتب العميل، فهذا هو `placeholder`.

مثال:

```html
<input
    type="text"
    placeholder="مثال: 212345678"
>
```

لإزالة النص تمامًا:

### رقم الطلب

احذف الـ `placeholder` بالكامل:

```html
<input
    type="text"
    inputmode="numeric"
    maxlength="9"
>
```

### Access Code

إذا كان لديك:

```html
placeholder="6 أرقام"
```

احذف الـ `placeholder` أيضًا:

```html
<input
    type="password"
    inputmode="numeric"
    maxlength="6"
>
```

### أو اترك attribute فارغًا

يمكن أيضًا:

```html
placeholder=""
```

لكن الأفضل حذف الـ attribute بالكامل إذا لم تكن تريده.

مهم: الـ placeholder ليس قيمة داخل الحقل، ولن يؤثر على التحقق. هو مجرد نص إرشادي يظهر عندما يكون الحقل فارغًا.

---

## 12. رسالة خطأ رقم الطلب

في `activate/script.js` توجد رسالة مثل:

```javascript
"رقم الطلب يجب أن يكون 9 أرقام بالضبط ويبدأ بالرقم 2."
```

### إذا ألغيت شرط البداية

استخدم:

```javascript
"رقم الطلب يجب أن يتكون من 9 أرقام بالضبط."
```

### إذا جعلته يبدأ بالرقم 3

استخدم:

```javascript
"رقم الطلب يجب أن يكون 9 أرقام بالضبط ويبدأ بالرقم 3."
```

---

## 13. Access Guard

الملف:
`access-guard.js`

وظيفته منع فتح محتوى الدورة مباشرة إذا لم توجد صلاحية محلية صالحة.

إذا لم توجد صلاحية:

```text
/course
→ /activate?course=english
```

أو:

```text
/step
→ /activate?course=step
```

وهكذا.

إذا كانت الصلاحية موجودة وغير منتهية، يستمر كود الدورة الأصلي.

الـ Guard لا يعيد بناء الدورات ولا يغيّر وظائفها الداخلية.

---

## 14. إدخال Access Guard في صفحات الدورات

### STEP

في نهاية `step/index.html` يوضع قبل JavaScript الخاص بالدورة:

```html
<script src="../access-guard.js"></script>
<script src="script.js"></script>
```

### English / Trab6 / Writing

في نهاية `index.html` الخاص بالقارئ:

```html
<script src="../access-guard.js"></script>
<script type="module" src="script.js"></script>
```

يجب أن يأتي `access-guard.js` أولًا.

---

## 15. English / Trab6 / Writing — نفس القارئ

English وTrab6 وWriting يستخدمون نفس كود القارئ التفاعلي تقنيًا.

الاختلاف الأساسي هو ملف PDF فقط عبر:

```javascript
const PDF_FILE = "pdfs/....pdf";
```

لا نعيد بناء Reader منفصل لكل واحدة.

القارئ يدعم:
- PDF.js 4.10.38
- التنقل بين الصفحات
- إدخال رقم الصفحة
- Zoom
- Text Layer
- النطق
- Samantha كخيار مفضل
- التحكم بالسرعة
- القلم الأحمر
- الممحاة
- حفظ الرسومات محليًا
- روابط PDF الداخلية والخارجية
- Safari / iOS
- اختصارات لوحة المفاتيح
- شاشة تحميل
- إشعار أول استخدام للنطق

---

## 16. STEP

STEP لديه JavaScript مختلف عن القارئ التفاعلي، ويحتوي على:
- Grammar
- Vocabulary
- Reading
- Listening
- Video Modal
- Video controls
- Previous / Next
- Fullscreen
- Dark mode
- Exam Simulator

لا نغيّر هذه الوظائف إلا عند الحاجة لإضافة Access Guard.

---

## 17. هوية التصميم

الـ Hub يجب أن يحافظ على هوية الدورات الحالية.

الخط:
`Tajawal`

الألوان الأساسية:

```css
--paper: #F5F6F2;
--ink: #00273a;
--ink-soft: #5B645F;
--indigo: #00689b;
--course-button: #00689b;
--line: #DCDFD6;
--card: #FFFFFF;
--danger: #C94C4C;
```

Dark Mode:

```css
--paper: #15181C;
--ink: #E8EAE4;
--ink-soft: #9AA39B;
--card: #1E2227;
--line: #33383B;
--indigo: #00689b;
--course-button: #0088C7;
--danger: #E2897A;
```

---

## 18. الصور في الـ Hub

الـ Hub يمكنه استخدام:

```text
images/
├── step.png
├── english.png
├── trab6.png
└── writing.png
```

إذا لم تتوفر صورة، يوجد placeholder بدلًا من كسر البطاقة.

---

## 19. ملاحظات مهمة قبل تعديل أي شيء

1. لا تضف Backend أو Salla API إلى المشروع.
2. لا تخفِ المنتجات غير المفعلة؛ ظهورها جزء من التسويق.
3. لا تضف Logout من تلقاء نفسك.
4. لا تجعل العميل يدخل رقم الطلب وAccess Code كل يوم.
5. لا تربط رقم الطلب بدورة محددة؛ Access Code هو الذي يحدد المنتج.
6. لا تغيّر وظائف القارئ التفاعلي أو STEP بدون حاجة واضحة.
7. عند تغيير مدة التفعيل، عدّل `ACCESS_DURATION` في `activate/script.js`.
8. عند تغيير شرط رقم الطلب، عدّل Regex + النصوص/placeholder الظاهرة للعميل.
9. الـ placeholder مجرد نص إرشادي؛ يمكن حذفه من HTML بالكامل إذا لم يكن مرغوبًا.

---

## 20. الاختبار المقترح

بعد أي تعديل مهم، اختبر:

1. رقم طلب صالح + Access Code صالح.
2. رقم طلب غير صالح.
3. Access Code غير صالح.
4. Access Code لدورة مختلفة عن الدورة المختارة.
5. رفض Consent.
6. الموافقة ثم الدخول.
7. إغلاق المتصفح ثم العودة.
8. العودة في اليوم التالي دون إعادة إدخال البيانات.
9. وجود أكثر من دورة مفعلة في نفس الوقت.
10. انتهاء مدة التفعيل.
11. فتح رابط الدورة مباشرة بدون تفعيل.
12. ظهور المنتجات غير المفعلة مع القفل و"اشتر الآن".

---

## 21. المرجع السريع

### مدة التفعيل
في:
`activate/script.js`

```javascript
const ACCESS_DURATION = 30 * 24 * 60 * 60 * 1000;
```

### جميع Access Codes
في:
`activate/script.js`

```text
STEP       111111
English    222222
Trab6      333333
Writing    444444
```

### شرط رقم الطلب الحالي

```javascript
return /^2\d{8}$/.test(value);
```

### 9 أرقام بدون شرط البداية

```javascript
return /^\d{9}$/.test(value);
```

### 9 أرقام تبدأ بـ3

```javascript
return /^3\d{8}$/.test(value);
```

### إزالة مثال رقم الطلب من مربع الكتابة
احذف:

```html
placeholder="مثال: 212345678"
```

### إزالة "6 أرقام" من مربع Access Code
احذف:

```html
placeholder="6 أرقام"
```

---

## 22. الحالة الحالية للمشروع

المفهوم النهائي:

`Hub → /activate → Order Number + Access Code → Consent → localStorage → Course`

والدورات الأربع تبقى ظاهرة في الـ Hub، مع إبقاء المنتجات غير المفعلة كنقطة تسويقية من خلال القفل وزر "اشتر الآن".
