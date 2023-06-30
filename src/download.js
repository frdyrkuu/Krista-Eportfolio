
function downloadResume() {
    // Create a link element
    const link = document.createElement('a');
    link.href = 'public/Hainto-Krista-Mae_Resume.pdf';  // Replace with the actual path to your PDF resume
    link.download = 'Hainto Krista Mae-Resume.pdf';  // Specify the filename for the downloaded file

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger the click event on the link element
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
}