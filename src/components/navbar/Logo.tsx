import Image from 'next/image';
import LogoImage from '@/app/assets/logo256.png';

export default function Logo() {
  return <Image className="h-8 w-8" src={LogoImage} alt="Logo" width={32} height={32} />;
}
