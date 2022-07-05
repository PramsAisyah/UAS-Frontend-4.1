import { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';
import axios from "axios";

const UpdateMakanan = () => {
    //deklarasi state
    const [_menu, setMenu] = useState('');
    const [_minuman, setMinuman] = useState('');
    const [_porsi, setPorsi] = useState('');
    const [_harga, setHarga] = useState('');

    //mengambil data yang dikirim melalui router
    const router = useRouter();
    const { menu, minuman, porsi, harga } = router.query;

    useEffect(() =>{
        if (typeof menu == 'string') {
            setMenu(menu);
        }
        if (typeof minuman == 'string') {
            setMinuman(minuman)
        }
        if (typeof porsi == 'string') {
            setPorsi(porsi)
        }
        if (typeof harga == 'string') {
            setHarga(harga)
        }
    }, [menu, minuman, porsi, harga])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            axios 
                .put('http://localhost:5000/makanan/${_menu}', {
                    menu: _menu,
                    minuman: _minuman,
                    porsi: _porsi,
                    harga: _harga,
                })
                .then(response => {
                    console.log(response);
                });
            
            alert("Update Data Sukses")
            Router.push('/admin/datamakanan')
        } catch (e) {
            console.log({message: e.message});
        }
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 font-blod text-center mb-3">
                        Edit Menu Makanan
                    </h1>
                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="menu"
                                type="text"
                                placeholder="menu"
                                value={_menu}
                                onChange={(e) => setMenu(e.target.value)}    
                            />
                        </div>
                    </div>

                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="minuman"
                                type="text"
                                placeholder="minuman"
                                value={_minuman}
                                onChange={(e) => setMinuman(e.target.value)}    
                            />
                        </div>
                    </div>

                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="porsi"
                                type="text"
                                placeholder="porsi"
                                value={_porsi}
                                onChange={(e) => setPorsi(e.target.value)}    
                            />
                        </div>
                    </div>

                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="harga"
                                type="text"
                                placeholder="harga"
                                value={_harga}
                                onChange={(e) => setHarga(e.target.value)}    
                            />
                        </div>
                    </div>

                    <div className="d-flex flex-row-reverse w-75">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
    
}

export default UpdateSepatu;