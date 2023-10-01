const {events} = require('./data.json')

export default function index(req:any,res:any) {
    res.status(200).json(events)
}
