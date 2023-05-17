interface ArrowProps {
  type?: "right" | "left";
  className?: string;
}

export default function Arrow({ type = "right", className }: ArrowProps) {
  return (
    <div class={`${type === "left" && "rotate-180"}`}>
      <svg
        class={className}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M22.3538 16.3538L12.3538 26.3538C12.3073 26.4002 12.2521 26.4371 12.1915 26.4622C12.1308 26.4874 12.0657 26.5003 12 26.5003C11.9343 26.5003 11.8693 26.4874 11.8086 26.4622C11.7479 26.4371 11.6927 26.4002 11.6463 26.3538C11.5998 26.3073 11.5629 26.2522 11.5378 26.1915C11.5127 26.1308 11.4997 26.0657 11.4997 26C11.4997 25.9343 11.5127 25.8693 11.5378 25.8086C11.5629 25.7479 11.5998 25.6927 11.6463 25.6463L21.2925 16L11.6463 6.35378C11.5524 6.25996 11.4997 6.13272 11.4997 6.00003C11.4997 5.86735 11.5524 5.7401 11.6463 5.64628C11.7401 5.55246 11.8673 5.49976 12 5.49976C12.1327 5.49976 12.2599 5.55246 12.3538 5.64628L22.3538 15.6463C22.4002 15.6927 22.4371 15.7479 22.4623 15.8086C22.4874 15.8693 22.5004 15.9343 22.5004 16C22.5004 16.0657 22.4874 16.1308 22.4623 16.1915C22.4371 16.2522 22.4002 16.3073 22.3538 16.3538Z"
          fill="inherit"
        />
      </svg>
    </div>
  );
}