import http from 'k6/http'
import { sleep, check } from 'k6'
import {getBaseURL} from '../utils/variables.js'

const postLogin = JSON.parse(open('../fixtures/postLogin.json'))

export const options = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '20s', target: 10 },
        { duration: '50s', target: 0 }
    ],
    thresholds: {
        http_req_duration: ['p(90)<4000', 'max<5000'],
        http_req_failed: ['rate<0.01']
    }
};

export default function () {
    const url = getBaseURL() + '/login'
    const payload = JSON.stringify(postLogin);

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params)

    check(res, {
        'Validate status 200': (r) => r.status === 200,
        'Validate if token is string': (r) => typeof (r.json().token) == 'string'
    })

    sleep(1)

}