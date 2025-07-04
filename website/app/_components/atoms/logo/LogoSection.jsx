import Image from "next/image";
import Link from "next/link";

export const LogoSection = () => {
  return (
    <div className='logo w-12 box-border'><Link href="/"><Image src="/images/logo.png" width={300} height={300} alt="React Next Component Logo"/></Link></div>
  )
}
