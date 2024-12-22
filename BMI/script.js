document.addEventListener("DOMContentLoaded", function () {
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const ageInput = document.getElementById("age");
  const genderSelect = document.getElementById("gender");
  const bmiDisplay = document.getElementById("bmi");
  const descDisplay = document.getElementById("desc");
  const calculatorForm = document.querySelector(".calculator");
  calculatorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100;
    const age = parseInt(ageInput.value);
    const gender = genderSelect.value;

    if (!weight || !height || !age) {
      alert("Mohon masukkan berat badan, tinggi, dan umur Anda.");
      return;
    }

    const bmi = weight / (height * height);
    bmiDisplay.textContent = bmi.toFixed(2);

    let bmiCategory;
    let exerciseLink;

    if (bmi < 18.5) {
      bmiCategory = "Kurang berat badan";
      descDisplay.style.color = "#3498db";
      exerciseLink =
        "https://www.halodoc.com/artikel/olahraga-yang-tepat-untuk-si-kurus";
    } else if (bmi >= 18.5 && bmi <= 25) {
      bmiCategory = "Sehat";
      descDisplay.style.color = "#2ecc71";
      exerciseLink =
        "https://www.halodoc.com/artikel/4-jenis-olahraga-untuk-buat-berat-badan-ideal";
    } else if (bmi > 25 && bmi <= 30) {
      bmiCategory = "Kelebihan berat badan";
      descDisplay.style.color = "#f39c12";
      exerciseLink =
        "https://www.halodoc.com/artikel/ini-9-olahraga-aerobik-yang-bisa-bantu-turunkan-berat-badan";
    } else {
      bmiCategory = "Obesitas";
      descDisplay.style.color = "#e74c3c";
      exerciseLink = "https://www.halodoc.com/artikel/5-olahraga-untuk-bantu-atasi-obesitas-pada-orang-dewasa";
    }
    if (gender === "male" && age > 60 && bmi >= 23) {
      bmiCategory +=
        " (khusus untuk pria di atas 60 tahun, BMI yang sehat adalah antara 23-28)";
      exerciseLink = "https://www.halodoc.com/artikel/5-olahraga-untuk-lansia-yang-efektif-jaga-kebugaran-tubuh";
    } else if (gender === "female" && age > 60 && bmi >= 24) {
      bmiCategory +=
        " (khusus untuk wanita di atas 60 tahun, BMI yang sehat adalah antara 24-29)";
      exerciseLink = "https://www.halodoc.com/artikel/5-olahraga-untuk-lansia-yang-efektif-jaga-kebugaran-tubuh";
    }
    descDisplay.textContent = bmiCategory;
    addExerciseLink(exerciseLink);
  });

  calculatorForm.addEventListener("reset", function () {
    bmiDisplay.textContent = "0";
    descDisplay.textContent = "N/A";
    descDisplay.style.color = "inherit";

    const exerciseLink = descDisplay.querySelector("a");
    if (exerciseLink) {
      exerciseLink.remove();
    }
  });

  function addExerciseLink(url) {
    const exerciseLink = document.createElement("a");
    exerciseLink.textContent =
      "| Temukan rekomendasi olahraga yang sesuai (Halodoc) |";
    exerciseLink.href = url;
    exerciseLink.target = "_blank";
    exerciseLink.rel = "noopener noreferrer";
    exerciseLink.id = "exerciseLink";
    descDisplay.appendChild(exerciseLink);
  }
});
