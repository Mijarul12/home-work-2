
# Project Blueprint: Homework Management

## Overview

This project is a web application for "Homework Management". The application allows users to register by filling out a detailed form, uploading necessary documents, and paying a registration fee. The application is built using modern HTML, CSS, and JavaScript, with a focus on a clean, responsive, and user-friendly design.

## Design and Features

### User Interface and Design

*   **Color Palette:** The primary color is a shade of blue (`#3399cc`), used for buttons and other interactive elements. The overall design is clean and modern, with a white background and dark text for readability.
*   **Typography:** The application uses a clean, sans-serif font for all text. Headings are larger and bolder to create a clear visual hierarchy.
*   **Layout:** The layout is responsive and adapts to different screen sizes. The main content is centered, with a clear header and footer.
*   **Logo:** The application has a logo that is displayed in the header.
*   **Navigation:** The header contains a navigation bar with links to different pages of the application. The "Login" link is a dropdown with options for different user roles (User, Student, Admin).
*   **Footer:** The footer contains copyright information, a link to the "Terms & Conditions" page, and social media icons.
*   **Icons:** The application uses Font Awesome icons for social media links.
*   **Shadows and Effects:** Interactive elements like buttons and form fields have subtle shadow effects to create a sense of depth.

### Features

*   **User Registration Form:** A comprehensive form for users to register. The form includes the following fields:
    *   Full Name (required)
    *   Date of Birth (required)
    *   Email (required)
    *   Mobile Number (required)
    *   Consultant Name (required)
    *   Self Image Upload (required, with image preview)
    *   Signature Upload (required, with image preview)
    *   Aadhar Card Upload (required, with image preview)
    *   Pan Card Upload (required, with image preview)
    *   Bank Passbook Upload (required, with image preview)
    *   Company Invoice Upload (required, with image preview)
*   **Image Previews:** When a user selects an image file for any of the upload fields, a preview of the image is displayed below the input field.
*   **Payment Gateway Integration:** The application is integrated with Razorpay for handling registration fees.
    *   **Live API Key:** The application uses the live Razorpay API key `rzp_live_SLSXfQRNG3Pdfb`.
    *   **Prefill:** The user's name, email, and mobile number are pre-filled in the Razorpay payment dialog.
*   **Thank You Message:** After a successful payment and form submission, a "Thank You" message is displayed to the user. The message informs the user that their documents are under review and they will be notified of the status within 72 working hours.

## Current Task: Update "Thank You" Message

### Plan

1.  **Read `user-registration.html`:** Read the contents of the `user-registration.html` file.
2.  **Update "Thank You" Message:** Locate the `thank-you-message` div and update the `h2` and `p` tags with the new message: "Thank You For Your Submission! Your documents are under review. You will be notified of the status within 72 working hours."
3.  **Write `user-registration.html`:** Write the updated content back to the `user-registration.html` file.
4.  **Create `blueprint.md`:** Create a `blueprint.md` file with the project overview, design and features, and the plan for the current task.
5.  **Inform User:** Inform the user that the "Thank You" message has been updated and the `blueprint.md` file has been created.
