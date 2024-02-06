import { makeUseAxios } from 'axios-hooks'
import axios from 'axios'

export const useAxios = makeUseAxios({
  cache: false,
  axios: axios.create({
    baseURL:
      'https://candy-api.ferrara.dev.ampagency.digital',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    }
  })
})
