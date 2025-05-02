
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const recipientEmail = "agarwaldivya705@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface VisitInfo {
  ip?: string;
  userAgent?: string;
  timestamp: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { ip, userAgent, timestamp }: VisitInfo = await req.json();

    console.log("Received visit notification request:", { ip, userAgent, timestamp });

    const emailResponse = await resend.emails.send({
      from: "Portfolio Notification <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: "New Visit to Your Portfolio",
      html: `
        <h1>Someone visited your portfolio!</h1>
        <p>Time: ${timestamp}</p>
        <p>IP Address: ${ip || "Unknown"}</p>
        <p>Browser: ${userAgent || "Unknown"}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
