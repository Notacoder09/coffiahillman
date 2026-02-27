export async function POST(req: Request) {
  try {
    const body = await req.json();

    const webhookUrl = process.env.GHL_WEBHOOK_URL;

    if (!webhookUrl || webhookUrl.includes("your-ghl-webhook")) {
      // If webhook isn't configured yet, still return success for testing
      console.log("Contact form submission (GHL webhook not configured):", body);
      return Response.json({ success: true });
    }

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: body.firstName,
        email: body.email,
        phone: body.phone,
        message: body.message || "",
        source: "UpperLevel Barbershop Website",
      }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
