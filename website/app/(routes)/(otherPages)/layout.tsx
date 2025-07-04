
export default function innerLayout({ children, }: Readonly<{children: React.ReactNode;}>){
    return(
        <>
            <div className='container'>{children}</div>
        </>
    )
}