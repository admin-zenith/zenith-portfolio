const nodemailer = require('nodemailer');

exports.main = async (args) => {
  // 1. Handle CORS (if calling from a browser/React app)
  // DigitalOcean Functions often require explicit CORS headers in the response
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Change this to your specific domain in production
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept'
  };

  // Handle preflight requests
  if (args.__ow_method === 'options' || args.httpMethod === 'OPTIONS') {
    return {
      body: {},
      headers: headers,
      statusCode: 204,
    };
  }

  // 2. Validate Request Method
  if (args.__ow_method !== 'post' && args.httpMethod !== 'POST') {
    return {
      body: { error: 'Method not allowed. Use POST.' },
      headers: headers,
      statusCode: 405,
    };
  }

  try {
    // 3. Destructure data from the request body (args)
    // Note: In DO Functions, the JSON body is automatically parsed into 'args'
    const {
      fullName,
      email,
      projectName,
      projectDescription,
      teamSize,
      duration,
      estimatedCost
    } = args;

    // Basic Validation
    if (!email || !fullName) {
      return {
        body: { error: 'Missing required fields: email and fullName are required.' },
        headers: headers,
        statusCode: 400,
      };
    }

    // 4. Configure Mailtrap Transporter
    // Ideally, store these in your DigitalOcean Function Environment Variables
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER || args.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS || args.MAILTRAP_PASS
      }
    });

    // 5. Construct Email Content
    const mailOptions = {
      from: '"Zenith Portfolio" <no-reply@zenithportfolio.com>',
      to: email, // Sending to the user who requested the quote
      subject: `Your Quote Request: ${projectName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #111827; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0;">Zenith Portfolio</h1>
          </div>
          
          <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <h2>Hello ${fullName},</h2>
            <p>Thanks for reaching out! We've received your request for <strong>${projectName}</strong>.</p>
            
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #4b5563; font-size: 14px; text-transform: uppercase;">Configuration Summary</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 8px;"><strong>Team Size:</strong> ${teamSize || 'N/A'}</li>
                <li style="margin-bottom: 8px;"><strong>Duration:</strong> ${duration || 'N/A'}</li>
                <li style="margin-bottom: 8px;"><strong>Est. Cost:</strong> ${estimatedCost || 'N/A'}</li>
              </ul>
            </div>

            <p><strong>Project Description:</strong><br/>
            ${projectDescription || 'No description provided.'}</p>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            
            <p style="color: #6b7280; font-size: 14px;">We will review your requirements and get back to you within 24 hours.</p>
          </div>
        </div>
      `,
      // Send a copy to yourself (BCC) if needed
      bcc: 'admin@zenithportfolio.com'
    };

    // 6. Send Email
    const info = await transport.sendMail(mailOptions);

    return {
      body: {
        success: true,
        message: 'Quote email sent successfully',
        messageId: info.messageId
      },
      headers: headers,
      statusCode: 200,
    };

  } catch (error) {
    console.error('Email sending failed:', error);

    return {
      body: {
        success: false,
        error: 'Failed to send email',
        details: error.message
      },
      headers: headers,
      statusCode: 500,
    };
  }
};
