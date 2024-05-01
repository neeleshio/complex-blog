import './globals.css';
import './styles.scss';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="dark">{children}</body>
        </html>
    );
}
