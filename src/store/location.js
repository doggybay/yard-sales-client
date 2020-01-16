const LOC = process.env.REACT_APP_LOC


const local = 'http://localhost:8000/api'

const homeH = 'http://hypnos:8000/api'

const homeD = 'http://dionysus:8000/api'

const vpn = 'http://192.168.2.213:8000/api'

const BASE_URL = LOC === 'home' ? homeH : LOC === 'local' ? local : LOC === 'homeD' ? homeD : vpn



export default BASE_URL
