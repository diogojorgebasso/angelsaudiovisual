import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          <Image
            src={"/angels.png"}
            alt="Angels Logo"
            width={300}
            height={300}
          />
        </h1>
      </main>
    </div>
  );
}
