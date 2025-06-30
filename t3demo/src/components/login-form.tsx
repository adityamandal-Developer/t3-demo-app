"use client";

import { cn } from "../lib/utils";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <input type="text">dsaidhjio</input>
    </form>
  );
}
