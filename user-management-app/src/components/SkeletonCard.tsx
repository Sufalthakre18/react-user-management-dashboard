const SkeletonCard = () => {
  return (
    <div className="bg-[#111827] border border-[#374151] rounded-2xl p-6 animate-pulse">
      
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-700"></div>

        <div className="flex-1 space-y-2">
          <div className="h-3 w-3/5 bg-gray-700 rounded"></div>
          <div className="h-3 w-2/5 bg-gray-700 rounded"></div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="h-3 w-4/5 bg-gray-700 rounded"></div>
        <div className="h-3 w-3/5 bg-gray-700 rounded"></div>
        <div className="h-3 w-1/2 bg-gray-700 rounded"></div>
      </div>

      <div className="flex gap-2 mt-5">
        <div className="h-8 w-16 bg-gray-700 rounded-lg"></div>
        <div className="h-8 w-14 bg-gray-700 rounded-lg"></div>
        <div className="h-8 w-16 bg-gray-700 rounded-lg"></div>
      </div>

    </div>
  );
};

export default SkeletonCard;