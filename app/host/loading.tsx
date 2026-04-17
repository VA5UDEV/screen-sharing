import { Skeleton } from "@/components/ui/skeleton";

export default function HostLoading() {
  return (
    <div className="px-4 py-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <Skeleton className="h-9 w-36" />
        <Skeleton className="h-110 w-full" />
      </div>
    </div>
  );
}
