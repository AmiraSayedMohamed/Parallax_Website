function updatePreview() {
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const projects = document.getElementById('projects').value;
    const certifications = document.getElementById('certifications').value;
    const languages = document.getElementById('languages').value;
    const references = document.getElementById('references').value;

    const preview = `
        <h2>${name}</h2>
        <p><strong>Contact Info:</strong> ${contact}</p>
        <p><strong>Summary:</strong> ${summary}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Projects:</strong> ${projects}</p>
        <p><strong>Certifications:</strong> ${certifications}</p>
        <p><strong>Languages:</strong> ${languages}</p>
        <p><strong>References:</strong> ${references}</p>
    `;

    document.getElementById('resume-preview').innerHTML = preview;
}

