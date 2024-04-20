import Link from 'next/link';

const FooterCard = ({ obj }) => {
    return (
        <div className="text-[1.2rem] sm:last:hidden sm:text-[1rem]">
            {obj.map((el) => (
                <div className="pb-6 ">
                    <h3 className="mb-4 font-semibold text-[1.2rem] sm:text-[1rem]">
                        {el.heading}
                    </h3>
                    <ul>
                        {el['data'].map((el) => (
                            <li className="text-footer-text-color mb-[0.8rem] hover:underline">
                                <Link href="">{el['name']}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default FooterCard;
