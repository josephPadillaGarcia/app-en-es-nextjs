import Link from "next/link"

export default function Header(){
    return(
        <>
        <h2>HEADER</h2>

        <ul>
            <li>
                <Link href="">
                    <p>Nosotros</p>
                </Link>
            </li>
        </ul>
        </>
    )
}