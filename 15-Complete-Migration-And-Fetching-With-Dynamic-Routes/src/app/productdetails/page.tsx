import { redirect } from "next/navigation"

const page = () => {
  redirect("/")
  return (
    <div></div>
  )
}
export default page