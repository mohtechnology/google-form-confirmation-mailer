# 🚀 Moh Technology – Google Form Auto Confirmation with PDF Offer Letter

This Google Apps Script project automatically sends a confirmation email with a personalized PDF offer letter whenever someone submits a Google Form.

## ✨ Features

- ✅ Auto-send confirmation emails on form submission  
- 🧾 Attach a dynamically generated PDF offer letter  
- 📬 Personalized content (Name, Email, Timestamp, etc.)  
- 🔗 Includes a "Learn More" button linking to your YouTube channel  
- 💼 Clean, customizable template for educational or team registration

---

## 📦 How It Works

1. **User submits a Google Form**
2. **Apps Script extracts response details**
3. **A styled PDF is generated with user details**
4. **An email is sent with the PDF attached and a Learn More link**

---

## 🛠️ Setup Instructions

### 1. Link Google Form to Google Sheets
- Open your form → **Responses** → Click **Sheets icon** to create response sheet

### 2. Open Apps Script
- In the sheet: `Extensions → Apps Script`

### 3. Paste the Script
Copy and paste the content from `Code.gs` into the editor.

### 4. Set Trigger
- Go to `Triggers (⏰ icon)` → Add Trigger
  - Function: `onFormSubmit`
  - Event Type: `On form submit`
  - Source: `From spreadsheet`

### 5. Authorize Script
- First time only → Click **Review Permissions** and **Allow**

---

---

## 📸 Email Preview

> Hi **[User Name]**,
>
> Thank you for registering for **Moh Technology**.  
> Please find your personalized offer letter attached.  
>  
> [ 👉 Learn More ](https://www.youtube.com/@MohTechnology)

---

## 📄 PDF Preview

```

Offer Letter – Moh Technology

Dear \[User Name],

Thank you for registering for Moh Technology.
Here are your details:

* Name: \[User Name]
* Email: \[Email]
* Registration Time: \[Timestamp]

We look forward to working with you!

Regards,
Team Moh Technology

```

---

## 🔗 Live YouTube Channel

👉 [Visit Moh Technology on YouTube](https://www.youtube.com/@MohTechnology)

---

## 📧 Contact

Feel free to reach out at [Moh Technology](https://www.youtube.com/@Mohtechnology?sub_confirmation=1) for collaboration or support.
