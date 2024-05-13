import Link from 'next/link';

type FooterCardType = {
    idx: number;
    obj: {
        id: number;
        heading: string;
        data: {
            id: number;
            name: string;
            link: string;
        }[];
    }[];
};

const FooterCard = ({ obj, idx }: FooterCardType) => {
    return (
        <div className="text-[1.2rem] sm:last:hidden sm:text-[1rem]" key={idx}>
            {obj.map((el) => (
                <div className="pb-6" key={el.id}>
                    <h3 className="mb-4 font-semibold text-[1.2rem] sm:text-[1rem]">
                        {el.heading}
                    </h3>
                    <ul>
                        {el['data'].map((el) => (
                            <li
                                className="text-footer-text-color mb-[0.8rem] hover:underline"
                                key={el.id}>
                                <Link href={'/blogs/all'}>{el['name']}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default FooterCard;
