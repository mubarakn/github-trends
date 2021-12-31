import axios from "axios";
const baseUrl = '/developers'

const getAll = ({ dateRange }: { dateRange: string }) => {
  return axios.get(baseUrl, { params: { dateRange }})
}

const exportObject = { getAll }

export default exportObject