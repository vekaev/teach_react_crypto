import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";

import { Input } from "../Input";
import { getAllCoinsList } from "services/api/tickers";
import { useAllCoinsList } from 'hooks';

const mockedAutoCompleteItems = ['BTC', 'DOGE', 'BCT','CHD'];

const createCurrentDate = () => {
  return String(new Date())
}

let b

const setB = (v) => {
  if (typeof v === 'function') {
    const data = v(b)

    b = data
  }

  b = v
  // React.rerender()
}


const customUseState = (val) => {
  if (val) b = val
  return [b, setB]
}


const Ticker = ({ id = 1, onAddTicker }) => {
  const [counter, setCounter] = useState(() => +localStorage.getItem('a') || 0);
  const allCoinsList = useAllCoinsList();
  const [errorMessage, setErrorMessage] = useState(null);
  const [ticker, setTicker] = useState('');

  const [test, setTest] = useState({});

  console.log('rerender', test)

  const handleClick = () => {
    setCounter((v) => {
      const result = v + 1

      localStorage.setItem('a', result)

      return result;
    });
  }

  const autoCompleteItems = useMemo(()=> {
    let result = [];

    if (ticker.length > 0) {
      result = allCoinsList
          .filter(coin => coin.toLowerCase().startsWith(ticker.toLowerCase()))
          .slice(0, 4);
    }

    return result;
  },[ticker, allCoinsList])

  // 1 -> 0 -> 2
  // useEffect(() => {
  //   // console.log('WRITE')
  //   // test.current = 1;
  //
  //   setTest(() => {
  //     const a = test;
  //
  //     a.a = 1
  //
  //     return { ...a };
  //   })
  // }, []);
  //
  // console.log(1, test.current)

  //
  // useEffect(() => {
  //   console.log('2 componentDidUpdate');
  // });
  //
  // console.log('1 componentDidUpdate');

  const handleTickerChange = useCallback((value) => setTicker(value), []);

  const handleAddTicker = (ticker) => {
    if (ticker.length === 0) return;

    onAddTicker(ticker)
    setTicker('');
  }


  const value = useMemo(() => {
    console.log('useMemo')
   return counter
  }, [counter]);


  return <section>
    <div className="flex">
      <div className="max-w-xs">
        {<p>{value}</p>}
        <button onClick={handleClick}>+</button>
        <label htmlFor="wallet" className="block text-sm font-medium text-gray-700"
        >Ticker</label
        >
        <div className="mt-1 relative rounded-md shadow-md">
          <Input
              name={"ticker"}
              value={ticker}
              onChange={handleTickerChange}
          />
        </div>

        {!!autoCompleteItems.length && <div className="flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap">
          {autoCompleteItems.map((autoCompleteItem, idx) =>
              <span
                  onClick={() => handleAddTicker(autoCompleteItem)}
                  key={autoCompleteItem + idx}
                  className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
                    {autoCompleteItem}
                  </span>
          )}
        </div>}
        {errorMessage && <div className="text-sm text-red-600">This ticker already exists</div>}
      </div>
    </div>
    <button
        onClick={() => handleAddTicker(ticker)}
        type="button"
        className="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      <svg
          className="-ml-0.5 mr-2 h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#ffffff"
      >
        <path
            d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        ></path>
      </svg>
      Add
    </button>
  </section>
};

class TickerCC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticker: '',
      autoCompleteItems: mockedAutoCompleteItems,
    }

    this.handleTickerChange = this.handleTickerChange.bind(this);
  }

  componentDidMount() {
    console.log('TickerCC componentDidMount');
  }

  componentDidUpdate() {
    console.log('TickerCC componentDidUpdate');
  }

  handleTickerChange = (value) => {
    console.log(value)

    this.setState({
      ticker: value,
    });
  }

  handleAddTicker = () => {
    this.setState({
      ticker: '',
    });
  }

  render() {
    return <section>
      <div className="flex">
        <div className="max-w-xs">
          <label htmlFor="wallet" className="block text-sm font-medium text-gray-700"
          >Ticker</label
          >
          <div className="mt-1 relative rounded-md shadow-md">
            <Input
                name={"ticker"}
                value={this.state.ticker}
                onChange={this.handleTickerChange}
            />
          </div>
          <div className="flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap">
            {this.state.autoCompleteItems.map((autoCompleteItem, idx) =>
                <span
                    key={autoCompleteItem + idx}
                    className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
                    {autoCompleteItem}
                  </span>
            )}
          </div>
          <div className="text-sm text-red-600">This ticker already exists</div>
        </div>
      </div>
      <button
          onClick={this.handleAddTicker}
          type="button"
          className="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <svg
            className="-ml-0.5 mr-2 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#ffffff"
        >
          <path
              d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          ></path>
        </svg>
        Add
      </button>
    </section>
  }
}

export default Ticker;