const VisitorMap = () => {
  return (
    <div className="w-full flex flex-col items-center mt-8">
      <h3 className="text-lg font-semibold text-cyan-400 mb-2">
        Visitors on the Page - Thank you for visiting the page!!
      </h3>

      <a
        href="https://info.flagcounter.com/PZIx"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg overflow-hidden border border-cyan-400/30 shadow-md"
      >
        <img
          src="https://s01.flagcounter.com/map/PZIx/size_l/txt_000000/border_CCCCCC/pageviews_1/viewers_0/flags_0/"
          alt="Flag Counter"
          className="w-full h-auto"
        />
      </a>
    </div>
  );
};

export default VisitorMap;
