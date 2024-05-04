/* eslint-disable react/function-component-definition */
import './globals.css';
import './styles.scss';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body aria-label="body" className="">
                {children}
            </body>
        </html>
    );
}
