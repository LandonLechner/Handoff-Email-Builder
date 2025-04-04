window.onload = function ()
{
    
    const proceduresToggle = document.querySelector("#proceduresToggle");
    const services = document.querySelector("#services");
    let isProcedures = false;
    
    proceduresToggle.addEventListener('click', function() {
        if (isProcedures) {
            proceduresToggle.classList.remove("proceduresToggleOn");
            proceduresToggle.classList.add("proceduresToggleOff");
            services.style.display = "block";
            isProcedures = false;
        } else {
            proceduresToggle.classList.add("proceduresToggleOn");
            proceduresToggle.classList.remove("proceduresToggleOff");
            services.style.display = "none";
            isProcedures = true;
        }
        createEmail();
        return isProcedures;
    });

	document.addEventListener('input', createEmail);

    function createEmail () {
        const practice = document.querySelector("#practice").value;
        const client = document.querySelector("#client").value;
        const closedWonDate = document.querySelector("#closedWonDate").value;
        const reorderedDate = `${closedWonDate.slice(5,7)}/${closedWonDate.slice(8,10)}/${closedWonDate.slice(2,4)}`;
        const pm = document.querySelector("#pm").value;
        const csm = document.querySelector("#csm").value;
        const procedureQuantity = Number(document.getElementById("serviceQuantity").value);
        let heshe;
        let hesheUpper;
        let himher;
        
        if (pm === "Veronica Holt" || pm === "Ruby Blackwood") {
            heshe = "she";
            hesheUpper = "She";
            himher = "her";
        } else {
            heshe = "he";
            hesheUpper = "He";
            himher = "him";
        }
        
        if (isProcedures) {
            proceduresLink = "";
        } else {
            proceduresLink = `<strong>To prepare for our kickoff call, please complete the 
            <a target="_blank" rel="noopener noreferrer" href="https://www.docusign.com/blog/types-healthcare-consent-forms">Procedure List Form</a>, 
            which will guide the creation of your website's service list. 
            As you select services, keep in mind you are contracted for ${procedureQuantity}. 
            This will allow us to create a focused and effective service list for your website</strong>.
            <br><br>`;
        }
            
        let emailSubject = document.querySelector("#emailSubject").innerHTML = 
            `<p>${practice} - Welcome to MedBest!</p>`;
        
        document.querySelector('#copyButton').style.display = "block";
        document.querySelector('#copyButton2').style.display = "block";
        
        let emailBody = document.querySelector("#emailBody").innerHTML =
            `${client},
            <br>
            <br>
            Congratulations! It's my pleasure to officially welcome you to MedBest!
            <br>
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
            ${proceduresLink}
            Thanks for choosing MedBest. We are proud to partner with you for your digital marketing needs!
            `;
    }
    
    //copy functionality
    document.getElementById('copyButton').addEventListener('click', async function() {
        let subjectElement = document.getElementById('emailSubject');
        let subjectText = subjectElement.innerText;
    
        try {
            await navigator.clipboard.writeText(subjectText);
    
            document.querySelector('#copyButton').innerText = "Copied!";
            setTimeout(() => {
                document.querySelector('#copyButton').innerText = "Copy Subject Line";
            }, 1300);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    });

    document.getElementById('copyButton2').addEventListener('click', async function() {
        let emailBody = document.getElementById('emailBody');
    
        const blob = new Blob([emailBody.innerHTML], { type: 'text/html' });
        const data = [new ClipboardItem({ 'text/html': blob })];
    
        try {
            await navigator.clipboard.write(data);
    
            document.querySelector('#copyButton2').innerText = "Copied!";
            
            setTimeout(() => {
                document.querySelector('#copyButton2').innerText = "Copy Email Body";
            }, 1300);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    });

};
