import { ICPGithubIconWhite } from '@icongo/ic';
import { IUMicrosoftOutlook } from '@icongo/iu';
import { LGGithubIcon, LGGoogleGmail } from '@icongo/lg';
import { VLSkype } from '@icongo/vl';

export const LinkInfos = [
  {
    href: 'mailto:james.gates.0212@gmail.com',
    icon: {
      dark: LGGoogleGmail,
      light: LGGoogleGmail,
    },
    label: 'GMail',
  },
  {
    href: 'mailto:pop.runner88@outlook.com',
    icon: {
      dark: IUMicrosoftOutlook,
      light: IUMicrosoftOutlook,
    },
    label: 'Outlook',
  },
  {
    href: 'https://join.skype.com/invite/cNobIuz9Vg5u',
    icon: {
      dark: VLSkype,
      light: VLSkype,
    },
    label: 'Skype',
  },
  {
    href: 'https://github.com/james-gates-0212',
    icon: {
      dark: LGGithubIcon,
      light: ICPGithubIconWhite,
    },
    label: 'Github',
  },
];
