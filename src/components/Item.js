

const Item = ({ details, clicked, ind, select }) => {
    const splitNotes = details.notes.split('\n')[0];
    return (
        <div className='item' onClick={() => select(clicked ? -1 : ind)}>
            <div className='item-top'>
                <span className='item-title'> {details.title}</span>
                <input onClick={e => e.stopPropagation()} type="checkbox" />
            </div>
            <div className='item-body'>
            {
                !clicked ? <span className='item-notes'>{splitNotes.substring(0, 50) + (splitNotes.length > 50 ? "..." : "")}</span>
                         : (
                             <>
                                <span className='item-notes-full'>{details.notes}</span>
                                {details.date && <span className='item-notes-full'>Due {details.date}</span>}
                                <div style={{marginTop: '0.5rem'}}>
                                    <button className='delete-btn'>Delete Item</button>
                                    <button className='edit-btn'>Edit Item</button>
                                </div>
                            </>
                         )
            }
            </div>
            
        </div>
    )
}

export default Item
