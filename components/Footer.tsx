import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="ml-5 mt-10">
      <h1 className="text-7xl font-black">Clicker.</h1>
      <p>This is a small clicker game</p>
      <p>Made with:</p>
      <div className="flex flex-col items-start">
        <Button variant="link">auth</Button>
        <Button variant="link">next.js</Button>
        <Button variant="link">shadcnui</Button>
        <Button variant="link">three.js</Button>
        <Button variant="link">GSAP</Button>
      </div>
    </footer>
  )
}
