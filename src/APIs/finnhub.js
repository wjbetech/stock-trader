import axios from "axios"

const TOKEN = "cdv19aiad3i031m6424gcdv19aiad3i031m64250"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})
