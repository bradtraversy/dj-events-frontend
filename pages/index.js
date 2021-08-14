// import Link from "next/link";
// import Layout from "@/components/Layout";
// import EventItem from "@/components/EventItem";
// import { API_URL } from "@/config/index";
import LoginPage from "./account/login";

export default function HomePage({ events }) {
  return (
    <>
      {/* <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )} */}
      <LoginPage />
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/events?_sort=date:DESC&_limit=3`);
//   const events = await res.json();

//   return {
//     props: { events },
//     revalidate: 1,
//   };
// }
