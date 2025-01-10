import Loader from "@/components/Loader";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Loader iconClass="w-[70px] h-[70px]" />
    </div>
  );
}
