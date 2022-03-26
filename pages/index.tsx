import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        id="brand-background"
        className="sc-fEUNkw hOoPkr"
        style={{ opacity: "1" }}
      >
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DA2E198288BFCA56AB53340211B38DE7134E40E4521EDCAFE6FFB8CD69250DE9/scale?width=2880&amp;aspectRatio=1.78&amp;format=jpeg"
          style={{
            opacity: "1",
            transition: " opacity ,1500ms ease 0s",
            width: "100vw",
          }}
        ></img>

        <div className="jUmrjg">
          <Link href="/OtherRoute">
            <a className="ToGo"></a>
          </Link>
        </div>
      </div>
    </div>
  );
}