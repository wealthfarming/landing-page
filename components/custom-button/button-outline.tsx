import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
export default function ButtonOutLine({
    children,
    className,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
    }) {
    return (
        <Button
            variant={"outline"}
            className={cn(buttonVariants({ className }), "!bg-[var(--base-bg)] button hover:brightness-[0.95] cursor-pointer rounded-none")}
            {...props}
        >
            {children}
        </Button>
    )
}
