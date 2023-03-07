import { Inter } from '@next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })
async function getDataPokemon(url) {
  const response = await fetch(`${url}`);
  return response.json()
}
export default async function Home() {
  const baseURL = "https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10"
  const data = await getDataPokemon(baseURL);
  return (
    <div className="container">
      <div className='relative shadow-lg flex items-center w-full overflow-x-auto'>
        <table className="w-full">
          <thead>
            <tr className='border border-solid border-l-0'>
              <th className='text-md px-6 py-3'>No</th>
              <th className='text-md px-6 py-3'>Pokemon</th>
              <th className='text-md px-6 py-3'>Detail</th>
            </tr>
          </thead>
          <tbody>
            {data.results.map((item, index) => (
              <tr key={index} className="text-center">
                <td className='text-md px-6 py-3'>{index+1}</td>
                <td className='text-md px-6 py-3'>{item.name}</td>
                <td className='text-md px-6 py-3'>
                  <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">
                      <Link href={`/detail/${index+1}`}>Detail</Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex select-none space-x-1 text-grey-700 m-4 justify-end'>
        <button className="rounded-md px-4 py-2 bg-gray-200 transition duration-300 ease-in-out hover:bg-grey-400">
          Previous
        </button>
        <button className="rounded-md px-4 py-2 bg-gray-200 transition duration-300 ease-in-out hover:bg-grey-400">
          Next
        </button>
      </div>
    </div>
  ) 
}