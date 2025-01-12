import AddressForm from "@/components/Form";

export default async function Home() {
  // const res = await fetch("http://localhost:3000/api/shipengine");
  // const mess = await res.json();
  // console.log(mess);

  return (
    <h1 className="text-center text-4xl underline mt-10">
      <AddressForm />
    </h1>
  );
}
