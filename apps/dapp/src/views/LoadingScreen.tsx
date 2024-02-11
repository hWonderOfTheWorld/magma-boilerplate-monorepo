import { LoadingIndicator } from "@/components/LoadingIndicator";

export default function LoadingScreen() {
  return (
    <div className="flex flex-col gap-3 pt-40  items-center w-full">
      <span className="flex flex-row gap-3 text-5xl w-full">
        <LoadingIndicator />
      </span>
    </div>
  );
}
