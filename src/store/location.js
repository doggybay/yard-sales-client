const LOC = process.env.REACT_APP_LOC


export const local = 'http://localhost:8000/api'

export const homeH = 'http://hypnos:8000/api'

export const vpn = 'http://192.168.2.213:/8000/api'

const BASE_URL = LOC !== 'home' ? local : LOC !== 'local' ? vpn : homeH

export default BASE_URL