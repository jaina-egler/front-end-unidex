import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer"

export default function Visualizar() {
    return (
        <>
            <Header />
            Visualizar publicação
            <Link href="/">Página inicial</Link>

            <Footer />
        </>
    )
}