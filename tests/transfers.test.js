import http from 'k6/http';
import { sleep, check } from 'k6';
import {getBaseURL} from '../utils/variables.js'
import { getToken } from '../helpers/authentication.js'

export const options = {
  iterations: 1
};

export default function () {
  const token = getToken()
  const url = getBaseURL() + '/transferencias'
  const payload = JSON.stringify({
    contaOrigem: 1,
    contaDestino: 2,
    valor: 11,
    token: ""
  })
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
  };

  const res = http.post(url, payload, params)
  check(res, {
    'Validate status 201': (res) => res.status === 201,
  })

  sleep(1)
}
