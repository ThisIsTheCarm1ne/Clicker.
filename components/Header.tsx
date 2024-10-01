import CodeForm from "./CodeForm"
import SignIn from "./SignIn"
import SignOut from "./SignOut"
import { auth } from "@/auth"

export default async function Header() {
  const session = await auth();
  const userPFP = session?.user?.image ? session.user.image : 'default';

  return (
    <header className="flex mr-5 mt-5 justify-end">
      <CodeForm />
      {!session ? (
        <SignIn />
      ) : (
        <div className="flex items-center gap-3">
          <img src={userPFP} alt="User Avatar" className="w-10 h-auto"/>
          <SignOut />
        </div>
      )}
    </header>
  )
}
