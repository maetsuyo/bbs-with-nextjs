import BBSCardList from "./components/BBSCardList";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-cache",
  });
  return (
    <main>
      <BBSCardList />
    </main>
  );
}
