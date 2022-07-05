import LayoutAdmin from "../../components/admin/LayoutAdmin"
import MakananByMenu from "../../components/admin/MakananByMenu"
import DataMakanan from "../../components/admin/DataMakanan"

const datamakanan = ({data}) =>{
        {Array.isArray(data) ? data : data = [data]}
    return(
        <LayoutAdmin>
            <MakananByMenu/>
            <DataMakanan data = {data}/>
        </LayoutAdmin>
    )
}

export async function getServerSideProps({query}){
    const menu = query.menu;
    let url = `http://localhost:5000/makanan`
    if (typeof menu === 'string'){
        url = `http://localhost:5000/makanan/${menu}`
    }
    //fetch data
    const res = await fetch(url)
    const data = await res.json()
    return {props : {data}}
}

export default datamakanan;