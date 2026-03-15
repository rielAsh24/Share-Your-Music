"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { login } from "@/actions/auth";
import type { LoginData } from "@/lib/schemas";
import { loginSchema } from "@/lib/schemas";

import { Button } from "./ui/button";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "./ui/field";
import { Input } from "./ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";

export default function LoginForm() {
  const router = useRouter();
  const [passwordType, setPasswordType] = useState<boolean>(true);
  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginData) {
    try {
      await login(data);
      router.push("/");
    } catch (error: any) {
      toast.error(`Error while logging you in: ${error.message}`);
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="grid w-[400px] grid-flow-row items-center gap-y-4"
    >
      <FieldGroup>
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field data-invalid={!!fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <FieldContent>
                <Input
                  id={field.name}
                  placeholder="john.doe@email.com"
                  {...field}
                  aria-invalid={!!fieldState.invalid}
                />
                <FieldError data-testid="error-email">
                  {fieldState.error?.message}
                </FieldError>
              </FieldContent>
            </Field>
          )}
        />
      </FieldGroup>

      <FieldGroup>
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Password</FieldLabel>
              <FieldContent>
                <InputGroup>
                  <InputGroupInput
                    id={field.name}
                    type={passwordType ? "password" : "text"}
                    placeholder="shhhhhhh"
                    {...field}
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      data-testid="toggle-password-button"
                      onClick={() =>
                        setPasswordType((passwordType) => !passwordType)
                      }
                    >
                      <EyeIcon />
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </FieldContent>
              <FieldError data-testid="error-password">
                {fieldState.error?.message}
              </FieldError>
            </Field>
          )}
        />
      </FieldGroup>

      <Button type="submit" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
}
