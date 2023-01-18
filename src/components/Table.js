import './Table.css'

const Table = ({ events, deleteEvent, ...rest }) => {
    return (
        <table{...rest}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Imie i Nazwisko</th>
                    <th>Wydarzenie</th>
                    <th>Miasto</th>
                    <th>Akcje</th>
                </tr>
            </thead>
            <tbody>
                {events.map((row, index) => {
                    return (
                        <tr key={row._id}>
                            <td>{index}</td>
                            <td>{row.name}</td>
                            <td eventkey={row.event.key}>{row.event.val}</td>
                            <td citykey={row.city.key}>{row.city.val}</td>
                            <td>
                                <button onClick={() => { deleteEvent(row._id) }} className='delete'>Usuń</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}


export default Table;