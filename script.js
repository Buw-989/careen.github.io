/* =====================================================
   PAGE NAVIGATION
===================================================== */

function openPage(pageId) {

    // ซ่อน Dashboard
    const dashboard =
        document.querySelector("main.container");

    if (dashboard) {
        dashboard.style.display = "none";
    }


    // ซ่อนทุก Sub Page
    document
        .querySelectorAll(".sub-page")
        .forEach(page => {

            page.classList.remove("active");

        });


    // เปิดหน้าที่เลือก
    const page =
        document.getElementById(pageId);

    if (page) {

        page.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =====================================================
   BACK TO DASHBOARD
===================================================== */

function backToDashboard() {

    // ซ่อน Sub Page
    document
        .querySelectorAll(".sub-page")
        .forEach(page => {

            page.classList.remove("active");

        });


    // แสดง Dashboard
    const dashboard =
        document.querySelector("main.container");

    if (dashboard) {

        dashboard.style.display = "block";

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   SELECT CAREER
===================================================== */

function selectCareer(career) {

    alert(
        "คุณเลือกสายอาชีพ: " + career
    );

}


/* =====================================================
   CODE EDITOR
===================================================== */

function runCode() {

    const editor =
        document.getElementById("codeEditor");

    const preview =
        document.getElementById("codePreview");

    if (!editor || !preview) {
        return;
    }

    preview.srcdoc =
        editor.value;

}


/* =====================================================
   RESET CODE
===================================================== */

function resetCode() {

    const editor =
        document.getElementById("codeEditor");

    if (!editor) {
        return;
    }

    editor.value = `<!DOCTYPE html>

<html>

<head>

<style>

body {
    font-family: Arial;
    text-align: center;
    padding: 50px;
}

h1 {
    color: #5946d2;
}

button {
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    background: #5946d2;
    color: white;
    cursor: pointer;
}

</style>

</head>

<body>

<h1>
สวัสดีครับ
</h1>

<p>
ฉันกำลังฝึกเขียนโปรแกรม
</p>

<button onclick="welcome()">
สวัสดี
</button>

<script>

function welcome() {

    alert(
        "ยินดีต้อนรับสู่เว็บไซต์ของฉัน"
    );

}

</script>

</body>

</html>`;

    runCode();

}


/* =====================================================
   CERTIFICATE
===================================================== */

function startCertificate() {

    alert(
        "เริ่มทำแบบทดสอบ Certificate"
    );

}


/* =====================================================
   BEHAVIOR TEST
===================================================== */

function nextQuestion() {

    const answer =
        document.querySelector(
            'input[name="behavior"]:checked'
        );

    if (!answer) {

        alert(
            "กรุณาเลือกคำตอบก่อน"
        );

        return;

    }

    alert(
        "บันทึกคำตอบเรียบร้อยแล้ว"
    );

}


/* =====================================================
   RUN CODE WHEN PAGE LOADS
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        runCode();

    }
);