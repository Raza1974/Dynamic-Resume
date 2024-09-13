// Function to generate the resume
function generateResume(): void {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const educationFields = document.querySelectorAll('#education-fields textarea') as NodeListOf<HTMLTextAreaElement>;
    const skillsFields = document.querySelectorAll('#skills-fields textarea') as NodeListOf<HTMLTextAreaElement>;
    const experienceFields = document.querySelectorAll('#experience-fields textarea') as NodeListOf<HTMLTextAreaElement>;
    const projectFields = document.querySelectorAll('#project-fields div.field-container') as NodeListOf<HTMLDivElement>;

    // Personal Info
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    (document.getElementById('display-name') as HTMLHeadingElement).textContent = name;
    (document.getElementById('display-contact') as HTMLParagraphElement).textContent = `Email: ${email} | Phone: ${phone}`;

    // Education
    const educationList = document.getElementById('display-education') as HTMLUListElement;
    educationList.innerHTML = '';
    educationFields.forEach((field) => {
        if (field.value.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = field.value;
            educationList.appendChild(listItem);
        }
    });

    // Skills
    const skillsList = document.getElementById('display-skills') as HTMLUListElement;
    skillsList.innerHTML = '';
    skillsFields.forEach((field) => {
        if (field.value.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = field.value;
            skillsList.appendChild(listItem);
        }
    });

    // Work Experience
    const experienceList = document.getElementById('display-experience') as HTMLUListElement;
    experienceList.innerHTML = '';
    experienceFields.forEach((field) => {
        if (field.value.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = field.value;
            experienceList.appendChild(listItem);
        }
    });

    // Projects
    const projectsList = document.getElementById('display-projects') as HTMLUListElement;
    projectsList.innerHTML = '';
    projectFields.forEach((container) => {
        const projectName = (container.querySelector('input[name="projectName"]') as HTMLInputElement).value;
        const projectURL = (container.querySelector('input[name="projectURL"]') as HTMLInputElement).value;
        if (projectName.trim() !== '' && projectURL.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${projectName}</strong>: <a href="${projectURL}" target="_blank">${projectURL}</a>`;
            projectsList.appendChild(listItem);
        }
    });

    // Profile Picture
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const profileImage = document.getElementById('profile-image') as HTMLImageElement;
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        const file = profilePictureInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImage.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    } else {
        profileImage.src = ''; // Clear image if no file selected
    }
}

// Attach event listener to the form submit
document.getElementById('resumeForm')!.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    generateResume();
});
