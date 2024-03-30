export const RoundText = () => (
    <svg viewBox="0 0 100 100" width="80" height="80">
        <defs>
            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text fontSize="10" letterSpacing="-0.1ch">
            <textPath xlinkHref="#circle">
                • Years of experience • Years of experience • Years of experience • Years of
                experience
            </textPath>
        </text>
    </svg>
);
