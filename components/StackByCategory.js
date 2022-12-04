import { Fragment, useEffect, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const portfolio = {
  stacks: [
    {
      id: 'frontend',
      name: 'Frontend',
      languages: [
        {
          id: 'javascript',
          name: 'Javascript',
          imageSrc: 'images/projects/ability-design.png',
          imageAlt: 'Featured CSS image',
          items: [
            {
              name: 'ReactJs',
              href: '#',
              color: '',
              items: [
                {
                  name: 'NextJs',
                  href: '#',
                  color: ''
                },
                {
                  name: 'Material UI',
                  href: '#',
                  color: ''
                }    
              ]
            },
            {
              name: 'VueJs',
              href: '#',
              color: '',
              items: [
                {
                  name: 'NuxtJs',
                  href: '#',
                  color: ''
                },
                {
                  name: 'BootstrapVue',
                  href: '#',
                  color: ''
                }    
              ]
            },
          ]
        },
        {
          id: 'css',
          name: 'CSS',
          imageSrc: 'images/projects/housezzy.png',
          imageAlt: 'Featured CSS image',
          items: [
            {
              name: 'TailwindCss',
              href: '#',
              color: ''
            },
            {
              name: 'BootstrapCss',
              href: '#',
              color: ''
            }
          ]
        }    
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      languages: [
        {
          id: 'javascript',
          name: 'Javascript',
          items: [
            {
              name: 'NodeJs',
              href: '#',
              color: '',
              items: [
                {
                  name: 'ExpressJs',
                  href: '#',
                  color: ''
                },
                {
                  name: 'Mongoose ORM',
                  href: '#',
                  color: ''
                },
                {
                  name: 'Sequelize ORM',
                  href: '#',
                  color: ''
                }    
              ]
            }
          ]
        },
        {
          id: 'php',
          name: 'PHP',
          items: [
            {
              name: 'OOP',
              href: '#',
              color: ''
            },
            {
              name: 'Laravel',
              href: '#',
              color: ''
            }
          ]
        },
        {
          id: 'python',
          name: 'Python',
          items: [
            {
              name: 'Flask',
              href: '#',
              color: '',
              items: [
                {
                  name: 'SQLAlchemy',
                  href: '#',
                  color: ''
                },
                {
                  name: 'Psycopg2',
                  href: '#',
                  color: ''
                }
              ]
            }
          ]
        },
        {
          id: 'database',
          name: 'Database',
          items: [
            {
              name: 'MongoDB',
              href: '#',
              color: ''
            },
            {
              name: 'MySQL',
              href: '#',
              color: ''
            },
            {
              name: 'PostgresSQL',
              href: '#',
              color: ''
            },
            {
              name: 'Redis',
              href: '#',
              color: ''
            },
          ]
        },
        {
          id: 'deployment',
          name: 'Deployment',
          items: [
            {
              name: 'RESTful API',
              href: '#',
              color: ''
            },
            {
              name: 'Docker',
              href: '#',
              color: ''
            },
            {
              name: 'Kubernetes',
              href: '#',
              color: ''
            },
            {
              name: 'Git',
              href: '#',
              color: ''
            },
            {
              name: 'Testing',
              href: '#',
              color: ''
            }
          ]
        }
      ]
    }
  ]
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function StackByCategory({ toggleStackCloud }) {
  const [open, setOpen] = useState(false)
  const [isStackCloud, setStackCloud] = useState(false)
  useEffect(() => {
    toggleStackCloud(isStackCloud)
  }, [isStackCloud])

  return (
    <div className="bg-white z-20 relative">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 focus:outline-none inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200 sticky bg-white top-0">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {portfolio.stacks.map((language) => (
                        <Tab
                          key={language.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'text-blue-600 border-blue-500' : 'text-gray-700 border-transparent',
                              'flex-1 font-bold focus:outline-none whitespace-nowrap border-b-2 py-3 px-1 text-base'
                            )
                          }
                        >
                          {language.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {portfolio.stacks.map((stack) => (
                      <Tab.Panel key={stack.name} className="space-y-10 px-4 pt-10 pb-8">
                        {stack.id === 'frontend' && <FeaturedStackPortfolioMobile portfolio={stack.languages} />}
                        {stack.languages.map((language) => (<ItemsMobile key={language.id} parent={stack} item={language} />))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                {/* <OtherLinksMobile pages={navigation.pages} /> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <StackCloudNavbar openStackCategory={() => setOpen(true)} isStackCloud={isStackCloud} toggleStackCloud={() => setStackCloud(!isStackCloud)} />

        <nav aria-label="Top" className="hidden lg:block mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-12 items-center">
              <span className="flex items-center justify-center bg-blue-600 rounded-full w-8 h-8">
                <i className="fa fa-code text-white"></i>
              </span>
              {/* <Logo name={'Akpan Uwakmfon'} url={'images/icons/software-dev-icon.jpeg'} /> */}

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {portfolio.stacks.map((stack) => (
                    <Popover key={stack.name} className="flex">
                      {({ open }) => (
                        <>
                          <StackName name={stack.name} isOpen={open} closeStackCloud={() => setStackCloud(false)} />

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className={`grid ${ stack.id === 'frontend' ? 'grid-cols-2' : 'grid-cols-1'} gap-y-10 gap-x-8 py-8`}>
                                    {stack.id === 'frontend' && <FeaturedStackPortfolioDesktop portfolio={stack.languages} />}
                                    <ItemsDesktop items={stack.languages} />
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {/* <Navigation pages={navigation.pages} /> */}
                </div>
              </Popover.Group>

              {/* <OtherLinks /> */}
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

const StackCloudNavbar = ({ isStackCloud, toggleStackCloud, openStackCategory }) => (
  <p className="flex h-10 items-center justify-between text-sm font-medium text-white">
    <span className="font-bold bg-blue-600 hidden lg:flex flex-1 items-center h-full pl-4 sm:pl-6 lg:pl-8">
      View stacks by category
    </span>
    {/* Stack category menu button - Mobile */}
    <button
      type="button"
      className="font-bold bg-blue-600 lg:hidden flex-1 h-full focus:outline-none text-white text-left px-4 sm:pl-6 lg:pl-8"
      onClick={openStackCategory}
    >
      View stacks by category
    </button>
    {/* Stack cloud menu button */}
    <button onClick={toggleStackCloud} className="px-4 bg-blue-700 h-full font-bold outline-none focus:outline-none border-none text-white">
      { isStackCloud ? 'Collapse' : 'View' } stack cloud
    </button>
  </p>
)

const Logo = ({ name, url }) => (
  <div className="ml-4 flex lg:ml-0">
  <a href="#">
    <span className="sr-only"> { name } </span>
    <img
      className="h-8 w-auto"
      src={url}
      alt={name}
    />
  </a>
  </div>
)

const StackName = ({ name, isOpen, closeStackCloud }) => {
  return (
    <div className="relative flex">
      <Popover.Button
        onClick={closeStackCloud}
        className={classNames(
          isOpen
            ? 'border-blue-600 text-blue-500'
            : 'border-transparent text-gray-700 hover:text-gray-600',
          'font-bold focus:outline-none relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
        )}
      >
        {name}
      </Popover.Button>
    </div>
  )
}

const Navigation = ({ pages }) => (
  <>
    {pages.map((page) => (
      <a
        key={page.name}
        href={page.href}
        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
      >
        {page.name}
      </a>
    ))}
  </>
)

const NavigationMobile = ({ pages }) => (
  <div className="space-y-6 border-t border-gray-200 py-6 px-4">
    {pages.map((page) => (
      <div key={page.name} className="flow-root">
        <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
          {page.name}
        </a>
      </div>
    ))}
  </div>
)

const OtherLinks = ({}) => (
  <div className="ml-auto flex items-center">
    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
      <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
        Sign in
      </a>
      <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
      <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
        Create account
      </a>
    </div>

    <div className="hidden lg:ml-8 lg:flex">
      <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
        <img
          src="https://tailwindui.com/img/flags/flag-canada.svg"
          alt=""
          className="block h-auto w-5 flex-shrink-0"
        />
        <span className="ml-3 block text-sm font-medium">CAD</span>
        <span className="sr-only">, change currency</span>
      </a>
    </div>

    {/* Search */}
    <div className="flex lg:ml-6">
      <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
        <span className="sr-only">Search</span>
        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>

    {/* Cart */}
    <div className="ml-4 flow-root lg:ml-6">
      <a href="#" className="group -m-2 flex items-center p-2">
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  </div>
)

const ItemsDesktop = ({ items }) => (
  <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
    {items.map((item) => (
      <div key={item.name}>
        <p id={`${item.name}-heading`} className="font-bold text-blue-500">
          {item.name}
        </p>

        <ul
          role="list"
          aria-labelledby={`${item.name}-heading`}
          className="pl-2 mt-6 space-y-6 sm:mt-4 sm:space-y-4"
        >
          {item.items.map((subItem) => (
            <li key={subItem.name} className="flex">
              <div>
                <a href={subItem.href} className="text-gray-600 font-bold hover:text-gray-800">
                  {subItem.name}
                </a>
                {subItem.items && (<SubItemsDesktop parentName={item.name} items={subItem.items} />)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)

const SubItemsDesktop = ({ parentName, items }) => (
  <ul
    role="list"
    aria-labelledby={`${parentName}-sub-heading`}
    className="pl-2 mt-6 space-y-6 sm:mt-4 sm:space-y-4"
  >
    {items.map((item) => (
      <li key={item.name} className="flex">
        <a href={item.href} className="text-gray-600 hover:text-gray-800">
          {item.name}
        </a>
      </li>
    ))}
  </ul>
)

const FeaturedStackPortfolioDesktop = ({ portfolio }) => (
  <div className="col-start-2 grid grid-cols-2 gap-x-8">
    {portfolio.map((item) => (
      <div key={item.name} className="group relative text-base sm:text-sm">
        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 shadow">
          <img
            src={item.imageSrc}
            alt={item.imageAlt}
            className="object-cover object-center"
          />
        </div>
        <a href={item.href} className="mt-6 block font-medium text-gray-900">
          <span className="absolute inset-0 z-10" aria-hidden="true" />
          {item.name}
        </a>
        {/* <p aria-hidden="true" className="mt-1">
          Shop now
        </p> */}
      </div>
    ))}
  </div>
)

const OtherLinksMobile = ({ pages }) => (
  <>
    <NavigationMobile pages={pages} />

    <div className="space-y-6 border-t border-gray-200 py-6 px-4">
      <div className="flow-root">
        <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
          Sign in
        </a>
      </div>
      <div className="flow-root">
        <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
          Create account
        </a>
      </div>
    </div>

    <div className="border-t border-gray-200 py-6 px-4">
      <a href="#" className="-m-2 flex items-center p-2">
        <img
          src="https://tailwindui.com/img/flags/flag-canada.svg"
          alt=""
          className="block h-auto w-5 flex-shrink-0"
        />
        <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
        <span className="sr-only">, change currency</span>
      </a>
    </div>
  </>
)
const ItemsMobile = ({ parent, item }) => (
  <div key={item.name}>
    <p id={`${parent.id}-${item.id}-heading-mobile`} className="font-bold text-blue-500">
      {item.name}
    </p>
    <ul
      role="list"
      aria-labelledby={`${item.id}-heading-mobile`}
      className="mt-6 flex flex-col space-y-6"
    >
      {item.items.map((subItem) => (
        <li key={subItem.name} className="flow-root pl-4">
          <a href={subItem.href} className="-m-2 block p-2 font-bold text-gray-500">
            {subItem.name}
          </a>
          {subItem.items && (<SubItemsMobile parentNames={[parent.name, item.name, subItem.name]} items={subItem.items} />)}
        </li>
      ))}
    </ul>
  </div>
)

const SubItemsMobile = ({ parentNames, items }) => (
  <ul
    role="list"
    aria-labelledby={`${parentNames.join('-')}-heading-mobile`}
    className="pl-4 mt-6 flex flex-col space-y-6"
  >
    {items.map((item) => (
      <li key={item.name} className="flow-root">
        <a href={item.href} className="-m-2 block p-2 text-gray-500">
          {item.name}
        </a>
      </li>
    ))}
  </ul>
)

const FeaturedStackPortfolioMobile = ({ portfolio }) => (
  <div className="grid grid-cols-2 gap-x-4">
    {portfolio.map((item) => (
      <div key={item.name} className="group relative text-sm">
        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 shadow">
          <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
        </div>
        <a href={item.href} className="mt-6 block font-medium text-gray-900">
          <span className="absolute inset-0 z-10" aria-hidden="true" />
          {item.name}
        </a>
        {/* <p aria-hidden="true" className="mt-1">
          Shop now
        </p> */}
      </div>
    ))}
  </div>
)