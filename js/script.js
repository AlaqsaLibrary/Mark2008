/* =========================================================
   إعدادات حدود العلامات
   ========================================================= */

const INPUT_LIMITS = {
  old: {
    min: 0,
    max: 30,
  },

  nu1: {
    min: 0,
    max: 100,
  },

  nu2: {
    min: 0,
    max: 100,
  },

  nu3: {
    min: 0,
    max: 100,
  },

  nu4: {
    min: 0,
    max: 100,
  },

  n11: {
    min: 0,
    max: 40,
  },

  n12: {
    min: 0,
    max: 60,
  },

  n13: {
    min: 0,
    max: 100,
  },

  n14: {
    min: 0,
    max: 100,
  },

  n21: {
    min: 0,
    max: 100,
  },

  n22: {
    min: 0,
    max: 100,
  },

  n23: {
    min: 0,
    max: 100,
  },

  n24: {
    min: 0,
    max: 100,
  },
};

/* =========================================================
   التحقق من قيمة Input
   ========================================================= */

function validateInput(id, min, max) {
  const input = document.getElementById(id);

  if (!input) {
    return false;
  }

  const valueText = input.value.trim();

  /*
   * منع الحقل الفارغ
   */

  if (valueText === "") {
    alert("يرجى إدخال العلامة المطلوبة.");

    input.focus();

    return false;
  }

  const value = Number(valueText);

  /*
   * التأكد من أن القيمة رقم
   */

  if (!Number.isFinite(value)) {
    alert("يرجى إدخال رقم صحيح.");

    input.focus();

    input.select();

    return false;
  }

  /*
   * التحقق من الحد الأدنى والأقصى
   */

  if (value < min || value > max) {
    alert(`العلامة يجب أن تكون بين ${min} و ${max}.`);

    input.focus();

    input.select();

    return false;
  }

  return true;
}

/* =========================================================
   التحقق من مجموعة حقول
   ========================================================= */

function validateFields(fields) {
  for (const field of fields) {
    if (!validateInput(field.id, field.min, field.max)) {
      return false;
    }
  }

  return true;
}

/* =========================================================
   حساب الطريقة الأولى
   المعدل القديم + المواد الأربع
   ========================================================= */

document.getElementById("calcBtn").addEventListener("click", function () {
  const fields = [
    {
      id: "old",
      min: 0,
      max: 30,
    },
    {
      id: "nu1",
      min: 0,
      max: 175,
    },
    {
      id: "nu2",
      min: 0,
      max: 175,
    },
    {
      id: "nu3",
      min: 0,
      max: 175,
    },
    {
      id: "nu4",
      min: 0,
      max: 175,
    },
  ];

  /*
   * التحقق من العلامات قبل الحساب
   */

  if (!validateFields(fields)) {
    return;
  }

  const old = Number(document.getElementById("old").value);

  const n1 = Number(document.getElementById("nu1").value);

  const n2 = Number(document.getElementById("nu2").value);

  const n3 = Number(document.getElementById("nu3").value);

  const n4 = Number(document.getElementById("nu4").value);

  /*
   * معادلة الحساب الأصلية
   */

  const result = old + n1 * 0.175 + n2 * 0.175 + n3 * 0.175 + n4 * 0.175;

  /*
   * عرض النتائج
   */

  document.getElementById("oldResult").innerHTML = old.toFixed(2);

  document.getElementById("r1").innerHTML = n1 + " × 17.5%";

  document.getElementById("r2").innerHTML = n2 + " × 17.5%";

  document.getElementById("r3").innerHTML = n3 + " × 17.5%";

  document.getElementById("r4").innerHTML = n4 + " × 17.5%";

  document.getElementById("finalResult").innerHTML = result.toFixed(2);

  /*
   * إظهار النتيجة
   */

  document.getElementById("overlay").style.display = "block";

  document.getElementById("resultBox").style.display = "block";

  document.getElementById("overlay").setAttribute("aria-hidden", "false");
});

/* =========================================================
   حساب الطريقة الثانية
   علامات السنة الأولى والثانية
   ========================================================= */

document.getElementById("calcBtn1").addEventListener("click", function () {
  const fields = [
    {
      id: "n11",
      min: 0,
      max: 40,
    },
    {
      id: "n12",
      min: 0,
      max: 100,
    },
    {
      id: "n13",
      min: 0,
      max: 100,
    },
    {
      id: "n14",
      min: 0,
      max: 60,
    },
    {
      id: "n21",
      min: 0,
      max: 175,
    },
    {
      id: "n22",
      min: 0,
      max: 175,
    },
    {
      id: "n23",
      min: 0,
      max: 175,
    },
    {
      id: "n24",
      min: 0,
      max: 175,
    },
  ];

  /*
   * التحقق من العلامات
   */

  if (!validateFields(fields)) {
    return;
  }

  const n11 = Number(document.getElementById("n11").value);

  const n12 = Number(document.getElementById("n12").value);

  const n13 = Number(document.getElementById("n13").value);

  const n14 = Number(document.getElementById("n14").value);

  const n21 = Number(document.getElementById("n21").value);

  const n22 = Number(document.getElementById("n22").value);

  const n23 = Number(document.getElementById("n23").value);

  const n24 = Number(document.getElementById("n24").value);

  /*
   * معادلة الحساب الأصلية
   */

  const firstYear = (n11 + n12 + n13 + n14) * 0.3;

  const secondYear = n21 * 0.175 + n22 * 0.175 + n23 * 0.175 + n24 * 0.175;

  const result = firstYear + secondYear;

  /*
   * عرض النتائج
   */

  document.getElementById("oldResult").innerHTML = firstYear.toFixed(2);

  document.getElementById("r1").innerHTML = n21 + " × 17.5%";

  document.getElementById("r2").innerHTML = n22 + " × 17.5%";

  document.getElementById("r3").innerHTML = n23 + " × 17.5%";

  document.getElementById("r4").innerHTML = n24 + " × 17.5%";

  document.getElementById("finalResult").innerHTML = result.toFixed(2);

  /*
   * إظهار النتيجة
   */

  document.getElementById("overlay").style.display = "block";

  document.getElementById("resultBox").style.display = "block";

  document.getElementById("overlay").setAttribute("aria-hidden", "false");
});

/* =========================================================
   إغلاق نتيجة الحساب
   ========================================================= */

function closeResult() {
  document.getElementById("overlay").style.display = "none";

  document.getElementById("resultBox").style.display = "none";

  document.getElementById("overlay").setAttribute("aria-hidden", "true");
}

/* =========================================================
   الضغط على Overlay لإغلاق النتيجة
   ========================================================= */

document.getElementById("overlay").addEventListener("click", closeResult);

/* =========================================================
   اختيار طريقة الحساب - المعدل القديم
   ========================================================= */

document.getElementById("with_old").addEventListener("click", function () {
  document.getElementById("form-container").style.display = "flex";

  document.getElementById("form-with").style.display = "none";

  document.getElementById("calcBtn1").style.display = "none";

  document.getElementById("calcBtn").style.display = "block";
});

/* =========================================================
   اختيار طريقة الحساب - علامات السنتين
   ========================================================= */

document.getElementById("without_old").addEventListener("click", function () {
  document.getElementById("form-container").style.display = "none";

  document.getElementById("form-with").style.display = "flex";

  document.getElementById("calcBtn").style.display = "none";

  document.getElementById("calcBtn1").style.display = "block";
});

/* =========================================================
   دعم لوحة المفاتيح لطريقة الحساب
   ========================================================= */

function addKeyboardSupport(elementId) {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  element.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();

      element.click();
    }
  });
}

addKeyboardSupport("with_old");

addKeyboardSupport("without_old");

/* =========================================================
   SEO INFORMATION POPUP
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  const seoButton = document.getElementById("seoInfoBtn");

  const seoModal = document.getElementById("seoModal");

  const seoClose = document.getElementById("seoModalClose");

  const seoOverlay = document.getElementById("seoModalOverlay");

  /*
   * التأكد من وجود العناصر
   */

  if (!seoButton || !seoModal || !seoClose) {
    return;
  }

  /*
   * فتح Popup
   */

  function openSeoModal() {
    seoModal.classList.add("active");

    seoModal.setAttribute("aria-hidden", "false");

    seoButton.setAttribute("aria-expanded", "true");

    /*
     * منع تمرير الصفحة خلف Popup
     */

    document.body.style.overflow = "hidden";

    /*
     * التركيز على زر الإغلاق
     */

    seoClose.focus();
  }

  /*
   * إغلاق Popup
   */

  function closeSeoModal() {
    seoModal.classList.remove("active");

    seoModal.setAttribute("aria-hidden", "true");

    seoButton.setAttribute("aria-expanded", "false");

    /*
     * إعادة تمرير الصفحة
     */

    document.body.style.overflow = "";

    /*
     * إعادة التركيز للزر
     */

    seoButton.focus();
  }

  /*
   * فتح Popup
   */

  seoButton.addEventListener("click", openSeoModal);

  /*
   * إغلاق Popup
   */

  seoClose.addEventListener("click", closeSeoModal);

  /*
   * إغلاق عند الضغط على الخلفية
   */

  if (seoOverlay) {
    seoOverlay.addEventListener("click", closeSeoModal);
  }

  /*
   * إغلاق بواسطة ESC
   */

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && seoModal.classList.contains("active")) {
      closeSeoModal();
    }
  });
});
