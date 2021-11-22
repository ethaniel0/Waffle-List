

const Item = ({ details, addItem }) => {
    const splitNotes = details.notes.split('\n')[0];
    return (
        <div className='item'>
            <div className='item-top'>
                <span className='item-title'> {details.title}</span>
                <input type="checkbox" />
            </div>
            <span className='item-notes'>{splitNotes.substring(0, 50) + (splitNotes.length > 50 ? "..." : "")}</span>
        </div>
    )
}

export default Item
