const services = [
    {
        name: "Antenatal Care",
        icon: "🤰",
        description: "Comprehensive pregnancy care from conception to delivery."
    },
    {
        name: "Postnatal Care",
        icon: "👶",
        description: "Supporting mothers through recovery after childbirth."
    },
    {
        name: "Family Planning",
        icon: "❤️",
        description: "Helping women choose safe and suitable contraceptive options."
    },
    {
        name: "Fertility Counselling",
        icon: "🌸",
        description: "Professional guidance for couples planning a family."
    },
    {
        name: "Routine Check-ups",
        icon: "🩺",
        description: "Preventive screenings and women's wellness examinations."
    },
    {
        name: "High-Risk Pregnancy",
        icon: "🏥",
        description: "Specialized care for complex pregnancies requiring close monitoring."
    }
];

const servicesContainer = document.getElementById("services-list");

services.forEach(service => {

    const card = document.createElement("div");

    card.classList.add("service-card");

    card.innerHTML = `
        <div class="service-icon">${service.icon}</div>
        <h3>${service.name}</h3>
        <p>${service.description}</p>
    `;

    servicesContainer.appendChild(card);

})
const questionInput = document.getElementById("questionInput");
const addQuestionBtn = document.getElementById("addQuestionBtn");
const questionList = document.getElementById("questionList");

addQuestionBtn.addEventListener("click", () => {

    const question = questionInput.value.trim();

    if (question === "") {
        alert("Please enter a question.");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${question}</span>
        <button class="delete-btn">Remove</button>
    `;

    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });

    questionList.appendChild(li);

    questionInput.value = "";

})
const appointmentForm = document.getElementById("appointmentForm");
const formMessage = document.getElementById("formMessage");

appointmentForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("patientName").value.trim();
    const email = document.getElementById("patientEmail").value.trim();
    const phone = document.getElementById("patientPhone").value.trim();
    const message = document.getElementById("patientMessage").value.trim();

    if(name === "" || email === "" || phone === "" || message === ""){

        formMessage.textContent = "Please complete all the fields.";

        formMessage.style.color = "#c0392b";

        return;

    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        formMessage.textContent = "Please enter a valid email address.";

        formMessage.style.color = "#c0392b";

        return;

    }

    formMessage.textContent =
    "✓ Appointment request submitted successfully! Our clinic will contact you shortly.";

    formMessage.style.color = "green";

    appointmentForm.reset();

})
const themeToggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️ Light Mode";

}

themeToggle.addEventListener("click", ()=>{

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        themeToggle.textContent="☀️ Light Mode";

    }else{

        localStorage.setItem("theme","light");

        themeToggle.textContent="🌙 Dark Mode";

    }

})
const learnMoreBtn = document.getElementById("learnMoreBtn");
const doctorInfo = document.getElementById("doctorInfo");

learnMoreBtn.addEventListener("click", () => {

    doctorInfo.classList.toggle("show");

    if (doctorInfo.classList.contains("show")) {

        learnMoreBtn.textContent = "Hide Information";

    } else {

        learnMoreBtn.textContent = "Learn More About Dr. Joyce";

    }

})
const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

}

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });
}
const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

