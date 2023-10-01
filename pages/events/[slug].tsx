import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function EventPage() {
    const router = useRouter();
    console.log(router);
    return (
        <Layout>
            <div>
                slug={router.query.slug}
                <button onClick={() => router.push("/")}>Go Home</button>
            </div>
        </Layout>
    );
}
