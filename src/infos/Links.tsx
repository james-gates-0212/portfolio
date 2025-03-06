import { ICPGithubIconWhite } from '@icongo/ic';
import { IUMicrosoftOutlook } from '@icongo/iu';
import { LGDiscordIcon, LGGithubIcon, LGGoogleGmail } from '@icongo/lg';
import { VLSkype } from '@icongo/vl';

const LinkInfos = [
  {
    href: 'salvatore.brian@gmail.com',
    icon: {
      dark: LGGoogleGmail,
      light: LGGoogleGmail,
    },
    label: 'Google Mail',
  },
  // {
  //   href: 'mailto:pop.runner88@outlook.com',
  //   icon: {
  //     dark: IUMicrosoftOutlook,
  //     light: IUMicrosoftOutlook,
  //   },
  //   label: 'Outlook Mail',
  // },
  // {
  //   href: 'https://join.skype.com/invite/cNobIuz9Vg5u',
  //   icon: {
  //     dark: VLSkype,
  //     light: VLSkype,
  //   },
  //   label: 'Skype',
  // },
  // {
  //   href: 'https://discordapp.com/users/1199667886340448316',
  //   icon: {
  //     dark: LGDiscordIcon,
  //     light: LGDiscordIcon,
  //   },
  //   label: "Discord",
  // },
  {
    href: 'https://github.com/brian-salvatore/',
    icon: {
      dark: LGGithubIcon,
      light: ICPGithubIconWhite,
    },
    label: 'Github',
  },
];

export default LinkInfos;
