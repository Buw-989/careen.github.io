// =====================================
// ประวัติการทำรายการ
// =====================================

function showHistory() {

    const modal =
        document.getElementById("historyModal");

    modal.classList.add("show");
}


function closeHistory() {

    const modal =
        document.getElementById("historyModal");

    modal.classList.remove("show");
}


// =====================================
// ปิด Modal เมื่อคลิกพื้นหลัง
// =====================================

document
    .getElementById("historyModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeHistory();
        }

    });


// =====================================
// กด ESC เพื่อปิด Modal
// =====================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeHistory();
    }

});