const SvgComponent = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" 
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="feather feather-grid"
        {...props}
    >
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
    </svg>
)
export default SvgComponent
