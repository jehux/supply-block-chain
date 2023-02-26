import Image from 'next/image'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

function FilterMenu() {
    const menus = [
        {
            title: 'articulos de OMG!',
            icon: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
        },
        {
            title: 'Bisuteria',
            icon: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
        },
        {
            title: 'Articulos de natacion',
            icon: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
        },
        {
            title: 'Articulos de construccion',
            icon: 'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg',
        },
        {
            title: 'Tierras',
            icon: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg',
        },
        {
            title: 'Propiedades',
            icon: 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg',
        },
        {
            title: 'Rastreo de lugares',
            icon: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg',
        },
        {
            title: 'Articulos de surff',
            icon: 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
        },
    ]

    return (
        <div className="px-20 pb-10 flex justify-between items-center">
            <div className="flex items-center space-x-10">
                {menus.map((menu, index) => (
                    <div key={index} className="flex flex-col justify-center items-center space-y-2">
                        <div className="relative h-6 w-6">
                            <Image objectFit="contain" layout="fill" src={menu.icon} />
                        </div>

                        <p className="text-xs font-light">{menu.title}</p>
                    </div>
                ))}
            </div>
            <button className="border rounded-lg p-4 text-xs font-medium flex space-x-2">
                <AdjustmentsHorizontalIcon className="h-4 w-4" />
                <span>Filters</span>
            </button>
        </div>
    )
}

export default FilterMenu
