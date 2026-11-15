export const EMAIL_VERIFY_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify your email</title>
</head>
<body style="margin:0; padding:0; background-color:#f1f5f9; font-family:Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9; padding:30px 0;">
    <tr>
      <td align="center">
        <table width="480" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:12px; overflow:hidden; max-width:100%;">
          <tr>
            <td style="background:linear-gradient(135deg,#6366f1,#4338ca); padding:28px; text-align:center;">
              <h1 style="margin:0; color:#ffffff; font-size:22px;">Verify your email</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 28px; color:#334155; font-size:15px; line-height:1.6;">
              <p style="margin:0 0 16px;">Hello,</p>
              <p style="margin:0 0 20px;">
                You're almost done. Use the code below to verify your account
                <strong>{{email}}</strong>.
              </p>
              <div style="text-align:center; margin:24px 0;">
                <span style="display:inline-block; background-color:#eef2ff; color:#4338ca; font-size:30px; font-weight:bold; letter-spacing:8px; padding:14px 24px; border-radius:8px;">
                  {{otp}}
                </span>
              </div>
              <p style="margin:0 0 8px;">This code expires in 24 hours.</p>
              <p style="margin:0; color:#94a3b8; font-size:13px;">
                If you didn't create this account, you can ignore this email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const PASSWORD_RESET_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reset your password</title>
</head>
<body style="margin:0; padding:0; background-color:#f1f5f9; font-family:Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9; padding:30px 0;">
    <tr>
      <td align="center">
        <table width="480" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:12px; overflow:hidden; max-width:100%;">
          <tr>
            <td style="background:linear-gradient(135deg,#6366f1,#4338ca); padding:28px; text-align:center;">
              <h1 style="margin:0; color:#ffffff; font-size:22px;">Reset your password</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 28px; color:#334155; font-size:15px; line-height:1.6;">
              <p style="margin:0 0 16px;">Hello,</p>
              <p style="margin:0 0 20px;">
                We received a request to reset the password for
                <strong>{{email}}</strong>. Enter this code to continue.
              </p>
              <div style="text-align:center; margin:24px 0;">
                <span style="display:inline-block; background-color:#eef2ff; color:#4338ca; font-size:30px; font-weight:bold; letter-spacing:8px; padding:14px 24px; border-radius:8px;">
                  {{otp}}
                </span>
              </div>
              <p style="margin:0 0 8px;">This code expires in 15 minutes.</p>
              <p style="margin:0; color:#94a3b8; font-size:13px;">
                If you didn't request this, you can safely ignore this email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;