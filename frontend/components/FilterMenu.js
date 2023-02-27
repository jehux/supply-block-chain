import Image from 'next/image'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

function FilterMenu() {
    const menus = [
        {
            title: 'Materias primas',
            icon: 'https://cdn-icons-png.flaticon.com/512/4748/4748334.png',
        },
        {
            title: 'Producción',
            icon: 'https://cdn-icons-png.flaticon.com/512/1433/1433114.png',
        },
        {
            title: 'Transporte y logistica',
            icon: 'https://cdn-icons-png.flaticon.com/512/819/819873.png',
        },
        {
            title: 'Sucursales',
            icon: 'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg',
        },
        {
            title: 'Alacenamiento o bodegaje',
            icon: 'https://cdn-icons-png.flaticon.com/512/3608/3608989.png',
        },
        {
            title: 'Distribución y entregas',
            icon: 'https://cdn-icons-png.flaticon.com/512/4503/4503284.png',
        }
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
