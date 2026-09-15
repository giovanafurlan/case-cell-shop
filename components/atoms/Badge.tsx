interface BadgeProps {
  children: React.ReactNode;
  tone?: "neutral" | "success" | "danger";
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  neutral: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
  success: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  danger: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
