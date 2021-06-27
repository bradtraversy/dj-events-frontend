import Layout from "@/components/Layout";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Layout title="About SF Bay Film Calendar">
      <h1>About</h1>
      <Image src="/images/about_feature.jpg" width={960} height={500} />
      <p>
        The SF Bay Film Calendar is an exciting new resource for filmgoing in
        the Bay Area. Starting in summer 2020, we will list daily showtimes for
        independent theaters, repertory cinema, and select film series and
        festivals. We'll also recommend a movie for the day. Currently we're
        listing all virtual screenings being made available. As theaters begin
        to reopen, we hope you will return and let us be your guide back to the
        movies.
      </p>
    </Layout>
  );
}
