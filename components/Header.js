import Link from "next/link";

export default function Header({ title }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">{title}</a>
        </Link>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: "EMAIL-DOT GENERATOR",
};
