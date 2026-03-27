import { Scales } from "@/components/ui/scales";

const verticalMask = {
  maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
} as const;

const horizontalMask = {
  maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
} as const;

const ScalesWithImageDemo = () => {
  return (
    <div className="relative mx-auto flex w-full items-center justify-center overflow-hidden py-10 md:py-20">
      <div className="relative h-80 w-72 rounded-lg bg-gray-100 dark:bg-neutral-800/50">
        <div className="absolute -inset-y-[30%] -left-10 h-[160%] w-8" style={verticalMask}>
          <Scales size={8} className="rounded-lg" />
        </div>
        <div className="absolute -inset-y-[30%] -right-10 h-[160%] w-8" style={verticalMask}>
          <Scales size={8} className="rounded-lg" />
        </div>
        <div className="absolute -inset-x-[30%] -top-10 h-8 w-[160%]" style={horizontalMask}>
          <Scales size={8} className="rounded-lg" />
        </div>
        <div className="absolute -inset-x-[30%] -bottom-10 h-8 w-[160%]" style={horizontalMask}>
          <Scales size={8} className="rounded-lg" />
        </div>
        <div className="relative z-10 h-full w-full overflow-hidden rounded-none bg-white shadow-sm ring-1 ring-black/5 shadow-black/10 dark:bg-neutral-800">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop"
            alt="Portrait"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ScalesWithImageDemo;
