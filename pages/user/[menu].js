import { useRouter } from "next/router"

const menu = () =>{
    const makanan = [
            {menu: 'Betawi', produk : 'daging kambing'},
            {menu : 'Ayam Geprek', produk : 'daging Ayam'},
            {menu : 'Pecel', produk : 'kacang'}
    ];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const {menu} = router.query;
    const data = makanan.find(m => m.menu == menu)
    return(
        <>
            <p>Menu : {menu}</p>
            <p>Produk : {data.produk}</p>
        </>
    )
}

export default menu;