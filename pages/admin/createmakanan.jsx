import React from "react";
import AdminLayout from '../../components/admin/LayoutAdmin';
import CreateMakanan from "../../components/admin/CreateMakanan";
import LayoutAdmin from "../../components/admin/LayoutAdmin";

const createmakanan = () => {
    return (
        <LayoutAdmin>
            <CreateMakanan/>
        </LayoutAdmin>
    )
}

export default createmakanan;