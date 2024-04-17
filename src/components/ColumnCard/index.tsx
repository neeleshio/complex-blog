import Link from 'next/link';

const ColumnCard = ({ obj }) => {
    return (
        <div className="text-[1.2rem] sm:last:hidden">
            {obj.map((el) => (
                <div className="pb-6 ">
                    <h3 className="mb-4 font-semibold text-[1.2rem]">{el.heading}</h3>
                    <ul>
                        {el['data'].map((el) => (
                            <li className="text-[#6e6e73] mb-[0.8rem]">
                                <Link href="">{el['name']}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ColumnCard;
