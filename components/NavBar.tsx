import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/">
          <p className={router.pathname === "/" ? "active" : ""}>Home</p>
        </Link>
        <Link href="/about">
          <p className={router.pathname === "/about" ? "active" : ""}>About</p>
        </Link>
        <Link href="/side">
          <p className={router.pathname === "/side" ? "active" : ""}>Side</p>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav p {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
};
