function onFormSubmit(e) {
  var responses = e.values;

  var timestamp = responses[0];
  var name = responses[1];     // Adjust based on your form structure
  var email = responses[2];    // Email field

  if (!email) return;

  // Build PDF Offer Letter (HTML content)
  var htmlContent = `
    <div style="font-family: Arial; padding: 20px;">
      <h2 style="color: #2563eb;">Thank You for Registering – Moh Technology</h2>
      <p>Dear <b>${name}</b>,</p>
      <p>We are excited to have you with us! This document confirms that we’ve successfully received your registration for <b>Moh Technology</b>.</p>
      <p><b>Your Response Summary:</b></p>
      <ul>
        <li><b>Name:</b> ${name}</li>
        <li><b>Email:</b> ${email}</li>
        <li><b>Registration Time:</b> ${timestamp}</li>
      </ul>
      <p>If you have any questions or need further assistance, feel free to contact us.</p>
      <p>Looking forward to a great journey ahead!</p>
      <br>
      <p>Warm regards,<br><b>Team Moh Technology</b></p>
    </div>
  `;

  // Convert HTML to PDF
  var blob = Utilities.newBlob(htmlContent, "text/html", "OfferLetter.html").getAs("application/pdf");
  blob.setName(`MohTechnology_Confirmation_${name}.pdf`);

  // Email content with "Learn More" button
  var subject = "🎉 Thank You for Registering – Moh Technology";
  var htmlBody = `
    <div style="font-family: Arial; font-size: 15px;">
      <p>Hi <b>${name}</b>,</p>
      <p>Thank you for registering for <b>Moh Technology</b>. We're thrilled to have you!</p>
      <p>Please find your confirmation letter attached as a PDF.</p>
      <p>
        <a href="https://www.youtube.com/@MohTechnology" style="background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;" target="_blank">
          🚀 Learn More
        </a>
      </p>
      <p>With appreciation,<br><b>Team Moh Technology</b></p>
    </div>
  `;

  // Send the email
  GmailApp.sendEmail(email, subject, "", {
    htmlBody: htmlBody,
    attachments: [blob],
    name: "Moh Technology"
  });
}
