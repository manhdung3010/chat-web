import Header from "./Header";

export default function ChatLayout({ children }: any) {
    return <div className="grid h-screen grid-rows-[auto,1fr] bg-background">
        <Header />
        {children}
    </div>
}