import Image from 'next/image';
import AvatarImage from '@/app/assets/avatar.jpg';

export default function Avatar() {
  return <Image className="h-8 w-8 rounded-full" src={AvatarImage} alt="Avatar" width={32} height={32} />;
}
