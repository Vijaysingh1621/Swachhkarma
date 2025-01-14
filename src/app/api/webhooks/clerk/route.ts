import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@/utils/db/dbConfig";
import { Users } from "@/utils/db/schema";

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    console.error("Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local");
    return new Response("Internal Server Error: Missing SIGNING_SECRET", { status: 500 });
  }

  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", { status: 400 });
  }

  const { first_name, last_name, email_addresses } = evt.data;

  // Extract email and name
  
  const email = email_addresses?.[0]?.email_address;
  const name = `${first_name ?? ""} ${last_name ?? ""}`.trim();

  if (!email || !name) {
    console.error("Error: Missing email or name in webhook data");
    return new Response("Error: Missing email or name", { status: 400 });
  }

  if (evt.type === "user.created") {
    try {
      const [user] = await db.insert(Users).values({ email, name }).returning().execute();
      console.log("User successfully created:", user);
      return new Response("User created successfully", { status: 200 });
    } catch (error) {
      console.error("Error creating user:", error);
      return new Response("Error creating user", { status: 500 });
    }
  }

  return new Response("Webhook received and processed", { status: 200 });
}
