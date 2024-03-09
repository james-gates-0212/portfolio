'use client';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { classNames } from '@/components/Commons';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LinkInfos from '@/infos/Links';
import NavItems from '@/infos/NavItems';
import { VLLinkedin } from '@icongo/vl';
import { SNUserMale } from '@icongo/sn';

export default function NavBar() {
  const current = usePathname();

  return (
    <Disclosure as="nav" className="bg-white/10 backdrop-blur-md fixed top-0 left-0 right-0 shadow-lg z-50">
      {({ open }) => (
        <>
          <div className="mx-auto container px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <VLLinkedin width={32} height={32} />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {NavItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          current == item.href
                            ? 'bg-indigo-950 text-white'
                            : 'text-gray-300 hover:bg-indigo-700 hover:text-white',
                          'rounded-md px-3 py-2 text-base font-medium',
                        )}
                        aria-current={current == item.href ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-indigo-800 text-sm border-indigo-400 border-2 overflow-hidden">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <SNUserMale width={32} height={32} />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {LinkInfos.map(({ href, icon: { dark: DarkIcon }, label }, idx) => (
                        <Menu.Item key={`menu-item-${idx}`}>
                          {({ active }) => (
                            <Link
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-900',
                                'flex flex-row gap-3 items-center',
                              )}
                              href={href}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={label}
                            >
                              <DarkIcon /> {label}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {NavItems.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    current == item.href
                      ? 'bg-indigo-950 text-white'
                      : 'text-gray-300 hover:bg-indigo-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium text-center',
                  )}
                  aria-current={current == item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
