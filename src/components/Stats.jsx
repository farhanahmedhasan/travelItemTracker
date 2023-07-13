/* eslint-disable react/prop-types */
export default function Stats ({items}) {

    if (!items.length) {
        return <footer className="stats">
            <p>
                <em>Start adding some items to your packing list 🚀</em>
            </p>
        </footer>
    }

    const totalItems = items.length
    const totalPacked = items.filter(item => item.packed).length

    function getPercentItem() {
        let remainingPercent = ((totalPacked/totalItems) * 100)
        if(!Number.isInteger(remainingPercent)) remainingPercent = remainingPercent.toFixed(2)
        return remainingPercent
    }

    return(
        <footer className="stats">
            <p>
                <em>
                    {getPercentItem() === 100
                        ? "you have got everything! Ready to go ✈️"
                        : `💼 You have ${totalItems} items on your list, and you already packed ${totalPacked} (${getPercentItem()}%)`
                    }
                </em>
            </p>
        </footer>
    )
}
