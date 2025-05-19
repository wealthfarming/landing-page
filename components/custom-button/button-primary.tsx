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
            className={cn(buttonVariants({ className }), "bg-[var(--color-primary)] button hover:brightness-[1.1] cursor-pointer rounded-none border-none")}
            style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 1px 2px 0px, rgba(255, 255, 255, 0.7) 1px 1px 2px 0px inset, rgba(179, 120, 25, 0.28) -1px -1px 4px 0px inset"
            }}
            {...props}
        >
            {children}
        </Button>
    )
}
