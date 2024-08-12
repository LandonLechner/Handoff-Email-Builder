window.onload = function ()
{

	document.addEventListener("input", createEmail);

    function createEmail () {
        let practice = document.querySelector("#practice").value;
        let client = document.querySelector("#client").value;
        let closedWonDate = document.querySelector("#closedWonDate").value;
        let closedWonDay = closedWonDate.slice(8,10);
        let closedWonMonth = closedWonDate.slice(5,7);
        let closedWonYear = closedWonDate.slice(2,4);
        let reorderedDate = `${closedWonMonth}/${closedWonDay}/${closedWonYear}`;
        let pm = document.querySelector("#pm").value;
        let csm = document.querySelector("#csm").value;
        let heshe;
        let hesheUpper;
        let himher;
        
        if (pm === "Becca Freeman" || pm === "Jessica Wright") {
            heshe = "she";
            hesheUpper = "She";
            himher = "her";
        } else {
            heshe = "he";
            hesheUpper = "He";
            himher = "him";
        }
            
        let emailSubject = document.querySelector("#emailSubject").innerHTML = 
            `<p>${practice} - Welcome to DoctorLogic!</p>`;
        
        document.querySelector('#copyButton').style.display = "block";
        document.querySelector('#copyButton2').style.display = "block";
        
        let emailBody = document.querySelector("#emailBody").innerHTML =
            `<p>${client},
            <br>
            <br>
            Congratulations! It's my pleasure to officially welcome you to DoctorLogic!
            <br>
            Our team is excited to kick off this project with you.
            I have copied ${pm} from our Implementation team on this email.
            ${hesheUpper} will be your main point of contact throughout the 
            build process of this project and be your go-to person to get your site built and launched.
            <br>
            <br>
            <strong>${pm.split(' ').slice(0, 1)} will be reaching out to you soon to get your kick-off call scheduled.
            Your 90-day implementation timeline began on ${reorderedDate}, so please work with ${himher}
            to get that on the calendar as soon as possible.</strong>
            <br>
            <br>
            When you meet with ${pm.split(' ').slice(0, 1)}, ${heshe} will walk you through our implementation process.
            We expect to have a completed website link ready for you to review no later than 90 days.
            <br>
            <br>
            I would also like to introduce ${csm}, your Customer Success Manager (CSM), 
            who will work with ${pm.split(' ').slice(0, 1)} during the implementation process and 
            then transition to your main point of contact once your new site is live. 
            While ${pm.split(' ').slice(0, 1)} is keeping you up to date on the progress of your new website, 
            ${csm.split(' ').slice(0, 1)} will be focused on the overall success of your online strategy and 
            will ensure that your team is maximizing our tools to deliver you the best ROI. 
            ${csm.split(' ').slice(0, 1)} will also be your go-to point of contact for information on growth accelerators, 
            best practices, performance reporting, and product updates.
            <br>
            <br>
            Thanks for choosing DoctorLogic. We are proud to partner with you for your digital marketing needs!
            </p>`;
    }
	
	document.getElementById('copyButton').addEventListener('click', function() {
        // Get the text from the <p> tag
        let subjectLine = document.getElementById('emailSubject');
        let textToCopy = emailSubject.innerText;
        
        // Create a temporary textarea element to hold the text to copy
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = textToCopy;
        
        // Append the textarea to the body (it has to be added to the DOM to be selected)
        document.body.appendChild(tempTextArea);
        
        // Select the text
        tempTextArea.select();
        tempTextArea.setSelectionRange(0, 99999); // For mobile devices
        
        // Copy the text to the clipboard
        document.execCommand('copy');
        
        // Remove the temporary textarea
        document.body.removeChild(tempTextArea);
        
        document.querySelector('#copyButton').innerText = "Copied!";
        
        // Hide the message after 1300ms
        setTimeout(() => {
            document.querySelector('#copyButton').innerText = "Copy Subject Line";
            }, 1300);
    });

    document.getElementById('copyButton2').addEventListener('click', function() {
        // Get the text from the <p> tag
        let emailBody = document.getElementById('emailBody');
        let textToCopy2 = emailBody.innerText;
        
        // Create a temporary textarea element to hold the text to copy
        const tempTextArea2 = document.createElement('textarea');
        tempTextArea2.value = textToCopy2;
        
        // Append the textarea to the body (it has to be added to the DOM to be selected)
        document.body.appendChild(tempTextArea2);
        
        // Select the text
        tempTextArea2.select();
        tempTextArea2.setSelectionRange(0, 99999); // For mobile devices
        
        // Copy the text to the clipboard
        document.execCommand('copy');
        
        // Remove the temporary textarea
        document.body.removeChild(tempTextArea2);
        
        document.querySelector('#copyButton2').innerText = "Copied!";
        
        // Hide the message after 1300ms
        setTimeout(() => {
            document.querySelector('#copyButton2').innerText = "Copy Email Body";
            }, 1300);
    });
    
};
