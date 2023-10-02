const {events} = require('./data.json')

export default function index(req:any,res:any) {
    if (req.method === 'GET') {
        res.status(200).json(events)
        return
    }
    res.setHeader('Allow',['GET'])
    res.status(405)
    res.json({message: `Method ${req.method} is not allowed`})

}
