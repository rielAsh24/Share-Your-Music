"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { apply } from "@/actions/auth";
import type { ApplyData } from "@/lib/schemas";
import { applySchema } from "@/lib/schemas";

import { Button } from "./ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "./ui/field";
import { Input } from "./ui/input";

export default function ApplyForm() {
  const router = useRouter();
  const form = useForm<ApplyData>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function register(data: ApplyData) {
    try {
      await apply(data);
      toast.success("Member registered successfully");
      router.push("/");
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(register)}
      className="grid w-[400px] grid-flow-row items-center gap-y-4"
    >
      <Field data-invalid={!!form.formState.errors.name}>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <FieldContent>
          <Input
            id="name"
            placeholder="John Doe"
            {...form.register("name")}
            aria-invalid={!!form.formState.errors.name}
          />
          <FieldDescription>This is your public display name.</FieldDescription>
          <FieldError data-testid="error-name">
            {form.formState.errors.name?.message}
          </FieldError>
        </FieldContent>
      </Field>

      <Field data-invalid={!!form.formState.errors.email}>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <FieldContent>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@email.com"
            {...form.register("email")}
            aria-invalid={!!form.formState.errors.email}
          />
          <FieldError data-testid="error-email">
            {form.formState.errors.email?.message}
          </FieldError>
        </FieldContent>
      </Field>

      <Field data-invalid={!!form.formState.errors.password}>
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <FieldContent>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            {...form.register("password")}
            aria-invalid={!!form.formState.errors.password}
          />
          <FieldError data-testid="error-password">
            {form.formState.errors.password?.message}
          </FieldError>
        </FieldContent>
      </Field>

      <Button type="submit" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? (
          <Loader2 className="animate-spin" />
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
}
