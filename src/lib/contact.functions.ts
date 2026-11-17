import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";

export type ContactInput = {
  lastName: string;
  firstName: string;
  subject: string;
  email: string;
  message: string;
};

function text(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: ContactInput) => {
    const lastName = text(input?.lastName, 80);
    const firstName = text(input?.firstName, 80);
    const subject = text(input?.subject, 140);
    const email = text(input?.email, 160);
    const message = text(input?.message, 4000);
    if (!lastName || !firstName || !subject || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Merci de remplir tous les champs avec une adresse mail valide.");
    }
    return { lastName, firstName, subject, email, message };
  })
  .handler(async ({ data }) => {
    const sql = await getSql();
    await sql`
      insert into contact_messages (last_name, first_name, subject, email, message)
      values (${data.lastName}, ${data.firstName}, ${data.subject}, ${data.email}, ${data.message})
    `;
    return { ok: true as const };
  });
