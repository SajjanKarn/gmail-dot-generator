import Link from "next/link";
import Header from "../components/Header";

export default function Notfound() {
  return (
    <>
      <Header />
      <div className="container text-center" style={{marginTop: "200px"}}>
        <h3>The page which you are trying to request doesn't exist. 😢</h3>
        <Link href="/">
          <a className="btn btn-primary">Go back</a>
        </Link>
      </div>
    </>
  );
}
