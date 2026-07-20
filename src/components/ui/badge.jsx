import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-brand text-brand-fg shadow hover:bg-brand-hover",
        secondary:
          "border-transparent bg-surface-2 text-ink hover:bg-surface-2/80",
        destructive:
          "border-transparent bg-danger text-white shadow hover:bg-danger/80",
        outline: "text-ink",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}

export { Badge, badgeVariants }
