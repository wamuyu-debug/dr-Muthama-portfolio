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
const serviceNameInput = document.getElementById("serviceNameInput");
const serviceIconInput = document.getElementById("serviceIconInput");
const serviceDescriptionInput = document.getElementById("serviceDescriptionInput");
const addServiceBtn = document.getElementById("addServiceBtn");
const serviceFormMessage = document.getElementById("serviceFormMessage");

function setFeedback(element, text, type) {
    element.textContent = text;
    element.classList.remove("feedback-error", "feedback-success");
    element.classList.add(type === "error" ? "feedback-error" : "feedback-success");
}

function renderServices() {
    servicesContainer.innerHTML = "";

    services.forEach((service, index) => {
        const card = document.createElement("div");
        card.classList.add("service-card");

        card.innerHTML = `
            <button class="remove-service-btn" data-index="${index}" type="button">Remove</button>
            <div class="service-icon">${service.icon}</div>
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        `;

        servicesContainer.appendChild(card);
    });
}

servicesContainer.addEventListener("click", (event) => {
    const removeBtn = event.target.closest(".remove-service-btn");

    if (!removeBtn) {
        return;
    }

    const index = Number(removeBtn.dataset.index);

    if (Number.isNaN(index)) {
        return;
    }

    services.splice(index, 1);
    renderServices();
});

addServiceBtn.addEventListener("click", () => {
    const name = serviceNameInput.value.trim();
    const icon = serviceIconInput.value.trim() || "🩺";
    const description = serviceDescriptionInput.value.trim();

    if (name.length < 3) {
        setFeedback(serviceFormMessage, "Service name must be at least 3 characters.", "error");
        return;
    }

    if (description.length < 10) {
        setFeedback(serviceFormMessage, "Description must be at least 10 characters.", "error");
        return;
    }

    services.push({ name, icon, description });
    renderServices();

    serviceNameInput.value = "";
    serviceIconInput.value = "";
    serviceDescriptionInput.value = "";

    setFeedback(serviceFormMessage, "Service added successfully.", "success");
});

renderServices();
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
const patientName = document.getElementById("patientName");
const patientEmail = document.getElementById("patientEmail");
const patientPhone = document.getElementById("patientPhone");
const patientMessage = document.getElementById("patientMessage");

function clearInputErrorState() {
    patientName.classList.remove("input-error");
    patientEmail.classList.remove("input-error");
    patientPhone.classList.remove("input-error");
    patientMessage.classList.remove("input-error");
}

appointmentForm.addEventListener("submit", function(event){

    event.preventDefault();
    clearInputErrorState();

    const name = patientName.value.trim();
    const email = patientEmail.value.trim();
    const phone = patientPhone.value.trim();
    const message = patientMessage.value.trim();

    if(name === "" || email === "" || phone === "" || message === ""){

        if (name === "") patientName.classList.add("input-error");
        if (email === "") patientEmail.classList.add("input-error");
        if (phone === "") patientPhone.classList.add("input-error");
        if (message === "") patientMessage.classList.add("input-error");

        setFeedback(formMessage, "Please complete all the fields.", "error");

        return;

    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        patientEmail.classList.add("input-error");

        setFeedback(formMessage, "Please enter a valid email address.", "error");

        return;

    }

    const phonePattern = /^[0-9+\-\s]{10,15}$/;

    if(!phonePattern.test(phone)){

        patientPhone.classList.add("input-error");

        setFeedback(formMessage, "Please enter a valid phone number.", "error");

        return;

    }

    setFeedback(
        formMessage,
        "Appointment request submitted successfully. Our clinic will contact you shortly.",
        "success"
    );

    appointmentForm.reset();
    clearInputErrorState();

})

[patientName, patientEmail, patientPhone, patientMessage].forEach((input) => {
    input.addEventListener("input", () => {
        input.classList.remove("input-error");
    });
});
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

