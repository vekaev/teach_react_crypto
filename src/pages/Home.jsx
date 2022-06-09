import { useState } from 'react';

import { Ticker } from 'components';

const mockedCoins = [
    {
        name: 'BTC',
        price: [123]
    },
    {
        name: 'DOGE',
        price: [12]
    },
    {
        name: 'BCT',
        price: [1234]
    },
    {
        name: 'CHD',
        price: []
    },
];

// const getTableStyles = (tableColor) => ({
//     color: tableColor,
//     additionalData: {
//         backgroundColor: 'red',
//         backgroundColor1: 'red',
//         backgroundColor2: 'red',
//         backgroundColor3: 'red',
//         backgroundColor4: 'red',
//         backgroundColor5: 'red',
//     }
// });

const Home = ({ tableColor }) => {
    const [closed, setClosed] = useState(false);
    // const tableStyles = getTableStyles(tableColor);
    const [tickers, setTickers] = useState(mockedCoins);
    const [activeTicker, setActiveTicker] = useState(tickers[2]);
    const [loading, setLoading] = useState(false);

    const handleAddTicker = (ticker) => {
        const newTicker = {
            name: ticker,
            price: []
        };

        setTickers([...tickers, newTicker]);
    }

    return (
        <>
            <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
                {
                    loading &&
                    <div className="fixed w-100 h-100 opacity-80 bg-purple-800 inset-0 z-50 flex items-center justify-center">
                        <svg
                            className="animate-spin -ml-1 mr-3 h-12 w-12 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    </div>
                }
                <div className="container">
                    {!closed && <Ticker onAddTicker={handleAddTicker}/>}

                    <hr className="w-full border-t border-gray-600 my-4"/>

                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                        {tickers.map((coin) =>
                            <div
                                key={coin.name}
                                className={`bg-white overflow-hidden shadow rounded-lg ${activeTicker.name === coin.name && 'border-purple-800'} border-4 border-solid cursor-pointer`}
                            >
                                <div className="px-4 py-5 sm:p-6 text-center">
                                    <dt className="text-sm font-medium text-gray-500 truncate">
                                        {coin.name} - USD
                                    </dt>
                                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                                        {coin.price[coin.price.length - 1] || '~'}
                                    </dd>
                                </div>
                                <div className="w-full border-t border-gray-200"></div>
                                <button
                                    className="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="#718096"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    Delete
                                </button>
                            </div>)}
                    </dl>
                    <hr className="w-full border-t border-gray-600 my-4"/>
                    <section className="relative">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 my-8">
                            VUE - USD
                        </h3>
                        <div className="flex items-end border-gray-600 border-b border-l h-64">
                            <div
                                className="bg-purple-800 border w-10 h-24"
                            ></div>
                            <div
                                className="bg-purple-800 border w-10 h-32"
                            ></div>
                            <div
                                className="bg-purple-800 border w-10 h-48"
                            ></div>
                            <div
                                className="bg-purple-800 border w-10 h-16"
                            ></div>
                        </div>
                        <button
                            onClick={() => setClosed(true)}
                            type="button"
                            className="absolute top-0 right-0"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                width="30"
                                height="30"
                                x="0"
                                y="0"
                                viewBox="0 0 511.76 511.76"
                                style={{ enableBackground: 'new 0 0 512 512' }}
                                xmlSpace="preserve"
                            >
                                <g>
                                    <path
                                        d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z"
                                        fill="#718096"
                                        data-original="#000000"
                                    ></path>
                                </g>
                            </svg>
                        </button>
                    </section>
                </div>
            </div>
            <div>
                Test
            </div>
        </>
    );
};

export default Home;