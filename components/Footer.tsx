import styles from "@styles/Footer.module.css";
import Link from 'next/link'

export default function Footer() {
    return <footer className="styles.footer">
        <p>Copyright &copy; DJ Events 2023</p>
        <Link href='/About'>About this site</Link>
    </footer>;
}
