import Link from "next/link";

async function getDetail(id){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return response.json();
}

export default async function Detail({params}) {
    const data = await getDetail(params.id)
    return (
        <>
        <div class="flex justify-center">
            <div
                class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
                <img class="w-full h-40 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={data.sprites.front_default}
                alt="" />
                <div class="flex flex-col justify-start p-6">
                <h5
                    class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    {data.name}
                </h5>
                <div className="flex justify-start">
                    <p className="pr-2 py-3">Height : {data.height}</p>
                    <p className="pr-2 py-3">Weight : {data.weight}</p>
                </div>
                <div className="flex">
                    <div className="w-full mr-2 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Types</h5>
                        </div>
                        <div className="flow-root">
                                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {data.types.map((item) => {
                                        return (
                                            <li className="py-3 sm:py-4" key={item.slot}>
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            {item.type.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                        </div>
                    </div>
                    <div className="w-full mx-2 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Abilities</h5>
                        </div>
                        <div className="flow-root">
                                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {data.abilities.map((item) => {
                                    return (
                                        <li className="py-3 sm:py-4" key={item.slot}>
                                            <div className="flex items-center space-x-4">
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        {item.ability.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                    })}
                                </ul>
                        </div>
                    </div>
                </div>
                <p class="text-xs text-neutral-500 dark:text-neutral-300">
                    <Link href={"/"}>back</Link>
                </p>
                </div>
            </div>
        </div>
        </>
    )
}