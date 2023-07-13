/* eslint-disable react/prop-types */
export default function PackingFilter({sortBy,setSortBy}) {


    return(
            <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
                <option value="input">Sort by input order</option>
                <option value="description">Sort by description</option>
                <option value="packed">Sort by packed status</option>
            </select>
    )
}