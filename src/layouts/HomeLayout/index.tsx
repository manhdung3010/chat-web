import Footer from "./Footer";
import Header from "./Header";

export default function HomeLayout({ children }: any) {
    return <>
        <Header />
        {children}
        <Footer />
    </>
}