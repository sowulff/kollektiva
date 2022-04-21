import Link from "next/link";
// import styles from "../styles/Home.module.scss";

function HomePage() {
  return (
    <div>
      <h1>Kollektiva</h1>
      <h3>VI MATCHAR DIG MED DINA FRAMTIDA FAVORITER</h3>
      <Link href="/new/instructions" replace>
        <button>lägg upp boende</button>
      </Link>
    </div>
  );
}

export default HomePage;
