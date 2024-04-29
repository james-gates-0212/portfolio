interface IMenu {
  label: string;
  route: string;
}

export const Menus: Array<IMenu> = [
  {
    label: 'entities.profile.menu',
    route: '/admin/profile',
  },
  {
    label: 'entities.user.menu',
    route: '/admin/user',
  },
];