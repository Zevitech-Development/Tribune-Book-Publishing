import { ContactUsFormType } from "@/types/contact-us-form-type";
import { LeadFormType } from "@/types/lead-form-type";
import { ModalLeadFormType } from "@/types/modal-lead-form-type";
import { PPCFormType } from "@/types/ppc-form-type";

import { SendEmail } from "@/utils/send-email";

export const SendLeadFormEmail = async (
  data: LeadFormType
): Promise<boolean> => {
  const subject = `New Tribune Book Publishing Lead: ${data.name}`;

  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Lead</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f8f9fa;
          margin: 0;
          padding: 0;
          color: #212529;
        }

        .container {
          max-width: 620px;
          margin: 40px auto;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          padding: 32px;
        }

        .header {
          text-align: center;
          margin-bottom: 30px;
        }

        .logo {
          max-width: 200px;
          margin-bottom: 10px;
        }

        h1 {
          font-size: 24px;
          color: #cf212a;
          margin: 0;
        }

        .section {
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #000000;
          border-bottom: 1px solid #e9ecef;
          margin-bottom: 12px;
          padding-bottom: 4px;
        }

        .detail-row {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }

        .detail-label {
          flex: 0 0 150px;
          font-weight: 700;
          color: #495057;
        }

        .detail-value {
          flex: 1;
          color: #212529;
        }

        .footer {
          text-align: center;
          font-size: 13px;
          color: #6c757d;
          border-top: 1px solid #e9ecef;
          padding-top: 20px;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img class="logo" src="https://res.cloudinary.com/dptujgmbz/image/upload/v1747327671/yjfvbsp7ejnazzdt1yzx.png" alt="Tribune Book Publishing" />
          <h1>New Lead Submission</h1>
        </div>

        <div class="section">
          <div class="section-title">Lead Details</div>
          <div class="detail-row">
            <div class="detail-label">Submission Date:</div>
            <div class="detail-value"> ${new Date().toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }
            )}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Submission Source:</div>
            <div class="detail-value"> Home Page Lead Form</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Personal Information</div>
          <div class="detail-row">
            <div class="detail-label">Name:</div>
            <div class="detail-value"> ${data.name}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Email: </div>
            <div class="detail-value"> ${data.emailAddress}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Phone: </div>
            <div class="detail-value"> ${data.phoneNumber}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Message: </div>
            <div class="detail-value"> ${data.message}</div>
          </div>
        </div>

        <div class="footer">
          <p>This email was generated automatically by the Tribune Book Publishing® system.</p>
          <p>© ${new Date().getFullYear()} Central Tribune Book Publishing®. All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>
  `;

  return await SendEmail({
    to: process.env.EMAIL_USER || "tribunebookpublishing@gmail.com",
    subject,
    html,
  });
};

export const SendContactUsFormEmail = async (
  data: ContactUsFormType
): Promise<boolean> => {
  const subject = `Tribune Book Publishing Contact Us: ${data.name}`;

  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Query Details</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f8f9fa;
          margin: 0;
          padding: 0;
          color: #212529;
        }

        .container {
          max-width: 620px;
          margin: 40px auto;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          padding: 32px;
        }

        .header {
          text-align: center;
          margin-bottom: 30px;
        }

        .logo {
          max-width: 200px;
          margin-bottom: 10px;
        }

        h1 {
          font-size: 24px;
          color: #cf212a;
          margin: 0;
        }

        .section {
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #000000;
          border-bottom: 1px solid #e9ecef;
          margin-bottom: 12px;
          padding-bottom: 4px;
        }

        .detail-row {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }

        .detail-label {
          flex: 0 0 150px;
          font-weight: 700;
          color: #495057;
        }

        .detail-value {
          flex: 1;
          color: #212529;
        }

        .footer {
          text-align: center;
          font-size: 13px;
          color: #6c757d;
          border-top: 1px solid #e9ecef;
          padding-top: 20px;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img class="logo" src="https://res.cloudinary.com/dptujgmbz/image/upload/v1747327671/yjfvbsp7ejnazzdt1yzx.png" alt="Tribune Book Publishing" />
          <h1>Contact Us Submission</h1>
        </div>

        <div class="section">
          <div class="section-title">Contact Us Details</div>
          <div class="detail-row">
            <div class="detail-label">Submission Date:</div>
            <div class="detail-value"> ${new Date().toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }
            )}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Submission Source:</div>
            <div class="detail-value">Contact Us Page</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Personal Information</div>
          <div class="detail-row">
            <div class="detail-label">Name:</div>
            <div class="detail-value"> ${data.name}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Email: </div>
            <div class="detail-value"> ${data.emailAddress}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Phone: </div>
            <div class="detail-value"> ${data.phoneNumber}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Message: </div>
            <div class="detail-value"> ${data.message}</div>
          </div>
        </div>

        <div class="footer">
          <p>This email was generated automatically by the Tribune Book Publishing® system.</p>
          <p>© ${new Date().getFullYear()} Central Tribune Book Publishing®. All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>
  `;

  return await SendEmail({
    to: process.env.EMAIL_USER || "tribunebookpublishing@gmail.com",
    subject,
    html,
  });
};

export const SendModalLeadFormEmail = async (
  data: ModalLeadFormType
): Promise<boolean> => {
  const subject = `Tribune Book Publishing Modal Lead: ${data.name}`;

  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Query Details</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f8f9fa;
          margin: 0;
          padding: 0;
          color: #212529;
        }

        .container {
          max-width: 620px;
          margin: 40px auto;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          padding: 32px;
        }

        .header {
          text-align: center;
          margin-bottom: 30px;
        }

        .logo {
          max-width: 200px;
          margin-bottom: 10px;
        }

        h1 {
          font-size: 24px;
          color: #cf212a;
          margin: 0;
        }

        .section {
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #000000;
          border-bottom: 1px solid #e9ecef;
          margin-bottom: 12px;
          padding-bottom: 4px;
        }

        .detail-row {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }

        .detail-label {
          flex: 0 0 150px;
          font-weight: 700;
          color: #495057;
        }

        .detail-value {
          flex: 1;
          color: #212529;
        }

        .footer {
          text-align: center;
          font-size: 13px;
          color: #6c757d;
          border-top: 1px solid #e9ecef;
          padding-top: 20px;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img class="logo" src="https://res.cloudinary.com/dptujgmbz/image/upload/v1747327671/yjfvbsp7ejnazzdt1yzx.png" alt="Tribune Book Publishing" />
          <h1>Modal Lead Form</h1>
        </div>

        <div class="section">
          <div class="section-title">Modal Lead Details</div>
          <div class="detail-row">
            <div class="detail-label">Submission Date:</div>
            <div class="detail-value"> ${new Date().toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }
            )}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Submission Source:</div>
            <div class="detail-value">Modal Lead Form</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Personal Information</div>
          <div class="detail-row">
            <div class="detail-label">Name:</div>
            <div class="detail-value"> ${data.name}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Email: </div>
            <div class="detail-value"> ${data.emailAddress}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Phone: </div>
            <div class="detail-value"> ${data.phoneNumber}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Message: </div>
            <div class="detail-value"> ${data.message}</div>
          </div>
        </div>

        <div class="footer">
          <p>This email was generated automatically by the Tribune Book Publishing® system.</p>
          <p>© ${new Date().getFullYear()} Central Tribune Book Publishing®. All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>
  `;

  return await SendEmail({
    to: process.env.EMAIL_USER || "tribunebookpublishing@gmail.com",
    subject,
    html,
  });
};

export const SendPPCFormEmail = async (data: PPCFormType): Promise<boolean> => {
  const subject = `Tribune Book Publishing PPC Lead: ${data.name}`;

  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Query Details</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f8f9fa;
          margin: 0;
          padding: 0;
          color: #212529;
        }

        .container {
          max-width: 620px;
          margin: 40px auto;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          padding: 32px;
        }

        .header {
          text-align: center;
          margin-bottom: 30px;
        }

        .logo {
          max-width: 200px;
          margin-bottom: 10px;
        }

        h1 {
          font-size: 24px;
          color: #cf212a;
          margin: 0;
        }

        .section {
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #000000;
          border-bottom: 1px solid #e9ecef;
          margin-bottom: 12px;
          padding-bottom: 4px;
        }

        .detail-row {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }

        .detail-label {
          flex: 0 0 150px;
          font-weight: 700;
          color: #495057;
        }

        .detail-value {
          flex: 1;
          color: #212529;
        }

        .footer {
          text-align: center;
          font-size: 13px;
          color: #6c757d;
          border-top: 1px solid #e9ecef;
          padding-top: 20px;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img class="logo" src="https://res.cloudinary.com/dptujgmbz/image/upload/v1747327671/yjfvbsp7ejnazzdt1yzx.png" alt="Tribune Book Publishing" />
          <h1>PPC Form Lead</h1>
        </div>

        <div class="section">
          <div class="section-title">PPC Lead Details</div>
          <div class="detail-row">
            <div class="detail-label">Submission Date:</div>
            <div class="detail-value"> ${new Date().toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }
            )}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Submission Source:</div>
            <div class="detail-value">PPC Form Lead</div>
          </div>
        </div>

         <div class="section">
          <div class="section-title">Services Details</div>
          <div class="detail-row">
            <div class="detail-label">Manuscript Ready:</div>
            <div class="detail-value">${data.isManuscriptReady}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Published Before:</div>
            <div class="detail-value">${data.publishedBefore}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Book Genre: </div>
            <div class="detail-value">${data.publishedBookType}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Services: </div>
            <div class="detail-value">${data.services}</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Personal Information</div>
          <div class="detail-row">
            <div class="detail-label">Name:</div>
            <div class="detail-value">${data.name}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Email: </div>
            <div class="detail-value">${data.emailAddress}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Phone: </div>
            <div class="detail-value">${data.phoneNumber}</div>
          </div>
        </div>

        <div class="footer">
          <p>This email was generated automatically by the Tribune Book Publishing® system.</p>
          <p>© ${new Date().getFullYear()} Central Tribune Book Publishing®. All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>
  `;

  return await SendEmail({
    to: process.env.EMAIL_USER || "tribunebookpublishing@gmail.com",
    subject,
    html,
  });
};

export const SendMarketingFormEmail = async (
  data: LeadFormType
): Promise<boolean> => {
  const subject = `New Tribune Book Publishing Lead: ${data.name}`;

  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Lead</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f8f9fa;
          margin: 0;
          padding: 0;
          color: #212529;
        }

        .container {
          max-width: 620px;
          margin: 40px auto;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          padding: 32px;
        }

        .header {
          text-align: center;
          margin-bottom: 30px;
        }

        .logo {
          max-width: 200px;
          margin-bottom: 10px;
        }

        h1 {
          font-size: 24px;
          color: #cf212a;
          margin: 0;
        }

        .section {
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #000000;
          border-bottom: 1px solid #e9ecef;
          margin-bottom: 12px;
          padding-bottom: 4px;
        }

        .detail-row {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }

        .detail-label {
          flex: 0 0 150px;
          font-weight: 700;
          color: #495057;
        }

        .detail-value {
          flex: 1;
          color: #212529;
        }

        .footer {
          text-align: center;
          font-size: 13px;
          color: #6c757d;
          border-top: 1px solid #e9ecef;
          padding-top: 20px;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img class="logo" src="https://res.cloudinary.com/dptujgmbz/image/upload/v1747327671/yjfvbsp7ejnazzdt1yzx.png" alt="Tribune Book Publishing" />
          <h1>New Marketing Lead Submission</h1>
        </div>

        <div class="section">
          <div class="section-title">Lead Details</div>
          <div class="detail-row">
            <div class="detail-label">Submission Date:</div>
            <div class="detail-value"> ${new Date().toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }
            )}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Submission Source:</div>
            <div class="detail-value">Marketing Page Lead</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Personal Information</div>
          <div class="detail-row">
            <div class="detail-label">Name:</div>
            <div class="detail-value"> ${data.name}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Email: </div>
            <div class="detail-value"> ${data.emailAddress}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Phone: </div>
            <div class="detail-value"> ${data.phoneNumber}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Message: </div>
            <div class="detail-value"> ${data.message}</div>
          </div>
        </div>

        <div class="footer">
          <p>This email was generated automatically by the Tribune Book Publishing® system.</p>
          <p>© ${new Date().getFullYear()} Central Tribune Book Publishing®. All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>
  `;

  return await SendEmail({
    to: process.env.EMAIL_USER || "tribunebookpublishing@gmail.com",
    subject,
    html,
  });
};
