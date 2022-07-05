import { useRouter } from "next/router";
import { useState } from "react"

const MakananByMenu = () =>{
    const [menu, setMenu] = useState('')
    const router = useRouter()
    const getMknByMenu = (e) =>{
        e.preventDefault();
        router.push({
            pathname : 'datamakanan',
            query : {'menu' : menu}
        })
    }
    return(
        <div className="container">
            <form onSubmit={getMknByMenu}>
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col d-flex flex-reverse">
                        <input type="text"
                            className="from-control"
                            placeholder="Cari by Menu"
                            value={menu}
                            onChange={(e)=>setMenu(e.target.value)}
                        />
                        <input type="submit" value="Cari"
                                className="btn btn-success ms-2 fs-6" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MakananByMenu;