import Header from "../components/Header"
import Footer from '../components/Footer'
import { useRouter } from "next/dist/client/router"
import { format } from "date-fns";

function Search() {

    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <div className="h-screen">
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

            <main className="flex">
                <section className='flex-grow pt-14 px-6'>
                    <p className="text-xs">
                        300+ Stays - {range} - for {noOfGuests} guests
                    </p>

                    <h1 className="text-3xl font-semibold mb-6 mt-2">
                        Stays in {location}
                    </h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3
                        text-gray-800 whitespace-nowrap
                    ">
                        <p className='px-4 py-2 border rounded-full cursor-pointer
                        hover:shadow-lg active:scale-95 active:bg-gray-100
                        transition transform duration-100 ease-out'>
                            Cancellation Flexibilty
                        </p>
                        <p className='px-4 py-2 border rounded-full cursor-pointer
                        hover:shadow-lg active:scale-95 active:bg-gray-100
                        transition transform duration-100 ease-out'>
                            Types of Places
                        </p>
                        <p className='px-4 py-2 border rounded-full cursor-pointer
                        hover:shadow-lg active:scale-95 active:bg-gray-100
                        transition transform duration-100 ease-out'>
                            Prices
                        </p>
                        <p className='px-4 py-2 border rounded-full cursor-pointer
                        hover:shadow-lg active:scale-95 active:bg-gray-100
                        transition transform duration-100 ease-out'>
                            Rooms & beds
                        </p>
                        <p className='px-4 py-2 border rounded-full cursor-pointer
                        hover:shadow-lg active:scale-95 active:bg-gray-100
                        transition transform duration-100 ease-out'>
                            More Filters
                        </p>
                    </div>
                </section>
                
            </main>

            <Footer />
        </div>
    )
}

export default Search
