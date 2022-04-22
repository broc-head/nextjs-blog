import DarkMode from "../lib/dark-mode"
import { ERIC } from "../lib/constants"
import Link from 'next/Link'
import { Disclosure, Menu, Transition } from "@headlessui/react"

type Props = {
    home?: boolean
}

const navigation = [
    { name: 'Works', href: '#', current: false },
    { name: 'Blog', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
]

const Navbar = ({ home }: Props) => {
  const [colorTheme, setTheme] = DarkMode();

  return (
    <Disclosure as="nav">
        {({ open }) => (
            <div className={`${home ? 'bg-white dark:bg-black' : 'bg-yellow dark:bg-purple'} w-full fixed z-100`}>
                <div className="flex items-center justify-between p-3">
                    <div className="flex">       
                        {colorTheme === "light" ? (
                            <svg
                                onClick={() => setTheme("light")}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                />
                            </svg>
                        ) : (
                            <svg
                                onClick={() => setTheme("dark")}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        )}
                        {!home && (
                            <div className='ml-6'>
                                <Link href="/">
                                    <a>Back to home ←</a>
                                </Link>
                            </div>
                        )}
                    </div>
                    
                    <div className="hidden sm:block sm:ml-6 space-x-6">
                        {navigation.map((item) => (
                            <a
                            key={item.name}
                            href={item.href}
                            className={`${item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 rounded-md text-sm font-medium`}
                            aria-current={item.current ? 'page' : undefined}
                            >
                            {item.name}
                            </a>
                        ))}
                    </div>
                    
                    <Disclosure.Button className="inline-flex px-4 sm:hidden rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <span className="block h-6 w-6" aria-hidden="true">close</span>
                        ) : (
                            <span className="block h-6 w-6" aria-hidden="true">menu</span>
                        )}
                    </Disclosure.Button>
                </div>

                <Disclosure.Panel className="absolute flex sm:hidden z-50">
                    <div className="h-screen w-screen bg-yellow items-center px-2">
                        {navigation.map((item) => (
                            <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className={`${item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} block rounded-md text-base font-medium`}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Disclosure.Button>
                        ))}
                    </div>
                </Disclosure.Panel>  

            </div> 
         )}           
    </Disclosure>
  )
}

export default Navbar