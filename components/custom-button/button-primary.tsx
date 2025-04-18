import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
export default function ButtonPrimary({
    children,
    className,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
    }) {
    return (
        <Button
            className={cn(buttonVariants({ className }), "bg-[var(--color-primary)] button hover:brightness-[1.1] cursor-pointer rounded-none")}
            {...props}
        >
            {children}
        </Button>
    )
}
