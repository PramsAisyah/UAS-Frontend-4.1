
const DataMakanan= ({data}) =>{
    return(
       <div className='container'>
           <h3>Data Makanan</h3>
           <table className = "table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Menu</th>
                        <th>Minuman</th>
                        <th>Porsi</th>
                        <th>Harga</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((mkn,idx)=>(
                        <tr key = {idx}>
                            <td>{mkn.menu}</td>
                            <td>{mkn.minuman}</td>
                            <td>{mkn.porsi}</td>
                            <td>{mkn.harga}</td>
                        </tr>
                    ))}
                </tbody>
           </table>
       </div>
    )
}

export default DataMakanan;