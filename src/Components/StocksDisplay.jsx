import { useState, useEffect } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import finnhub from "../APIs/finnhub";

export const StocksDisplay = () => {
  const [stock, setStock] = useState([]);
  const [watchList, setWatchList] = useState(["googl", "msft", "amz"]);

  const changeColor = (change) => {
    return change > 0 ? "success" : "danger"
  }

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {

      try {
        const responses = await Promise.all(watchList.map((stock) => {
          return finnhub.get("/quote", {
            params: {
              symbol: stock
            }
          })
        }))

        console.log(responses)
        const data = responses.map((response) => {
          return {
            data: response.data,
            symbol: response.config.params.symbol
          }

        })
        console.log(data)
        if (isMounted) {
          setStock(data)
        }

      } catch (err) {

      }
    }
    fetchData()

    return () => (isMounted = false)
  }, [])

  return (
    <div>
      <table className="table hover mt-5">
        <thead style={{ color: "rgb(79,89,102" }}>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Last</th>
            <th scope="col">Chg</th>
            <th scope="col">Chg%</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
            <th scope="col">Open</th>
            <th scope="col">Close</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((stockData) => {
            return (
              <tr className="table-row text-uppercase" key={stockData.symbol}>
                <th scope="row">{stockData.symbol}</th>
                <td>{stockData.data.c}</td>
                <td className={`text-${changeColor(stockData.data.d)}`}>{stockData.data.d} <BsFillCaretDownFill/></td>
                <td className={`text-${changeColor(stockData.data.d)}`}>{stockData.data.dp} <BsFillCaretDownFill/></td>
                <td>{stockData.data.h}</td>
                <td>{stockData.data.l}</td>
                <td>{stockData.data.o}</td>
                <td>{stockData.data.pc}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
