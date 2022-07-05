import Head from "next/head";
import Image from "next/image";
import Nav from "../components/user/Nav";
import Script from "next/script";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const makanan = [
                      {menu : 'Betawi', minuman : 'teh'},
                      {menu : 'Pecel', minuman : 'jeruk'},
                      {menu : 'Ayam Geprek', minuman: 'Temulawak'}
                    ];
  const router = useRouter()

  const sendParamRouter = (menu) => {
    router.push (`/user/${menu}`)
  }
  return (
    <div className="container mt-4">
      <Nav />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Hallo Guys...</h3>
        <h3>Daftar Menu Makanan</h3>
        <ul>
          {makanan.map ((mkn,idx)=>(
            <>
            <li key = {idx}>
              <Link href={`/user/${mkn.menu}`}>
              <a>{mkn.menu}</a>
              </Link>
              <p>{mkn.minuman}</p>
              <button className="btn btn-primary"
                      onClick={(e)=>sendParamRouter(mkn.menu)}>
                        Cek Harga
              </button> <br></br>
            </li>
            </>
          ))}
        </ul>
      </main>

      <footer>
        <h4>footer</h4>
      </footer>
      <div>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></Script>
      </div>
    </div>
  );
}