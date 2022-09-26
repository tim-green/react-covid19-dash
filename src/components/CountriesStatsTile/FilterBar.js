export default function FilterBar({filterStats, fiteredCount, totalCount, hasMore}){
    return (
        <div className="FilterBar">
            <h4>Filter Countries</h4>
            <input name="countriesSearch" placeholder=" Search Countries.. Australia etc" onChange={(e)=>filterStats(e)}  />

            <div className="paginationStatus">
                <span className="counterInfo">
                    Showing country stats for {fiteredCount} / {totalCount} countries
                </span>
                {hasMore && (<span className="scrollInfo"> Scroll to load more</span>)}
            </div>
        </div>
    );
}