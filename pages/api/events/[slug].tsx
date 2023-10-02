const {events} = require('./data.json')

export default function index(req:any,res:any) {

    const evt = events.filter( (ev:any) => ev.slug === req.query.slug);

    if (req.method === 'GET') {
        res.status(200).json(evt)
        return
    }
    res.setHeader('Allow',['GET'])
    res.status(405)
    res.json({message: `Method ${req.method} is not allowed`})
}
