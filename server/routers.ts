import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createContactSubmission } from "./db";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(2),
          email: z.string().email(),
          location: z.string().optional(),
          package: z.string().optional(),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Save to database
          await createContactSubmission({
            name: input.name,
            email: input.email,
            location: input.location || null,
            package: input.package || null,
            message: input.message || null,
          });

          // Send notification to owner
          const packageLabel = {
            refresh: "The Refresh (200 EUR)",
            storyteller: "The Storyteller (400 EUR) - RECOMANDAT",
            strategist: "The Strategist (600 EUR)",
            custom: "Pachet Personalizat",
          }[input.package as string] || input.package || "Nespecificat";

          const emailContent = `Nou contact de pe landing page:

Nume: ${input.name}
Email: ${input.email}
Locatie: ${input.location || "Nespecificata"}
Pachet: ${packageLabel}

Mesaj:
${input.message || "Fara mesaj"}

Data: ${new Date().toLocaleString("ro-RO")}`;

          await notifyOwner({
            title: `Nou contact: ${input.name}`,
            content: emailContent,
          });

          return { success: true, message: "Mesajul a fost trimis cu succes!" };
        } catch (error) {
          console.error("[Contact] Failed to submit:", error);
          throw new Error("Failed to submit contact form");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
