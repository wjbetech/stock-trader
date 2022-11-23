import { StocksDisplay } from "../Components/StocksDisplay"
import { Search } from "../Components/Search"

export const StockOverview = () => {
  return (
    <div>
      <Search />
      <StocksDisplay />
    </div>
  )
}
