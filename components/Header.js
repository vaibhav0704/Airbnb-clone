import Image from 'next/image'
import { 
    SearchIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon,
    GlobeAltIcon 
} from '@heroicons/react/solid'
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';


const Header = () => {

    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [noOfGuests, setNoOfGuests] = useState(1)
    const router = useRouter()

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate,
        endDate,
        key: 'selection'
    }   
    
    const resetInput = () => {
        setSearchInput('')
    }

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        })
    }

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white
        shadow-md p-2 sm:p-5 md:px-10'>
            <div 
            onClick={() => router.push("/")}
            className="relative flex item-center h-10 cursor-pointer 
            my-auto mr-2"
            >
                <Image 
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit="contain"
                    objectPosition='left'
                />
            </div>
            <div className='flex items-center border-2 rounded-full py-2 
            md:border-2'
            >
                <input 
                value={searchInput} 
                onChange={(e) => setSearchInput(e.target.value)}
                className='flex-grow pl-2 sm:pl-5 bg-transparent outline-none
                text-xs sm:text-sm text-gray-600 placeholder-gray-400' 
                    type='text' 
                    placeholder='Start your search'
                />
                <SearchIcon className='hidden  md:inline-flex h-8 bg-red-400 text-white 
                rounded-full p-2 cursor-pointer md:mx-2' 
                />
            </div>
            <div className='flex items-center justify-end space-x-4 
            text-gray-500'
            >
                <p className='hidden md:inline'>Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center space-x-2 border-2 p-2
                rounded-full"
                >
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker 
                        className='w-screen sm:w-full'
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={[ '#FD5B61' ]}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className="text-2xl pl-2 flex-grow font-semibold">Number of Guests</h2>
                        <UserIcon className="h-5" />
                        <input
                        value={noOfGuests} 
                        onChange={(e) => setNoOfGuests(e.target.value)}
                        min={1}
                        type='number' className='w-12 pl-2 text-lg 
                            text-red-400 outline-none
                        ' />
                    </div>
                    <div className='flex'>
                        <button 
                            onClick={resetInput}
                            className='flex-grow text-gray-500'
                        >Cancel</button>
                        <button 
                            onClick={search}
                            className='flex-grow text-red-400'
                        >Search</button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;