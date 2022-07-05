import { useState } from "react"
import axios from "axios"

const CreateMakanan = () => {
    const [menu, setMenu] = useState('');
    const [minuman, setMinuman] = useState('');
    const [porsi, setPorsi] = useState('');
    const [harga, setHarga] = useState('');

    async function submitHandler(e) {
        e.preventDefault()
        try {
            axios
                .post("http://localhost:5000/makanan", {
                    menu,
                    minuman,
                    porsi,
                    harga,
                })
                .then(response => {
                    console.log(response);
                });
            alert("Penambahan Data sukses")
           clearInput()
        } catch (e) {
            throw Error(e.message)
        }
    }
    const clearInput = () => {
        setMenu('')
        setMinuman('')
        setPorsi('')
        setHarga('')
    }

    return(
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center"> input Menu Makanan</h1>
                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="menu"
                                type="text"
                                placeholder="menu"
                                value={menu}
                                onChange={(e) => setMenu(e.target.value)}
                            />
                            <label htmlFor="menu">Menu</label>
                        </div>

                        <div className="form-floating">
                        <input
                                className="form-control mb-2"
                                id="minuman"
                                type="text"
                                placeholder="minuman"
                                value={minuman}
                                onChange={(e) => setMinuman(e.target.value)}
                            />
                            <label htmlFor="minuman">Minuman</label>
                        </div>

                        <div className="form-floating">
                        <input
                                className="form-control mb-2"
                                id="porsi"
                                type="text"
                                placeholder="porsi"
                                value={porsi}
                                onChange={(e) => setPorsi(e.target.value)}
                            />
                            <label htmlFor="porsi">Porsi</label>
                        </div>

                        <div className="form-floating">
                        <input
                                className="form-control mb-2"
                                id="harga"
                                type="text"
                                placeholder="harga"
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}
                            />
                            <label htmlFor="prodi">Harga</label>
                        </div>
                    </div>
                    <div className="w-75 d-flex flex-row-revverse">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateMakanan;