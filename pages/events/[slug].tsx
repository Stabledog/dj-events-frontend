import { useRouter } from "next/router";

export default function EventPage() {
    const router = useRouter()
    console.log(router)
    return <div>slug={router.query.slug}</div>;
}
