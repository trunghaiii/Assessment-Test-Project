const DemoReview = dynamic(() => import("@/components/elements/DemoReview"), {
  ssr: false,
});

import Layout from "@/components/layout/Layout";

import dynamic from "next/dynamic";
import Link from "next/link";
export default function Home1() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={6}>
        <div id="page" className="page-wrapper">
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      </Layout>
    </>
  );
}
