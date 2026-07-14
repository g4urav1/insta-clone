export function Explore() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Explore" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor"
            height="24" role="img" viewBox="0 0 24 24" width="24">
            <title>Explore</title>

            <g transform="translate(12 12) rotate(225) scale(0.5) translate(-12 -12)">


                <path
                    d="M12 2 L18 12 L6 12 Z"
                    fill="currentColor"
                />


                <path
                    d="M12 2
               L18 12
               L12 22
               L6 12
               Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
            </g>

            <circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round"
                strokeLinejoin="round" strokeWidth="2"></circle>
        </svg>
    )
}

export function ExploreFill() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Explore"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <title>Explore</title>

            {/* Outer circle */}
            <circle
                cx="12.001"
                cy="12.005"
                r="10.5"
                fill="var(--fm-text)"
                stroke="var(--fm-text)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <g transform="translate(12 12) rotate(225) scale(0.5) translate(-12 -12)">
               
                <path
                    d="M12 2 L18 12 L6 12 Z"
                    fill="var(--fm-text)"
                />

                <path
                    d="M12 22 L18 12 L6 12 Z"
                    fill="var(--fm-bg)"
                />

               
                <path
                    d="
            M12 2
            L18 12
            L12 22
            L6 12
            Z"
                    fill="none"
                    stroke="var(--fm-bg)"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
            </g>
        </svg>
    );
}