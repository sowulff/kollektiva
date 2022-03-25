import Link from "next/link";

export default () => {
  return (
    <div>
      <h1>Så går det till!</h1>
      <Link href="/new/register" replace>
        <a>nästa</a>
      </Link>
    </div>
  );
};
