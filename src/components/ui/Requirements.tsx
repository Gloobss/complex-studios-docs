export function Requirements() {
  return (
    <div className="flex border-b border-white/[0.05] pb-8 mb-8 gap-8 mt-6">
      <div className="flex-1 border-r border-white/[0.05] pr-8">
        <h5 className="text-[10px] font-bold tracking-widest text-[#666] uppercase mb-2">Framework</h5>
        <div className="text-xl font-semibold text-cyan-vivid">Standalone</div>
      </div>
      <div className="flex-1 border-r border-white/[0.05] pr-8">
        <h5 className="text-[10px] font-bold tracking-widest text-[#666] uppercase mb-2">Dependencies</h5>
        <div className="text-xl font-semibold text-green-vivid">None</div>
      </div>
      <div className="flex-1">
        <h5 className="text-[10px] font-bold tracking-widest text-[#666] uppercase mb-2">Works With</h5>
        <div className="text-xl font-semibold text-[#c084fc] flex flex-col leading-tight gap-1">
          <span>QBCore</span>
          <span className="flex gap-2"><span>ESX</span><span>QBX</span></span>
          <span className="text-[#a855f7]">Any</span>
        </div>
      </div>
    </div>
  );
}
