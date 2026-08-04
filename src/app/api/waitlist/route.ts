import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

function getResendClient() {
  if (!resendApiKey) {
    return null;
  }

  return new Resend(resendApiKey);
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const resend = getResendClient();
    if (!resend) {
      return NextResponse.json(
        { error: "Waitlist email service is not configured." },
        { status: 503 },
      );
    }

    await resend.emails.send({
      from: "BarebackBronc.Pro <support@barebackbronc.pro>",
      to: email,
      subject: "You're on the BarebackBronc.Pro waitlist! 🤠",
      html: `
        <div style="background-color:#0d0708;color:#f2e9e7;padding:40px;font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="text-align:center;margin-bottom:30px;">
            <h1 style="color:#cc2936;font-size:28px;margin:0;">BAREBACKBRONC.PRO</h1>
            <p style="color:#a89596;font-size:14px;margin-top:5px;">Shortest career in rodeo. Make it longer.</p>
          </div>
          <h2 style="color:#cc2936;font-size:22px;">You're on the list! 🎉</h2>
          <p style="color:#e6d3d3;font-size:16px;line-height:1.6;">
            Thanks for signing up for early access to <strong style="color:#cc2936;">BarebackBronc.Pro</strong> — the complete platform for headers, heelers, producers, and coaches.
          </p>
          <p style="color:#e6d3d3;font-size:16px;line-height:1.6;">
            Bareback riders take more physical punishment than anyone else in
            rodeo — the shortest career and the highest cumulative damage in the
            sport. That is not commentary, it is the design brief.
          </p>
          <h3 style="color:#cc2936;font-size:18px;margin-top:25px;">What's coming:</h3>
          <ul style="color:#e6d3d3;font-size:15px;line-height:1.8;">
            <li>&#128202; Draw analysis — every recorded trip on the horse you drew</li>
            <li>&#128052; Wither profile and rigging fit notes, per horse, shared</li>
            <li>&#128295; Rigging spec checker — pass or fail against the association spec</li>
            <li>&#128203; Per-horse setup notes: pad stack, position, tape wraps</li>
            <li>&#9888;&#65039; Wear tracking, because a rigging failure mid-ride is an injury</li>
            <li>&#129510; Injury and recovery records by body region, private by default</li>
            <li>&#128170; Conditioning: strength, mobility, grip, neck, recovery</li>
            <li>&#127942; Entries, draws, live scores, averages, and rerides</li>
            <li>&#128101; The whole bareback community in one feed</li>
            <li>&#127891; NHSRA, NIRA and amateur standings, coaches, and scholarships</li>
          </ul>
          <p style="color:#e6d3d3;font-size:16px;line-height:1.6;">
            We'll keep you posted on launch updates. Keep swinging. 🤠
          </p>
          <p style="color:#a89596;font-size:14px;margin-top:30px;">
            — The BarebackBronc.Pro Team<br/>
            <a href="https://barebackbronc.pro" style="color:#cc2936;">barebackbronc.pro</a>
          </p>
          <hr style="border:none;border-top:1px solid #43282d;margin:30px 0;" />
          <p style="color:#786465;font-size:12px;text-align:center;">
            &copy; 2026 Apps 1, LLC. All rights reserved.
          </p>
        </div>
      `,
    });

    // Also notify the team
    await resend.emails.send({
      from: "BarebackBronc.Pro <support@barebackbronc.pro>",
      to: "support@barebackbronc.pro",
      subject: "New Waitlist Signup!",
      html: `<p>New waitlist signup: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
